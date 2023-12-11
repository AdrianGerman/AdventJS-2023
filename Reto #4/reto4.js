function decode(message) {
  const match = message.match(/\(([^()]+)\)/);

  if (!match) return message;

  const sanitized = match[0].slice(1, -1).split("").reverse().join("");
  const result = message.replaceAll(match[0], sanitized);

  const algito = decode(result);

  return algito;
}
