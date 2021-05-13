export default function useReadableTimes (start, end) {
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
    timestampToDate(start),
    timestampToTime(start),
    timestampToTime(end)
  ]
}

