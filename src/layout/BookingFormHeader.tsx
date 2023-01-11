import "./BookingFormHeader.scss"

import useBookingFormSteps from "@src/store/hooks/useBookingFormSteps"
import useBookingFormContext from "@src/store/context/useBookingFormContext"

function BookingFormHeader() {

  const { currentStepModel, canNavPrev, navPrevHandler } = useBookingFormSteps()
  const { resetForm } = useBookingFormContext(s => s, () => true)

  return (
    <div className="bf-header">
      <div className="bf-back-btn-wrapper">
        {canNavPrev
          ? <button onClick={() => navPrevHandler()}>Back</button>
          : null}
      </div>
      <h3 className="bf-header-title">{currentStepModel.title}</h3>
      <div className="bf-reset-btn-wrapper">
        <button onClick={() => resetForm()}>X</button>
      </div>
    </div>
  )
}

export default BookingFormHeader
