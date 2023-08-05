// create an array of sums: at any index put sum of all elements except that index element

const input = [2, 7, 11, 4, -2]
// output = [20, 15, 11, 18, 24]

const output = []

for (let i=0; i<input.length; i++) {
    const newArr = []

    for (let j=0; j<input.length; j++) {
        if (i==j) {
            continue
        }
        else {
            newArr.push(input[j])
        }
    }
    
    const sum = newArr.reduce((acc, curr) => acc + curr)
    output.push(sum)
}

console.log(output)