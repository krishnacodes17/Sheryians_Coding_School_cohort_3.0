//  OOPs

let song1 ={
    name:"hamari adhuri kahani ",
    atist:"vijay",
    year:2009
}

let song2 = {
    name:"saat samanada ",
    atist:"sunny degoal",
    year:2001
}

//  ! poblem ye hai ki agar hamko laako song ko ceate kana hai too aise hi kaege kya aise kaege too hamaa ek famous ule break hoga (Dont repeat youSelf)


//  ? to solve this problem contructor comes in pictures

function CreateBook (){
    this.bookName = "harry poter",
    this.authoreName = "jk Rowling",
    this.pages = 560
}

let book1 = new CreateBook()
console.log(book1)    // yeha pe seme book hi dikha harry poter wala object but hamko dusara book create kana hai too kya kae



//  ? Contructor Functions  (this is bluePrints )  (ES-5 me aise banate thee)

// function CreateBook (bookName,authoreName,pages){
//     this.bookNameeee = bookName,    // ! yeha this help ka raha hai ek vaiable create kane kaa  bookNameeee name se 
//     this.authoreName = authoreName,
//     this.pages = pages,
//     this.getFrontPages = function(){
//         console.log("bookName - ", this.bookName)
//         console.log("authoreName - ", this.authoreName)
//         console.log("pages - ", this.pages)
//     }

// }

// let book1 = new CreateBook("War and Peace", "Leo Tolstoy",600)
// console.log(book1)   // here book 1 created 

// let book2 = new CreateBook("Divine Comedy","Dante",800)
// console.log(book2)   // here book2 created with diffrent name , athore , pages 

// book1.getFrontPages()





//  ? classes with ES-6 feature

// class MakeStudents{
//     constructor(fName,lName,Contact, verified){
//        this.fistName = fName, 
//        this.LastName = lName,   
//        this.Contact = Contact,
//        this.isVerified = verified,

//        this.showProfile = function(){
//         if(this.isVerified){
//             console.log(`your name is ${this.name} ${this.LastName} your contact is ${this.Contact}`)
//         }
//         else{
//             console.log("User not verified")
//         }
//        }

//     }
// }


// let stu1 = new MakeStudents("krishna","gupta",9587585555,true )
// console.log(stu1)
// stu1.showProfile()





// ? ProtoType chaining   (ProtoType inheitence)

// let dada = {
//     name:"alakh",
//     age:80,
//     land:"100 acr"
// }

// let papa ={
//     name:"rakesh",
//     age:50,
//     shop:"rakesh dress collections"
// }

// let beta = {
//     name:"munna",
//     age:20,

// }

// beta.__proto__ = papa
// papa.__proto__ = dada

// console.log(beta.shop)    // rakesh dress collections    inherite from papa object
// console.log(beta.land)    // 100 acr     inherite from dada object





//  ? classical inhaeritence 
class User {
    constructor (fname,lname,contect){
        this.fistName =  fname,
        this.LastName = lname,
        this.contactNo= contect
    }

    greet() {
        console.log(`welcome User ${this.fistName}`)
    }
}

class Admin extends User {      // ? yeha per admin user ki saai popert ko aapne anader le aha hai (extend kar raha hai )
    constructor(fname,lname,contect,admin){    // ? ye hamara contuctor hai jab ham new admin banayege tabb ham value bhejege likhe admin kaa fname , last name , contect etc
        super(fname,lname,contect)     // ? yeha jo User ke andar This.fistName likh rahe the ussme se jo jo popet chaiye oo super me mention kar doo oo le lega hame baar baar this.firstName yaa this.LastName aisa likhne ki jaurat nahi hai 
        this.Admin = admin
    }

    greet(){
        console.log(`welcome Admin ${this.fistName}`)
    }

    addCourse(){
        console.log("All cources added")
    }

    removeCourse(){
        console.log("All cources removed ")
    }
}

let A1 = new Admin("anup","ji",58764687,true)
console.log(A1)    // admin object 
A1.greet()        // welcome Admin anup
A1.addCourse()   // All cources added

let u1 = new User("kishna","gupta",64568465)
console.log(u1)
u1.greet()
// u1.addCourse()   //!  u1.addCourse is not a function   kyu ki ye admin kaa hai user ke anda nahi hai isliye 