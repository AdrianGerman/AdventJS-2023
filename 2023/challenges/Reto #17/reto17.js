function optimizeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const currentInterval of intervals.slice(1)) {
    const lastMergedInterval = result[result.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

// Ejemplos de uso
console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ])
); // [[2, 8]]

console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
); // [[1, 6], [8, 10]]

console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
); // [[1, 2], [3, 4], [5, 6]]
