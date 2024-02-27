function solution(letters) {
  const letArr = letters.split("");
  const low = letters.toLowerCase();
  const lowArr = low.split("");
  const count = [];
  const flag = [];
  for (let i = 0; i < letArr.length; i++) {
    if (letArr[i] !== lowArr[i]) {
      let j = i + 1;
      if (j < letArr.length || lowArr.indexOf(lowArr[i]) !== i) {
        while (letArr[j] !== lowArr[i] && j < letArr.length) {
          j++;
        }
        if (
          j === letArr.length &&
          !flag.includes(letArr[i]) &&
          !count.includes(letArr[i])
        ) {
          count.push(letArr[i]);
        } else {
          flag.push(letArr[i]);
        }
      }
    }
  }
  return count.length;
}

console.log(solution("ABCabc")); //0
console.log(solution("aabCAbcB")); //2
console.log(solution("abcABC")); //3
console.log(solution("aAaA")); //0
console.log(solution("aaAbcCABBc")); //2
console.log(solution("xyzXYZabcABC")); //6
console.log(solution("ABCabcAefG")); //0
console.log(solution("aAaa")); //0
console.log(solution("ominmjjooIHIIGMGMHML")); //2 MI
