import { playerAtom } from "@/stores/map";
import { Container, Sprite, useTick } from "@pixi/react";
import { useAtomValue } from "jotai";
import * as PIXI from "pixi.js";
import { ComponentPropsWithoutRef, useMemo, useState } from "react";
import { useStageSize } from "./StageSizeProvider";

export interface PngSequencePlayerProps
  extends ComponentPropsWithoutRef<typeof Container> {
  sequence: string[];
  width: number;
  height: number;
  blendMode?: PIXI.BLEND_MODES;
  anchor?: [number, number];
  fps?: number;
  x: number;
  y: number;
}

const PngSequencePlayer = ({
  sequence,
  width,
  height,
  fps = 24,
  anchor = [0.5, 0.5],
  blendMode,
  ...rest
}: PngSequencePlayerProps) => {
  const stageSize = useStageSize();
  const offset = Math.max(stageSize.width, stageSize.height) / 2;
  const player = useAtomValue(playerAtom);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const texture = PIXI.Texture.from(sequence[currentFrame]);

  const show = useMemo(() => {
    if (
      rest.x < player.position.x - width * (1 - anchor[0]) - offset ||
      rest.x > player.position.x + width * anchor[0] + offset
    ) {
      return false;
    }

    if (
      rest.y < player.position.y - height * (1 - anchor[1]) - offset ||
      rest.y > player.position.y + height * anchor[1] + offset
    ) {
      return false;
    }

    return true;
  }, [
    anchor,
    height,
    offset,
    player.position.x,
    player.position.y,
    rest.x,
    rest.y,
    width,
  ]);

  console.log(stageSize, offset);

  useTick((delta) => {
    setElapsed(elapsed + delta);

    if (elapsed > 1 / fps) {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % sequence.length);
      setElapsed(0);
    }
  });

  if (!show) {
    return null;
  }

  return (
    <Container {...rest}>
      <Sprite
        texture={texture}
        width={width}
        height={height}
        anchor={anchor}
        blendMode={blendMode}
      />
    </Container>
  );
};

export default PngSequencePlayer;
