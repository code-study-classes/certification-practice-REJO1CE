function countUppercaseLetters(str) {
    const uppercaseLetters = str.match(/[A-Z]/g);
    
    if (uppercaseLetters === null) {
      return 0;
    }
    
    return uppercaseLetters.length
}
  module.exports = countUppercaseLetters;
  console.log(countUppercaseLetters('Hello, WORLD!'));
  