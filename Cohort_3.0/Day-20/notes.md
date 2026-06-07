# Day 20: Object-Oriented Programming (OOPs) in JavaScript - Deep Dive Notes

---

## 1. The Problem: Don't Repeat Yourself (DRY)

### What is the DRY Principle?
- **Principle**: "Don't Repeat Yourself"
- **Goal**: Avoid writing same code multiple times
- **Solution**: Create reusable templates/blueprints

### The Problem Without Templates

```javascript
// ❌ Creating same objects repeatedly (violates DRY)
let song1 = {
    name: "Hamari Adhuri Kahani",
    artist: "Vijay",
    year: 2009,
    duration: 5.30
};

let song2 = {
    name: "Saat Samundar",
    artist: "Sunny Deol",
    year: 2001,
    duration: 4.45
};

let song3 = {
    name: "Kal Ho Naa Ho",
    artist: "A.R. Rahman",
    year: 2003,
    duration: 5.15
};

// If you need 1000 songs, you'd write this 1000 times!
// Problems:
// - Repetitive code
// - Hard to maintain
// - Prone to errors
// - Wastes time
```

### The Solution: Use a Template/Blueprint

```javascript
// ✅ Create a blueprint (constructor function or class)
function CreateSong(name, artist, year, duration) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.duration = duration;
}

// Now create any number of songs easily
let song1 = new CreateSong("Hamari Adhuri Kahani", "Vijay", 2009, 5.30);
let song2 = new CreateSong("Saat Samundar", "Sunny Deol", 2001, 4.45);
let song3 = new CreateSong("Kal Ho Naa Ho", "A.R. Rahman", 2003, 5.15);

// Create 1000 songs without repeating code!
for (let i = 1; i <= 1000; i++) {
    let song = new CreateSong(`Song ${i}`, "Artist", 2023, 5.00);
}
```

---

## 2. Constructor Functions (ES5 Way)

### What is a Constructor Function?
- **Purpose**: Blueprint for creating objects with same structure
- **Pattern**: Function that creates and initializes objects
- **Called with**: `new` keyword
- **Sets up**: `this` context for new object
- **ES5 Standard**: Before ES6 classes existed

### Constructor Function Syntax

```javascript
function ObjectName(param1, param2, param3) {
    this.property1 = param1;
    this.property2 = param2;
    this.property3 = param3;
    
    this.method = function() {
        // Method code
    };
}

// Creating instances
let instance1 = new ObjectName("value1", "value2", "value3");
let instance2 = new ObjectName("valueA", "valueB", "valueC");
```

### How Constructor Functions Work

```javascript
// Step-by-step execution:
function CreateBook(bookName, authoreName, pages) {
    // Step 1: new keyword creates empty object
    // Step 2: this refers to new object
    
    this.bookName = bookName;        // Assign properties
    this.authoreName = authoreName;
    this.pages = pages;
    
    this.displayInfo = function() {
        console.log(`${this.bookName} by ${this.authoreName}`);
    };
    
    // Step 3: Constructor returns the object
}

// Creating instances
let book1 = new CreateBook("War and Peace", "Leo Tolstoy", 600);
let book2 = new CreateBook("Divine Comedy", "Dante", 800);

console.log(book1);  // { bookName: "War and Peace", ... }
console.log(book2);  // { bookName: "Divine Comedy", ... }

book1.displayInfo();  // "War and Peace by Leo Tolstoy"
book2.displayInfo();  // "Divine Comedy by Dante"
```

### Constructor Function with Methods

```javascript
function Car(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    
    // Method 1: Display car info
    this.displayInfo = function() {
        console.log(`${this.year} ${this.color} ${this.brand} ${this.model}`);
    };
    
    // Method 2: Start car
    this.start = function() {
        console.log(`${this.brand} started!`);
    };
    
    // Method 3: Stop car
    this.stop = function() {
        console.log(`${this.brand} stopped!`);
    };
}

// Create multiple car instances
let car1 = new Car("Toyota", "Camry", 2023, "Blue");
let car2 = new Car("Honda", "Civic", 2022, "Red");

car1.displayInfo();  // "2023 Blue Toyota Camry"
car1.start();        // "Toyota started!"
car2.stop();         // "Honda stopped!"
```

