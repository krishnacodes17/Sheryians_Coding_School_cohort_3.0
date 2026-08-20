
// ?  Pashe : 1 


// let a = 90 
// console.log(a)


// ! Primitive data type

// // string  
// let str : string = "krishna"

// //  boolean 
// let bool : boolean = true

// //  number
// let num : number = 78

// //  bigint
// let bigint : bigint = 665656n

//  symbol
// let smb :symbol = symbol("hello")


// ! refference 

//! Array 

// let arr : number[] = [5,8,5,6]
// let arrr:string[] = ["krishna", "ji"]
// let arrrr:boolean[] = [true,false]
// console.log(arr)


//!  any >> kuch bhi dooo   (do not use in your code)
// let an: any = 50 
// an=  "krishna" 
// an = true



//!  unknown >>  kuch bhi dooperupdatekartewaqt dikathogi
// let ann: any = 50 
// ann = true
// ann =  "krishna" 

// console.log(a.toUppercase())

//!  never   >> kuch bhinahiaana cahaiye 
// let y : never





// ! tuppele 
// let tupl : [number , string ,boolean] = [5 , "krishna" , true]

// let arrObj : [{name:string} , {email:string} ] = [{name: "krishna" , {email:"krishna@gmail"}}]



//  ! enum
// enum  Role {
//     ADMIN,
//     SUP_ADMIN,
//     USER
// }

// let role:Role = Role.ADMIN
// console.log(role)

// console.log("Role " , Role.ADMIN)




// ! yolo 
// let yoloExmple :string | number  = "krishna"      //? issmeyaa too string dedoo nahi too number
// yoloExmple = 58
// yoloExmple =true



//  ! literal type
// type Status ="pending" | "success" | "error"
// // let stus : Status = "krishna"  ❌
// let sttt: Status = "pending"



// ?   Phase : 2 

// Object 
// let obj = {
//     name:"krishna",
//     age: 25 ,
//     address:{
//         city:"mumbai",
//         state:"maharatra"
//     }
// }

// obj.age = "krishna"    // ? error in ts  because itsa infrence 
// console.log(obj.age)

//  method 1
let userObj : {
     name:string,
     age:number
} = {
    name : "krishna",
    age:58
}


//  Mehod 2 with type
type userObj ={
    name:string,
    age:number
    address:{
        street:string
    }
}

let USer : userObj = {
    name:"krishna",
    age:25,
    address:{
        street:"Mumbai "
    }
}



//  ! function 

// let sum =  (a:number,b:number) : number =>{
//     return a+b
// }
// let val:number = sum(5,9)   //? errorbecause val sting me value accept karega 

// console.log(val)


// let summ =  (a:number,b:number) : void =>{
//     // return a+b     //? yeha hame void likha hai too retun nahi karsakte hai 
//      a+b
// }
// let vall:number = summ(5,9)   //? errorbecause val undefine  value accept karega   kyuihamne function se kuch return hai kiya hai

// console.log(val)


// ?  Default permeter

let summm = (a:number,b: number = 5) : number =>{
    return a + b
}

console.log(summm(5))