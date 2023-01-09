import "./BookingFormLayout.scss"

export interface BookingFormLayoutProps {
  services?: number[],
  agents?: number[]
}

function BookingFormLayout({ services, agents }: BookingFormLayoutProps) {

  return (
    <div className="booking-form-layout">
      <h3>Booking Form</h3>
      <p>
        {services
          ? `Services: ${JSON.stringify(services)}`
          : "All services"}
      </p>

      <p>
        {agents
          ? `Agents: ${JSON.stringify(agents)}`
          : "All agents"}
      </p>
    </div>
  )
}

export default BookingFormLayout
