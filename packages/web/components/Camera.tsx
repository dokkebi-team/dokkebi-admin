import { WORLD_HEIGHT, WORLD_WIDTH } from "@/constants";
import { PixiComponent, useApp } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";
import React, { useRef } from "react";
import { useMounted } from "../hooks/useMounted";
import { useStageSize } from "./StageSizeProvider";

export interface CameraProps {
  children: React.ReactNode;
}

const Camera = ({ children }: CameraProps) => {
  const isMounted = useMounted();
  const size = useStageSize();

  const app = useApp();
  const viewportRef = useRef<PixiViewport>(null);

  const getViewport = () => {
    return viewportRef.current;
  };

  const moveViewport = ({ x, y }: { x: number; y: number }) => {
    if (!viewportRef.current) {
      return;
    }

    viewportRef.current.moveCenter(x, y);
  };

  if (isMounted) {
    return (
      <Viewport
        screenWidth={size.width}
        screenHeight={size.height}
        worldHeight={WORLD_HEIGHT}
        worldWidth={WORLD_WIDTH}
        eventSystem={app.renderer.events}
        ref={viewportRef}
      >
        <CameraContext.Provider
          value={{
            getViewport,
            moveViewport,
          }}
        >
          {children}
        </CameraContext.Provider>
      </Viewport>
    );
  }

  return null;
};

export interface CameraContextProps {
  getViewport: () => PixiViewport | null;
  moveViewport: ({ x, y }: { x: number; y: number }) => void;
}

export const CameraContext = React.createContext<CameraContextProps | null>(
  null,
);

export const useCamera = () => {
  const context = React.useContext(CameraContext);

  if (context === null) {
    throw new Error("useCamera must be used within a CameraProvider");
  }

  return context;
};

interface ViewportProps {
  screenWidth: number;
  screenHeight: number;
  worldWidth?: number;
  worldHeight?: number;
  eventSystem: PIXI.EventSystem;
  children: React.ReactNode;
}

const Viewport = PixiComponent("Viewport", {
  create(props: ViewportProps) {
    const viewport = new PixiViewport({
      screenWidth: props.screenWidth,
      screenHeight: props.screenHeight,
      worldWidth: props.worldWidth,
      worldHeight: props.worldHeight,
      events: props.eventSystem,
    });

    return viewport;
  },
});

export default Camera;
