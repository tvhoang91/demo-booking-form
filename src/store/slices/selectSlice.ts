import { BookingFormState } from "../bookingFormStore"
import { StateCreator } from "zustand"
import { Dayjs } from "dayjs"
import { ServiceModel } from "@src/data/services/service.model"
import { AgentModel } from "@src/data/agents/agent.model"

export interface SelectData {
  selected: {
    service: ServiceModel | null,
    agent: AgentModel | null,
    datetime: Dayjs | null,

    contact: {
      name: string,
      email: string,
    } | null,

    checkout: {
      paymentMethod: "stripe" | "later",
      cardId: string,
    } | null,
  }
}

export interface SelectSlice extends SelectData {
  selectService: (service: ServiceModel) => void
  unselectService: () => void

  selectAgent: (agent: AgentModel) => void
  unselectAgent: () => void

  selectDatetime: (datetime: Dayjs) => void
  unselectDatetime: () => void

  enterContact: (name: string, email: string) => void

  selectPaymentMethod: (paymentMethod: "stripe" | "later", cardId: string) => void
}

export const createSelectSlice: StateCreator<BookingFormState, [["zustand/immer", never]], [], SelectSlice> = (set) => ({
  ...DEFAULT_DATA,

  selectService: (service) => set(state => state.selected.service = service),
  unselectService: () => set(state => state.selected.service = null),

  selectAgent: (agent) => set(state => state.selected.agent = agent),
  unselectAgent: () => set(state => state.selected.agent = null),

  selectDatetime: (datetime) => set(state => state.selected.datetime = datetime),
  unselectDatetime: () => set(state => state.selected.datetime = null),

  enterContact: (name, email) => set(state => state.selected.contact = { name, email }),

  selectPaymentMethod: (paymentMethod, cardId) => set(state => state.selected.checkout = { paymentMethod, cardId }),
})

const DEFAULT_DATA: SelectData = {
  selected: {
    service: null,
    agent: null,
    datetime: null,

    contact: null,

    checkout: null,
  }
}