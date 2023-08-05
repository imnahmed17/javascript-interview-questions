// find the 1st missing odd number from the array

const input = [5, 7, 9, 11, 15, 17]
// output = 13

for (let i=0; i<input.length; i++) {
    const current = input[i]
    const next = current + 2
    if (input[i+1] !== next) {
        console.log(next)
        break
    }
}