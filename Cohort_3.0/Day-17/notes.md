# Day-17 Notes: Objects in JavaScript

## Overview
Day-17 covers JavaScript objects - the most important data structure for organizing and managing data. Objects store **key-value pairs** and are fundamental to JavaScript programming.

---

## 1. Creating Objects

### Object Literal Syntax:
```javascript
let person = {
    name: "Aman",
    age: 25,
    city: "Bhopal",
    isStudent: true
};
```

### Key Points:
- **Keys** (properties) are names
- **Values** can be any data type (strings, numbers, booleans, arrays, other objects, functions)
- Separated by **commas**
- Last property should **not** have a trailing comma (though modern JS allows it)

### Different Data Types as Values:
```javascript
let user = {
    name: "Aman",              // string
    age: 25,                   // number
    isActive: true,            // boolean
    skills: ["JS", "CSS"],     // array
    address: { city: "Bhopal" },  // object
    greet: function() { }      // function (method)
};
```

---

## 2. Accessing Properties

### Dot Notation (Preferred):
```javascript
let person = { name: "Aman", age: 25 };
console.log(person.name);   // "Aman"
console.log(person.age);    // 25
```

### Bracket Notation:
```javascript
console.log(person["name"]);   // "Aman"
console.log(person["age"]);    // 25
```

### When to Use Each:
- **Dot notation**: Regular property names (recommended)
- **Bracket notation**: Property names with spaces, numbers, or dynamic keys

```javascript
let obj = {
    "first name": "Aman",
    123: "number key"
};

console.log(obj["first name"]);  // "Aman" (dot won't work with spaces)
console.log(obj[123]);           // "number key"

// Dynamic key access
let key = "name";
console.log(obj[key]);  // Gets the property whose name is in variable 'key'
```

---

## 3. Adding, Updating, Deleting Properties

### Add New Property:
```javascript
let person = { name: "Aman", age: 25 };

// Dot notation
person.city = "Bhopal";

// Bracket notation
person["country"] = "India";

console.log(person);
// { name: "Aman", age: 25, city: "Bhopal", country: "India" }
```

### Update Existing Property:
```javascript
let person = { name: "Aman", age: 25 };
person.age = 26;
console.log(person.age);  // 26
```

### Delete Property:
```javascript
let person = { name: "Aman", age: 25, city: "Bhopal" };
delete person.city;
console.log(person);  // { name: "Aman", age: 25 }
```

### Check if Property Exists:
```javascript
let person = { name: "Aman", age: 25 };

console.log("name" in person);      // true
console.log("city" in person);      // false
console.log(person.city === undefined);  // true (also works)
```

---

## 4. Methods — Functions Inside Objects

### What are Methods?
- **Functions stored as object properties**
- Can access object data using `this` keyword
- Represent **actions** the object can perform

### Traditional Syntax:
```javascript
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
```

### ES6 Shorthand Syntax (Preferred):
```javascript
let calculator = {
    add(a, b) { 
        return a + b; 
    },
    subtract(a, b) { 
        return a - b; 
    }
};
```

### Practical Example:
```javascript
let user = {
    name: "Aman",
    email: "aman@example.com",
    
    printInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    },
    
    updateEmail(newEmail) {
        this.email = newEmail;
    }
};

user.printInfo();           // Name: Aman, Email: aman@example.com
user.updateEmail("new@example.com");
user.printInfo();           // Name: Aman, Email: new@example.com
```

---

## 5. The this Keyword

### What is this?
- Refers to the **object that the method belongs to**
- Allows access to object's own properties
- Value depends on **context** (which object called the method)

### Example:
```javascript
let person = {
    name: "Aman",
    greet() {
        console.log("Hello, I am " + this.name);
    }
};

person.greet();   // "Hello, I am Aman"
```

### Another Example:
```javascript
let user1 = {
    name: "Aman",
    sayName() {
        console.log("My name is " + this.name);
    }
};

let user2 = {
    name: "Priya",
    sayName() {
        console.log("My name is " + this.name);
    }
};

user1.sayName();  // "My name is Aman"
user2.sayName();  // "My name is Priya"
```

