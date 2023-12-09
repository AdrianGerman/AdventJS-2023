function findFirstRepeated(gifts) {
  const map = [];

  for (const num of gifts) {
    if (map.includes(num)) return num;
    map.push(num);
  }

  return -1;
}
