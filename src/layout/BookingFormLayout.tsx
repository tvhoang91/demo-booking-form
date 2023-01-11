import useBookingFormContext from "@src/store/context/useBookingFormContext"
import BookingFormContent from "./BookingFormContent"
import BookingFormFooter from "./BookingFormFooter"
import BookingFormHeader from "./BookingFormHeader"
import "./BookingFormLayout.scss"

function BookingFormLayout() {

  return (
    <div className="bf-layout">
      <BookingFormHeader />

      <BookingFormContent />

      <BookingFormFooter />
    </div>
  )
}

export default BookingFormLayout
