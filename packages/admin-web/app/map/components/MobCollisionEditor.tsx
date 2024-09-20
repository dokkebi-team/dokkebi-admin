import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {
  BrushTool,
  CanvasInfoChangeParams,
  Dotting,
  DottingRef,
  useData,
  useDotting,
  useHandlers,
} from "dotting";
import {
  BrushIcon,
  CheckIcon,
  EraserIcon,
  LoaderIcon,
  SaveIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const BRUSH_COLOR = "blue";

const GRID_SIZE = 10;

export interface MobCollisionEditorProps {
  mobImgUrl: string;
  collisionConfig: number[][];
  onSave: (collisionConfig: number[][]) => Promise<void>;
}

const MobCollisionEditor = ({
  mobImgUrl,
  collisionConfig,
  onSave,
}: MobCollisionEditorProps) => {
  const layerData = useMemo(() => {
    return collisionConfig.map((row, rowIndex) =>
      row.map((value, columnIndex) => ({
        rowIndex,
        columnIndex,
        color: value === 1 ? "blue" : "",
      }))
    );
  }, [collisionConfig]);
  const [brushTool, setBrushTool] = useState(BrushTool.DOT);
  const imageRef = useRef<HTMLImageElement>();
  const dottingRef = useRef<DottingRef>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const {
    getBackgroundCanvas,
    convertWorldPosToCanvasOffset,
    clear,
    undo,
    redo,
    colorPixels,
  } = useDotting(dottingRef);
  const { dataArray } = useData(dottingRef);
  const {
    addDataChangeListener,
    removeDataChangeListener,
    addCanvasInfoChangeEventListener,
    removeCanvasInfoChangeEventListener,
  } = useHandlers(dottingRef);

  useEffect(() => {
    imageRef.current = new Image();
    imageRef.current.src = mobImgUrl;

    imageRef.current.onload = () => {
      setIsImageLoaded(true);
    };
  }, [mobImgUrl]);

  useEffect(() => {
    const renderer = ({ gridSquareSize }: CanvasInfoChangeParams) => {
      if (!imageRef.current || !isImageLoaded) {
        return;
      }

      const bgCanvas = getBackgroundCanvas();
      const width = bgCanvas.width;
      const height = bgCanvas.height;
      const bgCtx = bgCanvas.getContext("2d");
      const imageWorldPosX = 0;
      const imageWorldPosY = 0;

      const { x, y } = convertWorldPosToCanvasOffset(
        imageWorldPosX,
        imageWorldPosY
      );

      const imageWidth = gridSquareSize * GRID_SIZE;
      const imageHeight = gridSquareSize * GRID_SIZE;

      bgCtx?.clearRect(0, 0, width, height);
      bgCtx?.drawImage(imageRef.current, x, y, imageWidth, imageHeight);

      //   if (!firstRendered.current) {
      //     firstRendered.current = true;
      //   }
    };

    addCanvasInfoChangeEventListener(renderer);

    return () => {
      removeCanvasInfoChangeEventListener(renderer);
    };
  }, [
    addCanvasInfoChangeEventListener,
    removeCanvasInfoChangeEventListener,
    isImageLoaded,
    getBackgroundCanvas,
    convertWorldPosToCanvasOffset,
  ]);
  const [disableInteraction, setDisableInteraction] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveComplete, setShowSaveComplete] = useState(false);
  const saveCompleteTimer = useRef<NodeJS.Timeout>();
  const handleSave = async () => {
    try {
      setDisableInteraction(true);
      setIsSaving(true);

      const data = dataArray.map((row) =>
        row.map((item) => (item.color === BRUSH_COLOR ? 1 : 0))
      );

      await onSave(data);

      setShowSaveComplete(true);

      if (saveCompleteTimer.current) {
        clearTimeout(saveCompleteTimer.current);
      }

      saveCompleteTimer.current = setTimeout(() => {
        setShowSaveComplete(false);
      }, 1000);
    } finally {
      setIsSaving(false);
      setDisableInteraction(false);
    }
  };

  return (
    <div className="flex items-center flex-col">
      <Dotting
        width={300}
        height={300}
        isGridFixed
        backgroundColor="white"
        defaultPixelColor="transparent"
        brushColor={BRUSH_COLOR}
        brushTool={brushTool}
        isInteractionApplicable={!disableInteraction}
        initLayers={[
          {
            id: "layer1",
            data: layerData,
          },
        ]}
        ref={dottingRef}
      />

      <div className="justify-center flex">
        <RadioGroupPrimitive.Root
          asChild
          value={brushTool}
          onValueChange={(value) => {
            setBrushTool(value as BrushTool);
          }}
        >
          <div className="flex items-center space-x-0.5 rounded-md border bg-background p-1 shadow-sm">
            <RadioGroupPrimitive.Item value={BrushTool.DOT} asChild>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-accent-foreground data-[state=checked]:text-accent border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1">
                <BrushIcon size={20} />
              </button>
            </RadioGroupPrimitive.Item>
            <RadioGroupPrimitive.Item value={BrushTool.ERASER} asChild>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-accent-foreground data-[state=checked]:text-accent border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1">
                <EraserIcon size={20} />
              </button>
            </RadioGroupPrimitive.Item>
            <div className="px-2">
              <div className="w-[2px] bg-input h-5" />
            </div>
            <SaveButton
              isSaving={isSaving}
              showSaveComplete={showSaveComplete}
              onClick={handleSave}
            />
          </div>
        </RadioGroupPrimitive.Root>
      </div>
      {/* <Dotting width={100} height={100} initLayers={[initLayer]} /> */}
    </div>
  );
};

interface SaveButtonProps extends React.ComponentProps<"button"> {
  isSaving: boolean;
  showSaveComplete: boolean;
}

const SaveButton = ({
  isSaving,
  showSaveComplete,
  ...rest
}: SaveButtonProps) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
      disabled={isSaving}
      {...rest}
    >
      {showSaveComplete ? (
        <CheckIcon size={20} color="green" />
      ) : isSaving ? (
        <LoaderIcon size={20} className="animate-spin" />
      ) : (
        <SaveIcon size={20} />
      )}
    </button>
  );
};

export default MobCollisionEditor;
