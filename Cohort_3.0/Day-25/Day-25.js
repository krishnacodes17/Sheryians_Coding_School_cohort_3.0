
// // nodeList vs html Collection

// // // console.log(document)
// // console.log(document.childNodes)   // its reffes to every nodes
// // console.log(document.children)    // its effes to only html elemets

// // Selecting
// // let main = document.querySelector("main")
// // console.log(main.childNodes)     // ? NodeList(5) [text, h1, text, h2, text]
// // console.log(main.children)     // ?   HTMLCollection(2) [h1, h2]

// // changing content
// let h1 = document.querySelector("h1")
// // h1.textContent = "this is change through js DOM"

// // h1.innerText = "lorem"
// // h1.innerHTML = "<h3>Hellow h3</h3>"

// // h1.style.color = "black"
// // h1.style.fontSize = "46px"

// //  * classes  >>  classList.add(), classList.remove  ,  classList.contain , classList.toggel  , classList.replace

// const isClass = h1.classList.contains("heading")
// console.log(isClass)    // ? false   because no class is given to h1

// //  changng class
// h1.classList.replace("heading","newHead")

// //  toggle class
// // h1.classList.toggle("newHead")   // ? if class hai too remove ka dega agar nahi hai too laga dega

// //  add class
// let div = document.querySelector("#box")
// div.classList.add("box1")   // it is add class in box

// * mini Poject

let circle = document.querySelector(".cicle");
let button = document.querySelector("button");

// circle.addEventListener("click", () => {
//   console.log("circke clicked");
// });

// let flag = true;

// button.addEventListener("click", () => {
//   if (flag) {
//     button.innerText = "OFF";
//     circle.style.backgroundColor = "white";
//     flag = false;
//   } else {
//     button.innerText = "ON";
//     circle.style.backgroundColor = "";
//     flag = true;
//   }
// });




//  ? Second Method
button.addEventListener("click",()=>{
    
    if(circle.classList.toggle("bgChangeBulb")){
        button.innerText = "OFF"
    }
    else{
        button.innerText = "ON"       
    }

})



// * 
// let main = document.querySelector("main")

// let box1 = document.querySelector(".box1")
// let box2 = document.querySelector(".box2")
// let box3 = document.querySelector(".box3")

// main.insertBefore(box2,box1)



//  * let append some box thouggh js

// let box4 = document.createElement("div")
// box4.classList.add("box4")
// box4.innerText = " box4"
// main.append(box4)   // ? its append box4 inside our main in last 



// let box5 = document.createElement("div")
// box5.classList.add("box5")
// box5.innerText = " box5"
// main.prepend(box5)    // its perepand box5 inside main



// // Before & After
// box1.after(box5)
// box4.before(box2)