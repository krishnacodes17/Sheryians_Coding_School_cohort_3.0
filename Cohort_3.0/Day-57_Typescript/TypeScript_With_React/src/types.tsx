

// category
// description
// id
// image
// price
// rating
// title

export interface Product {
    id:number;
    title:string,
    category:string,
    image:string,
    price:number,
    description:string
    rating:{
        count:number,
        rate:number
    }
}