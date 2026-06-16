
let input = document.querySelector("input")
let addBtn = document.querySelector(".Add-btn")
let taskList = document.querySelector(".taskList")


input.addEventListener('click',()=>{
    
})


addBtn.addEventListener("click",()=>{
    let value = input.value
    
    if (value.trim() === "") return
   

    taskList.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>`

            input.value = ""
})