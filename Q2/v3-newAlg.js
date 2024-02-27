function task2(S) {
  let statusObj = {};
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    let upper = S[i].toUpperCase();

    if (S.lastIndexOf(S[i]) < S.indexOf(upper) && !statusObj[upper]) {
      statusObj[upper] = true;
      count++;
    }
  }
  return count;
}

// function newTask2(S) {
//   let count = 0;

//   const uniqS = [...new Set(S.toLowerCase().split(""))];

//   for (let i = 0; i < uniqS.length; i++) {
//     let upper = uniqS[i].toUpperCase();

//     if (
//       S.includes(uniqS[i]) &&
//       S.includes(upper) &&
//       S.lastIndexOf(uniqS[i]) < S.indexOf(upper)
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

console.log(task2("ABCabc")); //0
console.log(task2("aabCAbcB")); //2
console.log(task2("abcABC")); //3
console.log(task2("aAaA")); //0
console.log(task2("aaAbcCABBc")); //2
console.log(task2("xyzXYZabcABC")); //6
console.log(task2("ABCabcAefG")); //0
console.log(task2("aAaa")); //0
