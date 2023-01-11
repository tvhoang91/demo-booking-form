import { BookingFormState } from "../bookingFormStore"
import { StateCreator } from "zustand"
import { StepId, STEP_ID_ORDERED } from "@src/data/steps/step.model"

export interface StepsData {
  steps: {
    current: number
    stepsOrdered: StepId[]
  }
}

export interface StepsSlice extends StepsData {
  navNext: () => void
  navPrev: () => void
}

export const createStepsSlice: StateCreator<BookingFormState, [["zustand/immer", never]], [], StepsSlice> = (set) => ({
  ...DEFAULT_DATA,

  navNext: () => set(state => { state.steps.current++ }),
  navPrev: () => set(state => { state.steps.current-- }),
})

const DEFAULT_DATA: StepsData = {
  steps: {
    current: 0,
    stepsOrdered: STEP_ID_ORDERED
  },
}