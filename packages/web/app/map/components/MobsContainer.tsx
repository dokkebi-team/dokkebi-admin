"use client";

import { getUrlOrigin } from "@/app/resources/components/ResourcesTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import mapImg from "@/public/images/map_optimized.png";
import { getModCharacter } from "@/utils/character";
import { cn } from "@/utils/ui";
import { PrismaDBMainTypes } from "@dokkebi-admin/db";
import { useMutation, useQuery } from "@tanstack/react-query";
import ky from "ky";
import { CheckIcon, LoaderIcon, SaveIcon } from "lucide-react";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Moveable, { MoveableProps } from "react-moveable";
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";

const round = (value: number, digits = 0) => {
  const pow = Math.pow(10, digits);
  return Math.round(value * pow) / pow;
};

export interface MobsContainerProps {}

const MobsContainer = ({}: MobsContainerProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { data } = useQuery({
    queryKey: ["mobs"],
    queryFn: async () => {
      const res = await ky.get(`${getUrlOrigin()}/api/mobs`);

      return res.json<PrismaDBMainTypes.Mob[]>();
    },
  });
  const { data: mobsPositionData, refetch: refetchMobsPosition } = useQuery({
    queryKey: ["map", "mobs-position"],
    queryFn: async () => {
      const res = await ky.get(`${getUrlOrigin()}/api/map/mobs-position`);

      return res.json<
        Record<
          string,
          {
            x: number;
            y: number;
            scale: number;
          }
        >
      >();
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const mobsPositionMutation = useMutation({
    mutationFn: async (
      data: Record<
        string,
        {
          x: number;
          y: number;
          scale: number;
        }
      >
    ) => {
      await ky
        .put(`${getUrlOrigin()}/api/map/mobs-position`, {
          json: {
            data,
          },
        })
        .json();
    },
    onSettled: async () => {
      await refetchMobsPosition();
    },
  });
  const transformComponentRef = useRef<ReactZoomPanPinchContentRef>(null);
  const [disablePanning, setDisablePanning] = useState(false);
  const [currentMobInventoryNo, setCurrentMobInventoryNo] = useQueryState(
    "currentMobInventoryNo",
    {
      defaultValue: "AD1",
    }
  );
  const currentMob = useMemo(
    () => data?.find((mob) => mob.inventoryNo === currentMobInventoryNo),
    [data, currentMobInventoryNo]
  );
  const [mobsData, setMobsData] = useState<
    Record<string, { x: number; y: number; scale: number }>
  >({});
  const isCurrentMobPlaced = useMemo(
    () => !!mobsData[currentMobInventoryNo],
    [mobsData, currentMobInventoryNo]
  );
  const [disableInteraction, setDisableInteraction] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveComplete, setShowSaveComplete] = useState(false);
  const saveCompleteTimer = useRef<NodeJS.Timeout>();
  const handleSave = async () => {
    try {
      setDisableInteraction(true);
      setIsSaving(true);

      await mobsPositionMutation.mutateAsync(mobsData);

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
    if (!mobsPositionData) {
      return;
    }

    setMobsData(mobsPositionData);
  }, [mobsPositionData]);

  useHotkeys("mod+s", (e) => {
    e.preventDefault();
    handleSave();
  });

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="mb-4">
        <Select
          value={currentMobInventoryNo}
          onValueChange={setCurrentMobInventoryNo}
        >
          <SelectTrigger className="w-[11.25rem]">
            <SelectValue placeholder="도깨비 선택" />
          </SelectTrigger>
          <SelectContent>
            {data.map((mob) => {
              return (
                <SelectItem key={mob.inventoryNo} value={mob.inventoryNo}>
                  {mob.inventoryNo}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col items-center relative border-2 border-red-400 overflow-hidden",
          disableInteraction && "pointer-events-none cursor-not-allowed"
        )}
      >
        <TransformWrapper
          disabled={disableInteraction}
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
          minScale={-1}
          panning={{
            disabled: disablePanning,
          }}
          ref={transformComponentRef}
          // onZoom={(ref) => setScale(ref.state.scale)}
        >
          <TransformComponent wrapperClass="flex-1 !w-full">
            <div
              className="relative"
              style={{
                width: 2048,
                height: 5615,
              }}
              onClick={(e) => {
                if (isCurrentMobPlaced) {
                  return;
                }

                if (!transformComponentRef.current) {
                  return;
                }

                const { scale } =
                  transformComponentRef.current.instance.transformState;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / scale;
                const y = (e.clientY - rect.top) / scale;

                setMobsData((prev) => ({
                  ...prev,
                  [currentMobInventoryNo]: { x, y, scale: 1 },
                }));
              }}
              onMouseMove={(e) => {
                if (!transformComponentRef.current) {
                  return;
                }

                const { scale } =
                  transformComponentRef.current.instance.transformState;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / scale;
                const y = (e.clientY - rect.top) / scale;
                setCursorPosition({ x, y });
              }}
            >
              <div
                style={{
                  width: 2048,
                  height: 5615,
                }}
              >
                <Image src={mapImg} width={2048} height={5615} alt="" />
              </div>
              {Object.entries(mobsData).map(
                ([inventoryNo, { x, y, scale }]) => {
                  const mob = data.find(
                    (mob) => mob.inventoryNo === inventoryNo
                  );
                  const disabled = currentMobInventoryNo !== inventoryNo;

                  if (!mob) {
                    return null;
                  }

                  return (
                    <MoveableMob
                      key={inventoryNo}
                      disabled={disabled}
                      mob={mob}
                      x={x}
                      y={y}
                      scale={scale}
                      moveableProps={{
                        onDragStart: () => {
                          if (disabled) {
                            return;
                          }

                          setDisablePanning(true);
                        },
                        onDragEnd: () => {
                          if (disabled) {
                            return;
                          }

                          setDisablePanning(false);
                        },
                        onClick: () => {
                          setCurrentMobInventoryNo(inventoryNo);
                        },
                      }}
                      onChangePosition={(x, y) => {
                        setMobsData((prev) => ({
                          ...prev,
                          [inventoryNo]: {
                            x,
                            y,
                            scale: prev[inventoryNo].scale,
                          },
                        }));
                      }}
                      onChangeScale={(scale) => {
                        setMobsData((prev) => ({
                          ...prev,
                          [inventoryNo]: {
                            x: prev[inventoryNo].x,
                            y: prev[inventoryNo].y,
                            scale,
                          },
                        }));
                      }}
                    />
                  );
                }
              )}
              {currentMob && !isCurrentMobPlaced && (
                <CursorMob
                  x={cursorPosition.x}
                  y={cursorPosition.y}
                  mob={currentMob}
                />
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>
        <div className="absolute bottom-4 left-1/2 translate-x-[-50%]">
          <div className="flex items-center space-x-0.5 rounded-md border bg-background p-1 shadow-sm">
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
        </div>
      </div>
    </>
  );
};

interface MobProps {
  mob: PrismaDBMainTypes.Mob;
}

const Mob = forwardRef<HTMLDivElement, MobProps>(({ mob }, ref) => {
  return (
    <div className="h-[128px] w-[128px]" ref={ref}>
      <Image src={mob.illustrationUrl} width={256} height={256} alt="" />
    </div>
  );
});

Mob.displayName = "Mob";

interface MoveableMobProps extends MobProps, MoveableProps {
  x: number;
  y: number;
  scale: number;
  moveableProps?: MoveableProps;
  disabled?: boolean;
  onChangeScale: (scale: number) => void;
  onChangePosition: (x: number, y: number) => void;
}

const MoveableMob = ({
  mob,
  x,
  y,
  scale = 1,
  disabled,
  moveableProps,
  onChangeScale,
  onChangePosition,
}: MoveableMobProps) => {
  const [target, setTarget] = useState<HTMLElement | null>();
  return (
    <>
      <div
        className="absolute"
        style={{
          left: -64,
          top: -64,
          transform: `translate(${x}px, ${y}px) scale(${scale}, ${scale})`,
        }}
        ref={setTarget}
      >
        <Mob mob={mob} />
      </div>
      <Moveable
        {...(disabled
          ? {
              renderDirections: false,
              hideDefaultLines: true,
            }
          : {})}
        snapDirections={["x"]}
        origin={false}
        target={target}
        scalable={true}
        keepRatio={true}
        draggable={true}
        snappable={true}
        rotatable={false}
        bounds={{ left: 0, top: 0, bottom: 0, right: 0, position: "css" }}
        onScaleStart={(e) => {
          e.setFixedDirection([0, 0]);
        }}
        onDrag={(e) => {
          if (disabled) {
            return;
          }

          e.target.style.transform = e.transform;
          const extractedTransform = e.transform.match(
            /translate\((\-?[\d.]+)px, (\-?[\d.]+)px\)/
          );
          const [, x, y] = extractedTransform ?? [];

          const nextTransform = e.transform.replace(
            /translate\((\-?[\d.]+)px, (\-?[\d.]+)px\)/,
            `translate(${x}px, ${y}px)`
          );

          e.target.style.transform = nextTransform;
          onChangePosition(round(parseFloat(x), 1), round(parseFloat(y), 1));
        }}
        onScale={(e) => {
          if (disabled) {
            return;
          }

          const extractedTransform = e.drag.transform.match(
            /scale\((\-?[\d.]+), (\-?[\d.]+)\)/
          );

          const [, rawScale] = extractedTransform ?? [];

          const scale = round(parseFloat(rawScale), 1);

          const nextTransform = e.drag.transform.replace(
            /scale\((\-?[\d.]+), (\-?[\d.]+)\)/,
            `scale(${scale}, ${scale})`
          );

          e.target.style.transform = nextTransform;

          onChangeScale(scale);
        }}
        {...moveableProps}
      />
    </>
  );
};

interface CursorMobProps extends MobProps {
  x: number;
  y: number;
}

const CursorMob = ({ x, y, mob }: CursorMobProps) => {
  return (
    <div
      className="absolute"
      style={{ left: 0, top: 0, transform: `translate(${x}px, ${y}px)` }}
    >
      <div className="translate-x-[-50%] translate-y-[-50%]">
        <Mob mob={mob} />
      </div>
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

export default MobsContainer;
