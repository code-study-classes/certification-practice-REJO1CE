function countUppercaseLetters(str) {
  const uppercaseLetters = str.match(/[A-Z]/g);

  if (uppercaseLetters === null) {
    return 0;
  }

  return uppercaseLetters.length;
}
module.exports = countUppercaseLetters;
console.log(countUppercaseLetters('Hello, WORLD!'));

function combineStrings(N1, N2, S1, S2) {
  const firstPart = S1.slice(0, N1);
  const secondPart = S2.slice(-N2);
  return firstPart + secondPart;
}

function containsSubstring(S, S0) {
  return S.includes(S0);
}

console.log(containsSubstring('Hello, World!', 'World'));
console.log(containsSubstring('JavaScript', 'CSS'));
console.log(containsSubstring('Programming is fun', 'gram'));
console.log(containsSubstring('OpenAI', 'AI'));
