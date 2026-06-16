

//    * Event bubbling
// let main = document.querySelector("main")
// let box = document.querySelector(".box")
// let btn = document.querySelector("button")

// main.addEventListener("click",()=>{
//     console.log("main trigger")
// })

// box.addEventListener("click",()=>{
//     console.log("box trigger")
// })

// btn.addEventListener("click",()=>{
//     console.log("btn trigger")   // ? here we click on btn and all paents of btn is trigger 

// })



//  * event captuing
// main.addEventListener("click",()=>{
//     console.log("main trigger")
// },true)     // ? here we true capturing by default bubbling hota hai 

// box.addEventListener("click",()=>{
//     console.log("box trigger")
// },true)

// btn.addEventListener("click",()=>{
//     console.log("btn trigger")   // ? here we click on btn and all paents of btn is trigger 

// },true)




// * dummy data 

let data = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "email": "priya.patel@example.com",
    "imgUrl": "https://randomuser.me/api/portraits/women/2.jpg"
  }
  
]

    console.log(data)



// * Form *

const form = document.querySelector("form")
let  inp1 = document.querySelector("#name")
let  inp2 = document.querySelector("#email")
let inp3 = document.querySelector("#imgURL")
let btn = document.querySelector("button")
let user = document.querySelector(".user")

let editingIndex = null;  // Track karne ke liye ki kaun sa element edit ho raha hai


function deleteData (index){
    data.splice(index, 1)
    ui()
}


function ui (){
    user.innerHTML = ""
    data.forEach((e,index)=>{
    user.innerHTML += `<div class="user-Card">
                <div class="imgbox">
                    <img src=${e.imgUrl} >
                </div>
                <div class="user-info">
                    <h3 >${e.name}</h3>
                    <p>${e.email}</p>
                </div>
                <div class="edits">
                    <button onclick="editData(${index})" id="edit">edit</button>
                    <button  onclick="deleteData(${index})" id="delete">delete</button>
                </div>
            </div>`
})
}

ui()


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let name = inp1.value;
    let email = inp2.value;
    let imgUrl = inp3.value

    if(name.trim() === "" || email.trim() === "" || imgUrl.trim() === "") return


    if(editingIndex !== null) {
        // Edit mode - update existing data
        data[editingIndex] = {
            id: data[editingIndex].id,
            name,
            email,
            imgUrl
        }
        editingIndex = null;
        btn.textContent = "Add";
    } else {
        // Add mode - new data
        data.push({
            id: data.length + 1,
            name,
            email,
            imgUrl
        })
    }

    ui()
    form.reset() 

})