### Important Notes on Constructor Functions

```javascript
// ✅ Constructor functions use PascalCase (first letter capital)
function CreateUser(name, age) { }

// ❌ Not PascalCase
function createUser(name, age) { }

// ✅ Must use 'new' keyword
let user = new CreateUser("Ali", 25);

// ❌ Without 'new' keyword - creates global variables
let user = CreateUser("Ali", 25);  // Doesn't work as intended
```

---

## 3. ES6 Classes

### What is a Class?
- **Modern Syntax**: Cleaner way to create objects (ES6+)
- **Syntactic Sugar**: Similar to constructor functions but prettier
- **Blueprint**: Template for creating objects
- **Methods**: Functions inside class
- **Constructor**: Special method that runs when object is created

### Class Syntax

```javascript
class ClassName {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }
    
    method1() {
        // Method code
    }
    
    method2() {
        // Method code
    }
}

// Creating instances
let obj1 = new ClassName("value1", "value2");
let obj2 = new ClassName("valueA", "valueB");
```

### Class Example: Student

```javascript
class Student {
    constructor(firstName, lastName, email, rollNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.rollNo = rollNo;
    }
    
    // Method 1: Display full name
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    // Method 2: Display profile
    displayProfile() {
        console.log(`
            Name: ${this.fullName()}
            Email: ${this.email}
            Roll No: ${this.rollNo}
        `);
    }
    
    // Method 3: Update email
    updateEmail(newEmail) {
        this.email = newEmail;
        console.log(`Email updated to: ${newEmail}`);
    }
}

// Creating student instances
let student1 = new Student("Krishna", "Gupta", "krishna@email.com", 101);
let student2 = new Student("Priya", "Singh", "priya@email.com", 102);

student1.displayProfile();
// Name: Krishna Gupta
// Email: krishna@email.com
// Roll No: 101

student1.updateEmail("krishna.new@email.com");
// Email updated to: krishna.new@email.com
```

### Class Example: Bank Account

```javascript
class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
    }
    
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive");
            return;
        }
        this.balance += amount;
        this.transactions.push(`Deposit: +${amount}`);
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        this.transactions.push(`Withdrawal: -${amount}`);
        console.log(`Withdrawn: ${amount}. New balance: ${this.balance}`);
    }
    
    getBalance() {
        return this.balance;
    }
    
    printStatement() {
        console.log(`\n--- Account Statement for ${this.accountHolder} ---`);
        console.log(`Current Balance: ${this.balance}`);
        console.log("Transaction History:");
        this.transactions.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
    }
}

// Creating bank accounts
let account1 = new BankAccount("Ali", 5000);
account1.deposit(2000);      // Deposited: 2000. New balance: 7000
account1.withdraw(1500);     // Withdrawn: 1500. New balance: 5500
account1.printStatement();   // Prints full statement
```

### Class Features

```javascript
class Person {
    // 1. Constructor - runs when new instance is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // 2. Regular Method
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
    
    // 3. Method with parameters
    celebrateBirthday(yearsAdded = 1) {
        this.age += yearsAdded;
        console.log(`Happy ${this.age}th birthday!`);
    }
    
    // 4. Method returning value
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
    
    // 5. Method with calculations
    isAdult() {
        return this.age >= 18;
    }
}

let person1 = new Person("Ahmed", 25);
person1.greet();              // "Hello, I'm Ahmed"
person1.celebrateBirthday(1); // "Happy 26th birthday!"
console.log(person1.getInfo()); // "Ahmed is 26 years old"
console.log(person1.isAdult()); // true
```

---

## 4. Prototype Chaining (Prototype Inheritance)

### What is Prototype?
- **Definition**: Object that stores shared methods and properties
- **Purpose**: Allows objects to inherit from other objects
- **Memory Efficient**: Methods shared, not duplicated
- **Inheritance Chain**: `__proto__` links objects

### Understanding Prototypes

```javascript
// Every JavaScript object has a __proto__ property
let obj = {};
console.log(obj.__proto__);  // Points to Object.prototype

// Function also has prototype
function MyFunc() {}
console.log(MyFunc.prototype);  // Object { constructor: f }
```

