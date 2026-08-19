

export let  getProduct = async ()=>{
    console.log("apiwala function chala")
    let data = await fetch('https://fakestoreapi.com/products')
    let raw = await data.json()
    return raw
}   
