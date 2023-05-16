function test(object) {
    var value = "";
    for (var key in object) {
        value += object[key];
    }
    return value;
}
var testObject = {
    a: "대머리",
    b: "스님",
    c: "빡박이"
};
console.log(test(testObject));
