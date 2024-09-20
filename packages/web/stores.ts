import {atom} from 'jotai'
import {selectAtom} from 'jotai/utils'
import {PlayerState} from './components/Player'

export const isAppStartedAtom = atom(false)

export const playerAtom = atom<{position: {x: number; y: number}; state: PlayerState}>({
  position: {x: 0, y: 0},
  state: {
    animationStatus: 'idle',
    direction: 'down',
  },
})

export const playerAnimationStatusAtom = selectAtom(
  playerAtom,
  (player) => player.state.animationStatus,
)

export const selectedVideoIndexAtom = atom<number | undefined>(undefined)
