import { useRef } from 'react'
import BookingFormContext from './BookingFormContext'
import createBookingFormStore, { BookingFormProps, BookingFormStore } from '../bookingFormStore'

type FormProviderProps = React.PropsWithChildren<Partial<BookingFormProps>>

function BookingFormContextProvider({ children, ...props }: FormProviderProps) {
  const storeRef = useRef<BookingFormStore>()
  if (!storeRef.current) {
    storeRef.current = createBookingFormStore(props)
  }

  return (
    <BookingFormContext.Provider value={storeRef.current}>
      {children}
    </BookingFormContext.Provider>
  )
}

export default BookingFormContextProvider