// Promises 

//? - stage of pomise   >> pending   >> success  >> failue


// async function dataLaao (){
//     let data = await fetch("https://randomuser.me/api/")
//     let js = await data.json()
//     console.log(js.results)
// }

// dataLaao()




//  * creating pomises 

// let p1 = new Promise(function(resolve,reject){
//     let val = false

//     if(val){
//         console.log("promise reslove")
//         resolve()
//     }
//     else{
//         console.log("pomise reject")
//         reject()
//     }
// })


//*  booking food than make payment 


// function FoderFood(){
//     let order = new Promise(function(resolve , reject){
//         console.log("order is comming ")

//         let orderStatus = true


//         setTimeout(()=>{
//            if(orderStatus){
//             console.log("Delevery wale bhaiya aaye ")
//             resolve()
//            }
//            else{
//             console.log("Order failed ❌")
//             reject()
//            }
//         },3000)
//     })

//     order.then(function(){
//         let payment = false
//         console.log("Now make a payement")

//         let pay = new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 if(payment){
//                 console.log("Payment done ")
//                 res()
//             }
//             else{
//                 console.log("payment failed ")
//                 rej()
//             }
//             },3000)
//         })

//         pay.then(()=>{
//             console.log("payent hoo gaya ghar me leke jaao ")
//         })

//         .catch(()=>{
//             console.log("arre yaa payent kyu nahi huaa ")
//         })
//     })

//     .then(()=>{
//         console.log("abb aaram se khao payment hoo gaya ")
//     })


//     .catch(function(){
//         console.log("complain karo ")
//     })
// }



// FoderFood()



//   * fetch data from API

// let fetchData  =  fetch('https://fakestoreapi.com/products')

// fetchData.then(function(data){
//     console.log("DAta come")
//     return data.json()
// })

// .then((json)=>{
//     console.log(json)
// })

// .catch(()=>{
//     console.log("Data nahi aaya")
// })





//  *   its length method 
// let fetchData  =  fetch('https://fakestoreapi.com/products')

// .then((res)=>{
//     return res.json()
// })

// .then((data)=>{
//     console.log(data)
// })

// .catch((error)=>{
//     console.log(console.error())
// })


// *  morden way 
// async function  fetchData (){
//     let raw = await fetch('https://fakestoreapi.com/products')

//     let json = await raw.json()
//     console.log(json)
// }

// fetchData()


//  * industries way 

// (async ()=>{
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')

//         let json =await  response.json()
//         console.log(json)

//     } catch (error) {
//         console.log(error)
//     }
// }) ()




let user= {
name:"Ritik",
age:20,
city:"Bhopal"
};

for(let key in user){
    console.log(key, ":" , user[key])
}