### Prototype Chaining Example: Family Inheritance

```javascript
// Grandfather (dada)
let grandpa = {
    name: "Ramlal",
    age: 80,
    land: "100 acres",
    legacy: "Family business"
};

// Father (papa)
let father = {
    name: "Rakesh",
    age: 50,
    shop: "Rakesh Dress Collections"
};

// Son (beta)
let son = {
    name: "Munna",
    age: 20
};

// Set up prototype chain: son → father → grandpa
son.__proto__ = father;
father.__proto__ = grandpa;

// Now son can access father's and grandpa's properties
console.log(son.name);       // "Munna" (own property)
console.log(son.shop);       // "Rakesh Dress Collections" (inherited from father)
console.log(son.land);       // "100 acres" (inherited from grandpa)
console.log(son.legacy);     // "Family business" (inherited from grandpa)

// Prototype chain: son → father → grandpa → Object.prototype
```

### How JavaScript Searches Properties

```javascript
// When you access son.land, JavaScript searches:
// 1. Does son have 'land'? NO
// 2. Does son.__proto__ (father) have 'land'? NO
// 3. Does son.__proto__.__proto__ (grandpa) have 'land'? YES → returns "100 acres"

// Visualization:
// son { name: "Munna" }
//  ↓
// son.__proto__ (father) { name: "Rakesh", shop: "..." }
//  ↓
// father.__proto__ (grandpa) { name: "Ramlal", land: "100 acres", ... }
//  ↓
// Object.prototype
```

### Prototype with Arrays

```javascript
// Arrays inherit from Array.prototype
let arr = [1, 2, 3];

// Can use Array methods
arr.push(4);           // Method from Array.prototype
arr.pop();             // Method from Array.prototype
arr.map(x => x * 2);   // Method from Array.prototype

// Prototype chain for arrays:
// arr → Array.prototype → Object.prototype
```

---

## 5. Classical Inheritance with Classes

### What is Inheritance?
- **Concept**: Child class inherits from parent class
- **Keyword**: `extends`
- **Super**: Access parent class constructor/methods
- **Method Override**: Child class can redefine parent methods

### Simple Inheritance Example

```javascript
// Parent class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    describe() {
        console.log(`${this.name} is a ${this.species}`);
    }
    
    makeSound() {
        console.log("Some generic sound");
    }
}

// Child class inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");  // Call parent constructor
        this.breed = breed;
    }
    
    // Override makeSound
    makeSound() {
        console.log("Woof! Woof!");
    }
}

// Creating instances
let dog1 = new Dog("Buddy", "Golden Retriever");
dog1.describe();    // "Buddy is a Dog"
dog1.makeSound();   // "Woof! Woof!"
```

### Complete Example: User and Admin Classes

```javascript
// Parent class: User
class User {
    constructor(firstName, lastName, contactNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNo = contactNo;
    }
    
    greet() {
        console.log(`Welcome User ${this.firstName}`);
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Child class: Admin (extends User)
class Admin extends User {
    constructor(firstName, lastName, contactNo, isAdmin) {
        super(firstName, lastName, contactNo);  // Initialize parent properties
        this.isAdmin = isAdmin;
    }
    
    // Override parent's greet method
    greet() {
        console.log(`Welcome Admin ${this.firstName}`);
    }
    
    // Admin-specific methods
    addCourse(courseName) {
        console.log(`Course "${courseName}" added by Admin ${this.firstName}`);
    }
    
    removeCourse(courseName) {
        console.log(`Course "${courseName}" removed by Admin ${this.firstName}`);
    }
    
    viewUsers() {
        console.log("Viewing all users...");
    }
}

// Creating instances
let user1 = new User("Krishna", "Gupta", 9876543210);
user1.greet();           // "Welcome User Krishna"
console.log(user1.getFullName());  // "Krishna Gupta"

let admin1 = new Admin("Anup", "Ji", 5876468, true);
admin1.greet();          // "Welcome Admin Anup"
admin1.addCourse("JavaScript");    // "Course "JavaScript" added by Admin Anup"
admin1.removeCourse("Python");     // "Course "Python" removed by Admin Anup"

// User doesn't have admin methods
// user1.addCourse("HTML");  // ❌ Error: user1.addCourse is not a function
```

