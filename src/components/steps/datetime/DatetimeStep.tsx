import useBookingFormContext from "@src/store/context/useBookingFormContext"
import "./DatetimeStep.scss"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"

function DatetimeStep() {

  const { selectDatetime, navNext } = useBookingFormContext(s => s, () => true)

  const selected = useBookingFormContext(s => s.selected)
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [selectedTime, setSelectedTime] = useState<number | null>(null)

  const start = selected.agent?.workHour.start || 0
  const end = selected.agent?.workHour.end || 23
  const timeList = Array(24).fill(0).map((_, i) => i)
    .filter((i) => i >= start && i <= end)

  function clickConfirm() {
    if (selectedDate === null || selectedTime === null) return

    const datetime = selectedDate.set('hour', selectedTime).set('minute', 0).set('second', 0)
    selectDatetime(datetime)
    navNext()
  }

  return (
    <div className="bf-datetime-step">
      <div className="bf-date-selector">
        {dateList.map((date) => (
          <div key={date.format('YYYY-MM-DD')}
            className={date === selectedDate ? 'bf-date-card selected' : 'bf-date-card'}
            onClick={() => setSelectedDate(date)}
          >
            {date.format('ddd DD')}
          </div>
        ))}
      </div>

      <div className="bf-time-selector">
        {timeList.map((hour) => (
          <div key={hour}
            className={hour === selectedTime ? 'bf-time-card selected' : 'bf-time-card'}
            onClick={() => setSelectedTime(hour)}
          >
            {`${hour}h`}
          </div>
        ))}
      </div>

      <div className="bf-datetime-summary">
        <p>
          {selectedTime === null ? "~~" : `${selectedTime}h`}
          &nbsp;&nbsp;&nbsp;
          {selectedDate === null ? "~~" : selectedDate.format("DD/MM/YYYY")}
        </p>
        <button
          disabled={selectedDate === null || selectedTime === null}
          onClick={() => clickConfirm()}
        >Confirm</button>
      </div>
    </div>
  )
}

const dateList = Array(7).fill(0).map((_, i) => {
  return dayjs().add(i + 1, 'day')
})

export default DatetimeStep