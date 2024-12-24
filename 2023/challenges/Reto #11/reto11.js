function getIndexsForPalindrome(word) {
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  if (isPalindrome(word)) {
    return [];
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const modifiedWord =
        word.substring(0, i) +
        word[j] +
        word.substring(i + 1, j) +
        word[i] +
        word.substring(j + 1);
      if (isPalindrome(modifiedWord)) {
        return [i, j];
      }
    }
  }

  return null;
}

// Ejemplos de uso
console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
