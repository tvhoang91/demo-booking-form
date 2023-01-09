import { useContext } from 'react'
import { useStore } from 'zustand'
import { BookingFormState } from '../bookingFormStore'
import BookingFormContext from './BookingFormContext'

function useBookingFormContext<T>(
  selector: (state: BookingFormState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(BookingFormContext)
  if (!store) throw new Error('Missing BookingFormContext.Provider in the tree')
  return useStore(store, selector, equalityFn)
}

export default useBookingFormContext
