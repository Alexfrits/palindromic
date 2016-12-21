function stringify (radix) {
  return number => {
    return (number).toString(radix);
  }
}

function reverseStr (str) {
  return str.split('').reverse().join('');
}

const toDecStr = stringify(10);
const toBinStr = stringify(2);


function isPalindrom (str) {
  const reversed = reverseStr(str);
  const reversedRegEx = new RegExp(reversed, 'i');
  return reversedRegEx.test(str);
}

function generateNumbers (initialNum = 0, max = 10, accumulator) {
  if(initialNum >= max) {return accumulator; }
  return generateNumbers(initialNum + 1, max, accumulator);
}