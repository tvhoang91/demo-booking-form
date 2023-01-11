import useBookingFormContext from "@src/store/context/useBookingFormContext";

function BookingHelp() {

  const stepsState = useBookingFormContext(s => s.steps)

  return (
    <div className="bf-help-btn-wrapper">
      <button>
        ?
        {stepsState.current + 1}
      </button>
    </div>
  )
}

export default BookingHelp