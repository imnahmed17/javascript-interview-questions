// move 3rd array index to rest in 1st array index position

const input = [2, 7, 11, 4, -2]
// output = [11, 4, -2, 2, 7]

const arr1 = input.slice(0, 2)
const arr2 = input.slice(2, input.length)
const output = [...arr2, ...arr1]
console.log(output)