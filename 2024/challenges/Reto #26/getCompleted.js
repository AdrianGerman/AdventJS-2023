// --- code
function getCompleted(timeWorked, totalTime) {
  const toSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number)
    return hours * 3600 + minutes * 60 + seconds
  }

  const workedSeconds = toSeconds(timeWorked)
  const totalSeconds = toSeconds(totalTime)

  const percentage = Math.round((workedSeconds / totalSeconds) * 100)
  return `${percentage}%`
}
// ---

// example
getCompleted("01:00:00", "03:00:00") // 33%
getCompleted("02:00:00", "04:00:00") // 50%
getCompleted("01:00:00", "01:00:00") // 100%
getCompleted("00:10:00", "01:00:00") // 17%
getCompleted("01:10:10", "03:30:30") // 33%
getCompleted("03:30:30", "05:50:50") // 60%
