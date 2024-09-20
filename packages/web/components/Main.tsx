"use client";

import { VIDEOS } from "@/constants";
import {
  isAppStartedAtom,
  playerAnimationStatusAtom,
  selectedVideoIndexAtom,
} from "@/stores";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";
import dynamic from "next/dynamic";
import { Suspense, useRef, useState } from "react";
import { useKey } from "react-use";
import { AppRef } from "./App";
import MobInfoDialog from "./MobInfoDialog";
import VideoFrame from "./VideoFrame";
import WebUI from "./WebUI";

const App = dynamic(() => import("./App"), { ssr: false });

export interface MainProps {}

const Main = ({}: MainProps) => {
  const [queryClient] = useState(() => new QueryClient());
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

  useKey(
    "Escape",
    (e) => {
      e.preventDefault();

      if (selectedVideoIndex !== undefined) {
        setSelectedVideoIndex(undefined);
      }

      if (showMobInfo) {
        setSelectedMobId(undefined);
        return;
      }
    },
    undefined,
    [showMobInfo, selectedVideoIndex],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <WebUI
        isAppStarted={isAppStarted}
        isPageOpened={false}
        // showMenu={showMenu}
        // showHeader={showHeader}
        showMenu={false}
        showHeader={false}
        onMoveArchivePage={async () => {}}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <App
            isPlaying={isPlaying}
            playSound={playSound}
            onSelectMob={setSelectedMobId}
            forwardedRef={appRef}
          />
        </Suspense>
      </WebUI>
      <MobInfoDialog
        selectedMobId={selectedMobId}
        onClose={() => {
          setSelectedMobId(undefined);
        }}
      />
      {selectedVideoIndex !== undefined && (
        <VideoFrame
          url={VIDEOS[selectedVideoIndex]}
          onEnded={() => {
            setSelectedVideoIndex(undefined);
          }}
        />
      )}
    </QueryClientProvider>
  );
};

export default Main;
