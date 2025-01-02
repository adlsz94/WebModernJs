// let e const
{
    var a = 2
    let b = 3
}

console.log(a) // return 2 pois variavel do tipo var pode ser acessada fora deum bloco.
// Variavéis tipo var tem escopo global.

//* console.log(b) // return ReferenceError: b is not defined

//? Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`) // Expected output: Ipad é caro!

//? Destructuring
const [ l,e, ...tras ] = "Cod3r"
console.log(l, e, tras) // Expected output: C o [ 'd', '3', 'r' ]
console.log(l) // Expected output: C
console.log(e) // Expected output: o
console.log(tras) // Expected output: [ 'd', '3', 'r' ]

// destructuring a array
const [ x, y ] = [ 1, 2 ]
console.log(x, y) // expected output: 1 2

// ignoring one element from array
const [ m, , n ] = [3, 4, 5 ] //second element from array will be ignored
console.log(m, n) // expected output: 3 5

// destructuring a object
const {idade, nome} =  { nome:'Ana', idade: 21 }
console.log(idade, nome) // expected output: 21 Ana

// other exempleo of destructuring a object
const {price: p, name} = { name: 'picanha', price: 120 } // price returned to p
console.log(p, name)// expected output: 120 picanha


/**
 * 
 * 
 *? DDestructuring assignment
 * 
 * TODO: See the link:
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * 
 * The destructuring assignment syntax is a JavaScript expression that makes it possible 
 * to unpack values from arrays, or properties from objects, into distinct variables.
 * TODO: Try it
 */
 let a1, b1, rest;
 [a1, b1] = [10, 20];
 
 console.log(a1); 
 // Expected output: 10
 
 console.log(b1);
 // Expected output: 20
 
 [a1, b1, ...rest] = [10, 20, 30, 40, 50];
 
 console.log(rest);
 // Expected output: Array [30, 40, 50]

