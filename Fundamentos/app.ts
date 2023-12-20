const array: Array<number> = [1, 2, 3, 4]
const stringArray: Array<string> = ['a', 'b', 'c', 'd', 'e']

console.log(array[1]) //2;

// lenght of array
console.log(stringArray.length) // 5

// add an element in array
console.log('array original', stringArray); //a, b, c, d, e
stringArray.push('f')
console.log('array com o novo elemento', stringArray); //a, b, c, d, e, f
// removendo o ultimo elemento do Array
stringArray.pop(); 
console.log('array com o o último elemento removido', stringArray); //a, b, c, d, e

const buscaNum = array.find(num => num === 4)
console.log(buscaNum) // 4

array.forEach(num => console.log(num))
// 1
// 2
// 3
// 4

array.map(num => {
    if (num > 2) {
        console.log(num);
    }
})
// 4
// 3