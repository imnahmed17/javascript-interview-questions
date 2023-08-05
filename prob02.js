// find the duplicate values of an array

const input = [1, 2, 8, 2, 8, 9]
// output = [2, 8]

// approach 01
// const output = input.filter((e, i, arr) => arr.indexOf(e) !== i)

// approach 02
const arr = []
const output = []
for(let i=0; i<input.length; i++){
    if(!arr.includes(input[i])){
        arr.push(input[i])
    }
    else{
        output.push(input[i])
    }
}

console.log(output)