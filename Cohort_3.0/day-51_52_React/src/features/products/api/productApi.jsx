import { apiInstance } from "../../../config/axiosInstance";

export const getAllProduct = async (search) => {
  let url = search ? `/products/search?q=${search}` : `/products?limit=100`;
  try {
    let res = await apiInstance.get(url);
    console.log("mai get all product hu ")
    return (await res).data;
  } catch (error) {
    console.log("Error in calling Product api ", error);
  }
};

export const getAllProductCategory = async () => {
  try {
    let res = await apiInstance.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Error on geting allProduct category :", error);
  }
};

export const getProductByCategory = async (category) => {
  try {
    let res = await apiInstance.get(`/products/category/${category}`);
    console.log("mai getProductByCategory" )
    return res.data;
  } catch (error) {
    console.log("error on api product by category : ", error);
  }
};
