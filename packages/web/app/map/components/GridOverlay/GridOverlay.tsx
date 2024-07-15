import * as React from "react";
import Tiles from "./Tiles";

export interface GridOverlayProps {
  children: React.ReactNode;

  rows: number;
  cols: number;
}

const GridOverlay = ({ children, rows, cols }: GridOverlayProps) => {
  return (
    <div
      className={
        "w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-center"
      }
    >
      <div className={"w-fit h-fit relative"}>{children}</div>
      <div className={"absolute top-0 left-0 bottom-0 right-0 flex"}>
        <Tiles rows={rows} cols={cols} />
      </div>
    </div>
  );
};

export default GridOverlay;
