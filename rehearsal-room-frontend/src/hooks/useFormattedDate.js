// Give this hook a start timestamp and an end timestamp
// and it returns the date, the start time, and the end time.

export default function useFormattedDate (date) {
  const timestampToDate = (timestamp) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(timestamp)
    return dateObj.toLocaleDateString(undefined, options)
  }

  return [
    timestampToDate(date)
  ]
}

