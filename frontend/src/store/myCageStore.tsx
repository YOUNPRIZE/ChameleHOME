import {create} from 'zustand'
import {persist} from 'zustand/middleware'

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

// 케이지들 정의
interface myCages {
  cages : Array<myCage>;
  addCage : (cage:myCage) => void;
  updateCage : (cage:myCage) => void;
  deleteCage : (id:Number) => void;
  setCages: (cages:Array<myCage>) => void;
}

// 케이지들 상태 정보
export const myCagesStore = create<myCages>() (
  persist(
    set => ({
      cages : [
        {id : 1, cageId : 1, cageName: '1번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'snake'},
        {id : 1, cageId : 2, cageName: '2번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'lizard'},
        {id : 1, cageId : 3, cageName: '3번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'snake'},
        {id : 1, cageId : 4, cageName: '4번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: "turtle"},
        {id : 1, cageId : 5, cageName: '5번',  setTemp : 30, setHum : 60, setUv : true,  createdAt : new Date(), category: 'snake'},
      ],
      addCage : (cage:myCage) => console.log(cage),
      updateCage : (cage:myCage) => console.log(cage),
      deleteCage : (id:Number) => console.log(id),
      setCages: (cages:Array<myCage>) => console.log(cages),
      }),
    {name:'myCages'}
  )
)