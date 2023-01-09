import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BookingFormProps } from './store/bookingFormStore'

const bookingformRoots = document.querySelectorAll('.bookingform')

bookingformRoots.forEach((root) => {
  const dataset = (root as HTMLElement).dataset
  const formProps: Partial<BookingFormProps> = { context: {} }
  if (dataset && dataset.services) {
    formProps.context!.services = dataset.services.split(',').map((s) => parseInt(s))
  }
  if (dataset && dataset.agents) {
    formProps.context!.agents = dataset.agents.split(',').map((s) => parseInt(s))
  }

  ReactDOM.createRoot(root as HTMLElement).render(
    <React.StrictMode>
      <App {...formProps} />
    </React.StrictMode>,
  )
})
