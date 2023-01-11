import "./ContactStep.scss"
import useBookingFormContext from "@src/store/context/useBookingFormContext"
import { FormEvent, useState } from "react"

function ContactStep() {

  const selected = useBookingFormContext(s => s.selected)
  const { enterContact, navNext } = useBookingFormContext(s => s, () => true)

  const [name, setName] = useState(selected.contact?.name || "")
  const [email, setEmail] = useState(selected.contact?.email || "")

  function submitContactForm(e: FormEvent) {
    e.preventDefault()

    enterContact(name, email)
    navNext()
  }

  return (
    <div className="bf-contact-step">
      <form onSubmit={submitContactForm}>
        <div className="bf-contact-card">
          <label>Name:</label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default ContactStep