function test(object) {
  let value = "",
  for (let key in object) {
    value.push(key);
  }
  return value
}
const testObject = {
  a : "대머리",
  b : "스님",
  c : "빡박이"
}
console.log(test(testObject))