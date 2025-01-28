"use strict";

function test() {
  let x = 10;

  while (x > 5) {
    x--;
    console.log(x);
  }

  return x;
}
console.log(test(15));

function getShortWords(words, maxLength) {
  let results = [];

  for (const word of words) {
    if (word.length <= maxLength) {
      results.push(word);
    }
  }

  return results;
}

const text = 'one two three four five';
const words = text.split(' ');

console.log(
    getShortWords(words, 4)
);

function getWordsLengths(words) {
  const result = [];

  for (const word of words) {
    result.push(word.length);
  }

  return result;
}

// отримаємо [3, 3, 5, 4, 4]
getWordsLengths(['one', 'two', 'three', 'four', 'five']);

 let x = 1234567891011121314125;
 console.log (isFinite(x));

 let namb = x;
 console.log(Math.round(123.8));//124 округлює до найблищого 1 або 5
console.log(Math.floor(123.8));//123 округлює вниз
console.log(Math.ceil(123.8));//124 округлює вгору
console.log(Math.trunc(123.8));//123 відкидає дробову частину



function getRandomNumber(min, max) {
  return min + Math.random() * (max - min);
}
for (let i = 1; i <= 10; i++) {
  const x = getRandomNumber(2, 7);
  console.log(x);
}/*2.228885804102813
3.596054577159729
6.754735029989
4.187785400941557
6.563355694612579
3.4338170383275264
6.161044633424066
3.830128286541238
3.7497150999943223
4.379547054763082*/
function getRandomNumbers(min, max) {
  return Math.floor(
      min + Math.random() * (max + 1 - min)
  );
}
for (let i = 1; i <= 10; i++) {
  const x = getRandomNumbers(2, 7);
  console.log(x);
}
/*
5
4
2
2
2
6
2
2
5
6
 */
const m = 4;
let sum = 0;



for(let i = 1; i <= m; i++) {
  sum +=i;
}

console.log(sum);



function splitString(str) {
  let result = [];

  let splitStr = str.length % 2 === 0 ? str : str + '_';

  for (let i = 0; i < splitStr.length; i += 2) {

    result.push(splitStr[i] + splitStr[i + 1]);

  }

  return result;

}
console.log(splitString('abc'));

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;

  }
  console.log(i);
}

debugger
let n =1234;
let i = 0;
for(;Number.isInteger(n); i++) {
  n /=2;
}
console.log(i-1);


const title ='Mate academy';
console.log(title);
console.log(title [0]);
console.log(title.length);
console.log(title.replace('_',','));
console.log(title.split(','));
console.log(title.split('').reverse().join(''));