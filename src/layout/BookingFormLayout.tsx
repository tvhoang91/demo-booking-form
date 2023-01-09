import useBookingFormContext from "@src/store/context/useBookingFormContext"
import "./BookingFormLayout.scss"

function BookingFormLayout() {

  const context = useBookingFormContext(s => s.context)

  return (
    <div className="booking-form-layout">
      <h3>Booking Form</h3>

      <p>
        {context.services
          ? `Services: ${JSON.stringify(context.services)}`
          : "All services"}
      </p>

      <p>
        {context.agents
          ? `Agents: ${JSON.stringify(context.agents)}`
          : "All agents"}
      </p>
    </div>
  )
}

export default BookingFormLayout
