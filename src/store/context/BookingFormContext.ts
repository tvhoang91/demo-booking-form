import { createContext } from 'react'
import { BookingFormStore } from '../bookingFormStore'

const BookingFormContext = createContext<BookingFormStore | null>(null)

export default BookingFormContext