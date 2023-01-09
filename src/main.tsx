import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BookingFormLayout, { BookingFormLayoutProps } from './layout/BookingFormLayout'

const bookingformRoots = document.querySelectorAll('.bookingform')

bookingformRoots.forEach((root) => {
  const dataset = (root as HTMLElement).dataset
  const formProps: BookingFormLayoutProps = {}
  if (dataset && dataset.services) {
    formProps.services = dataset.services.split(',').map((s) => parseInt(s))
  }
  if (dataset && dataset.agents) {
    formProps.agents = dataset.agents.split(',').map((s) => parseInt(s))
  }

  ReactDOM.createRoot(root as HTMLElement).render(
    <React.StrictMode>
      <BookingFormLayout {...formProps} />
    </React.StrictMode>,
  )
})
