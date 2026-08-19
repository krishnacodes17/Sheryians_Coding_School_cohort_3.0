# Typescript Notes

- itisa javascript superset, which means that it adds additional features to javascript. It is a strongly typed language, which means that it allows you to specify the types of variables and function parameters. This can help catch errors at compile time, rather than at runtime.

# installation
- To install typescript, you can use npm (node package manager) which comes with node.js. You can install typescript globally by running the following command in your terminal:

``` 
npm install -g typescript
```

- tsc --init: This command will create a tsconfig.json file in your project directory, which is used to configure the typescript compiler options.

```
 tsc --init 
 ```

- tsc --watch : This command will start the typescript compiler in watch mode, which means that it will automatically recompile your typescript files whenever you make changes to them.

```
 tsc --watch 
 ```

 ## Typescript Features
- Type Annotations: You can specify the types of variables and function parameters using type annotations.
- Interfaces: You can define interfaces to specify the shape of objects and classes.
- Classes: Typescript supports object-oriented programming with classes, inheritance, and access modifiers.

## Basic Types
- Typescript has several basic types, including:
- number: Represents numeric values.
- string: Represents text values.
- boolean: Represents true/false values.
- any: Represents any value, and can be used when you don't know the type of a variable.
- void: Represents the absence of a value, and is typically used for functions that don't return anything.
- null and undefined: Represent the absence of a value, and can be used to indicate that a variable has no value.
- array: Represents a collection of values of the same type.


## primitives and reference types
- Primitives: These are basic data types that are immutable and include number, string, boolean, null, and undefined.

- Reference Types: These are more complex data types that can be modified and include objects, arrays, and functions.



# type inference & type annotation
- Type Inference: Typescript can automatically infer the type of a variable based on its value. For example, if you declare a variable and assign it a number, Typescript will infer that the variable is of type number.

- Type Annotation: You can explicitly specify the type of a variable using type annotations. This can be useful when you want to ensure that a variable is of a specific type, or when you want to provide additional information about the variable's type. 