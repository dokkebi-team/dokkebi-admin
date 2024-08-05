"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useResizeObserver from "@/libs/use-resize-observer";
import { getModCharacter } from "@/utils/character";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import {
  BrushTool,
  CanvasDataChangeParams,
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
  RedoIcon,
  SaveIcon,
  TrashIcon,
  UndoIcon,
} from "lucide-react";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const BRUSH_COLOR = "blue";

export interface DotEditorRef {}

export interface DotEditorProps {
  data: number[][];
  imageUrl: string;
  rows: number;
  cols: number;
  onSave: (data: number[][]) => Promise<void>;
}

const DotEditor = forwardRef(
  ({ data, rows, cols, imageUrl, onSave }: DotEditorProps) => {
    const layerData = useMemo(() => {
      return data.map((row, rowIndex) =>
        row.map((value, columnIndex) => ({
          rowIndex,
          columnIndex,
          color: value === 1 ? BRUSH_COLOR : "",
        }))
      );
    }, [data]);
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
      imageRef.current.src = imageUrl;

      imageRef.current.onload = () => {
        setIsImageLoaded(true);
      };
    }, [imageUrl]);

    const [rerenderIndex, setRerenderIndex] = useState(0);
    const { ref: resizeContainerRef } = useResizeObserver<HTMLDivElement>({
      onResize: () => {
        if (!firstRendered.current) {
          return;
        }

        setRerenderIndex((prev) => prev + 1);
      },
    });
    const firstRendered = useRef(false);

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

        const imageWidth = gridSquareSize * cols;
        const imageHeight = gridSquareSize * rows;

        bgCtx?.clearRect(0, 0, width, height);
        bgCtx?.drawImage(imageRef.current, x, y, imageWidth, imageHeight);

        if (!firstRendered.current) {
          firstRendered.current = true;
        }
      };

      addCanvasInfoChangeEventListener(renderer);

      return () => {
        removeCanvasInfoChangeEventListener(renderer);
      };
    }, [
      rerenderIndex,
      addCanvasInfoChangeEventListener,
      removeCanvasInfoChangeEventListener,
      isImageLoaded,
      getBackgroundCanvas,
      convertWorldPosToCanvasOffset,
      cols,
      rows,
    ]);

    useEffect(() => {
      const fn = ({ isLocalChange }: CanvasDataChangeParams) => {
        if (isLocalChange) {
          setIsDirty(true);
        }
      };

      addDataChangeListener(fn);

      return () => {
        removeDataChangeListener(fn);
      };
    }, [addDataChangeListener, removeDataChangeListener]);

    const isFirstDataChange = useRef(false);

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

    useEffect(() => {
      return () => {
        if (saveCompleteTimer.current) {
          clearTimeout(saveCompleteTimer.current);
        }
      };
    }, []);

    useEffect(() => {
      clear();
      colorPixels(layerData.flat());
      setIsDirty(false);
    }, [clear, colorPixels, layerData]);

    useHotkeys("d", () => {
      setBrushTool(BrushTool.DOT);
    });
    useHotkeys("e", () => {
      setBrushTool(BrushTool.ERASER);
    });
    useHotkeys("mod+s", (e) => {
      e.preventDefault();
      handleSave();
    });
    useHotkeys("mod+z", (e) => {
      e.preventDefault();
      undo();
    });
    useHotkeys("mod+shift+z", (e) => {
      e.preventDefault();
      redo();
    });
    const [isDirty, setIsDirty] = useState(false);

    return (
      <div className="flex-1 w-full relative" ref={resizeContainerRef}>
        <Dotting
          width={"100%"}
          height={"100%"}
          isGridFixed
          brushColor={BRUSH_COLOR}
          backgroundColor="transparent"
          defaultPixelColor="transparent"
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
        <div className="absolute bottom-4 left-1/2 translate-x-[-50%]">
          <RadioGroupPrimitive.Root
            asChild
            value={brushTool}
            onValueChange={(value) => {
              setBrushTool(value as BrushTool);
            }}
          >
            <div className="flex items-center space-x-0.5 rounded-md border bg-background p-1 shadow-sm">
              <Tooltip>
                <TooltipTrigger onClick={(e) => e.preventDefault()}>
                  <RadioGroupPrimitive.Item value={BrushTool.DOT} asChild>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-accent-foreground data-[state=checked]:text-accent border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1">
                      <BrushIcon size={20} />
                    </button>
                  </RadioGroupPrimitive.Item>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    <kbd>D</kbd>
                  </p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger onClick={(e) => e.preventDefault()}>
                  <RadioGroupPrimitive.Item value={BrushTool.ERASER} asChild>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-accent-foreground data-[state=checked]:text-accent border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1">
                      <EraserIcon size={20} />
                    </button>
                  </RadioGroupPrimitive.Item>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    <kbd>E</kbd>
                  </p>
                </TooltipContent>
              </Tooltip>
              <div className="px-2">
                <div className="w-[2px] bg-input h-5" />
              </div>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
                onClick={() => {
                  if (confirm("정말 초기화하시겠습니까?")) {
                    clear();
                  }
                }}
              >
                <TrashIcon size={20} />
              </button>
              <div className="px-2">
                <div className="w-[2px] bg-input h-5" />
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
                    onClick={undo}
                  >
                    <UndoIcon size={20} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    <kbd>{getModCharacter()}</kbd>+<kbd>Z</kbd>
                  </p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-1"
                    onClick={redo}
                  >
                    <RedoIcon size={20} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    <kbd>{getModCharacter()}</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
                  </p>
                </TooltipContent>
              </Tooltip>
              <div className="px-2">
                <div className="w-[2px] bg-input h-5" />
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <SaveButton
                    isSaving={isSaving}
                    showSaveComplete={showSaveComplete}
                    onClick={handleSave}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    <kbd>{getModCharacter()}</kbd>+<kbd>S</kbd>
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          </RadioGroupPrimitive.Root>
        </div>
      </div>
    );
  }
);

DotEditor.displayName = "DotEditor";

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

export default DotEditor;
