const fs = require('fs')

console.log('시작')
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw  err;
    }
    console.log('1번 ', data.toString())
})
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw  err;
    }
    console.log('2번 ', data.toString())
})
fs.readFile('./readme2.txt', (err, data) => {
    if(err){
        throw  err;
    }
    console.log('3번 ', data.toString())
})
console.log('끝')

console.log('시작')
let data = fs.readFileSync('./readme2.txt')
console.log('1번 ', data.toString())
data = fs.readFileSync('./readme2.txt')
console.log('2번 ', data.toString())
data = fs.readFileSync('./readme2.txt')
console.log('3번 ', data.toString())
console.log('끝')