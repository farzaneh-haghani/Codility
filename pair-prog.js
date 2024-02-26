//["axbcfssfg","axzsdsfaf","bc"] ""

// function test(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[0] = find(arr[i], arr[i + 1]);
//   }
//   return arr[0];
// }

// function find(s1, s2) {
//   const length = s1 < s2 ? s1.length : s2.length;
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     if (s1[i] === s2[i]) {
//       result += s1[i];
//     }
//   }
//   return result;
// }

function test(arr) {
  if (!arr.length || !arr[0].length) {
    return "";
  }
  let common = arr[0][0];
  let result = "";
  let j = 0;
  let i = 1;

  while (arr[i][j] === common) {
    if (i < arr.length - 1) {
      i++;
    } else {
      result += common;
      j++;
      if (arr[0][j]) {
        common = arr[0][j];
        i = 1;
      }
    }
  }
  return result;
}

console.log(test(["axbc", "axz", "axbc"]));
console.log(test(["abc", "abc", "abc"]));
console.log(test([]));
