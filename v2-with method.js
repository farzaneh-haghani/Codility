function task2(S) {
  let statusObj = {};
  let result = [];

  for (let i = 0; i < S.length; i++) {
    const upper = S[i].toUpperCase();
    const lower = S[i].toLowerCase();

    if (S[i] !== upper && S.indexOf(upper) > i) {
      statusObj[S[i]] = true;
    } else if (S[i] !== upper && result.includes(upper)) {
      statusObj[S[i]] = false;
      let indexToRemove = result.indexOf(upper);
      result.splice(indexToRemove, 1);
    } else if (S[i] === upper && !result.includes(S[i]) && statusObj[lower]) {
      result.push(S[i]);
      statusObj[lower] = false;
    }
  }
  return result.length;
}

console.log(task2("ABCabc")); //0
console.log(task2("aabCAbcB")); //2
console.log(task2("abcABC")); //3
console.log(task2("aAaA")); //0
console.log(task2("aaAbcCABBc")); //2
console.log(task2("xyzXYZabcABC")); //6
console.log(task2("ABCabcAefG")); //0
