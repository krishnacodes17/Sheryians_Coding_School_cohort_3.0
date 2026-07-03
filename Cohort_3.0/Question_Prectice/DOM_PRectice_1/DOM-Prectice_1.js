
// * Question 1 — Change Heading Text



// let h1 = document.querySelector("#title")
// h1.textContent= "Welcome to JavaScript DOM"




//  * Question 2 — Change Background Color

// let body = document.querySelector("body")
// let btn = document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//     body.style.background = "yellow"
// })




//  * Question 3 — Display Input Value

// let btn = document.querySelector("#btn")
// let input = document.querySelector("#username")
// let output = document.querySelector("#output")

// btn.addEventListener("click",()=>{
//     output.textContent = input.value
//     output.style.background = "yellow"
// })




//  * Question 4 — Hide and Show Text

let toggleBTN = document.querySelector("#toggle")
let message = document.querySelector("#message")

// let flag = true
// toggleBTN.addEventListener("click",()=>{
//     if(flag){
//     message.style.display = "none"
//     flag = false
//     }
//     else{
//     message.style.display = "block"
//     flag = true

//     }
// })


//  ? second method 
// toggleBTN.addEventListener("click",()=>{
//     message.classList.toggle("hide")
// })



// *  Question 5 — Add New List Item

// let list =  document.querySelector("#list")
// let btn = document.querySelector("#btn")

// let li = document.createElement("li")
// let banana = li.innerHTML = `banana`

// btn.addEventListener("click",()=>{
//     list.append(banana)
// })




//  * Question 6 — Remove a Card

// let btn = document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//     btn.parentElement.remove()
// })



// * Question 7 — Counter App

// let h1 = document.querySelector("h1")
// let inc = document.querySelector("#inc")
// let dec = document.querySelector("#dec")

// let value = 0


// inc.addEventListener("click",()=>{
//     value += 1 
//     h1.textContent = value

// })

// dec.addEventListener("click",()=>{
    
//     value -= 1
//     h1.textContent = value

// })





// * Question 8 — Live Character Counter

// let textArea = document.querySelector("textarea")
// let span = document.querySelector("span")


// textArea.addEventListener("input",()=>{
//     let value = textArea.value.trim().length
//     span.textContent = value

// })




//  * Question 9 — Todo List

// let input = document.querySelector("input")
// let btn = document.querySelector("#btn")
// let ol = document.querySelector("ol")

// console.log(input.value)
// btn.addEventListener("click",()=>{
//     let value = input.value
//     let li = document.createElement("li")
//     li.textContent = value
//     ol.append(li)

//     input.value = ""
// })
