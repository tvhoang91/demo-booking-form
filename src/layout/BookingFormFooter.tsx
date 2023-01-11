import "./BookingFormFooter.scss"

import useBookingFormContext from "@src/store/context/useBookingFormContext"
import BookingCart from "./footer/BookingCart"
import BookingHelp from "./footer/BookingHelp"

function BookingFormFooter() {

  const stepsState = useBookingFormContext(s => s.steps)

  return (
    <div className="bf-footer">
      <BookingCart />
      <span className="bf-footer-step-indicator">
        {stepsState.current + 1}/{stepsState.stepsOrdered.length}
      </span>
      <BookingHelp />
    </div>
  )
}

export default BookingFormFooter
