import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface userInfoState {
  id: number;
  userId: string;
  nickName: string;
  phoneNumber: string;
}

// 유저 정보 저장
export const userInfoStore = create<userInfoState>()(
  persist(
    set => ({
      id: 0,
      userId: "",
      nickName: "",
      phoneNumber: "",
      // 상태 정보 갱신 함수들
      login: (userInfo: userInfoState) => set(userInfo)
    }),
    {name: 'userInfo'}
  )
)
