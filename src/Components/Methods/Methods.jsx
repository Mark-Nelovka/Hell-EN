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
  return <div>Methods</div>;
}

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
