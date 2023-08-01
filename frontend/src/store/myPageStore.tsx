import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 현재 페이지
// 형재 페이지 정의
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
  {name:'pageName'}
  )
)


