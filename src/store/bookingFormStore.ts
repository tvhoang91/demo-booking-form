import { createStore } from 'zustand'

export interface BookingFormProps {
  context: {
    services?: number[],
    agents?: number[]
  }

  selected: {
    service: number | null,
    agent: number | null
  }
}

const DEFAULT_PROPS: BookingFormProps = {
  context: {},

  selected: {
    service: null,
    agent: null
  }
}

export interface BookingFormState extends BookingFormProps {
  selectService: (service: number) => void
  unselectService: () => void

  selectAgent: (agent: number) => void
  unselectAgent: () => void
}

export type BookingFormStore = ReturnType<typeof createBookingFormStore>

const createBookingFormStore = (initProps?: Partial<BookingFormProps>) => {
  return createStore<BookingFormState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,

    selectService: (service) => { },
    unselectService: () => { },

    selectAgent: (agent) => { },
    unselectAgent: () => { }
  }))
}

export default createBookingFormStore