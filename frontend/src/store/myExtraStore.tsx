import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 현재 페이지 정의
export interface nowPageState {
  pageName: string;
  setPage: (nowPage: string) => void;
}

// 현재 페이지 상태 정보
export const nowPageStore = create<nowPageState>()(
  persist(
  set => ({
      pageName: 'Test',
      setPage:(nowPage: string) => set({pageName: nowPage})
    }),
  { name:'pageName'}
  )
)

// 로딩중 정의
export interface nowLoading {
  isLoading: boolean;
  setIsLoading: (status:boolean) => void;
}

// 로딩중 상태 정보
export const nowLoadingStore = create<nowLoading>()(set => ({
  isLoading: false,
  setIsLoading:(status:boolean) => set({isLoading: status})
  }),
)

