//  ? JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 3


//  * Print each price with "₹" before it.

// let prices = [100, 250, 399, 499];

// prices.forEach((elem,inx)=>{
//     console.log(elem)
// })




//  * You are given an array of students. 

// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];

// students.forEach((elem,idx)=>{
//     if(elem.marks > 50){
//         console.log(`${elem.name} - pass`)
//     }
//     else{
//         console.log(`${elem.name} - fail`)
//     }
// })






//  * Convert all names into uppercase. (using Map())

// let names = ["anubhav", "rahul", "aman"];

// let blank_Array = []
// names.map((elem,indx)=>{
//     console.log(elem.toUpperCase())

//     blank_Array.push(elem.toUpperCase())  
// })

// console.log(blank_Array)







// *  Create a new array where:  1. Every product has a new property discountPrice   2.Discount is 10%

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];

// let blank_Array = []
//  products.map((elem,indx)=>{
//     let discountPrice = elem.price -(elem.price *10 /100)
//     console.log(discountPrice)

//     blank_Array.push({
//         name:elem.name,
//         price:elem.price,
//         discountPrice:discountPrice
//     })
// })

// console.log(blank_Array)


// ! second Method to this question 

// let ans = products.map((elem)=>{
//     return {...elem , discountPrice: elem.price - (elem.price * 10 / 100)}
// })
// console.log(ans)




// * Filter all even numbers.  (using filter())

// let nums = [1,2,3,4,5,6,7,8];

// let ans =  nums.filter((elem)=>{
//     if(elem % 2 == 0){
//         return elem
//     }
// })
// console.log(ans)

// ! second shotcut method 

//  let ans2 = nums.filter(elem => elem % 2 == 0)
// console.log(ans2)





//  Return only active users. given array using filter

// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];

// let ans = users.filter((elem,indx)=>{
//     if(elem.active === true){
//         return  elem
//     }
// })

// console.log(ans)

// ! seme quetion solve with shortcut method 
// let ans2 = users.filter(elem => elem.active === true )
// console.log(ans2)






//  * Find total sum of array.  using reduce()

// let nums = [10,20,30,40];

// let ans = nums.reduce((acc,value)=>{
//     return acc + value
// },0 )
// console.log(ans)




// /  *  Expected Output: {
//   apple: 3,
//   banana: 2,
//   orange: 1
// } 

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];


// let ans = fruits.reduce((acc, curr) => {

//     acc[curr] = (acc[curr] || 0) + 1;

//     return acc;

// }, {});

// console.log(ans);



//  * Find first number greater than 50.
// let nums = [20, 35, 60, 80];

// let ans = nums.find((elem)=>{
//   return elem>50
// } )

// console.log(ans)



//  * Find index of number 90
// let nums = [10, 40, 90, 50];

// let ans = nums.findIndex((elem)=>{
//    return elem == 90
// })

// console.log(ans)





// * Find index of first failed student.
// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];


// let ans = students.findIndex((elem)=>{
//   if(elem.marks < 40){
//     return elem
//   }
// })

// console.log(ans)





//  * Check if any number is negative.

// let nums = [10, 20, -5, 40];

// let ans = nums.some((elem)=> elem < 0)
// console.log(ans)




//  * Check if any product is out of stock.

// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];

// let ans = products.some((elem)=> elem.stock === 0 )
// console.log(ans)





// * Check if all numbers are positive. every()
// let nums = [10, 20, 30, 40];

// let ans = nums.every((elm)=> elm > 0 )
// console.log(ans)





//  * Check if all students passed. 
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];

let ans = students.every((elem)=> elem.marks >= 40 )
console.log(ans)