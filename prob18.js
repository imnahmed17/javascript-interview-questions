// find the maximum occurring character of a string 

const str = 'This is JavaScript code and you have to find the max char'

const str1 = str.toLowerCase().split(' ').join('')
const charMap = {}
let maxCount = 0
let maxChar = ''

for (let i of str1) {
    charMap[i] = charMap[i] + 1 || 1
}

for (let i in charMap) {
    if (charMap[i] > maxCount) {
        maxCount = charMap[i]
        maxChar = i
    }
}

console.log(maxChar)