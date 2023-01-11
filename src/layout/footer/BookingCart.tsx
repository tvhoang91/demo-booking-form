import useBookingFormContext from "@src/store/context/useBookingFormContext"

function BookingCart() {

  const selectedService = useBookingFormContext(s => s.selected.service)

  return (
    <div className="bf-cart-btn-wrapper">
      <button>
        $
        {selectedService?.price}
      </button>
    </div>
  )
}

export default BookingCart