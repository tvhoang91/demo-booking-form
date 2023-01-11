import useBookingFormContext from "@src/store/context/useBookingFormContext"
import "./ConfirmStep.scss"

function ConfirmStep() {

  const selected = useBookingFormContext(s => s.selected)
  const { navNext } = useBookingFormContext(s => s, () => true)

  function clickConfirm() {
    navNext()
  }

  return (
    <div className="bf-confirm-step">
      <div className="bf-confirm-card">
        <p>
          {selected.datetime?.format("DD/MM/YYYY HH:mm")}
        </p>
        <p style={{ marginBottom: 0 }}>
          {selected.service?.name}
        </p>
        <p>
          {selected.agent?.name}
        </p>

        <button
          onClick={() => clickConfirm()}
        >Confirm</button>
      </div>
    </div>
  )
}

export default ConfirmStep