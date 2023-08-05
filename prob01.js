// find common object properties

const input1 = {a:1, b:2, c:3, d:10, e:12}
const input2 = {a:2, e:12, f:6, d:10}
// output = {d:10, e:12}
const output = {}

for (const i in input1) {
    if (input1[i] === input2[i]) {
        output[i] = input1[i];
    }
}

console.log(output);