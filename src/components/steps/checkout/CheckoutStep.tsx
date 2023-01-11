import useBookingFormContext from "@src/store/context/useBookingFormContext"
import { FormEvent, useState } from "react"
import "./CheckoutStep.scss"

function CheckoutStep() {

  const selected = useBookingFormContext(s => s.selected)
  const { selectPaymentMethod, navNext } = useBookingFormContext(s => s, () => true)

  const [paymentMethod, setPaymentMethod] = useState(selected.checkout?.paymentMethod || 'stripe')
  const [cardId, setCardId] = useState(selected.checkout?.cardId || "")

  function submitCheckoutForm(e: FormEvent) {
    e.preventDefault()

    selectPaymentMethod(paymentMethod!, cardId)
    navNext()
  }

  return (
    <div className="bf-checkout-step">
      <form onSubmit={submitCheckoutForm}>
        <div className="bf-checkout-card">
          <p>
            $
            {selected.service?.price}
          </p>
          <label>Payment Method:</label>
          <select
            required
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value as any)}
          >
            <option value="stripe">Stripe</option>
            <option value="later">Later</option>
          </select>

          <label>Card ID:</label>
          <input
            required
            pattern="[0-9]*"
            value={cardId}
            onChange={e => setCardId(e.target.value)}
          />

          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutStep