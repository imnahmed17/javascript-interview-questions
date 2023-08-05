// reverse the words of a string

const str = 'This is JavaScript code'
// output = 'sihT si tpircSavaJ edoc'

const arr = str.split(' ')
let output = ''

for(let i in arr){
    const words = arr[i].split('').reverse().join('')
    output += words + ' '
}

console.log(output)