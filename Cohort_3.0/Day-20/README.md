# JavaScript - Object-Oriented Programming (OOPs)

## Topics Covered in Day 20

### 1. The DRY Principle - Don't Repeat Yourself
- Problem: Creating similar objects repeatedly
- Solution: Use templates/blueprints
- Benefits: Code reusability, maintainability, efficiency
- Real-world scenario: Creating 1000 songs vs. repeating code 1000 times

### 2. Constructor Functions (ES5 Standard)
- What are constructor functions and their purpose
- Creating objects with consistent structure
- Using the `new` keyword
- `this` keyword and its role in constructors
- Properties and methods in constructor functions
- Creating multiple instances from single blueprint

### 3. ES6 Classes (Modern Standard)
- What are classes and advantages over constructor functions
- Class syntax and structure
- Constructor method special function
- Instance properties and methods
- Creating instances with `new` keyword
- Cleaner and more readable code
- Real-world examples: Student, BankAccount, Product classes

### 4. Prototype Chaining (Prototype Inheritance)
- Understanding prototypes and `__proto__`
- Prototype chain concept
- Property lookup mechanism in prototype chain
- Object hierarchy: object → Object.prototype
- Memory efficiency through shared methods
- Example: Family inheritance (grandpa → father → son)
- Prototype chain with built-in objects (Arrays, Strings)

### 5. Classical Inheritance with extends
- `extends` keyword for inheritance
- Child class inheriting from parent class
- `super()` constructor calling parent initialization
- Method overriding in child classes
- Parent and child methods coexistence
- Multi-level inheritance

### 6. super() Keyword
- Calling parent constructor
- Accessing parent methods
- Initialization order in inheritance
- Proper use of super() in derived classes

### 7. Method Overriding
- Child class providing own implementation
- Replacing parent method behavior
- Use cases for method overriding
- Different behavior in different child classes

### 8. instanceof Operator
- Checking if object is instance of class
- Inheritance hierarchy checking
- Type validation

### 9. Real-World Applications
- E-commerce system with Product, DigitalProduct, PhysicalProduct
- School management system with Person, Teacher, Student
- Banking system with Account management
- User role system with User, Admin, Moderator
- Game development with Entity, Player, Enemy classes

### 10. Important Concepts
- Properties vs Methods distinction
- Creating multiple instances
- Encapsulation and data hiding
- Code organization and structure
- Scalable architecture

### 11. Common Mistakes to Avoid
- Forgetting `new` keyword
- Not calling `super()` in child constructor
- Accessing child properties in parent methods
- Methods not returning values
- Incorrect class naming conventions

### 12. Constructor Functions vs Classes Comparison
- ES5 old way vs ES6 new way
- Syntax differences
- Functionality comparison
- Modern best practices
- When to use each approach

### 13. Encapsulation and Data Privacy
- Private vs public properties
- Method access control
- Data protection in classes
- Information hiding principles

### 14. Best Practices
- Use PascalCase for class names
- Use camelCase for properties/methods
- Single Responsibility Principle (SRP)
- Inheritance for "is-a" relationships
- Code organization and naming conventions
- Keep classes focused and reusable

## Important Concepts to Remember

✅ **DRY Principle**: Avoid repeating code, use templates
✅ **Constructor Functions**: Old ES5 way to create objects
✅ **Classes**: Modern ES6 way, cleaner syntax
✅ **new Keyword**: Required to create instances
✅ **this**: Refers to the object being created
✅ **extends**: Child class inherits from parent
✅ **super()**: Initialize parent properties in child
✅ **Prototype Chain**: How objects inherit properties
✅ **Method Override**: Child redefines parent method
✅ **instanceof**: Check if object is instance of class
✅ **Inheritance**: "Is-a" relationship (Dog is an Animal)
✅ **Composition**: "Has-a" relationship (User has an Address)
