import {create} from 'zustand'
import { axiosAuth } from 'constants/AxiosFunc';

// 현재 로그인 유저

// 로그인 유저 정보 정의
export interface User {
  id: number;
  userId: string | undefined;
  password: string | undefined,
  nickName: string;
  phoneNumber: string;
  isLoggedIn:boolean;
}

// 상태 정보 정의
export interface userInfoState {
  user: User,
  login: (id:string|undefined, pw:string|undefined) => void;
  logout: () => void;
}

// 로그인 유저 상태 정보
export const userInfoStore = create<userInfoState>()(
    set => ({
      // 기본 유저 정보
      user: { 
        id: 0,
        userId: "",
        password: "",
        nickName: "",
        phoneNumber: "",
        isLoggedIn: false
      },
      // 로그인 메서드
      login: async (id, pw) =>
        { 
          // 로그인 시도
          try {
            // 로그인 함수 구현 (연결 후 수정해야함)
            const userDatas = await axiosAuth("user", "GET");
            const user = userDatas.find((userData:User | undefined) => 
            userData?.userId === id && userData?.password === pw);
            // id와 pw가 적절할 경우
            if (user) {
              return set((state) => ({
                ...state,
                user: {...user, isLoggedIn: true}
              }))
            // 해당 유저가 없을 경우
            }
          // api 에러 
          } catch (error) {
            console.log(error); // 에러를 설정합니다.
          }
        },
      // 로그아웃 메서드
      logout: () => 
        { 
          return set((state) => ({
            ...state,
            user: {id:0,
            userId:"",
            password: "",
            nickName:"",
            phoneNumber:"",
            isLoggedIn: false}
          }))
        }
    })
)