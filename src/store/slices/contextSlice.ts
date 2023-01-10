import { BookingFormState } from "../bookingFormStore"
import { StateCreator } from "zustand"

export interface ContextProps {
  context: {
    services?: number[],
    agents?: number[]
  }
}

export interface ContextSlice extends ContextProps {
}

export const createContextSlice: StateCreator<BookingFormState, [["zustand/immer", never]], [], ContextSlice> = (set) => ({
  ...DEFAULT_DATA,
})

const DEFAULT_DATA: ContextSlice = {
  context: {},
}