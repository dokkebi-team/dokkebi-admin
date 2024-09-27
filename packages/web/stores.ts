import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import { PlayerState } from "./components/Player";
import { INITIAL_POSITION } from "./constants";

export const isAppStartedAtom = atom(false);

export const playerAtom = atom<{
  position: { x: number; y: number };
  state: PlayerState;
}>({
  position: { x: INITIAL_POSITION.x, y: INITIAL_POSITION.y },
  state: {
    animationStatus: "idle",
    direction: "down",
  },
});

export const playerAnimationStatusAtom = selectAtom(
  playerAtom,
  (player) => player.state.animationStatus,
);

export const selectedVideoIndexAtom = atom<number | undefined>(undefined);

export const mobileKeyControlsAtom = atom({
  up: false,
  down: false,
  left: false,
  right: false,
});