### Key Point:
- `this` refers to the **object that called the method**
- Different objects calling the same method will have different `this` values

---

## 6. Nested Objects

### Creating Nested Objects:
```javascript
let user = {
    name: "Aman",
    address: {
        city: "Bhopal",
        state: "MP",
        pincode: 462001
    },
    hobbies: ["reading", "coding"]
};
```

### Accessing Nested Properties:
```javascript
console.log(user.address.city);      // "Bhopal"
console.log(user.address.state);     // "MP"
console.log(user.hobbies[0]);        // "reading"
```

### Adding to Nested Objects:
```javascript
user.address.country = "India";
console.log(user.address.country);   // "India"
```

### Real-World Example:
```javascript
let company = {
    name: "TechCorp",
    employees: [
        { name: "Aman", department: "IT" },
        { name: "Priya", department: "HR" }
    ],
    office: {
        location: "Bhopal",
        floors: 5
    }
};

console.log(company.employees[0].name);   // "Aman"
console.log(company.office.floors);       // 5
```

---

## 7. Object Destructuring

### What is Object Destructuring?
- **Extract specific properties** from an object
- **Create variables** with those values
- Cleaner alternative to accessing properties repeatedly

### Basic Destructuring:
```javascript
let person = { name: "Aman", age: 25, city: "Bhopal" };

// Old way
let name = person.name;
let age = person.age;

// New way (destructuring)
let { name, age } = person;
console.log(name, age);   // "Aman" 25
```

### Rename Properties While Destructuring:
```javascript
let person = { name: "Aman", age: 25 };

let { name: fullName, age: years } = person;
console.log(fullName, years);   // "Aman" 25
```

### Default Values:
```javascript
let person = { name: "Aman", age: 25 };

let { name, country = "India" } = person;
console.log(country);   // "India" (uses default since person has no country)
```

### Nested Destructuring:
```javascript
let user = { 
    name: "Aman", 
    address: { city: "Bhopal", state: "MP" } 
};

let { address: { city, state } } = user;
console.log(city, state);   // "Bhopal" "MP"
```

### Destructuring in Function Parameters:
```javascript
function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

greet({ name: "Aman", age: 25 });  // "Hello Aman, you are 25 years old"
```

---

## 8. Spread Operator with Objects

### What is Spread (...)?
- **Copies all properties** from one object to another
- Creates a **shallow copy**
- Useful for merging and updating objects

### Copy an Object:
```javascript
let person = { name: "Aman", age: 25 };

let copy = { ...person };
copy.age = 30;

console.log(person.age);  // 25 (unchanged)
console.log(copy.age);    // 30
```

### Merge Objects:
```javascript
let person = { name: "Aman", age: 25 };
let extra = { city: "Bhopal", country: "India" };

let combined = { ...person, ...extra };
console.log(combined);
// { name: "Aman", age: 25, city: "Bhopal", country: "India" }
```

### Override Properties:
```javascript
let person = { name: "Aman", age: 25 };

let updated = { ...person, age: 26 };
console.log(updated);  // { name: "Aman", age: 26 }
```

### Multiple Spreads with Order:
```javascript
let defaults = { theme: "light", language: "en" };
let userPrefs = { theme: "dark" };

let settings = { ...defaults, ...userPrefs };
console.log(settings);  // { theme: "dark", language: "en" }
// userPrefs overrides defaults
```

---

## 9. Useful Object Methods

### Object.keys() — Get All Keys:
```javascript
let person = { name: "Aman", age: 25, city: "Bhopal" };

console.log(Object.keys(person));  
// ["name", "age", "city"]
```

### Object.values() — Get All Values:
```javascript
console.log(Object.values(person));  
// ["Aman", 25, "Bhopal"]
```

### Object.entries() — Get Key-Value Pairs:
```javascript
console.log(Object.entries(person));
// [["name", "Aman"], ["age", 25], ["city", "Bhopal"]]
```

### Using Object.entries with forEach:
```javascript
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
// name: Aman
// age: 25
// city: Bhopal
```

