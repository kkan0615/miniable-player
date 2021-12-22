import { ActionContext, ActionTree } from 'vuex'
import { RootState } from '@/store'
import { PlayerWindowMutations, PlayerWindowMutationTypes } from './mutations'
import { PlayerWindowState } from './state'
import useElectron from '@/mixins/useElectron'

const { ipcRenderer } = useElectron()

export enum PlayerWindowActionTypes {
  SET_IS_OPEN_NAVIGATOR = 'playerWindow/SET_IS_OPEN_NAVIGATOR',
  OPEN_SELECTOR_WINDOW = 'playerWindow/OPEN_SELECTOR_WINDOW',
  CLOSE_SELECTOR_WINDOW = 'playerWindow/CLOSE_SELECTOR_WINDOW',
}

export type AugmentedActionContext = {
  commit<K extends keyof PlayerWindowMutations>(
    key: K,
    payload: Parameters<PlayerWindowMutations[K]>[1]
  ): ReturnType<PlayerWindowMutations[K]>
} & Omit<ActionContext<PlayerWindowState, RootState>, 'commit'>

export interface PlayerWindowActions {
  [PlayerWindowActionTypes.SET_IS_OPEN_NAVIGATOR] (
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void
  [PlayerWindowActionTypes.OPEN_SELECTOR_WINDOW] (
      { commit }: AugmentedActionContext,
  ): void
  [PlayerWindowActionTypes.CLOSE_SELECTOR_WINDOW] (
      { commit }: AugmentedActionContext,
  ): void
}

export const playerWindowActions: ActionTree<PlayerWindowState, RootState> & PlayerWindowActions = {
  [PlayerWindowActionTypes.SET_IS_OPEN_NAVIGATOR] ({ commit }, payload) {
    if (payload) {
      // open
      ipcRenderer.send('open-player-window-navigator')
    } else {
      // close
      ipcRenderer.send('close-player-window-navigator')
    }
    commit(PlayerWindowMutationTypes.SET_IS_OPEN_NAVIGATOR, payload)
  },
  [PlayerWindowActionTypes.OPEN_SELECTOR_WINDOW] ({ commit }) {
    ipcRenderer.send('open-selector-window')
  },
  [PlayerWindowActionTypes.CLOSE_SELECTOR_WINDOW] ({ commit }) {
    ipcRenderer.send('close-selector-window')
  },
}
