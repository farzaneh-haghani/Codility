function task2(S) {
  let letArr = S.split("");
  let low = S.toLowerCase();
  let lowArr = low.split("");

  let count = [];
  let flag = [];
  for (let i = 0; i < S.length; i++) {
    if (letArr[i] !== lowArr[i]) {
      let j = i + 1;
      while (letArr[j] !== lowArr[i] && j < letArr.length) {
        j++;
      }
      if (
        j === letArr.length &&
        !flag.includes(letArr[i]) && //AaA it ignored the first one but should be invalid
        !count.includes(letArr[i]) && // aAA no repeat
        lowArr.indexOf(lowArr[i]) !== i //G no small before that
      ) {
        count.push(letArr[i]);
      } else {
        flag.push(letArr[i]);
      }
    }
  }
  return count.length;
}

console.log(task2("ABCabc")); //0
console.log(task2("aabCAbcB")); //2
console.log(task2("abcABC")); //3
console.log(task2("aAaA")); //0
console.log(task2("aaAbcCABBc")); //2
console.log(task2("xyzXYZabcABC")); //6
console.log(task2("ABCabcAefG")); //0
