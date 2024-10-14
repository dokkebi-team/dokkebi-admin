"use client";

import { VIDEOS } from "@/constants";
import { MapConfigsContext, MapConfigsProvider } from "@/contexts/map-configs";
import { useContextBridge } from "@/hooks/useContextBridge";
import clubImage from "@/public/club.png";
import hatImage from "@/public/hat.png";
import { useMapConfigsSuspenseQuery } from "@/queries/map-configs";
import { isAppStartedAtom, selectedVideoIndexAtom } from "@/stores/map";
import { cn } from "@/utils/ui";
import { Container, Sprite, Stage } from "@pixi/react";
import { Portal } from "@radix-ui/react-portal";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
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
  // "/map.png",
  "/map_next.png",
  "/playerDown.png",
  "/playerUp.png",
  "/playerLeft.png",
  "/playerRight.png",
  // "/bang1.png",
  // "/bang2.png",
  // "/bang3.png",
  // "/bang4.png",
  // "/bang5.png",
  // "/bang6.png",
  // "/bang7.png",
  // "/bang8.png",
  // "/bang9.png",
  // "/bang10.png",
  // "/bang11.png",
  // "/bang12.png",
  // "/bang13.png",
  // "/bang14.png",
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
      <HatDialog open={showHatDialog} />
      {isAppStarted && !selectedMobInventoryNo && (
        <>
          <MobileController />
          <Portal container={document.documentElement}>
            <a
              className="scale-1 canhover:hover:scale-90 group fixed left-10 z-[100] aspect-square h-[4.625rem] w-[4.625rem] overflow-hidden rounded-full bg-[radial-gradient(white_0%,#FFF538_60%)] p-2 shadow-[0px_0px_16px_0px_#FFF538] transition-transform bottom-safe-offset-10 active:scale-90 md:h-[6.25rem] md:w-[6.25rem]"
              type="button"
              target="_blank"
              href="/archive"
              rel="noreferrer"
            >
              <Image
                className={cn(
                  "h-full w-full transition-transform group-active:rotate-45",
                )}
                src={clubImage}
                alt="아카이브"
                width={100}
                height={100}
                unoptimized
              />
            </a>
          </Portal>
          <Portal container={document.documentElement}>
            <button
              className="scale-1 canhover:hover:scale-90 fixed right-10 z-[100] aspect-square h-[4.625rem] w-[4.625rem] overflow-hidden rounded-full bg-[radial-gradient(white_0%,#FFF538_60%)] p-2 shadow-[0px_0px_16px_0px_#FFF538] transition-transform bottom-safe-offset-10 active:scale-90 md:h-[6.25rem] md:w-[6.25rem]"
              type="button"
              onClick={(e) => {
                setShowHatDialog((prev) => !prev);
              }}
            >
              <Image
                className={cn(
                  "h-full w-full transition-transform",
                  showHatDialog && "rotate-180",
                )}
                src={hatImage}
                alt="허수깨비 모자"
                width={100}
                height={100}
                unoptimized
              />
            </button>
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
      <Mobs isPlaying={isPlaying} onSelectMob={onSelectMob} />
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
