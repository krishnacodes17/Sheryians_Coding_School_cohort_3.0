//  ? functions

//  * Create a function named greet that prints "Hello World"

// function greet  (){
//     console.log("Hellow World")
// }

// greet()

//  *  Create a function add(a, b) that returns the sum.

// function sum ( a,b){
//     return a+b
// }
// console.log(sum(5,7)
// )

//  * Write a function to calculate the square of a number.
// function square(num){
//     return num*num
// }
// console.log(square(5)
// )

//  *  Create a function that checks whether a number is even or odd.

// function checkOddEven (num){
//     return num % 2=== 0 ? "even" : "odd"
// }

// console.log(checkOddEven(5))

//  *  Write a function that converts Celsius to Fahrenheit.

// function celToFah(celsius){
//      let f = (celsius *9 /5) + 32
//     return f
// }
// console.log(celToFah(50))

//  * Create a function with default parameter "Guest".

// function defaultPara(a="Guest"){
//     return a
// }
// console.log(defaultPara())

//  * Write a function that returns the greater of two numbers.

// function greatNum (a , b ){
//     return a>b ? "a is greater than b ": "b is greater than a"
// }

// console.log(greatNum(8,6))

//  * Create a function to calculate area of rectangle
// function calRectangle (l,b){
//     return l * b
// }
// console.log(calRectangle(5,8)
// )

// * Write a function that returns "Adult" if age ≥ 18 else "Minor".
// function adultOrMinor(age){
//     return age>=18?"adult": "minor"
// }

// console.log(adultOrMinor(85))

//  * Create a function to reverse a string.

// function revString (str){
//     let rev = [...str].reverse().join("")
//     return rev
// }

// console.log(revString("krri"))

//  * Write a function expression for multiplication
// let multiply = (a,b)=>{
//     return a*b
// }
// console.log(multiply(5,6))

//  * Convert a normal function into an arrow function.

// let add  = (a,b)=>{
//     return a+b
// }

//  * Create a function that accepts unlimited numbers and returns their sum using rest operator

// let total = 0;
// function sum(...num) {
//   //    for(let number of num){
//   //      total += number
//   //    }

//   for (let a = 0; a < num.length; a++) {
//     total += num[a];
//   }
// }

// sum(5, 3, 8, 5);

// console.log(total);



//  * Write a function that counts vowels in a string
// let total = 0
// function vowelsCount (str){
//     for(let string of str){
//         if(string === "a" || string === "e" ||   string === "i" ||   string === "o" ||   string === "u" ){
//             total ++
//         }
//     }
//     return total
// }

// console.log(vowelsCount("hellow a e io"))




//  * Create a function that checks if a string is palindrome.

// function palindrome (str){
//     let reversed = str.split("").reverse().join("")
//     console.log(reversed)

//     return str === reversed
// }

// console.log(palindrome("mdam"))


//  * Write a callback function example using setTimeout.

// function greet (){
//     console.log("hellow from greet afte 2 second")
// }

// setTimeout((e)=>{
//     greet()
// },2000)



//  * Create a higher-order function that executes another function twice.

// function greet (callback){
//     callback("krishna")
//     callback("bhai ")
// }

// function nameGreet (name){
//     console.log("hellow" , name )
// }

// greet(nameGreet)



//  * Write a function that returns another function.

// function retFunction (){
//     let name = "krishna"
//     return function(){
//         console.log("happy bithday " , name)
//     }
// }

// retFunction()()



//  * Create a pure function for subtraction.

// function pureFunction (a,b){
//     return a-b
// }
// console.log(pureFunction(8,5))




//  * Create an impure function using global variable modification.

// let total = 5 

// function impureFunction(a,b){
//     return  total +=  a + b
// }

// console.log(impureFunction(5,6))



//  * Write a recursive function for factorial.    (factorial = 5! = 5 × 4 × 3 × 2 × 1 = 120)

// function factorial (n){
//     if(n=== 0 || n ===1) return 1

//     return n*factorial(n-1)
// }

// console.log(factorial(5))


//  ? method -2 
// function fact(n){
//     let res = 1

//     for(let i = 1 ; i<=n ; i++) {
//          res*=i
//     }
//     return res
// }
// console.log(fact(5))





//  * Write recursive Fibonacci function   ( rule >> Current Number = Previous Number + Previous Previous Number)

// function fibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6)); // 8


// function fibonacci (n){
//     if(n<=1){
//         return n
//     }
    
//     let a = 0;
//     let b = 1;

//     for(let i = 2 ; i<=n ; i++){
//         let c = a+b    
//         a = b    
//         b = c    
//     }
//     return b
// }
// console.log(fibonacci(6))





//  * Create a function that finds power using recursion.
// function power(base, exponent) {
//     let result = 1;

//     for (let i = 1; i <= exponent; i++) {
//         result *= base;
//     }

//     return result;
// }

// console.log(power(2, 4)); 



//  * Create an IIFE that prints 
// (function(){
//     console.log("Excuted")
// })()





//  * Write a function that memoizes factorial calculation

// const store = {
    
// }

// function Factoial (n){
//     if(n in store){
//         console.log("from case")
//     return store[n]
//     }


//     if(n<=1) return 1

//     store[n] = n *  Factoial(n-1)
//     return store[n]
// }
// console.log(Factoial(5))




//  * Create a closure counter function.

// function Parents (){
//     let value = 0

//     return function child (){
//         value ++
//         console.log(value)
//     }
// }


// let childd = Parents()
// childd()
// childd()
// childd()



//  * Write a function currying example for addition.
// function add (a){
//     return function bb (b){
//         return a+b
//     }
// }

// // let f1 = add(5)
// // console.log(f1(3))


// console.log(add(5)(2))




//  * Create debounce function logic.
function debouncing (fn , delay){
    let timer 
    
    return function (){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },delay)
    }
}

function greet() {
    console.log("Hello");
}

const debouncedGreet = debouncing(greet, 1000);
debouncedGreet()
debouncedGreet()