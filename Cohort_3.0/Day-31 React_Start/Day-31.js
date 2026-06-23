// console.log(React)   //?  here we get a object of react 



// * This is actual real dom Working 
let body = document.querySelector("body")
let h1 = document.createElement("h1")   
h1.innerText = "this text write through pure DOM"

body.append(h1)    // Here we append h1 inside Real Dom





// //  * here we created h2 tag with class and his content inside h2
// let h2 = React.createElement("h2" , {className:"h2_Box"} , "this h2 is create through React")


// // body.append(h2)   //? here inside body its loking like >>>>   [object Object]   
// //  ?   now how we append h2 inside real Dom because this is ceated vartual Dom and RealDom cant understand vartual dom so here RealDom comes in picture 



// let root = document.querySelector(".root")   //? here we select a real dom Div jiske anadar ham React se banaya gaya element daaalege 

// let RootOfReact = ReactDOM.createRoot(root)   //? yeha hamne ek React kaa root banaya jiske anadar ham aapna react se create kiya hua sab kuch issme render karege 

// RootOfReact.render(h2)    // ? yeha pe hamne h2 jo react se banaya thaa oo react ke root me daale aur react kaa root original yaani real  Dom me daala 







// //  * ceating element inside element
// let root2 = document.querySelector(".root2")

// let h3 = React.createElement("h3",null , React.createElement("span",{class:"span"} ,"this is span tag inside h3 tag "))

// let rDOM =  ReactDOM.createRoot(root2)      //? yeha react ke root ko real Dom kaa root div de ahe hai jaha react ke element  real dom me daalege

// rDOM.render(h3)


// console.log(h3)

// console.log("this is Pure DOM",h1)

// console.log("This is React h2" , h2)   // 









// * Es Modules 

import  {esmoduel , a}  from "./Es_Moduels.js"

console.log(esmoduel)      // !  first you write type="module"  where we use this script file 

console.log(a)   // ? 10