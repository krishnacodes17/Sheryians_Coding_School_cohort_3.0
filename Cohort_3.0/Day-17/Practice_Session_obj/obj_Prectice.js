// ?  OBJECT PRECTICE


// * Create an object for a student with: name age cources 

// let student = {
//     name : "kishna",
//     age:"25",
//     course:"BCA"
// }

// console.log(student)
// console.log(student.name)




//  *  Access Properties 
// const car = {
//   brand: "BMW",
//   model: "M4",
//   year: 2022
// }

// console.log(car.brand , car.model)



//  * Change the age of a user from 20 to 25.
// const user = {
//   name: "Anubhav",
//   age: 20
// }

// user.age = 25

// console.log(user.age)





//  * Add a new property:  isAdmin: true
// const user = {
//   name: "Anubhav",
//   age: 20
// }

// user.isAdmin = true

// console.log(user.isAdmin)




//  * Remove the password property from the object.

// const account = {
//   username: "john",
//   password: "12345"
// }

// delete account.password

// console.log(account)



//  * Write a function that returns how many properties an object has.

// function countProperties (a){
//     return Object.keys(a).length
//     // console.log(Object.keys(a))
// }


// let ans  = countProperties({a:1,b:2,c:3})
// // 3

// console.log(ans)






//  * Print all keys and values from this object.
// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// }


// for (const key in person) {
//     console.log(key , person[key])
    
// }



// *  Check whether "email" exists inside an object or not.

// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// }


// console.log("email" in person)





// * Merge these two objects into one.
// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }

// let merger = {...obj1 , ...obj2}
// console.log(merger)




//  *  Convert this object into an array of key-value pairs.
// const user = {
//   name: "Aman",
//   age: 21
// }

// console.log(Object.entries(user))




//  * Find the student with highest marks.

// const marks = {
//   Anubhav: 95,
//   Rahul: 82,
//   Aman: 90
// }

// let highestMaks  = 0 
// let topper = " "

// for(let student in marks){
//     if(marks[student] > highestMaks){
//         highestMaks = marks[student]
//         topper = student
//     }
//     console.log(marks[student])
//     // console.log(student)
// }

// console.log(topper , highestMaks)





//  * Find total salary.

// const salaries = {
//   john: 1000,
//   alex: 2000,
//   bob: 1500
// }

// let totalSalary = 0

// for(let salary in salaries){
//     totalSalary += salaries[salary]
// }

// console.log(totalSalary)




//  *  Nested Object Access   : pincode  , city
 
// const user = {
//   name: "Anubhav",
//   address: {
//     city: "Bhopal",
//     pincode: 462001
//   }
// }
// // console.log(user.address.city , user.address.pincode )
// const {city , pincode} = user.address
// console.log(city , pincode)




//  *  Create an object with: name , marks , method called getResult

// let students = {
//     result : (name ,marks)=>{
//         if(marks > 40){
//             return  `${name} pass with ${marks} marks`;
//         }
//         return  `${name} fail with ${marks} marks`;
//     }
// }

// let ans  = students.result("krishna" , 45)
// console.log(ans)





//  * Convert this array into an object. 
// const arr = ["name", "Anubhav", "age", 24]

// let ans =  {...arr}
// console.log(ans)

// //  ? second method 

// let obj = Object.assign({}, arr);
// console.log(obj);



//  * Count frequency of each character.
//  expected output
// {
//   b:1,
//   a:3,
//   n:2
// }

const str = "banana";

const ans = str.split("").reduce((acc, curr) => {

    acc[curr] = (acc[curr] || 0) + 1;

    return acc;

}, {});

console.log(ans);