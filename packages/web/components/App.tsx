"use client";

import { MapConfigsContext, MapConfigsProvider } from "@/contexts/map-configs";
import { useContextBridge } from "@/hooks/useContextBridge";
import { useMapConfigsQuery } from "@/queries/map-configs";
import { Container, Sprite, Stage } from "@pixi/react";
import * as PIXI from "pixi.js";
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import BackgroundSoundProvider, {
  useBackgroundSound,
} from "./BackgroundSoundProvider";
import Bang, { BangRef } from "./Bang";
import Camera from "./Camera";
import MobInfoDialog from "./MobInfoDialog";
import Mobs from "./Mobs";
import Player from "./Player";
import ResourceLoader from "./ResourceLoader";
import {
  StageSizeContext,
  StageSizeProvider,
  useStageSize,
} from "./StageSizeProvider";

export interface AppRef {
  playBang: () => void;
}

const RESOURCES = [
  "/map.png",
  "/map_next.png",
  "/map_with_mobs_info.png",
  "/playerDown.png",
  "/playerUp.png",
  "/playerLeft.png",
  "/playerRight.png",
  "/bang1.png",
  "/bang2.png",
  "/bang3.png",
  "/bang4.png",
  "/bang5.png",
  "/bang6.png",
  "/bang7.png",
  "/bang8.png",
  "/bang9.png",
  "/bang10.png",
  "/bang11.png",
  "/bang12.png",
  "/bang13.png",
  "/bang14.png",
];

export interface AppProps {
  isPlaying: boolean;
  forwardedRef: React.Ref<AppRef>;
  playSound: boolean;
  onSelectMob: (mobId: string) => void;
}

const App = ({ isPlaying, playSound, onSelectMob, forwardedRef }: AppProps) => {
  const { data: mapConfigsData } = useMapConfigsQuery();
  const bangRef = useRef<BangRef>(null);
  const resources = useMemo(() => {
    return [
      ...RESOURCES,
      // ...mapConfigsData.mobList
      //   .map((mob) => mob.optimizedIllustrationUrl)
      //   .filter(Boolean),
    ];
  }, [mapConfigsData.mobList]);
  const [selectedMobInventoryNo, setSelectedMobInventoryNo] =
    useState<string>();

  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        playBang: async () => {
          return bangRef.current?.play();
        },
      };
    },
    [],
  );

  return (
    <MapConfigsProvider value={mapConfigsData}>
      <StageSizeProvider>
        <ResourceLoader
          resources={resources}
          fallback={<div className="text-white">Loading...</div>}
        >
          <StateContainer>
            <Camera>
              <Park
                isPlaying={isPlaying}
                playSound={playSound}
                onSelectMob={setSelectedMobInventoryNo}
              />
            </Camera>
            <Bang zIndex={10} ref={bangRef} />
          </StateContainer>
        </ResourceLoader>
      </StageSizeProvider>
      <MobInfoDialog
        key={selectedMobInventoryNo}
        selectedMobInventoryNo={selectedMobInventoryNo}
        onClose={() => {
          setSelectedMobInventoryNo(undefined);
        }}
      />
    </MapConfigsProvider>
  );
};

interface StateContainerProps {
  children: React.ReactNode;
}

const StateContainer = ({ children }: StateContainerProps) => {
  const size = useStageSize();
  const ContextBridge = useContextBridge(StageSizeContext, MapConfigsContext);

  return (
    <>
      <Stage {...size} options={{ backgroundColor: 0x005ed0 }}>
        <ContextBridge>
          <BackgroundSoundProvider>{children}</BackgroundSoundProvider>
        </ContextBridge>
      </Stage>
      {/*<MobsHelper />*/}
    </>
  );
};

interface ParkProps {
  isPlaying: boolean;
  playSound: boolean;
  onSelectMob: (mobId: string) => void;
}

const Park = ({ isPlaying, playSound, onSelectMob }: ParkProps) => {
  // const app = useApp();
  const size = useStageSize();

  return (
    <Container sortableChildren interactive>
      <Container zIndex={0}>
        <Map playSound={playSound} />
      </Container>
      {/*<Boundaries />*/}
      {/*<BoundaryExceptions />*/}
      {/*<VideoTrigger />*/}
      <Player isPlaying={isPlaying} />
      <Mobs onSelectMob={onSelectMob} />
    </Container>
  );
};

interface MapProps {
  playSound: boolean;
}

const Map = ({ playSound }: MapProps) => {
  const { play, stop, pause } = useBackgroundSound();

  useEffect(() => {
    if (playSound) {
      play();
    } else {
      pause();
    }
    return () => {
      stop();
    };
  }, [playSound]);

  const texture = PIXI.utils.TextureCache["/map_next.png"];
  // const texture = PIXI.utils.TextureCache['/map_with_mobs_info.png']
  return <Sprite texture={texture} anchor={0} width={2048} height={5615} />;
};

export default App;
