export function Methods() {
  // Test([13, 215, 136, 54, 18, 0]);
  // reverseWords("The quick brown fox jumps over the lazy dog.");
  // getCount("abracadabra"); // 5
  // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"
  // findUniq([2, 1, 1, 1, 1, 1]); // 2
  // findUniq([0, 1, 0]); // 1
  // spinWords("Welcome"); // "emocleW";
  // spinWords("Hey fellow warriors"); // "Hey wollef sroirraw"
  // spinWords("This is a test"); // "This is a test"
  // spinWords("Just kidding there is still one more"); // "Just gniddik ereht is llits one more"
  // likes([]); // "no one likes this";
  // likes(["Peter"]); // "Peter likes this";
  // likes(["Max", "John", "Mark"]); // "Max, John and Mark like this";
  // likes(["Jacob", "Alex"]); // "Jacob and Alex like this";
  // likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this";
  // rowSumOddNumbers(42);
  // getMiddle("test"); // es
  // getMiddle("testing"); // t
  // findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
  // uniqueInOrder("AAAABBBCCDAABBB"); // ['A','B','C','D','A','B']
  // solution("camelCasingTest"); // "camel Casing Test";
  // arrayDiff([1, 2, 2], [1]); // [2, 2]
  // findMissingLetter(["a", "b", "c", "d", "f"]); // e
  // findMissingLetter(["O", "Q", "R", "S"]); // 'P'
  // solution("abcdef"); // ["ab", "cd", "ef"]
  // solution("abcdefg"); // ["ab", "cd", "ef", "g_"]
  // solution(""); // []
  // deleteNth([20, 37, 20, 21], 1); // [20,37,21]
  // deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); // [1, 1, 3, 3, 7, 2, 2, 2]
  order("is2 Thi1s T4est 3a"); // "Thi1s is2 3a T4est"
  order("4of Fo1r pe6ople g3ood th5e the2"); // "Fo1r the2 g3ood 4of th5e pe6ople"

  return <div>Methods</div>;
}

function order(words) {}

// function deleteNth(arr, n) {
//   let result = [];
//   for (let num of arr) {
//     if (!result.includes(num)) {
//       result.push(num);
//     } else {
//       const repeate = result.filter((el) => el === num);
//       if (repeate.length < n) {
//         result.push(num);
//       }
//     }
//   }
//   return result;
// }

// function solution(str) {
//   if (str.length === 0) {
//     return [];
//   }
//   const arr = [];
//   let tempStr = "";
//   let count = 0;
//   if (str.length % 2 === 0) {
//     for (let w of str) {
//       tempStr += w;
//       if (tempStr.length === 2) {
//         arr.push(tempStr);
//         tempStr = "";
//       }
//     }
//   } else {
//     for (let w of str) {
//       tempStr += w;
//       count += 1;
//       if (tempStr.length === 2) {
//         arr.push(tempStr);
//         tempStr = "";
//       }
//       if (count === str.length) {
//         arr.push(tempStr + "_");
//         tempStr = "";
//       }
//     }
//   }
//   return arr;
// }

// function findMissingLetter(array) {
//   let result = "";
//   array
//     .map((el) => el.charCodeAt(0))
//     .reduce((acc, n, _, arr) => {
//       if (n === arr[arr.length - 1]) {
//         return acc;
//       }
//       if (n + 1 !== arr[acc]) {
//         result = n + 1;
//         return (acc += 1);
//       }
//       return (acc += 1);
//     }, 1);

//   return String.fromCharCode(result);
// }

// function arrayDiff(a, b) {
//   if (a.length === 0 || b.length === 0) {
//     return [];
//   }
//   const res = [];
//   a.forEach((el) => {
//     if (!b.includes(el)) {
//       res.push(el);
//     }
//   });
//   return res;
// }

// function solution(string) {
//   if (string.length === 0) {
//     return string;
//   }
//   let result = "";
//   for (let word of string) {
//     if (word === word.toLowerCase()) {
//       result = result + word;
//     } else {
//       result = result + " " + word;
//     }
//   }
//   return result;
// }

// function uniqueInOrder(iterable) {
//   const arrUnq = [];
//   let arr = "";
//   for (let s of iterable) {
//     if (arr !== s) {
//       arr = s;
//       arrUnq.push(s);
//     }
//   }
//   return arrUnq;
// }

// function findOdd(A) {
//   const arr = [...A];
//   let result = null;
//   A.forEach(() => {
//     const n = arr.shift();
//     const countRepeateNumber = A.filter((it) => it === n);
//     if (countRepeateNumber.length % 2 !== 0) {
//       result = countRepeateNumber[0];
//     }
//   });

//   return result;
// }

// function getMiddle(s) {
//   const length = s.length;
//   if (length % 2 === 0) {
//     const word = s[s.length / 2 - 1] + s[s.length / 2];
//     console.log(word);
//     return word;
//   }
//   const word = s[Math.ceil(length / 2 - 1)];
//   return word;
// }

// function rowSumOddNumbers(n) {
//   const arrWithAllNumbers = [];
//   const arrWithObjectsSteps = [];
//   for (let i = 1; i < 10000; i += 1) {
//     if (i % 2 !== 0) {
//       arrWithAllNumbers.push(i);
//     }
//   }
//   arrWithAllNumbers.forEach((n, index, array) => {
//     const number = array.splice(0, index);
//     if (number.length > 0) {
//       arrWithObjectsSteps.push({
//         number,
//       });
//     }
//   });
//   const result = arrWithObjectsSteps.at(n - 1).number.reduce((acc, num) => {
//     return (acc += num);
//   }, 0);
//   // console.log(n * n * n); // correct
//   return result;
// }

// function likes(names) {
//   const length = names.length;
//   switch (length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//   }
// }

// function spinWords(string) {
//   let changedStr = "";
//   const arrayWithWords = string.split(" ");
//   for (let word of arrayWithWords) {
//     if (word.length >= 5) {
//       const reversedWord = reverseWords(word);
//       changedStr = changedStr + " " + reversedWord;
//       continue;
//     }
//     changedStr = changedStr + " " + word;
//   }
//   console.log(changedStr);
//   return changedStr.trim();
// }

// function findUniq(arr) {
//   const element = arr.shift();
//   let result;
//   result = arr.filter((el) => el === element);
//   if (result.length === 0) {
//     return element;
//   }
//   result = arr.filter((elem) => elem !== element);
//   return result[0];
// }

// function reverseWords(str) {
//   let reversedWord = "";
//   let reversedStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       reversedWord = str[i] + reversedWord;
//     } else {
//       reversedStr += reversedWord + " ";
//       reversedWord = "";
//     }
//   }
//   // console.log(reversedWord);
//   return reversedWord;
//   // console.log(reversedStr + reversedWord);
//   // return reversedStr + reversedWord;
// }

// function createPhoneNumber(numbers) {
//   const copiArr = numbers;
//   const code = copiArr.slice(0, 3).join("");
//   const number = copiArr.slice(3, 6).join("");
//   return console.log(`(${code}) ${number}-${copiArr.slice(6, 10).join("")}`);
// }
