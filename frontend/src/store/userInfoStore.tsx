import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { useAxiosAuth } from 'hooks/useAxios';

// 현재 로그인 유저

// 로그인 유저 정보 정의
export interface User {
  id: number;
  userId: string | undefined;
  userPw: string | undefined,
  nickName: string;
  phoneNumber: string;
  isLoggedIn:boolean;
}


export interface userInfoState {
  user: User,
  login: (inputId: string|undefined, inputPW: string|undefined) => void;
  logout: () => void;
}

// 로그인 유저 상태 정보
export const userInfoStore = create<userInfoState>()(
  persist(
    set => ({
      user: { 
        id: 0,
        userId: "",
        userPw: "",
        nickName: "",
        phoneNumber: "",
        isLoggedIn: false
      },
      // 로그인 메서드
      login: (inputId:string|undefined, inputPW: string|undefined) =>
        { 
          return set((state) => ({
            ...state,
            user: {
              id: 1,
              userId: inputId,
              userPw: inputPW,
              nickName: 'Test',
              phoneNumber: '010-0000-0000',
              isLoggedIn: true
            }
          }))
        },
      // 로그아웃 메서드
      logout: () => 
        { 
          return set((state) => ({
            ...state,
            id:0,
            userId:"",
            nickName:"",
            phoneNumber:"",
            isLoggedIn: false
          }))
        }
    }),
    {name: 'userInfo'}
  )
)