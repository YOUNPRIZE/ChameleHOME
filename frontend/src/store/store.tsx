import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 유저 정보
export interface userInfoState {
  id: number;
  userId: string | undefined;
  nickName: string;
  phoneNumber: string;
  login: (inputId: string|undefined, inputPW: string|undefined) => void;
  logout: () => void;
}

export const userInfoStore = create<userInfoState>()(
  persist(
    set => ({
      id: 0,
      userId: "",
      nickName: "",
      phoneNumber: "",
      // 로그인 메서드
      login: (inputId:string|undefined, inputPW: string|undefined) =>
        {
          return set((state) => ({
            ...state,
            id:1,
            userId:inputId,
            nickName: 'Test',
            phoneNumber: '010-0000-0000'
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
            phoneNumber:""
          }))
        }
    }),
    {name: 'userInfo'}
  )
)


// 현재 페이지
export interface nowPageState {
  pageName: string;
  setPage: (nowPage: string) => void;
}

export const nowPageStore = create<nowPageState>()(
  persist(
  set => ({
      pageName: 'Test',
      setPage:(nowPage: string) => set({pageName: nowPage})
    }),
  {name:'pageName'}
  )
)