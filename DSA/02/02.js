 // relation between integer and string 
 /**
  * Rules 
  *    String + string = string
  *    String + Number = String
  *    int    + int    = integer
  *    int    - string  =  integer
  */


//   lets see some question 
let a = 10;
let b = 20

console.log("the sum of " + a + "and"  + b + "is " + a + b  )     // outPut :  the sum of 10and20is 1020

//  the code will be execute  left ----> to Right 
//  how its work when a 2 operend and 1 operator come code solve tha and the go for next 



//  lets solve another question 

console.log(a + b + "is a answer of" + a + "and" + b )

console.log("the sum of a and b is " + (a+b))

// bordmass rules  follow here 



// lets solve some question
//  swap the num 1 and num 2  (3 method )


//  first method 
let c = 10 
let d = 20
let temp 

// console.log("before swap" , c ,d)

// temp = c
// c = d
// d = temp

// console.log("after swap " , c ,d)



//  second Method 

// console.log("before swap" , c ,d)

// c = c + d    // 30
// d = c - d
// c = c- d

// console.log("after swap " , c ,d)



//  third Method (Destructuring)
console.log("before swap" , c ,d)

// Method 3a: Using temporary array (ES6 Destructuring)
let temp_array = [c, d];
c = temp_array[1];
d = temp_array[0];

console.log("after swap " , c ,d)
