// frequency count of an array

const input = ['apple', 'mango', 'apple', 'orange', 'mango']
// output = {'apple': 2, 'mango': 2, 'orange': 1}

const output = {}
input.map(e => output[e] = output[e] + 1 || 1)
console.log(output)