import { PLAYER_SIZE, WORLD_HEIGHT, WORLD_WIDTH } from "@/constants";
import { useMapConfigs } from "@/contexts/map-configs";
import { useKeyControl } from "@/hooks/useKeyControl";
import { useSpritesheet } from "@/hooks/useSpritesheet";
import {
  mobileKeyControlsAtom,
  playerAtom,
  selectedVideoIndexAtom,
} from "@/stores/map";
import { BoundaryItem } from "@/types/common";
import { rectangularCollision } from "@/utils/common";
import { Sprite, useTick } from "@pixi/react";
import { useAtom, useAtomValue } from "jotai";
import { Resource, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import { useCamera } from "./Camera";
import { useStageSize } from "./StageSizeProvider";
import { videoTrigger } from "./VideoTrigger";

export type PlayerAnimationStatus = "idle" | "walk" | "run";
export type PlayerDirection = "up" | "down" | "left" | "right";

export interface PlayerState {
  animationStatus: PlayerAnimationStatus;
  direction: PlayerDirection;
}

const getNextPosition = (
  position: { x: number; y: number },
  deltaVelocity: { x: number; y: number },
  boundaryData: BoundaryItem[],
) => {
  let nextPosition = {
    x: position.x + deltaVelocity.x,
    y: position.y + deltaVelocity.y,
  };

  const isColliding = boundaryData.some((boundary) => {
    return rectangularCollision({
      rectangle1: {
        position: {
          x: nextPosition.x - PLAYER_SIZE.width / 2,
          y: nextPosition.y - PLAYER_SIZE.height,
        },
        ...PLAYER_SIZE,
      },
      rectangle2: {
        ...boundary,
      },
    });
  });

  return isColliding ? null : nextPosition;
};

const checkVideoTrigger = (
  position: { x: number; y: number },
  deltaVelocity: { x: number; y: number },
) => {
  let nextPosition = {
    x: position.x + deltaVelocity.x,
    y: position.y + deltaVelocity.y,
  };

  const collidingTrigger = videoTrigger.find((boundary) => {
    return rectangularCollision({
      rectangle1: {
        position: {
          x: nextPosition.x - PLAYER_SIZE.width / 2,
          y: nextPosition.y - PLAYER_SIZE.height,
        },
        ...PLAYER_SIZE,
      },
      rectangle2: {
        ...boundary,
      },
    });
  });

  return collidingTrigger ? collidingTrigger.videoId : undefined;
};

export interface PlayerProps {
  isPlaying: boolean;
}

export const Player = ({ isPlaying }: PlayerProps) => {
  const { boundaryData } = useMapConfigs();
  const prevWatchedVideoIndexRef = useRef<number>();
  // const app = useApp();
  const size = useStageSize();
  // const size = { width: app.view.width, height: app.view.height };
  const [selectedVideoIndex, setSelectedVideoIndex] = useAtom(
    selectedVideoIndexAtom,
  );
  const downSprites = useSpritesheet({
    spritesheetUrl: "/playerDown.png",
    frameWidth: 48,
    frameHeight: 80,
  });
  const upSprites = useSpritesheet({
    spritesheetUrl: "/playerUp.png",
    frameWidth: 48,
    frameHeight: 80,
  });
  const leftSprites = useSpritesheet({
    spritesheetUrl: "/playerLeft.png",
    frameWidth: 48,
    frameHeight: 80,
  });
  const rightSprites = useSpritesheet({
    spritesheetUrl: "/playerRight.png",
    frameWidth: 48,
    frameHeight: 80,
  });
  const [frame, setFrame] = useState(0);
  const upKeyControl = useKeyControl("ArrowUp");
  const downKeyControl = useKeyControl("ArrowDown");
  const leftKeyControl = useKeyControl("ArrowLeft");
  const rightKeyControl = useKeyControl("ArrowRight");
  const mobileKeyControls = useAtomValue(mobileKeyControlsAtom);
  const { moveViewport } = useCamera();
  const [player, setPlayer] = useAtom(playerAtom);
  const spritesMap: { [key in PlayerDirection]: Texture<Resource>[] } = {
    up: upSprites,
    down: downSprites,
    left: leftSprites,
    right: rightSprites,
  };

  const currentSprites = spritesMap[player.state.direction];
  const currentSprite = currentSprites[Math.floor(frame)];

  useTick((delta) => {
    if (!isPlaying) {
      return;
    }

    if (player.state.animationStatus === "idle") {
      return;
    }

    let nextFrame = (frame + delta * 0.2) % currentSprites.length;
    if (nextFrame >= currentSprites.length) {
      nextFrame = 0;
    }
    setFrame(nextFrame);
  });

  useTick((delta) => {
    if (!isPlaying) {
      return;
    }

    let velocity = { x: 0, y: 0 };
    let direction = player.state.direction;
    const isUp = upKeyControl.isDown || mobileKeyControls.up;
    const isDown = downKeyControl.isDown || mobileKeyControls.down;
    const isLeft = leftKeyControl.isDown || mobileKeyControls.left;
    const isRight = rightKeyControl.isDown || mobileKeyControls.right;

    if (isUp) {
      velocity.y -= 1;
      direction = "up";
    } else if (isDown) {
      velocity.y += 1;
      direction = "down";
    } else if (isLeft) {
      velocity.x -= 1;
      direction = "left";
    } else if (isRight) {
      velocity.x += 1;
      direction = "right";
    }

    const speed = 3;
    const deltaVelocity = {
      x: velocity.x * speed * delta,
      y: velocity.y * speed * delta,
    };

    const nextPosition = getNextPosition(
      player.position,
      deltaVelocity,
      boundaryData,
    );

    // const check = checkVideoTrigger(player.position, deltaVelocity);

    // if (prevWatchedVideoIndexRef.current === undefined && check !== undefined) {
    //   prevWatchedVideoIndexRef.current = check - 1;
    //   setSelectedVideoIndex(check - 1);
    // } else if (check === undefined) {
    //   prevWatchedVideoIndexRef.current = undefined;
    // }

    if (nextPosition) {
      console.log("nextPosition", nextPosition);
      setPlayer((prev) => ({
        ...prev,
        position: nextPosition,
      }));

      const viewportPositionOffsetX =
        Math.min(WORLD_WIDTH - nextPosition.x - size.width / 2, 0) +
        Math.max(0, size.width / 2 - nextPosition.x);

      const viewportPositionOffsetY =
        Math.min(WORLD_HEIGHT - nextPosition.y - size.height / 2, 0) +
        Math.max(0, size.height / 2 - nextPosition.y);

      moveViewport({
        x: nextPosition.x + viewportPositionOffsetX,
        y: nextPosition.y + viewportPositionOffsetY,
      });
      setPlayer((prev) => ({
        ...prev,
        state: {
          animationStatus: "walk",
          direction,
        },
      }));
    }

    if (!isUp && !isDown && !isLeft && !isRight) {
      setPlayer((prev) => ({
        ...prev,
        state: {
          ...prev.state,
          animationStatus: "idle",
        },
      }));
    }
  });

  useEffect(() => {
    moveViewport({ x: player.position.x, y: player.position.y });
  }, []);

  return (
    <>
      <Sprite
        texture={currentSprite}
        anchor={[0.5, 1]}
        scale={1.1}
        x={player.position.x}
        y={player.position.y}
        zIndex={2}
      />
    </>
  );
};
export default Player;
