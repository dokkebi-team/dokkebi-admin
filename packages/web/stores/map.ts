import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import { PlayerState } from "../components/Player";
import { INITIAL_POSITIONS } from "../constants";

export const isAppStartedAtom = atom(false);

const randomIndex = Math.floor(Math.random() * INITIAL_POSITIONS.length);
const initialPosition = INITIAL_POSITIONS[randomIndex];

export const playerAtom = atom<{
  position: { x: number; y: number };
  state: PlayerState;
}>({
  position: initialPosition,
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
