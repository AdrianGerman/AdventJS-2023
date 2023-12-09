function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...new Set(gift)].every((char) => materials.includes(char))
  );
}
