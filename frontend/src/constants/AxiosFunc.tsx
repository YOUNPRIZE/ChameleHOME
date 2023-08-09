import axios from "axios";
import { User } from "store/userInfoStore";
import { myCage } from "store/myCageStore";

const ipUrl = "http://localhost:4000";

const axiosAuth = async (
  url:string, 
  method:string, 
  data?:Omit<User, "id">) => {
  try {
    const response = await axios({
      method: method,
      url: `${ipUrl}/${url}`,
      data: data,
    });
    return response.data; // 비동기 처리 결과를 반환합니다.
  } catch (error) {
    throw error; // 에러가 발생한 경우, 이를 외부로 던져서 처리할 수 있도록 합니다.
  }
};

const axiosCage = async (url:string, method:string, data?:Omit<myCage, "cageId">) => {
  try {
    const response = await axios({
      method: method,
      url: `${ipUrl}/${url}`,
      data: data,
    });
    return response.data; // 비동기 처리 결과를 반환합니다.
  } catch (error) {
    throw error; // 에러가 발생한 경우, 이를 외부로 던져서 처리할 수 있도록 합니다.
  }
};

export { axiosAuth };
