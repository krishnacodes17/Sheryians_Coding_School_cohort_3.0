//!  primitive types (jaha refference pass nahi hotahoo matlb a alag 5 hai b alag 5 hai a koo b se nahi lena dena aur b ko a se )
// ?  12  , "krishna "  , true ,   ye sab primitve hote hai

// let a = 5
// let b = a
//  b = b+2
//  console.log("this is a value :" ,a)
//  console.log("This is b value : ", b)




// ! non-Primitive (reffernce type) types : (means yeha per changes arr2 me huaa but effect arr me bhi huaa )
// ?  [] , {}, ()   jabbhi ye bracket aayega tab ye samjho ye refferece type hai
// let arr = [2,3,5]
// console.log("this is before arr2 :", arr)

// let arr2 = arr

// arr2.push(7)

// console.log("this is after arr2 value of arr : ", arr)
// console.log("this is value of arr2 ", arr2)




// ! array
// let arr = [5,8,6,5 ]    // ✅

// let arr1 = [8,6,83,6,{name:"krishna"},75,"krishna"]    // ❌
// console.log(arr1)

// let arrr :number[] = [5,7,"krishna" ,  5]   //!  yeha error aagaya because its accept only number hamne:number[]   bola hai issliye




// ! tuples  ( tupples mix fixed size )
let arr: [string, number, boolean] = ["krishna", 5, true]; // ? issme ham fixed sizedege naa jayada element desakte hainaa kam  aur innka types bhisemehona chaiye number hai too 5 agar number wali jagh pe "krishna" string diya wrong hai

// let arr2  :[string , number , boolean] = [5 , 5 , "true" ]  // ? ❌




//  ! Enum   (yeha hamne fix kar diyaki jab bhi UserRole ki value di jayegi too ussme se 3 hi value de sakte hai "admin" , "guest", "superAdmin")

// enum UserRole {
//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPERADMIN = "superadmin"
// }

// UserRole.ADMIN






// ! any , unkonow, Void , Null , undefine , Never

// let a: number    // ? yeha hamne bola number typeki value hi lena
// // a=5  //✅
// // a="krishna"   //❌

// let b : string    // ? yeha ham ne bola string value hi lena
// // b = "krishna"  //✅
// // b= 7  //❌

// let c:any       // ? yeha by default Any apply huaa matlb aap koi  bhivalue lesakte hoo (kabhi bhiany value nahidene kaa ye approach wrong hai jabham any likhte hai tab oo variable ko typescript dekhta bhi nahi hai)

// // c = 7   //✅
// // c = "krishna "   //  ✅

// let d : unknown

// d =7
// d ="krishna"

// if(d === "string"){
//     d.toUpperCase       //  ? means yeha ham check karege aur types ke basis pe hikaam hoga
// }





// ! void   (jabfunction kuch returnnaa karta hoo tab void usekarte hai ) jab ham function banate hai uss waqt hamko batana padta hai ki oofunction ky return karega

// function demovoid(): void {
//   console.log("hellow ji ");
//   console.log(5);
// //   return 5        ❌  // ?  because yeha ham return kar rahe hai 
// }

// demovoid();




//  ! null    jab hamko ye ye pata hai kivalue kuch nahi hai  
let a:null


//  ! never  isska use bahut kamhoga jab infinite loop hota hai ooha use aata hai
//  ?  jab hamko yesa  chaiye ki issfunction ke aage kaa codenaa chale tab


// function abcd():never{
//     while(true){
//         console.log("infinite loop ")
//     }
// }

// abcd()
// console.log("infinite loop end")




//  ! type infrance  >> jab  aap ye naa bataye ki varable kaa typekya hoga tooye autometic deside kar dega jab ham first time variable ki value define karege tab hi  eg :  let a = 5    yeha per a kaa type bydefault "number " set hoo gaya kyu kivarable decleare karete waqt hamne usskavalueeknumber diya 

let infrence = 5     // ? automatic type bydefault number hoo gaya 




//  !  type anotation   yeha  ham batate hai ki variable kaa type kya hai   eg : let anotation : string = "krishna" 

// let anotation: string = "krishna"    // ? yeha hamne bolaki anotation kaa type string hi rahega 

// let eg2 : number = 55 

// function sumOfTwoNumber (a:number , b: number) : number {
//     return a + b
// }

// console.log(sumOfTwoNumber(5,8))




// ! interface   (yeha ham obj me ek object le rahe hai too suposse iss object ke ander ki jovalue aaayegi oo kis type ki hogi ye baatane ke liye ham interface ka use karte hai )

// interface User {
//     name:string,
//     email:string 
//     password : string,
//     Mo_number: number,
//     gender ? : string    // ? yeha ham ?  means optional hai jo chahe naa doo 
// }

// //? yeha hamne ye obj me bol diya ki user me johi value aayegi oo User ke barabar hogi yaani obj me sirf name, email ,password , Mo_number hi rahega  usske alwa  kuch nahi jab bhi obj me vakue aayegi ooUser jaisa hi aayega 

// function getDataOfUser (obj : User) {
    
// }

// getDataOfUser ({name:"krishna" , email:"krishna@gmail.com ", password:" sdf" , Mo_number : 5722 })     // ? yeha pehamko obj passkarna padega warna error aayega aur jo obj passkarege usski key kaa type User ke barabar hi honi chaiye , extra value passnahikar sakte na hi kam de sakte hai 




// ! interface (extending Interface)   yeha ham oops kaause karege 

interface User {
    name:string,
    email:string
}

interface Admin extends User{
    admin: string
}


function extendsUser (obj : Admin){
    obj.email    // ? yeha admin user ki value bhi le raha hai 
}
function externdUser (obj:User){
    obj.admin   //  ?  yeha adminki valuenahi aa rahi hai kyu ki user medminnahi hau aurnaahi ooextendskar raha hai 
}
