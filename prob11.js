// remove falsy values from any array

const input = ["", NaN, "hello", false, undefined, "ami", 0, "programmer", null]
const nowRemoveFalsyValue = input.filter(Boolean)
console.log(nowRemoveFalsyValue)