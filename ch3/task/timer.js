const timeout = setTimeout(() => {
    console.log('1.5초뒤 실행')
},1500);
const interval = setInterval(() => {
    console.log('1초뒤 실행');
},1000);
const timeout2 = setTimeout(() => {
    console.log('실행 안됨')
},3000);
setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500)
const immediate = setImmediate(() => {
    console.log('즉시실행');
});
const immediate2 = setImmediate(() => {
    console.log('즉시실행안됨');
});
clearImmediate(immediate2);