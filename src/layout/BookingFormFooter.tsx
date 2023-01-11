import "./BookingFormFooter.scss"

import useBookingFormContext from "@src/store/context/useBookingFormContext"

function BookingFormFooter() {

  const stepsState = useBookingFormContext(s => s.steps)

  return (
    <div className="bf-footer">
      {stepsState.current + 1}/{stepsState.stepsOrdered.length}
    </div>
  )
}

export default BookingFormFooter
