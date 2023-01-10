import { BookingFormState } from "../bookingFormStore"
import { StateCreator } from "zustand"

export interface SelectData {
  selected: {
    service: number | null,
    agent: number | null
  }
}

export interface SelectSlice extends SelectData {
  selectService: (service: number) => void
  unselectService: () => void

  selectAgent: (agent: number) => void
  unselectAgent: () => void
}

export const createSelectSlice: StateCreator<BookingFormState, [["zustand/immer", never]], [], SelectSlice> = (set) => ({
  ...DEFAULT_DATA,

  selectService: (service) => set(state => state.selected.service = service),
  unselectService: () => set(state => state.selected.service = null),

  selectAgent: (agent) => set(state => state.selected.agent = agent),
  unselectAgent: () => set(state => state.selected.agent = null),
})

const DEFAULT_DATA: SelectData = {
  selected: {
    service: null,
    agent: null
  }
}