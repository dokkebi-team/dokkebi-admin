import { useMapConfigs } from "@/contexts/map-configs";
import { Sprite, useTick } from "@pixi/react";
import { useAtomValue } from "jotai";
import React, { useRef, useState } from "react";
import { useKey } from "react-use";
import { OFFSET } from "../constants";
import { useBreath } from "../hooks/useBreath";
import { playerAtom } from "../stores";
import { getDistance } from "../utils/common";
import Cursor from "./Cursor";
import { useStageSize } from "./StageSizeProvider";

export interface MobsProps {
  onSelectMob: (mobId: string) => void;
}

// const Mobs = ({onSelectMob}: MobsProps) => {
//   // const mobsConfig = useAtomValue(mobsConfigAtom)
//   const {mobList, mob} = useMapConfigs()
//   const mobConfigList = MOB_CONFIG_LIST
//   const size = useStageSize()
//   const sprites = useMobsSpritesheet({
//     mobConfigList,
//     spritesheetUrls: MOBS_SPRITESHEET_URLS,
//     frameWidth: 400,
//     frameHeight: 400,
//   })
//   const {breathScaleFactor} = useBreath()
//   const player = useAtomValue(playerAtom)
//   const isMouseInteractionProcessing = useRef(false)
//   const [focussedMobIndex, setFocussedMobIndex] = useState<number>()
//   const handleSelectMob = (mobIndex: number) => {
//     onSelectMob(mobConfigList[mobIndex].id)
//   }
//   const handleMouseOver = (mobIndex: number) => {
//     isMouseInteractionProcessing.current = true
//     setFocussedMobIndex(mobIndex)
//   }
//   const handleMouseOut = () => {
//     isMouseInteractionProcessing.current = false
//     setFocussedMobIndex(undefined)
//   }

//   useTick(() => {
//     if (player.state.animationStatus === 'idle' && isMouseInteractionProcessing.current) {
//       return
//     }

//     let nextFocussedIndex: number | undefined = undefined
//     let minDistance: number = Infinity
//     mobConfigList.forEach((mobConfig, mobIndex) => {
//       const offsetAppliedPlayerPosition = {
//         x: player.position.x + OFFSET.x,
//         y: player.position.y + OFFSET.y,
//       }
//       const {value: distance, directions} = getDistance(
//         offsetAppliedPlayerPosition,
//         mobConfig.position,
//       )

//       if (distance < 200 && directions.includes(player.state.direction) && minDistance > distance) {
//         minDistance = distance
//         nextFocussedIndex = mobIndex
//       }
//     })

//     setFocussedMobIndex(nextFocussedIndex)
//   })

//   useKey(
//     (e) => {
//       return e.code === 'Space' || e.code === 'Enter'
//     },
//     (e) => {
//       e.preventDefault()

//       if (focussedMobIndex === undefined) {
//         return
//       }

//       handleSelectMob(focussedMobIndex)
//     },
//     undefined,
//     [focussedMobIndex, onSelectMob],
//   )

//   return (
//     <>
//       {mobConfigList.map((mobConfig, mobIndex) => {
//         const textureTuple = sprites[mobIndex]
//         const boundaryHeightScale =
//           mobConfig.boundaryHeightScale || (mobConfig.scale && mobConfig.scale < 0.5 ? 1 : 0.5)
//         const scale = (mobConfig.scale || 1) * breathScaleFactor * 0.5

//         if (boundaryHeightScale < 1) {
//           return (
//             <React.Fragment key={mobIndex}>
//               <Sprite
//                 texture={textureTuple[0]}
//                 anchor={[0.5, 1]}
//                 scale={scale}
//                 x={mobConfig.position.x - size.width / 2 - OFFSET.x}
//                 y={
//                   mobConfig.position.y -
//                   size.height / 2 -
//                   OFFSET.y +
//                   (textureTuple[0].height + textureTuple[1].height) *
//                     (0.5 - boundaryHeightScale) *
//                     scale
//                 }
//                 zIndex={3}
//                 interactive
//                 pointerdown={() => handleSelectMob(mobIndex)}
//                 pointermove={() => {
//                   handleMouseOver(mobIndex)
//                 }}
//                 pointerout={handleMouseOut}
//               />
//               <Sprite
//                 texture={textureTuple[1]}
//                 anchor={[0.5, 0]}
//                 scale={scale}
//                 x={mobConfig.position.x - size.width / 2 - OFFSET.x}
//                 y={
//                   mobConfig.position.y -
//                   size.height / 2 -
//                   OFFSET.y +
//                   (textureTuple[0].height + textureTuple[1].height) *
//                     (0.5 - boundaryHeightScale) *
//                     scale
//                 }
//                 zIndex={1}
//                 interactive
//                 pointerdown={() => handleSelectMob(mobIndex)}
//                 pointermove={() => {
//                   handleMouseOver(mobIndex)
//                 }}
//                 pointerout={handleMouseOut}
//               />
//               {focussedMobIndex === mobIndex && (
//                 <Cursor
//                   x={mobConfig.position.x - size.width / 2 - OFFSET.x}
//                   y={mobConfig.position.y - size.height / 2 - OFFSET.y}
//                   zIndex={4}
//                 />
//               )}
//             </React.Fragment>
//           )
//         }

