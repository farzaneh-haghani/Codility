function task2(S) {
  const statusObj = {};
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    const upper = S[i].toUpperCase();
    const lower = S[i].toLowerCase();

    if (S[i] === lower && !statusObj[lower]) {
      statusObj[lower] = "saw-only-lower";
    } else if (S[i] === lower && statusObj[lower] === "counted") {
      count--;
      statusObj[lower] = "invalid";
    } else if (S[i] === upper && !statusObj[lower]) {
      statusObj[lower] = "invalid";
    } else if (S[i] === upper && statusObj[lower] === "saw-only-lower") {
      count++;
      statusObj[lower] = "counted";
    }
  }
  return count;
}

console.log(task2("ABCabc")); //0
console.log(task2("aabCAbcB")); //2
console.log(task2("abcABC")); //3
console.log(task2("aAaA")); //0
console.log(task2("aaAbcCABBc")); //2
console.log(task2("xyzXYZabcABC")); //6
console.log(task2("ABCabcAefG")); //0
console.log(task2("aAaa")); //0
