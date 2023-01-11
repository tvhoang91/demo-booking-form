import "./BookingFormHeader.scss"

import useBookingFormSteps from "@src/store/hooks/useBookingFormSteps"
import { useCallback, useMemo } from "react"
import ServiceStep from "@src/components/ServiceStep"

function BookingFormContent() {

  const { currentStepModel } = useBookingFormSteps()
  const renderContent = useCallback(() => {
    switch (currentStepModel.id) {
      case "service":
        return <ServiceStep />
      case "agent":
      case "datetime":
      case "confirm":
      case "contact":
      case "checkout":
      case "done":
        return <div>Coming soon</div>
    }
  }, [currentStepModel.id])

  return (
    <div className="bf-content-wrapper">
      {renderContent()}
    </div>
  )
}

export default BookingFormContent
