// reverse an integer

const input = -51
// output = 15
const input1 = 500
// output1 = 5
const input2 = -15
// output1 = 5

const reverseInt = (num) => {
    if (num < 0) {
        return -1*parseInt(num.toString().split('').reverse().join(''))
    }
    
    return parseInt(num.toString().split('').reverse().join(''))
}

const output = reverseInt(input)
const output1 = reverseInt(input1)
const output2 = reverseInt(input2)
console.log(output, output1, output2)