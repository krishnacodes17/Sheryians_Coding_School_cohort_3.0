if ("hello")  console.log("truthy");   // runs
if (0)        console.log("won't run"); 
if ([])       console.log("truthy");   // runs! empty array is truthy

console.log(0 == false);        // true  ← surprising!
console.log("" == false);       // true  ← surprising!
console.log(null == undefined); // true  ← surprising!

console.log(0 === false);       // false ← sane


let a = 5 
let b = 4
console.log(a && b);   // false   AND: both must be true
console.log(a || b);   // true    OR: at least one must be true
console.log(!a);       // false   NOT: flips the value


let count = 0 
while(count < 5){
    console.log("count value : ", count)  
    count ++
}


