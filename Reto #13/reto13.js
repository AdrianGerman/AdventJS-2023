function calculateTime(deliveries) {
  const limitTime = new Date("1970-01-01T07:00:00Z");
  let totalTime = 0;

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(":").map(Number);
    totalTime += hours * 3600 + minutes * 60 + seconds;
  }

  const remainingTimeInSeconds = totalTime - limitTime.getTime() / 1000;
  const sign = remainingTimeInSeconds >= 0 ? "" : "-";
  const remainingTime = new Date(Math.abs(remainingTimeInSeconds) * 1000)
    .toISOString()
    .substr(11, 8);

  return `${sign}${remainingTime}`;
}

// Ejemplos de uso:
console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"])); // '-02:20:00'
console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"])); // '00:30:00'
console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
