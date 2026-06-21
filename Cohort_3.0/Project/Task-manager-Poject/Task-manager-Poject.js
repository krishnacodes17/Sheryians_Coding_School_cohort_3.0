//  * Date Code

let TodayDate = document.querySelector("#Today-date span")
const today = new Date();
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

TodayDate.textContent = `${today.getDate()} ${months[today.getMonth()]}`



let TaskCardTitle = document.querySelector("#TaskCardTitle span")
let TaskCardTaskname  = document.querySelector("#TaskCardTaskname")
let task_card = document.querySelector("#task_card")





let pending_btn = document.querySelector("#pendingBTN");

// pending_check.addEventListener("change", () => {
//     if (pending_check.checked) {
//         pending_btn.style.backgroundColor = "#DCFCE7";
//         pending_btn.style.color = "#15803D";
//         pending_btn.textContent = "Completed";
//     } else {
//         pending_btn.style.backgroundColor = "#FFF4D6";
//         pending_btn.textContent = "Pending";
//         pending_btn.style.color = "#B7791F";
//     }
// });




let data = [
    
]



//  * ui render code

let ui = ()=>{
    task_card.innerHTML = ""

     TotalTaskData.textContent = data.length;

    let completedTasks = data.filter((elem) => {
    return elem.completed;
});

TotalcompletedTaskData.textContent = completedTasks.length;


    data.forEach((elem,index)=>{
        task_card.innerHTML += `<div class="card"> 
                        <div id="card-left" >
                          <p id="TaskCardTitle">Project : <span>${elem.title}</span></p>
                          <h3 id="TaskCardTaskname">${elem.task}</h3>
                        </div>

                        <div id="card-ele">
                           <button id="pendingBTN">${elem.taskBtnStatus}</button>
                           <button onclick="updateTask('${elem.task}')" id="taskEdit">Edit</button>
                           <input  ${elem.completed ? "checked" : ""} onchange="pendingStatus(${index})" id="check_${index}"  type="checkbox">
                           <i onclick="deleteTask(${index})" class="ri-delete-bin-line"></i>
                        </div>

                    </div>`
    })
}









//  * form input code
let userInput = document.querySelector(".inputField")
let inputBtnCancel = document.querySelector("#inputBtnCancel")
let inputBtnAdd = document.querySelector("#inputBtnAdd")
let inputform = document.querySelector("form")
let createTaskBtn = document.querySelector("#createTaskbtn")
let m_right = document.querySelector(".m-right")


let titleValue = document.querySelector("#titleValue")
let taskValue = document.querySelector("#taskValue")

let TotalTaskData = document.querySelector("#TotalTaskData")
let TotalcompletedTaskData = document.querySelector("#TotalcompletedTaskData")



let updateIndex = null



inputform.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = titleValue.value.trim();
    let task = taskValue.value.trim();

    if (title === "" || task === "") {
        alert("Please fill all fields!");
        return;
    }

    let obj = {
        title,
        task,
        taskBtnStatus : "pending",
        completed: false
    }

    if(updateIndex !== null){
        data[updateIndex] = obj
        updateIndex = null
    }else{
        data.push(obj)
    }



    ui()

    inputform.reset();
    
});


inputBtnCancel.addEventListener("click",()=>{
    inputform.style.display = "none"
    m_right.style.opacity = "100%"

})


inputBtnAdd.addEventListener("click",()=>{
    inputform.style.display = "none"
    m_right.style.opacity = "100%"

})

createTaskBtn.addEventListener("click",()=>{
    inputform.style.display = "flex"
    m_right.style.opacity = "20%"
    
})




// * edit task through edit button
let updateTask = (name) => {

    //  ? this is find our accutual value 
    let taskfind = data.find((elem) => {
        return elem.task === name;
    });

    // ? this is find our index
    updateIndex = data.findIndex((elem)=>{
        return elem.task === name;
    })

    console.log(updateIndex)


    inputform.style.display = "flex"
    m_right.style.opacity = "20%"

    let title = titleValue.value = taskfind.title
    let task = taskValue.value = taskfind.task;



}





//  * Delete task through index 

let deleteTask = (index)=>{
    data.splice(index,1)
    ui()
}


function pendingStatus(index){

    let check = document.querySelector(`#check_${index}`);

    data[index].completed = check.checked;

    data[index].taskBtnStatus =
        check.checked ? "Completed" : "Pending";




    ui();
}


