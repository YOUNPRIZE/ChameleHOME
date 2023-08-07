import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const test = [
  {id : 1, cageId : 1, cageName: '1번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'snake'},
  {id : 1, cageId : 2, cageName: '2번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'lizard'},
  {id : 1, cageId : 3, cageName: '3번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'snake'},
  {id : 1, cageId : 4, cageName: '4번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: "turtle"},
  {id : 1, cageId : 5, cageName: '5번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'snake'},
]

// 개별 케이지 정의
export interface myCage { 
  id : number;
  cageId : number;
  cageName : string;
  setTemp : number;
  setHum : number;
  setUv : boolean;
  createdAt : Date; 
  category: string
}

// 케이지들 상태 정보
interface myCages {
  cages : Array<myCage>;
  addCage : (cage:myCage) => void;
  updateCage : (cage:myCage, id:number) => void;
  deleteCage : (id:Number) => void;
  setCages: (cages:Array<myCage>) => void;
}

export const myCagesStore = create<myCages>() (
  persist(
    set => ({
      cages : test,
      addCage : (cage:myCage) => console.log(cage),
      // 케이지 정보 업데이트(상태정보, 백엔드 서버)
      updateCage : (cage:myCage, id:number) => {
          set((state) => {
            // id와 일치하는 케이지의 인덱스 탐색
            const cageIndex = state.cages.findIndex(c => c.id === id);
            // id와 일치하는 케이지를 찾지 못한 경우, 현재 상태를 변경하지 않고 반환
            if (cageIndex === -1) {
              return state;
            }
            // 업데이트된 케이지를 담는 새로운 배열을 생성
            const updatedCages = [...state.cages];
            updatedCages[cageIndex] = cage;
            // 업데이트된 cages 배열을 가진 새로운 상태를 반환합니다.
            return { ...state, cages: updatedCages };
          });
      },
      deleteCage : (id:Number) => console.log(id),
      setCages: (cages:Array<myCage>) => console.log(cages),
      }),
    {name:'myCages'}
  )
)


// 현재 케이지 환경 정보
interface nowCageValue {
  cageId: number;
  temp : number;
  hum : number;
  uv : string;
  setCageId : (val:number) => void;
  setTemp : (val:number) => void;
  setHum : (val:number) => void;
  setUv : (val:string) => void;
}

export const nowCageValueStore = create<nowCageValue>() (
  set => ({
    cageId: 0,
    temp: 0,
    hum : 0,
    uv : "",
    setCageId : (cageId) => set({ cageId }),
    setTemp : (temp) => set({ temp }),
    setHum : (hum) => set({ hum }),
    setUv : (uv) => set({ uv }),
  })
)