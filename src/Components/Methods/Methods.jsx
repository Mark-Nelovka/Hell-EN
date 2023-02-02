export function Methods() {
  // Test([13, 215, 136, 54, 18, 0]);
  // reverseWords("The quick brown fox jumps over the lazy dog.");
  // getCount("abracadabra"); // 5
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

  return <div>Methods</div>;
}

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
//   console.log(reversedStr + reversedWord);
//   return reversedStr + reversedWord;
// }

function createPhoneNumber(numbers) {
  const copiArr = numbers;
  const code = copiArr.slice(0, 3).join("");
  const number = copiArr.slice(3, 6).join("");
  return console.log(`(${code}) ${number}-${copiArr.slice(6, 10).join("")}`);
}
