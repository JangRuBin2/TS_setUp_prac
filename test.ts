var a = 1;
var b = 2;

// vodi -> 회피하다? return이 없다.
function test2() : void {
  console.log("hi")
}

function test(a: number,b: number) : number {
  return a + b;
}
console.log(test(a,b));
test2()