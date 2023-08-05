// find the second lowest number of an array

const input = [1, 2, -2, 11, 7, 1]
// output = 7
const input1 = [1, 4, 7, 2, 4, 7]
// output1 = 4

// approach 01: there are no duplicate values and without using built in methods
for(let i=0; i<input.length; i++){
    for(let j=0; j<input.length-i-1; j++){
        if(input[j] > input[j+1]){
            const temp = input[j]
            input[j] = input[j+1]
            input[j+1] = temp
        }
    }
}
console.log(input[1])

// approach 02: there are duplicate values
const secondLargest = (arr) => {
    const newArr = [...new Set(arr)].sort((a, b) => a-b)
    // const newArr = arr.filter((e, i) => arr.indexOf(e) === i).sort((a, b) => a-b)
    return newArr[1]
}

const output = secondLargest(input1)
console.log(output)