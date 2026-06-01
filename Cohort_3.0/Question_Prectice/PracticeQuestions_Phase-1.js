const prompt = require("prompt-sync")();


// ! Console & Basics
// * Print "Hello JavaScript" in the console.

// console.log("hellow JavaScript")

 
//  *  Print your name, age, and city using one console.log().

// let name = "krishna";
// let age = 25;
// let city = "mumbai"

// console.log(`my name is : ${name} and my age is ${age} i live in ${city}`)



//  * Print a warning message using console.warn().
// console.warn(" are you 18+ ")


// * Print an error message using console.error().
// console.error("somthing went wrong ")



// * Use console.table() to display an array of 5 numbers.
// console.table(["krishna","anup", "Ritik" ,"laado"])






//  !  Variables

// * Create a variable called studentName and store your name in it.

// let studentName = "krishna"



//  * Create a variable age and print it.

// let age = 25
// console.log(age)


//  * Create two variables and swap their values.
// let a = 2;
// let b = 3;

// ? first method
// let temp = a;
// a = b;
// b = temp;
// console.log(a,b )


// ? second method

// let a = 25;
// let b = 30;

// [a, b] = [b, a];

// console.log(a, b);


// ? third method

// a = a + b;
// b = a - b;
// a = a - b;



//  ? fourth method
// function swap(x, y) {
//     return [y, x];
// }

// [a, b] = swap(a, b);

// console.log(a, b);




//  * Create a constant variable for PI and print it.

// const PI = 3.14
// console.log(PI)



// * Declare a variable without assigning a value and print it.
// let a
// let b
// console.log(a,b)




//  * Create a variable score and increase it by 10.
// let score = 0 
// score +=10
// console.log(score)


//  * Create three variables for first name, last name, and full name.
// let first_name = "krishna"
// let last_name = "gupta"

// console.log("full name is " ,first_name ,"" , last_name)




// ! Data Types
 

//  * Create variables of type string, number, boolean, null, and undefined.

// let string = "krishna";
// let num = 25 
// let bool = true
// let nll = null
// let a = undefined

// console.log(string, num , bool, nll ,a )


// *  Check the type of different variables using typeof.

// let string = "krishna";
// let num = 25 
// let bool = true
// let nll = null
// let a = undefined

// console.log(typeof string, typeof num , typeof bool, typeof nll ,typeof a )




//  * Store your mobile number in a variable and check its type.
// let Mobile = 8598756856
// console.log(typeof Mobile)




//  * Create a variable with value null and check its type.
// let nll = null
// console.log(typeof nll)



//  * Create a bigint number and print it. 
// let bigint = 12552n
// console.log(typeof bigint)


// let bigNum = BigInt("123456789012345678901234567890");

// console.log(typeof bigNum);




//  !  Type Conversion & Coercion

//  * Convert the string "50" into a number.
// let str = "50"
// // console.log(typeof str)

// // let num = Number(str)
// // console.log(typeof num)


// let num = +str
// console.log(typeof num)

// let numb = "50" * 1;
// console.log(typeof numb)



//  * Convert the number 100 into a string.
// let num = 55
// let str = String(num)   // first method 
// console.log(typeof str)

// let str2 =  "" +  num    // second method 
// console.log(typeof str2)



//  * Convert "true" into a boolean.
// let tr = "true"
// let bool = Boolean(tr)
// console.log(typeof bool)   //  first method 

// let bool2 = tr === "true"  // second method
// console.log(typeof bool2)  

// let bool = tr === "true" ? true : false;   // third method 


 
// * Check the output of: 
// //   "5" + 2
// let a = "5" + 2
// console.log(a)

// //  "5" - 2
// let b = "5" - 2
// console.log(b)

// //  true + 1
// let c = true + 1
// console.log(c)



//  *  Create a variable with value "123abc" and convert it into a number.
// let value = "123abc" - 123

// let num = Number(value)
// console.log(typeof value)



//  * Use parseInt() on "500px"

// let str = "500px"
// let par = parseInt(str)
// console.log(typeof par)





//  !  Operators

//  * Add two numbers and print the result.
// let a= 25
// let b = 54
// let c = a+b 
// console.log(c)




//  * Find the remainder when 25 is divided by 4.
// console.log(25%2)



//  * Find the square of a number using exponent operator.

// let num = 5 
// let ans = 5 ** 2     // fist method 
// console.log(ans)

