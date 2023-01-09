import BookingFormLayout from "./layout/BookingFormLayout"
import { BookingFormProps } from "./store/bookingFormStore"
import BookingFormContextProvider from "./store/context/BookingFormContextProvider"

function App(props: Partial<BookingFormProps>) {

  return (
    <BookingFormContextProvider {...props}>
      <BookingFormLayout />
    </BookingFormContextProvider>
  )
}

export default App
