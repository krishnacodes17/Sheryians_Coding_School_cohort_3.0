import { apiInstance } from "../config/axiosInstance";

export const postFeedApi = async () => {
  try {
    let res = await apiInstance.get("/post/feed");
    return res;
  } catch (error) {
    console.log(error);
  }
};
