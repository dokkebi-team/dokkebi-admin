"use client";

import { VIDEOS } from "@/constants";
import {
  isAppStartedAtom,
  playerAnimationStatusAtom,
  selectedVideoIndexAtom,
} from "@/stores/map";
import { useAtom, useAtomValue } from "jotai";
import dynamic from "next/dynamic";
import { Suspense, useRef, useState } from "react";
import { AppRef } from "./App";
import VideoFrame from "./VideoFrame";

const App = dynamic(() => import("./App"), { ssr: false });

export interface MainProps {}

const Main = ({}: MainProps) => {
  const appRef = useRef<AppRef>(null);
  const playerAnimationStatus = useAtomValue(playerAnimationStatusAtom);
  const isAppStarted = useAtomValue(isAppStartedAtom);
  const [selectedMobId, setSelectedMobId] = useState<string>();
  const [selectedVideoIndex, setSelectedVideoIndex] = useAtom(
    selectedVideoIndexAtom,
  );
  const showMenu = playerAnimationStatus === "idle";
  const playSound = isAppStarted && selectedVideoIndex === undefined;
  const showMobInfo = selectedMobId !== undefined;
  const isPlaying =
    isAppStarted && !showMobInfo && selectedVideoIndex === undefined;
  const showHeader = isAppStarted && !isPlaying;

  return (
    <Suspense fallback={null}>
      <App
        isPlaying={isPlaying}
        playSound={playSound}
        onSelectMob={setSelectedMobId}
        forwardedRef={appRef}
      />
      {selectedVideoIndex !== undefined && (
        <VideoFrame
          url={VIDEOS[selectedVideoIndex]}
          onEnded={() => {
            setSelectedVideoIndex(undefined);
          }}
        />
      )}
    </Suspense>
  );
};

export default Main;
