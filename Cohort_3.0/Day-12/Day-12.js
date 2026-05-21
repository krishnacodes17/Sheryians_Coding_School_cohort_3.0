//   condition ? true : false

let age = 18;
let isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult); // Output: Yes, you are an adult.

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(`Your grade is: ${grade}`); // Output: Your grade is: B 

//  conditional statements
let temperature = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
} else if (temperature > 20) {
    console.log("It's a warm day.");
} else {
    console.log("It's a cold day.");
}  // Output: It's a warm day.


switch (new Date().getDay()) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;  
    case 4:
        console.log("Today is Thursday.");
        break;
}
