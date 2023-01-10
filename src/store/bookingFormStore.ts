import { createStore } from 'zustand'
import { immer } from "zustand/middleware/immer"

import { ContextProps, ContextSlice, createContextSlice } from './slices/contextSlice'
import { SelectSlice, createSelectSlice } from './slices/selectSlice'
import { StepsSlice, createStepsSlice } from './slices/stepsSlice'

export interface BookingFormProps extends ContextProps {
}

export type BookingFormState = ContextSlice & SelectSlice & StepsSlice

export type BookingFormStore = ReturnType<typeof createBookingFormStore>

const createBookingFormStore = (initProps?: Partial<BookingFormProps>) => {
  return createStore<BookingFormState>()(
    immer(
      (...params) => ({
        ...createContextSlice(...params),
        ...createSelectSlice(...params),
        ...createStepsSlice(...params),
        ...initProps
      }),
    )
  )
}

export default createBookingFormStore