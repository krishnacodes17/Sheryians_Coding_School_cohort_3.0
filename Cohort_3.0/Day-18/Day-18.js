// ? woking of js 

//? example - 1 
// let a = 5
// let b = 7
// let c = a+ b

// console.log(c) 



// ?  example 2 

// var a = 20
// var b = 30

// function add (){
//     var c = a+b
//     console.log(c)
// }

// add()





// ? Stack  >> its help to run our global excution context 

//  eg with call stack and GEC
// var user = "krishna"
// var age = 36 

// function greet (){
//     let occupation = "coder"
//     let address = "mumbai"
//     console.log(`hellow ${user} your occupation is  ${occupation}`)

//     function printAdrress (){
//         let office = " mubail nala supada"
//         console.log(`your office is ${office}`)
//     }
//     printAdrress()
// }

// greet()




//  ? TDZ (tempoal dead zone)

// console.log(a)   // ReferenceError: Cannot access 'a' before initialization  (line 53 to 56 tak TDZ hai for a aur ye hoist huaa hai but TDZ ke vajh se refference error aaya )

// console.log(b)    // undefined  (because var hoist hota hai  aur TDZ nahi )

// let  a = 35
// var  b = 5

// let c = a+b




//  ? Lexical Scope 

// function outer() {
//   let name = "Sara";
//   function inner() {
//     console.log(name); // inner can "see" outer's variables — because of where it's written
//   }
//   inner();
// }
// outer(); // "Sara"


//  ?  global scope
// let appName = "MyApp"; // global
// function show() {
//   console.log(appName); // ✅ accessible
// }


//  ? block scope
// {
//   let a = 1;
//   var b = 2;
// }
// console.log(b); // 2  (var leaked out of the block)
// console.log(a); // ❌ ReferenceError (let stayed inside)



//  ? function scope 
// function test() {
//   var secret = 42;
// }
// console.log(secret); // ❌ ReferenceError — not visible outside



//  ? Stack over flow 

// function loop() {
//   loop(); // calls itself forever, never returns
// }
// loop(); // ❌ RangeError: Maximum call stack size exceeded






// ? Closures 
function counter() {
  let count = 0;            // (1) local variable
  return function () {      // (2) inner function is returned
    count++;
    return count;
  };
}

const inc = counter();      // (3) counter() runs and finishes
console.log(inc()); // 1    // (4)
console.log(inc()); // 2    // (5)
console.log(inc()); // 3    // (6)



// eg 2 For private variable 

// function createBankAccount() {
//   let balance = 0; // private — cannot be accessed directly
//   return {
//     deposit(amount) { balance += amount; return balance; },
//     getBalance() { return balance; }
//   };
// }
// const acc = createBankAccount();
// acc.deposit(100);
// console.log(acc.getBalance()); // 100
// console.log(acc.balance);      // undefined — truly private



//?   Types of Error
//!  Refference error 
//!  syntex  error 
//!  Refference error 