// console.log(Math.pow(5,2))    //  second method 



//  * Increment a variable using ++.

// let a = 1
// a++
// console.log(a)

//  * Decrement a variable using -.
// let b = 3
// b--
// console.log(b)



//  * Use += operator to increase a variable by 20.

// let a = 5 
// a+=20
// console.log(a)



//  * Compare two numbers using >, <, >=, <=.
// let a = 20 
// let b = 25

// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)



// * Check if two values are strictly equal using ===. 
// let a = "5"
// let b = 5
// console.log(a===b)



//  * Compare "10" and 10 using both == and ===.
// let a= 10
// let b = "10"
// console.log(a==b)
// console.log(a===b)


//  *  Create two boolean variables and test &&, ||, and !.
// let a = true 
// let b = false

// console.log(a && b)
// console.log(a||b)
// console.log(a!=b)




//  ! Strings

// * Create a string and print its length.
// let sttr = "krishna"
// let ans  = sttr.length
// console.log(ans)


//  *  Convert a string into uppercase.
// let str = "krishna"
// console.log(str.toUpperCase())



//  *  Convert a string into lowercase.
// let str = "krishna"

// console.log(str.toLocaleLowerCase())



//  *  Check if a string includes the word "JavaScript".

// let str = "hellow from JavaScript this is js chapter"
// console.log(str.includes("JavaScript"))




//  *  Extract the word "World" from "Hello World".

// let str = "Hello Worldl"
// console.log(str.slice(6,11))



// *  Replace "apple" with "mango" in a sentence.
// let str = "a apple"
// console.log(str.replace("apple" , "mango"))


//  *  Split "HTML,CSS,JS" into an array.
// let a = "HTML,CSS,JS"
// console.log(a.split(","))


//  * Remove extra spaces from a string.
// let a = " this is a string "
// console.log(a)
// console.log(a.trim())



// *  Repeat the word "Hi" 5 times
// let w = "hi"
// console.log(w.repeat(5))



// * Print the first character of a string.
// let a = "this is a string"
// console.log(a.slice(0,1))
// console.log(a[0])
// console.log(a.charAt(0));



//  * Use template literals to print:"My name is Aman and I am 20 years old"
// console.log(`My name is Aman and I am 20 years old`)






//  ! Numbers & Math

//  * Round 4.7 using Math.round().

// let num = 4.7 
// console.log(Math.round(num))


//  *  Find the square root of 81
// console.log(Math.sqrt(81))


//  * Find the maximum number from 10, 20, 5, 99.
// console.log(Math.max(10, 20, 5, 99))



//  * Generate a random number between 1 and 10.
// console.log(Math.floor(Math.random()*10))



//  * Convert "99.99" into an integer.
// let a =  "99.99"
// console.log(typeof Math.round(a))



//  * Check whether 25 is an integer or not.
// let a = 25 
// console.log(Number.isInteger(a))


//  * Use toFixed(2) on 3.141592.
// let num  =  3.141592
// console.log(num.toFixed(2))


//  ! Conditionals

//  * Check whether a number is positive or negative.
// let num = 8 
// if(num < 0){
//     console.log("number is negative")
// }
// else{
//     console.log("number is positive")
// }

// console.log(num<0 ? "negative" : "positive")    // second method 




// *  Check whether a number is even or odd.

// let num = 6
// console.log(num%2 ===0 ? "even" : "odd")




//  *  Check whether a person is eligible to vote
// let age = 17
// console.log(age>= 18 ? "eligible for vote" : "not eligible for vote")




//  *  Find the largest among two numbers
// let a = 5 
// let b = 7
// console.log(a > b ? "a is greate than b" : "b is geate than a"




//  *  Find the largest among three numbers.

// let a = 5
// let b = 8
// let c = 12

// if(a>b && a>c){
//     console.log("a is geater than b and c")
// }
// else if (b>a && b > c){
//     console.log(" b is greatet than a and b ")
// }
// else{
//     console.log("c is geter than a and b ")
// }

// console.log(Math.max(55,8,12))    //  second method 




//  * Check whether a year is a leap year

// let year = 2028
// if ((year % 4 === 0 && year %100 !== 0) || year % 400 === 0){
//     console.log("leap year ")
// }
// else{
//     console.log("not leap year")
// }



