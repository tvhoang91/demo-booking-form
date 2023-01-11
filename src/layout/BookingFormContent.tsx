import "./BookingFormHeader.scss"

import useBookingFormSteps from "@src/store/hooks/useBookingFormSteps"
import { useCallback } from "react"
import ServiceStep from "@src/components/steps/service/ServiceStep"
import DoneStep from "@src/components/steps/done/DoneStep"
import CheckoutStep from "@src/components/steps/checkout/CheckoutStep"
import ContactStep from "@src/components/steps/contact/ContactStep"
import ConfirmStep from "@src/components/steps/confirm/ConfirmStep"
import DatetimeStep from "@src/components/steps/datetime/DatetimeStep"
import AgentStep from "@src/components/steps/agent/AgentStep"

function BookingFormContent() {

  const { currentStepModel } = useBookingFormSteps()
  const renderContent = useCallback(() => {
    switch (currentStepModel.id) {
      case "service":
        return <ServiceStep />
      case "agent":
        return <AgentStep />
      case "datetime":
        return <DatetimeStep />
      case "confirm":
        return <ConfirmStep />
      case "contact":
        return <ContactStep />
      case "checkout":
        return <CheckoutStep />
      case "done":
        return <DoneStep />
    }
  }, [currentStepModel.id])

  return (
    <div className="bf-content-wrapper">
      {renderContent()}
    </div>
  )
}

export default BookingFormContent