### Understanding super()

```javascript
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);  // Call parent constructor
        // Now 'this.name' is set by parent
        this.age = age;
    }
}

let child = new Child("Ali", 10);
console.log(child.name);  // "Ali" (set by parent constructor via super)
console.log(child.age);   // 10 (set by child constructor)
```

### Multi-level Inheritance

```javascript
// Grandparent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Parent class
class Mammal extends Animal {
    constructor(name, fur) {
        super(name);
        this.fur = fur;
    }
    
    hasFur() {
        console.log(`${this.name} has ${this.fur} fur`);
    }
}

// Child class
class Dog extends Mammal {
    constructor(name, fur, breed) {
        super(name, fur);
        this.breed = breed;
    }
    
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}

let dog = new Dog("Buddy", "brown", "Golden Retriever");
dog.eat();       // "Buddy is eating" (from Animal)
dog.hasFur();    // "Buddy has brown fur" (from Mammal)
dog.bark();      // "Buddy barks: Woof!" (from Dog)

// Prototype chain:
// dog → Dog.prototype → Mammal.prototype → Animal.prototype → Object.prototype
```

---

## 6. Method Overriding

### What is Method Overriding?
- **Definition**: Child class provides its own implementation of parent's method
- **Replaces**: Parent's method with child's version
- **Use Case**: Customize behavior for specific child class

### Method Override Example

```javascript
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    
    start() {
        console.log(`${this.brand} is starting...`);
    }
    
    stop() {
        console.log(`${this.brand} has stopped`);
    }
}

class Car extends Vehicle {
    constructor(brand, doors) {
        super(brand);
        this.doors = doors;
    }
    
    // Override start method
    start() {
        console.log(`Car ${this.brand} starting with engine sound: VROOM!`);
    }
}

class Bike extends Vehicle {
    // Override start method differently
    start() {
        console.log(`Bike ${this.brand} starting with: Chirp Chirp!`);
    }
}

let car = new Car("Toyota", 4);
car.start();  // "Car Toyota starting with engine sound: VROOM!"

let bike = new Bike("Honda");
bike.start(); // "Bike Honda starting with: Chirp Chirp!"
```

---

## 7. Important Concepts

### Property vs Method

```javascript
class Person {
    constructor(name) {
        // Properties - store data
        this.name = name;
        this.age = 0;
    }
    
    // Methods - perform actions
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    haveBirthday() {
        this.age++;
    }
}

let person = new Person("Ali");
console.log(person.name);      // "Ali" (property)
console.log(person.greet());   // "Hello, I'm Ali" (method)
person.haveBirthday();         // (method that modifies property)
```

### instanceof Operator

```javascript
class Animal {}
class Dog extends Animal {}

let dog = new Dog();

console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true
console.log(dog instanceof Object);  // true

let obj = {};
console.log(obj instanceof Dog);     // false
```

### Creating Multiple Instances

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Creating multiple instances
let products = [
    new Product("Laptop", 50000),
    new Product("Phone", 20000),
    new Product("Tablet", 15000)
];

products.forEach(product => {
    console.log(`${product.name}: ₹${product.price}`);
});
```

---

## 8. Real-World Examples

### Example 1: E-commerce System

```javascript
class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    isAvailable() {
        return this.stock > 0;
    }
    
    updateStock(quantity) {
        this.stock -= quantity;
    }
}

class DigitalProduct extends Product {
    constructor(id, name, price, downloadUrl) {
        super(id, name, price, Infinity);  // Infinite stock
        this.downloadUrl = downloadUrl;
    }
    
    getDownloadLink() {
        return this.downloadUrl;
    }
}

class PhysicalProduct extends Product {
    constructor(id, name, price, stock, weight) {
        super(id, name, price, stock);
        this.weight = weight;  // in kg
    }
    
    calculateShipping(distance) {
        // Shipping cost based on weight and distance
        return (this.weight * distance) / 100;
    }
}

// Creating products
let ebook = new DigitalProduct(1, "JavaScript Guide", 299, "https://...");
let book = new PhysicalProduct(2, "Physical Book", 500, 50, 0.5);

