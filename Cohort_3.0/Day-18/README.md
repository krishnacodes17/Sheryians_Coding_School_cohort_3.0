# JavaScript - How It Works Under the Hood

## Topics Covered in Day 18

### 1. Fundamental Concepts
- **JavaScript is Single-Threaded**: Executes one task at a time, no parallelism
- **JavaScript is Synchronous**: Operations complete in order before moving to next
- **Interpreted and JIT-Compiled**: Code is parsed, then optimized hot code gets compiled

### 2. JavaScript Engines
- What are JavaScript engines (V8, SpiderMonkey, JavaScriptCore)
- How engines work: Parsing → Compilation → Execution
- Different engines in different browsers/environments

### 3. Execution Context (EC)
- **Global Execution Context (GEC)**: Created when program starts, one per program
- **Function Execution Context (FEC)**: Created when function is called, one per call
- **Two Phases**: 
  - Phase 1: Memory Allocation (hoisting)
  - Phase 2: Code Execution

### 4. The Call Stack
- What is Call Stack (LIFO - Last In First Out)
- Visualizing function execution order
- How functions are pushed and popped
- Understanding execution flow

### 5. Stack Overflow
- What causes Stack Overflow (infinite recursion)
- RangeError: Maximum call stack size exceeded
- Safe recursion with base cases
- Preventing infinite loops

### 6. Memory Heap
- What is Memory Heap (unordered collection)
- Stack vs Heap comparison
- Memory allocation for objects and arrays
- Garbage Collection and memory cleanup
- Memory leaks and prevention

### 7. Hoisting
- How hoisting works (declarations moved to top)
- Variable hoisting with `var`
- Function declaration hoisting
- Function expression hoisting (NOT hoisted)
- Difference between declaration and assignment

### 8. Temporal Dead Zone (TDZ)
- What is TDZ (period before variable initialization)
- Applies to: `let` and `const`
- ReferenceError when accessing variables in TDZ
- TDZ visualization in different scopes
- `var` vs `let`/`const` hoisting difference

### 9. Lexical Scope
- Variables accessible based on WHERE function is WRITTEN
- Inner functions can access outer variables
- Scope chain for nested functions
- Scope is determined at definition time, not execution

### 10. Scope Chain
- Series of scopes JavaScript searches for variables
- Search order: Inner → Outer → Global
- Variable lookup and shadowing
- Scope chain with nested functions

### 11. Block Scope
- Variables confined to `{ }` blocks
- Applies to: `let` and `const`
- Does NOT apply to: `var` (function scoped)
- Block scope in loops, if statements, etc.

### 12. Closures
- Inner function "remembers" outer function variables
- Persistence of outer variables in memory
- Private variables pattern
- Closure use cases and real-world applications
- Closure in loops (common mistakes and solutions)
- Guessing game with closures example

### 13. Function Declarations vs Function Expressions
- Function Declarations: Fully hoisted, can call before declaration
- Function Expressions: NOT hoisted (if using let/const)
- Named vs Anonymous function expressions
- Comparison of hoisting behavior

### 14. Scope and Call Stack Relationship
- How scope chain and call stack work together
- Execution order vs variable accessibility
- Memory management during function calls

### 15. Types of Errors
- **SyntaxError**: Invalid syntax (caught during parsing)
- **ReferenceError**: Variable/function not found or in TDZ
- **TypeError**: Operation applied to wrong data type
- **RangeError**: Value out of acceptable range
- Error hierarchy and common error causes

## Important Concepts to Remember

✅ **Single-threaded & Synchronous**: Code runs line by line, one operation at a time
✅ **Execution Context**: Environment where code executes, has creation and execution phases
✅ **Call Stack**: Tracks function execution order (LIFO)
✅ **Memory**: Stack (primitives, references) vs Heap (objects, arrays)
✅ **Hoisting**: Declarations moved to top, assignments stay in place
✅ **Temporal Dead Zone**: `let`/`const` cannot be accessed before declaration
✅ **Lexical Scope**: Variables accessible based on code location, not execution location
✅ **Scope Chain**: JavaScript searches Inner → Outer → Global
✅ **Closures**: Inner functions retain access to outer scope variables
✅ **Error Types**: Syntax, Reference, Type, Range - each has specific cause and fix
