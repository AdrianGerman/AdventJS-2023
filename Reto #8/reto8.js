function organizeGifts(gifts) {
  const giftArray = gifts.match(/\d+[a-z]/g);

  if (!giftArray) {
    return "";
  }

  const result = giftArray.map((gift) => {
    const quantity = parseInt(gift);
    const type = gift[gift.length - 1];

    const pallets = Math.floor(quantity / 50);
    const remainingCakes = Math.floor((quantity % 50) / 10);
    const remainingGifts = quantity % 10;

    const palletString = pallets > 0 ? `[${type}]`.repeat(pallets) : "";
    const cakeString =
      remainingCakes > 0 ? `{${type}}`.repeat(remainingCakes) : "";
    const remainingGiftString =
      remainingGifts > 0 ? `(${type.repeat(remainingGifts)})` : "";

    return palletString + cakeString + remainingGiftString;
  });

  return result.join("");
}

// Ejemplo de uso
const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
