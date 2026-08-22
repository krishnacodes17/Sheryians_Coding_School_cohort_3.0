import express from 'express'

const app = express()

app.use(express.json())
let User = [
    {
        id:1,
        name:"krishna"
    }
]

// ! Create 
app.post("/create",(req,res)=>{
    // const body = req.body
    // console.log(body)
    let {name,age,id} = req.body
    let user  = {
        id:id,
        name:name,
        age:age
    }
    User.push(user)
    res.send(User)
})

//  ! read 
app.get("/",(req, res)=>{
    res.send(User)
})

//  ! Delete
app.delete("/delete/:id",(req, res)=>{
    let {id} = req.params    // ? yehaper id kivalue string me aa raha hai  
    let data = User.filter((item)=>{
        return item.id !== Number(id)   // 
    })
    User = data
    res.send(User)
})

// ! edit
app.patch("/patch/:id" , (req,res)=>{
    let {id} = req.params
    let {name} = req.body
    console.log(id)
    
    let user = User.map((item)=>{
        let user = item.id === Number(id) ? {id, name:name ,age:56} : item
        return user
    })

    console.log(user)
    res.send(user)
})



const PORT = 3000


app.listen(PORT,()=>{
    console.log(`server isrunning on ${PORT}`)
})