### Object.assign() — Merge Objects (Older Syntax):
```javascript
let person = { name: "Aman", age: 25 };
let merged = Object.assign({}, person, { age: 26, country: "India" });
console.log(merged);
// { name: "Aman", age: 26, country: "India" }

// Note: Spread operator is now preferred
let merged2 = { ...person, age: 26, country: "India" };  // Modern way
```

### Object.freeze() — Make Immutable:
```javascript
let frozen = Object.freeze({ name: "Aman" });

frozen.name = "Raj";   // Silently fails (or throws error in strict mode)
frozen.age = 25;       // Cannot add new properties

console.log(frozen.name);  // "Aman" (unchanged)
```

### Object.seal() — Restrict Modifications:
```javascript
let sealed = Object.seal({ name: "Aman" });

sealed.name = "Raj";   // ✅ Can modify existing properties
sealed.age = 25;       // ❌ Cannot add new properties
delete sealed.name;    // ❌ Cannot delete properties

console.log(sealed.name);  // "Raj" (was modified)
```

### Quick Comparison:
| Method | Can Modify | Can Add | Can Delete |
|--------|-----------|--------|-----------|
| **Normal** | ✅ | ✅ | ✅ |
| **seal** | ✅ | ❌ | ❌ |
| **freeze** | ❌ | ❌ | ❌ |

---

## 10. Looping Through Objects

### Method 1: for...in Loop
```javascript
let person = { name: "Aman", age: 25, city: "Bhopal" };

for (let key in person) {
    console.log(key, ":", person[key]);
}
// name: Aman
// age: 25
// city: Bhopal
```

### Method 2: Object.keys() with forEach
```javascript
Object.keys(person).forEach(key => {
    console.log(key, ":", person[key]);
});
```

### Method 3: Object.entries() with Destructuring (Cleanest):
```javascript
for (let [key, value] of Object.entries(person)) {
    console.log(key, ":", value);
}
```

### Using Object.values() When You Only Need Values:
```javascript
Object.values(person).forEach(value => {
    console.log(value);
});
// Aman
// 25
// Bhopal
```

---

## Practical Examples

### Example 1: Student Record
```javascript
let student = {
    name: "Aman",
    rollNo: 101,
    marks: {
        math: 85,
        english: 90,
        science: 88
    },
    
    getAverageMarks() {
        let marksArray = Object.values(this.marks);
        let sum = marksArray.reduce((a, b) => a + b, 0);
        return sum / marksArray.length;
    },
    
    isPass() {
        return this.getAverageMarks() >= 40;
    }
};

console.log(student.getAverageMarks());  // 87.67
console.log(student.isPass());           // true
```

### Example 2: Configuration Object
```javascript
let defaultConfig = {
    timeout: 5000,
    retries: 3,
    debug: false
};

let userConfig = {
    timeout: 10000,
    debug: true
};

let finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig);
// { timeout: 10000, retries: 3, debug: true }
```

### Example 3: Dynamic Property Access
```javascript
let user = { name: "Aman", age: 25, email: "aman@example.com" };

function getProperty(obj, key) {
    return obj[key] || "Property not found";
}

console.log(getProperty(user, "name"));      // "Aman"
console.log(getProperty(user, "phone"));     // "Property not found"
```

---

## Key Takeaways

✅ Objects store **key-value pairs**  
✅ Use **dot notation** for regular property names  
✅ Use **bracket notation** for dynamic or special property names  
✅ Methods are **functions inside objects**  
✅ **this** keyword refers to the object calling the method  
✅ Objects can be **nested** (objects within objects)  
✅ **Destructuring** extracts properties cleanly  
✅ **Spread operator (...)** copies and merges objects  
✅ **Object.keys/values/entries** help iterate objects  
✅ **freeze** makes object fully immutable  
✅ **seal** prevents adding/deleting but allows modifying  

### Most Common Use:
```javascript
// Create
let obj = { key: "value" };

// Access
console.log(obj.key);

// Update
obj.key = "new value";

// Loop
for (let [k, v] of Object.entries(obj)) { ... }
```
