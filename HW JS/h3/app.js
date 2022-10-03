// // Можно так

// let str = 'Hello'
// function reverseHello(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverseHello(str));


// Мне удобней так

let str = 'Hello'
function reverseHello(str) { 
    let a = '';
    for(let i = str.length - 1; i >= 0; i-- ){
        a += str[i];
    }
    return a;
 }

 console.log(reverseHello(str));