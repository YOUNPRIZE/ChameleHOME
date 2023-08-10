import axios from "axios";
import { User } from "store/userInfoStore";
import { myCage } from "store/myCageStore";
import { Animal } from "store/myAnimalStore";
import { autoSetting } from "store/mySettingStore";

const ipUrl = "http://localhost:400";

// 회원 기능 관련 api 함수
const axiosAuth = async (url:string, method:string, data?:Partial<User>) => {
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

// 케이지 기능 관련 api 함수
const axiosCage = async (url:string, method:string, data?:Partial<myCage>) => {
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

// 동물 기능 관련 api 함수
const axiosAnimal = async (url:string, method:string, data?:Partial<Animal>) => {
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

// 자동화 기능 관련 api 함수
const axiosAuto = async (url:string, method:string, data?:Partial<autoSetting>) => {
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


export { axiosAuth, axiosCage, axiosAnimal, axiosAuto };