//  * Check whether a number is divisible by both 3 and 5.
// let num = 15
// if(num % 3 ===0 && num %5 ===0){
//     console.log("number is divide by 3 and 5")
// }
// else{
//     console.log("number is not divide by 3 and 5")
// }


  
//  * Create a simple grading  > 90+ → A   75+ → B  50+ → C   below 50 → Fail
// let maks = 80
// if (maks> 90 ){
//     console.log("A grade")
// }
// else if(maks>75){
//     console.log("B grade")
// }
// else if (maks > 50){
//     console.log("C grade")
// }
// else{
//     console.log("fail")
// }



// *  Check whether a character is a vowel or consonant.
// let ch = "v"
// if("aeiou".includes(ch)){
//     console.log("vowels")
// }
// else{
//     console.log("consonents")
// }

// if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u"  ){
//     console.log("Vowels")
// }
// else{
//     console.log("consonents")
// }



//  *  Create a calculator using switch statement
// let num1 = 5
// let num2 = 5 
// let operator = "/"

// switch(operator){
//     case "+":
//         console.log("Result : ",num1 + num2)
//         break ;
    
//     case "-":
//         console.log("Result : ",num1 - num2)
//         break ;

//     case "*":
//         console.log("Result : ",num1 * num2)
//         break ;

//     case "/":
//         console.log("Result : ",num1 / num2)
//         break ;

//     default:
//         console.log("invalid operator")
// }



//  *  Print the day name based on a number (1–7).
// day = 5
// switch(day){
//     case 1 :
//         console.log("monday")
//         break ;

//     case 2 :
//         console.log("Tuesday")
//         break ;

//     case 3 :
//         console.log("Wednesday")
//         break ;

//     case 4 :
//         console.log("Thursaday")
//         break ;

//     case 5 :
//         console.log("Friday")
//         break ;

//     case 6 :
//         console.log("Saturday")
//         break ;

//     case 7 :
//         console.log("sunday")
//         break ;

//     default:
//         console.log("please enter number between 1 to 7")
// }




//  * Check whether a username is "admin" and password is "1234"

// let admin = "admin"
// let password = "password"
// console.log(admin=== "admin" && password==="password" ? "true" : "false")




//  !  Truthy & Falsy

//  * Check whether an empty string is truthy or falsy.

// let str = "";

// if (str) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// console.log(Boolean(""))    // seconnd method



//  * Check whether 0 is truthy or falsy.
// console.log(Boolean(0))
// console.log(Boolean("0"))



//  * Check whether [] is truthy or falsy.
// console.log(Boolean([]))



//  *  Create a variable and print "Valid" if it has a value otherwise print "Invalid".
// let value = "";
// console.log(value ? "Valid" : "Invalid");



//  *  Create a mini biodata program using variables and template literals
// let name = "Krishna"
// let age = 25 
// let city = "Mumbai"
// let profession = "Students"

// let bioData = `
//     name: ${name}
//     age: ${age}
//     city : ${city}
//     Proffession: ${profession}
// `

// console.log(bioData)



//  * Calculate the area of a rectangle.
//  let area = length * width;
// let a = 5
// let b = 10
// let area = a * b 
// console.log(area)



//  *  Calculate the simple interest
//  p * r * t
// let p = 10
// let r = 16
// let t = 14
// let SI = p*r*t/100

// console.log(SI)



//  *  Convert temperature from Celsius to Fahrenheit. 

// let celsius  =  25 
// let Fahrenheit = (celsius * 9/5) + 32
// console.log(Fahrenheit)



//  *  Convert kilometers into meters.

// let kilometers = 5

// let meters = kilometers * 1000;

// console.log(meters)





//  * Calculate total marks and percentage of 5 subjects.
// let math = 50 
// let com = 68
// let sci = 74
// let hindi = 78
// let eng = 55

// let total_Marks = math + com + sci + hindi + eng

// let percentage =  total_Marks * 100 / 500

// console.log("total_maks : ", total_Marks  ,"total_percentage : ", percentage)




//  *  Calculate electricity bill based on units consumed.
// let per_Unit_Price = 8

// let unit = 85

// let ans = per_Unit_Price * unit
// console.log(ans)



//  * Create a username generator using first name and birth year
// let firstName = "krishna";
// let birthYear = 2003;

// let username = firstName + birthYear;

// console.log(username);



//  * Check whether a string starts with a specific letter
// let str = "javaScript"

// console.log(str.startsWith("e"))



//  * Count the total characters in a sentence excluding spaces.
// let str = "this is javaScipt"

