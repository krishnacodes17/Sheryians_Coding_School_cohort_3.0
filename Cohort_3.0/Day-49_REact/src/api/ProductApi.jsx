import React from "react";
import { axiosInstant } from "../config/AxiosInstance";

export let ProductDataApi = async () => {
  try {
    console.log("Product api calling ")
    let res = await axiosInstant.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("Error on productData api call : " , error)
  }
};
