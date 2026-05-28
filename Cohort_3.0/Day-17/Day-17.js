//  ?  objects 

//  *  Creating Objects
let person = {
    name: "Aman",
    age: 25,
    city: "Bhopal",
    isStudent: true
};

//  * Accessing Properties
// Dot notation (preferred)
console.log(person.name);   // "Aman"

// Bracket notation
console.log(person["name"]);   // "Aman"



//  * Adding, Updating, Deleting Properties
let person = { name: "Aman", age: 25 };

// Add
person.city = "Bhopal";
person["country"] = "India";

// Update
person.age = 26;

// Delete
delete person.city;

console.log(person);
// { name: "Aman", age: 26, country: "India" }




//  * Methods — Functions Inside Objects
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3));        // 8
console.log(calculator.subtract(10, 4));  // 6




// * Shorthand method syntax (ES6):

let calculator = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; }
};




//  *  The this Keyword (brief intro) 

let person = {
    name: "Aman",
    greet() {
        console.log("Hello, I am " + this.name);
    }
};

person.greet();   // "Hello, I am Aman"




// *   Nested Objects
let user = {
    name: "Aman",
    address: {
        city: "Bhopal",
        state: "MP",
        pincode: 462001
    },
    hobbies: ["reading", "coding"]
};

console.log(user.address.city);   // "Bhopal"
console.log(user.hobbies[0]);     // "reading"



//  * Object Destructuring
let person = { name: "Aman", age: 25, city: "Bhopal" };

let { name, age } = person;
console.log(name, age);   // "Aman" 25

//  Rename while destructuring:
let { name: fullName, age: years } = person;
console.log(fullName, years);   // "Aman" 25


//  Default values:
let { name, country = "India" } = person;
console.log(country);   // "India" (since person has no country)

// Nested destructuring:
let user = { name: "Aman", address: { city: "Bhopal" } };
let { address: { city } } = user;
console.log(city);   // "Bhopal"





// *   Spread with Objects
let person = { name: "Aman", age: 25 };

// Copy
let copy = { ...person };

// Combine
let extra = { city: "Bhopal", country: "India" };
let combined = { ...person, ...extra };
// { name: "Aman", age: 25, city: "Bhopal", country: "India" }

// Override
let updated = { ...person, age: 26 };
// { name: "Aman", age: 26 }






// * Useful Object Methods

let person = { name: "Aman", age: 25, city: "Bhopal" };

console.log(Object.keys(person));    // ["name", "age", "city"]
console.log(Object.values(person));  // ["Aman", 25, "Bhopal"]
console.log(Object.entries(person)); // [["name", "Aman"], ["age", 25], ["city", "Bhopal"]]

//   Object.entries is especially useful with array iteration methods:

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


//  Object.assign — Merge objects (older syntax)
let merged = Object.assign({}, person, { age: 26, country: "India" });


// Object.freeze and Object.seal 
let frozen = Object.freeze({ name: "Aman" });
frozen.name = "Raj";   // silently fails (or throws in strict mode)
console.log(frozen.name);   // "Aman"

let sealed = Object.seal({ name: "Aman" });
sealed.name = "Raj";       // ✅ can modify existing
sealed.age = 25;           // ❌ cannot add new properties


// - `freeze` — fully immutable.
// - `seal` — can modify existing properties, but can't add or delete.


//  * Looping Through Objects 

//  * for...in loop

let person = { name: "Aman", age: 25, city: "Bhopal" };

for (let key in person) {
    console.log(key, ":", person[key]);
}



// * Object.keys with forEach

Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});



// * Object.entries with destructuring (cleanest) 
for (let [key, value] of Object.entries(person)) {
    console.log(key, ":", value);
}