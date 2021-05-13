// Give this hook a start timestamp and an end timestamp
// and it returns the date, the start time, and the end time.

export default function useFormattedDate (start, end) {
  const timestampToDate = (timestamp) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(timestamp)
    return dateObj.toLocaleDateString(undefined, options)
  }

  const timestampToTime = (timestamp) => {
    const dateObj = new Date(timestamp)
    return dateObj.toLocaleTimeString()
  }

  return [
    timestampToDate(start)
  ]
}