console.log(ebook.getDownloadLink());  // "https://..."
console.log(book.calculateShipping(100));  // Shipping cost
```

### Example 2: School Management System

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age, subject, experience) {
        super(name, age);
        this.subject = subject;
        this.experience = experience;
    }
    
    teach() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }
    
    assignGrade(studentName, grade) {
        console.log(`${this.name} gave ${grade} to ${studentName}`);
    }
}

class Student extends Person {
    constructor(name, age, rollNo, grade) {
        super(name, age);
        this.rollNo = rollNo;
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Usage
let teacher = new Teacher("Mr. Kumar", 35, "Mathematics", 10);
let student = new Student("Raj", 15, 101, 10);

teacher.teach();              // "Mr. Kumar is teaching Mathematics"
student.study();              // "Raj is studying"
teacher.assignGrade("Raj", "A+");  // "Mr. Kumar gave A+ to Raj"
```

---

## 9. Common Mistakes

### Mistake 1: Forgetting 'new' keyword

```javascript
❌ let user = User("Ali", 25);  // Won't work properly

✅ let user = new User("Ali", 25);  // Correct
```

### Mistake 2: Not calling super() in constructor

```javascript
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    ❌ constructor(name, age) {
        // Forgot super(name)
        this.age = age;  // Error: 'this' not initialized
    }
    
    ✅ constructor(name, age) {
        super(name);  // Must call super first
        this.age = age;
    }
}
```

### Mistake 3: Accessing child properties in parent

```javascript
class Parent {
    greet() {
        // ❌ This property doesn't exist in parent
        console.log(this.childProperty);
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.childProperty = "value";
    }
}

let child = new Child();
child.greet();  // undefined (childProperty not in parent context)
```

### Mistake 4: Method not returning value

```javascript
class Calculator {
    ❌ add(a, b) {
        console.log(a + b);  // Just prints, doesn't return
    }
    
    ✅ add(a, b) {
        return a + b;  // Returns the result
    }
}
```

---

## 10. Key Takeaways

### OOPs Concepts ✅
- **DRY Principle**: Don't Repeat Yourself
- **Constructor Functions**: ES5 blueprints
- **Classes**: ES6 cleaner syntax
- **Inheritance**: Child extends parent
- **Prototype Chain**: Object hierarchy

### Constructor Functions vs Classes ✅
- Constructor Functions: Old ES5 way
- Classes: Modern ES6+ way (preferred)
- Classes are syntactic sugar over constructors
- Classes are cleaner and easier to understand

### Inheritance ✅
- `extends`: Child inherits from parent
- `super()`: Call parent constructor
- `super.method()`: Call parent method
- Method Overriding: Custom child implementation

### Best Practices ✅
- Use PascalCase for class names
- Always call `super()` in child constructor
- Use meaningful property/method names
- Keep classes focused and single-purpose
- Use `instanceof` to check types

---

## 11. Practice Exercises

```javascript
// Exercise 1: Create a Movie class
class Movie {
    constructor(title, director, year, rating) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }
    
    displayInfo() {
        console.log(`${this.title} (${this.year}) - Directed by ${this.director}`);
    }
    
    getRating() {
        return `Rating: ${this.rating}/10`;
    }
}

let movie1 = new Movie("Inception", "Christopher Nolan", 2010, 8.8);
movie1.displayInfo();  // "Inception (2010) - Directed by Christopher Nolan"
console.log(movie1.getRating());  // "Rating: 8.8/10"

// Exercise 2: Create inheritance with Animal and Cat
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Cat extends Animal {
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}

let cat = new Cat("Whiskers");
cat.sleep();  // "Whiskers is sleeping"
cat.meow();   // "Whiskers says: Meow!"

// Exercise 3: Create a BankAccount with deposit/withdraw
class Account {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn ₹${amount}. New balance: ₹${this.balance}`);
    }
}

let account = new Account("Ali", 10000);
account.deposit(5000);   // "Deposited ₹5000. New balance: ₹15000"
account.withdraw(3000);  // "Withdrawn ₹3000. New balance: ₹12000"
```

---

This completes the comprehensive notes for Day 20!