// console.log(str.length)





//  * Check whether a number lies between 10 and 50.
// let num = 45
// console.log(num>10 && num<50 ? "number lies between 10 to 50" : "number don't lies between 10 to 50"
// )




//  *  Check whether a password length is greater than 8
// let passwod = "sgfg46564"
// console.log(passwod.length > 8 ? "password is grater than 8" : "password is not greater than 8 digit"
// )




//  * Check if a person can drive:  age > 18 &&  has license = true
// let age = 18
// let license = true

// console.log(age>=18 && license ? "person can drive" : "person can't drive"
// )



// *  Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.
// let hour = new Date().getHours();

// if (hour < 12) {
//     console.log("Good Morning");
// } else if (hour < 18) {
//     console.log("Good Afternoon");
// } else {
//     console.log("Good Evening");
// }




//  * Find whether a number is a multiple of 10.
// let num = 50;

// if (num % 10 === 0) {
//     console.log("Multiple of 10");
// } else {
//     console.log("Not a multiple of 10");
// }



// *  Create a simple discount calculator
// let original_price = 100
// let discount_Pri = 18
// let discount = original_price * discount_Pri / 100

// console.log("discount is :",discount)
// console.log("total amount given " ,original_price - discount)



//  * Check whether a product is in stock.
// let product = ["shop", "mouse", "keyboard"]
// console.log(product.includes("shop") ? "product avilable" : "product not avilable"
// )



//  * Generate a random OTP of 4 digits
// console.log(Math.floor(Math.random() * 9000) + 1000)


//  * Reverse a 3-letter string manually.
// let str = "cat";

// let reversed = `${str[2]}${str[1]}${str[0]}`;

// console.log(reversed);



//  * Find the last character of a string

// let str = "kishna is a boy"
// console.log(str[str.length - 1])


// *  Convert a full name into uppercase initials
// let fullName = "Krishna Patel";

// let names = fullName.split(" ");
// console.log(names)

// let initials =
//     names[0][0].toUpperCase() +
//     names[1][0].toUpperCase();

// console.log(initials);



//  * Check whether two strings are equal ignoring case sensitivity

// let str1 = "JavaScript";
// let str2 = "javascript";

// console.log(
//     str1.toLowerCase() === str2.toLowerCase()
// );



//  * Create a simple login validation system
// const prompt = require("prompt-sync")();

// let username = "admin";
// let password = "1234";

// let enteredUsername = prompt("Enter Username: ");
// let enteredPassword = prompt("Enter Password: ");

// if (
//     enteredUsername === username &&
//     enteredPassword === password
// ) {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Username or Password");
// }



//  *Find whether a number is a 2-digit or 3-digit number.
// let num = 45;

// if (num >= 10 && num <= 99) {
//     console.log("2-digit number");
// } else if (num >= 100 && num <= 999) {
//     console.log("3-digit number");
// } else {
//     console.log("Neither 2-digit nor 3-digit");
// }




//  * Create a mini ATM balance checker.

// let total_balance = 5000

// let withDraw_amount = 11200 

// if(   withDraw_amount <= total_balance){
//     total_balance -= withDraw_amount
//     console.log("Withdrawal Successful");
//     console.log("Remaining Balance:", total_balance);
// }

// else{
//      console.log("Insufficient Balance");
// }





// * Simulate a traffic light system using switch.

// let signal = "yellow"

// switch(signal){
//     case "red" : 
//      console.log("stop")
//     break;

//     case "yellow" : 
//      console.log("ready")
//     break;

//     case "green" : 
//      console.log("go")
//     break;
//     default :
//     console.log("invalid signal")
// }



//  * Build a small marksheet generator using variables and conditionals.


let math = 56
let eng = 54
let hindi = 45
let sci = 78
let comp = 68

let total_Marks = math + eng + hindi + sci + comp
let percentage = total_Marks / 5
let grade

if(percentage >= 90){
    grade = "A"
}
else if(percentage >= 75){
    grade = "B"
}
else if(percentage >= 60){
    grade = "C"
}
else{
    grade = "D"
}


console.log("===== MARKSHEET =====")
console.log("Math : " , math)
console.log("english : " , eng)
console.log("hindi : " , hindi)
console.log("science : " , sci)
console.log("computer : " , comp)
console.log("")

console.log("Total Marks",total_Marks)
console.log("Percentage",percentage)
console.log("Grade " , grade)