// 라이브러리 import
import axios from "axios"
// 상태정보 import
import { User } from "store/userInfoStore"
// 백엔드 ip 주소
const ipUrl = "http://localhost:4000/"

// 회원정보
const useAxiosAuth = (url:string, method:string, data?:User) => {
  axios({
    method: method,
    url: `${ipUrl}/${url}`,
    data: data,
  })
    .then(res => {
      console.log(res)
    })
} 

export {useAxiosAuth}