//         return (
//           <React.Fragment key={mobIndex}>
//             <Sprite
//               texture={textureTuple[1]}
//               anchor={[0.5, 0.5]}
//               scale={scale}
//               x={mobConfig.position.x - size.width / 2 - OFFSET.x}
//               y={mobConfig.position.y - size.height / 2 - OFFSET.y}
//               zIndex={1}
//               interactive
//               pointerdown={() => handleSelectMob(mobIndex)}
//               pointermove={() => {
//                 handleMouseOver(mobIndex)
//               }}
//               pointerout={handleMouseOut}
//             />
//             {focussedMobIndex === mobIndex && (
//               <Cursor
//                 x={mobConfig.position.x - size.width / 2 - OFFSET.x}
//                 y={mobConfig.position.y - size.height / 2 - OFFSET.y}
//                 zIndex={4}
//               />
//             )}
//           </React.Fragment>
//         )
//       })}
//     </>
//   )
// }

const Mobs = ({ onSelectMob }: MobsProps) => {
  const { mobList, mobConfigs } = useMapConfigs();
  const size = useStageSize();
  const { breathScaleFactor } = useBreath();
  const player = useAtomValue(playerAtom);
  const isMouseInteractionProcessing = useRef(false);
  const [focussedMobIndex, setFocussedMobIndex] = useState<number>();
  const handleSelectMob = (mobIndex: number) => {
    onSelectMob(mobList[mobIndex].inventoryNo);
  };
  const handleMouseOver = (mobIndex: number) => {
    isMouseInteractionProcessing.current = true;
    setFocussedMobIndex(mobIndex);
  };
  const handleMouseOut = () => {
    isMouseInteractionProcessing.current = false;
    setFocussedMobIndex(undefined);
  };

  useTick(() => {
    if (
      player.state.animationStatus === "idle" &&
      isMouseInteractionProcessing.current
    ) {
      return;
    }

    let nextFocussedIndex: number | undefined = undefined;
    let minDistance: number = Infinity;
    mobList.forEach((mob, mobIndex) => {
      const mobConfig = mobConfigs[mob.inventoryNo];

      if (!mobConfig) {
        return;
      }

      const offsetAppliedPlayerPosition = {
        x: player.position.x + OFFSET.x,
        y: player.position.y + OFFSET.y,
      };
      const { value: distance, directions } = getDistance(
        offsetAppliedPlayerPosition,
        {
          x: mobConfig.x,
          y: mobConfig.y,
        },
      );

      if (
        distance < 200 &&
        directions.includes(player.state.direction) &&
        minDistance > distance
      ) {
        minDistance = distance;
        nextFocussedIndex = mobIndex;
      }
    });

    setFocussedMobIndex(nextFocussedIndex);
  });

  useKey(
    (e) => {
      return e.code === "Space" || e.code === "Enter";
    },
    (e) => {
      e.preventDefault();

      if (focussedMobIndex === undefined) {
        return;
      }

      handleSelectMob(focussedMobIndex);
    },
    undefined,
    [focussedMobIndex, onSelectMob],
  );

  return (
    <>
      {mobList.map((mob, mobIndex) => {
        const mobConfig = mobConfigs[mob.inventoryNo];

        if (!mobConfig) {
          return null;
        }

        if (!mob.optimizedIllustrationUrl) {
          return null;
        }

        return (
          <React.Fragment key={mobIndex}>
            <Sprite
              image={mob.optimizedIllustrationUrl}
              anchor={[0.5, 0.5]}
              scale={1}
              width={128 * mobConfig.scale}
              height={128 * mobConfig.scale}
              x={mobConfig.x - size.width / 2 - OFFSET.x}
              y={mobConfig.y - size.height / 2 - OFFSET.y}
              zIndex={1}
              interactive
              pointerdown={() => handleSelectMob(mobIndex)}
              pointermove={() => {
                handleMouseOver(mobIndex);
              }}
              pointerout={handleMouseOut}
            />
            {focussedMobIndex === mobIndex && (
              <Cursor
                x={mobConfig.x - size.width / 2 - OFFSET.x}
                y={mobConfig.y - size.height / 2 - OFFSET.y}
                zIndex={4}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Mobs;
