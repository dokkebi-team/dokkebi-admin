import videoTriggerData from "@/assets/video_trigger.json";
import { Graphics } from "@pixi/react";
import React from "react";
import { INITIAL_POSITION, TILE_MAP_ROW_SIZE, TILE_SIZE } from "../constants";
import { useStageSize } from "./StageSizeProvider";

const videoTriggerMap: number[][] = [];
for (let i = 0; i < videoTriggerData.length; i += TILE_MAP_ROW_SIZE) {
  videoTriggerMap.push(videoTriggerData.slice(i, TILE_MAP_ROW_SIZE + i));
}

interface VideoTriggerItem {
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  videoId: number;
}

export const videoTrigger: VideoTriggerItem[] = [];

videoTriggerMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol > 0) {
      videoTrigger.push({
        position: {
          x: j * TILE_SIZE - INITIAL_POSITION.x,
          y: i * TILE_SIZE - INITIAL_POSITION.y,
        },
        width: TILE_SIZE,
        height: TILE_SIZE,
        videoId: symbol,
      });
    }
  });
});

export interface VideoTriggerProps {}

const VideoTrigger = ({}: VideoTriggerProps) => {
  return (
    <>
      {videoTrigger.map((boundary, boundaryIndex) => (
        <VideoTriggerTile key={boundaryIndex} {...boundary} />
      ))}
    </>
  );
};

interface VideoTriggerTileProps {
  position: { x: number; y: number };
  width: number;
  height: number;
}

const VideoTriggerTile = ({
  position,
  width,
  height,
}: VideoTriggerTileProps) => {
  const size = useStageSize();
  const draw = React.useCallback(
    (g) => {
      g.clear();
      g.beginFill(0x3c00ff, 0.5);
      g.drawRect(0, 0, width, height);
    },
    [height, width],
  );

  return (
    <Graphics
      draw={draw}
      position={{
        x: position.x - size.width / 2,
        y: position.y - size.height / 2,
      }}
    />
  );
};

export default VideoTrigger;
