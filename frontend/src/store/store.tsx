import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 유저 정보
interface userInfoState {
  id: number;
  userId: string;
  nickName: string;
  phoneNumber: string;
  // login: (userInfo: userInfoState) => void;
}

export const userInfoStore = create<userInfoState>()(
  persist(
    set => ({
      id: 0,
      userId: "",
      nickName: "",
      phoneNumber: "",
      login: (userInfo: userInfoState) => set(userInfo)
    }),
    {name: 'userInfo'}
  )
)


// 현재 페이지
interface nowPageState {
  pageName: string;
  setPage: (nowPage: string) => void;
}

export const nowPageStore = create<nowPageState>()(set => ({
      pageName: 'Test',
      setPage:(nowPage: string) => set({pageName: nowPage})
    })
)