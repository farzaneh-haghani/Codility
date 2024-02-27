function solution(S) {
  const arr = S.split("");
  const result = { v: 0, "^": 0, ">": 0, "<": 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "v") result["v"]++;
    else if (arr[i] === "^") result["^"]++;
    else if (arr[i] === ">") result[">"]++;
    else result["<"]++;
  }

  let rotate = 0;
  const newArr = Object.values(result);
  const max = Math.max(...newArr);

  const index = newArr.indexOf(max);
  newArr.forEach((x, i) => {
    if (x !== 0 && i !== index) {
      rotate += x;
    }
  });
  return rotate;
}

console.log(solution("^vv<v"));
console.log(solution("v>>>vv"));
console.log(solution("<<<"));
