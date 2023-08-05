// write a program to print number 1 to 50. for multiples of 3 print fizz, for multiples of 5 print buzz, for both print fizzbuzz

for (let i=1; i<=50; i++) {
    if (i%3===0 && i%5===0) {
        console.log('fizzbuzz')
    }
    else if (i%3===0) {
        console.log('fizz')
    }
    else if (i%5===0) {
        console.log('buzz')
    }
    else {
        console.log(i)
    }
}