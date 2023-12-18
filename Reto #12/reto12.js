function checkIsValidCopy(original, copy) {
  let i = -1;
  let res = true;

  for (let o of [...original]) {
    i++;

    if (o.toLowerCase() == copy[i]) continue;

    let symbols = [o, o.toLowerCase(), "#", "+", ":", ".", " ", ""];

    res = [
      false,
      [false, true][
        +symbols
          .slice(
            (/([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
              .exec(o)
              ?.lastIndexOf(o) ?? 1) - 1
          )
          .includes(copy[i])
      ],
    ][+res];
  }

  return res;
}
