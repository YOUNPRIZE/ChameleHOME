import {create} from 'zustand'
import { axiosAuth } from 'constants/AxiosFunc';
import { persist } from 'zustand/middleware';

// 현재 로그인 유저

// 로그인 유저 정보 정의
export interface User {
  id: number;
  userId: string | undefined;
  password: string | undefined,
  nickName: string;
  phoneNumber: string;
}

// 상태 정보 정의
export interface userInfoState {
  user: User,
  isLoggedIn : boolean
  setUserInfo: (userData:User) => void;
  deleteUserInfo: () => void;
}

// 로그인 유저 상태 정보
export const userInfoStore = create<userInfoState>()(
    persist(
    set => ({
      // 기본 유저 정보
      user: { 
        id: 0,
        userId: "",
        password: "",
        nickName: "",
        phoneNumber: "",
      },
      isLoggedIn: false,
      // 로그인 메서드
      setUserInfo: (user) => set((state) => ({
        ...state,
        user: user,
        isLoggedIn: true
      })),
      // 로그아웃 메서드
      deleteUserInfo: () => set((state) => 
      ({
        ...state,
        user: {
          id:0,
          userId:"",
          password: "",
          nickName:"",
          phoneNumber:"",
        },
        isLoggedIn: false
      }))
    }),
    // 로컬스토리지 저장 옵션
    {name: "userInfo", 
    partialize: (state) => ({
      user: {
        id: state.user.id,
        userId: state.user.userId,
        nickName: state.user.nickName,
        phoneNumber: state.user.phoneNumber,
      },
      isLoggedIn: state.isLoggedIn
    })
    }
  )
)


