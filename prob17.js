// 

const input = [1, 4, 12, 3, 2, 6, -9, 0]
// output = [ [ 1, 4, 12 ], [ 3, 2, 6 ], [ -9, 0 ] ]

const chunks = (arr, n) => {
    const newArr = []

    for (let i=0; i<arr.length;) 
    {
        const temp = []
        for (let j=0; j<n && i<arr.length; j++)
        {
            temp.push(arr[i++])
        }
        newArr.push(temp)
    }

    return newArr;
}

const output = chunks(input, 3)
console.log(output)