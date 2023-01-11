import useBookingFormContext from "@src/store/context/useBookingFormContext"
import "./DoneStep.scss"

function DoneStep() {

  const selected = useBookingFormContext(s => s.selected)

  return (
    <div className="bf-done-step">
      <div className="bf-done-card">
        <p style={{ marginBottom: 0 }}>
          ${selected.service?.price}
        </p>
        <p>
          {selected.datetime?.format("DD/MM/YYYY HH:mm")}
        </p>
        <p style={{ marginBottom: 0 }}>
          {selected.service?.name}
        </p>
        <p>
          {selected.agent?.name}
        </p>
      </div>
      <div className="bf-done-card">
        <p>
          {selected.contact?.name}
        </p>
        <p>
          {selected.contact?.email}
        </p>
        <p>
          {selected.checkout?.paymentMethod}
        </p>
      </div>
    </div>
  )
}

export default DoneStep