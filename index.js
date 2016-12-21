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

// doesn't work with large numbers (e.g. more than 7000)
// function generateNumbers (current = 0, max = 7000, accumulator = []) {
//   const newAccumulator = [...accumulator, current];
//   if(current >= max) {return accumulator; }
//   return generateNumbers(current + 1, max, newAccumulator);
// }

// starting at 1 because we don't account leading 0
// this works but is pretty slow with 10e6
function generateNumbers (current = 1, max = 10) {
  const accumulator = [];
  while (current < max) {
    current++;
    if(isPalindrom(toDecStr(current)) && isPalindrom(toBinStr(current))) {
      accumulator.push(current);
    }
  }

  return accumulator;
}

// test for a second implementation
// TODO: separate the main iteration to multiple, smaller ones

// const from1to10e5 = generateNumbers(1, 10e5);
// const from10e5to20e5 = generateNumbers(10e5, 20e5);
// const from20e5to30e5 = generateNumbers(20e5, 30e5);

// function pumpIt () {
//   for(let i = 0; i < 10, i++) {

//   }
// }

// idea for a third implementation: try with a decreasing for loop