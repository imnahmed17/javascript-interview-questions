// ways to add properties in an object

let man = {}

// using dot notation
man.firstName = 'John'

// using spread operator (...)
man = {...man, lastName: 'Doe'}

// using square bracket notation
man['age'] = 23

// using Object.assign() method
const info = {gender: 'Male', nationality: 'Bangladeshi'}
Object.assign(man, info)

console.log(man)