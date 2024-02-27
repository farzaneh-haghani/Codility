function task1(S) {
  const obj = {};
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "v") {
      obj["v"] = obj["v"] ? obj["v"]++ : 1;
    } else if (S[i] === "<") {
      obj[">"] = obj[">"] ? obj[">"]++ : 1;
    } else if (S[i] === "<") {
      obj["<"] = obj["<"] ? obj["<"]++ : 1;
    } else {
      obj["^"] = obj["^"] ? obj["^"]++ : 1;
    }
  }
  const arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    
  }
}

console.log(task1("^vv<v")); //2
console.log(task1("v>>>vv")); //3
console.log(task1("<<<")); //0
