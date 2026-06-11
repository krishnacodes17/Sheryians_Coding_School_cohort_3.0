//  This keyword

// *  "use strict"
// console.log(this)    // in browser (its reffer Window )  (and in node its return {})




// function greet (){
//     console.log(this)   // windows (if we use Stict mode than its show undefine)
// }

// greet()





 let obj = {
     name: "kishna",
     age : 20,
     greet:()=>{
        console.log(this)    // its reffer windows because of its lexical context of arrow function arow function not have any lexical context so its reffers to window 
        console.log(this.name)   // nothing print here 
     },

     greet2:function(){
        console.log(this )   // its reffer to object (name , age)
        console.log(this.name)   // kishna is output 
        this.age = 40    // here age its updated with 40
     }
}

obj.greet()
obj.greet2()
console.log(obj)









// let obj2 = {
//     name:"anup",
//     age : 45,
//     greet:()=>{
//         // console.log(this)              // window 

//         let sayName = function(){
//             // console.log(this)          // window  because its reffers to his parents but his parents is arrow function so arrow function dont have his lexical context and its effer to window 
//         }

//         let sayName2 = ()=>{
//             // console.log(this)        // windows  because arow function dont have any lexical context so its reffe to windows 
//         }
//         sayName()
//         sayName2()
//     },


//     greet2:function(){
//         // console.log(this)      // its reffers object becase its normal function 

//         let sayHii = ()=>{
//             console.log(this)    // here its arrow function which go to his prents and his parents reffers to object soo hi give object to arrow function 
//             console.log(this.age)
//         }
//         sayHii()
//     } 
// }

// obj2.greet()
// obj2.greet2()







// what is value of this in events   with arrow function

// let button = document.querySelector("button").addEventListener("click",()=>{
//     console.log("btn clicked")

//     console.log(this)    // its reffes to windows
// })



//  this keywod value with function Keyword 
// let button = document.querySelector("button").addEventListener("click",function(){
//     console.log("btn clicked")

//     console.log(this)    // its reffes button element because here we use functin keyword 

//     console.log(this.tagName)
// })





// let obj3 = {
//     name: "kishna",
//     age:25,

//     company:{
//         name: "harish",
//         is_good:true,
//         greet:function(){
//             console.log(this.name)    // its reffers its own object nots its parents object 
//         },

//         sayHii:()=>{
//             console.log(this)     // its reffes to window 
//         }
//     }
// }
// obj3.company.greet()
// obj3.company.sayHii()






let obj4  = {
    name:"kishna",
    age:24,
    getCompany:function(){
        const ComapnyName={
            name:"shery",
            isGood:true,
            greet:()=>{
                console.log(this.name)    // krishna is ouput because its arrow function which have no its own lexical scope
            },

            greet2:function(){
                console.log(this.name)   // shery is output because of function keyword 
            }
        }
        ComapnyName.greet()
        ComapnyName.greet2()
    }
}

obj4.getCompany()




//  ? call 

let student1 ={
    firstName:"krishna",
    age:25,
    getInto:function(city){
        console.log(this.firstName + " " + this.age + city)
    }
}



//  letcall this function with student2
function outerFunction (city,state,pincode){
    console.log(`i am ${this.firstName} and i am ${this.age} year old i live in ${city} and state is ${state} and pincode is ${pincode}`)
}



let student2 ={
    firstName:"harish",
    age:65
}

// student1.getInto()    //  krishna 25
// student1.getInto("mumbai")    //  krishna 25 mumbai
// student2.getInto()  // ! this is not possible because getInto is not inside student2

// student1.getInto.call(student2)    // ? harish 65  now its possible with call method

// outerFunction.call(student2)   // ? i am harish and i am 65 year old
// outerFunction.call(student1,"mumbai")    // ? i am krishna and i am 25 year old




// ?  apply  (apply bhi call ki tarh hi kaam kaega but yeha argumnet joo pass akeege multiple oo array ke formet me karehge)

// outerFunction.call(student2,"mumbai","mmbai",857575)  // call is used with argument  
// outerFunction.apply(student2, ["bhoe" , "bihar",786865])  // applay is used with argumens


//  ? bind ( jab ham call applay kaa use kar ahe thee tabb oo utrant call hoo ja arah thaa but bind ko han ek variable me store kar ke ham baad me bhi call lar sakte hau )

// let bindd =  outerFunction.bind(student2,"mumbai","mmbai",857575)

// bindd()   // here we call bind 






// ?  Prototypes 
let arr = [5,7,8,5,4,6]

arr.push(56)   // here we not create push method but we can use it how 
console.log(arr)  
console.log(arr.__proto__) 
console.log(arr.__proto__.__proto__) 


let company = {
    name:"shery",
    foundYear:2025,
    greet:function (){
        console.log("hellow ,",this.name)
    }
}


let user={
    name:"harish",
    age:25
}

// mai cahta hu ki objProto kaa greet Method by default mai 

user.__proto__ = company
console.log(user.__proto__)   // { name: 'shery', foundYear: 2025, greet: [Function: greet] }
user.greet()     // hellow , harish   yeha greet method user me nahi thaa fi rbhi use hoo gaya 
console.log(user.foundYear)   // 2025  yeha pe yea bhi use ka paa aha hu jo jo company e hau=i sab use kar paa raha hu 





//  ? proto types chaning / inheritence 

let collage = {
    name:"iit khadakpur",
    establised:2009
}

let branch = {
    title:"branch",
    name:"CSE",
    rating:"A++"
}

let user ={
    name:"krishna",
    age:25,
    marks:500
}

user.__proto__ = branch
branch.__proto__ = collage
console.log(user.__proto__)
console.log(user.__proto__.__proto__)

console.log(user.establised)   // 2009
console.log(user.rating)   // A++



