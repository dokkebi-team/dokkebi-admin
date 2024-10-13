"use client";

import { VIDEOS } from "@/constants";
import { MapConfigsContext, MapConfigsProvider } from "@/contexts/map-configs";
import { useContextBridge } from "@/hooks/useContextBridge";
import { useMapConfigsSuspenseQuery } from "@/queries/map-configs";
import { isAppStartedAtom, selectedVideoIndexAtom } from "@/stores/map";
import { Container, Sprite, Stage } from "@pixi/react";
import { Portal } from "@radix-ui/react-portal";
import { useAtom, useAtomValue } from "jotai";
import * as PIXI from "pixi.js";
import React, { useEffect, useMemo, useRef, useState } from "react";
import BackgroundSoundProvider, {
  useBackgroundSound,
} from "./BackgroundSoundProvider";
import { BangRef } from "./Bang";
import Camera from "./Camera";
import HatDialog from "./HatDialog";
import MobileController from "./MobileController";
import MobInfoDialog from "./MobInfoDialog";
import Mobs from "./Mobs";
import Player from "./Player";
import ResourceLoader from "./ResourceLoader";
import {
  StageSizeContext,
  StageSizeProvider,
  useStageSize,
} from "./StageSizeProvider";
import VideoFrame from "./VideoFrame";

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

export interface AppProps {}

const App = ({}: AppProps) => {
  const isAppStarted = useAtomValue(isAppStartedAtom);
  const [selectedVideoIndex, setSelectedVideoIndex] = useAtom(
    selectedVideoIndexAtom,
  );
  const { data: mapConfigsData } = useMapConfigsSuspenseQuery();
  const bangRef = useRef<BangRef>(null);
  const resources = useMemo(() => {
    return [
      ...RESOURCES,
      // ...mapConfigsData.mobList
      //   .map((mob) => mob.optimizedIllustrationUrl)
      //   .filter(Boolean),
    ];
  }, []);
  const [selectedMobInventoryNo, setSelectedMobInventoryNo] =
    useState<string>();
  const [showHatDialog, setShowHatDialog] = useState(false);

  return (
    <MapConfigsProvider value={mapConfigsData}>
      <StageSizeProvider>
        <ResourceLoader resources={resources}>
          <StateContainer>
            <Camera>
              <Park
                isPlaying={
                  isAppStarted && !selectedMobInventoryNo && !showHatDialog
                }
                playSound={isAppStarted}
                onSelectMob={setSelectedMobInventoryNo}
              />
            </Camera>
            {/* <Bang zIndex={10} ref={bangRef} /> */}
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
      <HatDialog open={showHatDialog} onClose={() => {}} />
      {isAppStarted && !selectedMobInventoryNo && (
        <>
          <MobileController />
          <Portal container={document.documentElement}>
            <button
              className="scale-1 canhover:hover:scale-90 fixed right-10 z-[100] aspect-square h-[6.25rem] rounded-full bg-yellow-200 transition-transform bottom-safe-offset-10 active:scale-90"
              type="button"
              onClick={() => {
                setShowHatDialog((prev) => !prev);
              }}
            ></button>
          </Portal>
        </>
      )}
      {selectedVideoIndex !== undefined && (
        <VideoFrame
          url={VIDEOS[selectedVideoIndex]}
          onEnded={() => {
            setSelectedVideoIndex(undefined);
          }}
        />
      )}
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
