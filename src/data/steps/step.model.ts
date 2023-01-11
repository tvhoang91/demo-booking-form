export type StepModel = {
  id: StepId
  title: string
}

export type StepId = "service" | "agent" | "datetime" | "confirm" | "contact" | "checkout" | "done"

export const SERVICE_STEP: StepModel = {
  id: "service",
  title: "Select Service",
}

export const AGENT_STEP: StepModel = {
  id: "agent",
  title: "Select Agent",
}

export const DATETIME_STEP: StepModel = {
  id: "datetime",
  title: "Select Date & Time",
}

export const CONFIRM_STEP: StepModel = {
  id: "confirm",
  title: "Confirm Booking",
}

export const CONTACT_STEP: StepModel = {
  id: "contact",
  title: "Enter Contact Info",
}

export const CHECKOUT_STEP: StepModel = {
  id: "checkout",
  title: "Checkout",
}

export const DONE_STEP: StepModel = {
  id: "done",
  title: "Done",
}

export function getStep(id: StepId): StepModel {
  switch (id) {
    case "service":
      return SERVICE_STEP
    case "agent":
      return AGENT_STEP
    case "datetime":
      return DATETIME_STEP
    case "confirm":
      return CONFIRM_STEP
    case "contact":
      return CONTACT_STEP
    case "checkout":
      return CHECKOUT_STEP
    case "done":
      return DONE_STEP
  }
}