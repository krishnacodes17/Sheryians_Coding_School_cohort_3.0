//  Prectice session of Opps

// const user = {
//     name:"krishna",
//     greet(){
//         console.log(this.name)   // ?this is effers to  user object
//     }

// }

// user.greet()

// * question 2

// function show (){
//     console.log(this)
// }

// show()

// * question 3
// function Introduction (){
//     console.log(this.name)
// }

// const person={
//     name:"anup"
// }
// console.log(Introduction.call(person))    // ? anup

// * Question -4

// function Introduction (city,country){
//     console.log(`${this.name} from ${city} ${country}`)
// }

// const person = {
//     name:"Kishna"
// }

// console.log(Introduction.apply(person,["bhopal","india"]))   // ? arguments pass through array



// * Question -5

// const user= {
// name:"Ritik",
// greet() {
// console.log(this.name);
// }}
// const fn = user.greet.bind(user)
// fn()




// * Question -6
// const animal = {
//   eats: true,
// };


// const dog = Object.create(animal)
// console.log(dog.eats)




//  * Question 7

// function Person(name) {
// this.name = name;
// }

// function greet(){
//     console.log("Hellow from Greet", this.name)
// }

// Person.prototype.greet = greet   // here we keep get function inside Peson  protoTypes

// const person1 = new Person("krishna")
// person1.greet()


// const person2 = new Person("aul")
// console.log(person2.greet())


//  * Question 8 

// class Students{
//     constructor(name,marks){
//         this.name = name,
//         this.marks = marks
//     }

//     getGrade(){
//         if(this.marks > 90){
//             return "A"
//         }
//         else if(this.marks > 75){
//             return "B"
//         }
//         else if (this.marks > 60){
//             return "c"
//         }
//         else{
//             return "F"
//         }
//     }
// }

// let student1 = new Students("krishna",95)
// console.log(student1.getGrade())

// let student2 = new Students("anup", 65)
// console.log(student2.getGrade())




//  *  Question 9 Employee Inheritance
 
// class Employee {
//     constructor (name,salary){
//         this.name = name,
//         this.salary = salary
//     }

//     work(){
//         console.log(`hellow ${this.name} you are wok on salay : ${this.salary}`)
//     }
// }


// class Developer extends Employee {
//     constructor(name,salary){
//         super(name, salary)
//     }

//     code(){
//         console.log(`hey ${this.name} you are codding..... `)
//     }
// }


// const dev1 = new Developer("Vatsal",25000)

// console.log(dev1.work())
// console.log(dev1.code())





//  * question - 10 

class BankAccount {
    #balance = 0
    constructor(amount){
        this.amount = amount
    }

    dePosit(amo){
        if(amo > 0 ){
            this.#balance += amo
        }
    }

    WithDraw(amo){
        if(this.#balance > amo){
            this.#balance -= amo
        }
        else{
            console.log("Your balance is low please Deposite more money ")
        }
    }
    getBalance(){
        console.log(`your account balance is ${this.#balance} rupess`)
    }
}

let acc = new BankAccount()

acc.dePosit(1000)    // its deposite 1000 ruppess
acc.WithDraw(5000)   // its withdrow amount 
acc.getBalance()