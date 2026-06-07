//  ?? Synchronous vs Asynchronous 


//  * Synchronous  (order me chalna )
// console.log("Hellow 1")
// console.log("Hellow 2")
// console.log("Hellow 3")


// * eg 1 
// let a = 10
// let b = 20 
// let c = a+b

// function multiplay (a,b){
//     console.log(a*b)
//     return a*b
// }

// multiplay(a,b)

// console.log(c)



//  * Asynchronous

// console.log("start")

// setTimeout(()=>{
//     console.log("center")    // its print after 4 second 
// },4000)    

// console.log("end") 



//  * setTImeOut  (kuch samaye ke baad chalana )
// setTimeout(()=>{
//     console.log("hellow ji ")
// },3000)



//  * setInterval  ( baad baa baa chalana )
let count = 1;
let set = setInterval(() => {
  console.log("Count: " + count);
  count++;

  if(count >5){
    clearInterval(set)
  }
}, 1000);

