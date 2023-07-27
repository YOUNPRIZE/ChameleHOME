import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 개별 케이지 정의
export interface myCage { 
  id : number;
  cageId : number;
  cageName : string;
  alarm: Array<Date>;
  setTemp : number;
  setHum : number;
  setUv : boolean;
  using : boolean;
  createdAt : Date; 
  cageImg: string
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
        {id : 1, cageId : 1, cageName: '1번', alarm : [new Date("2023-07-24")], setTemp : 30, setHum : 60, setUv : true, using : true, createdAt : new Date(), cageImg: 'Ball_Python.jpg'},
        {id : 1, cageId : 2, cageName: '2번', alarm : [new Date("2023-07-24")], setTemp : 30, setHum : 60, setUv : true, using : true, createdAt : new Date(), cageImg: 'Black_Rat_Snake.jpg'},
        {id : 1, cageId : 3, cageName: '3번', alarm : [new Date("2023-07-24")], setTemp : 30, setHum : 60, setUv : true, using : true, createdAt : new Date(), cageImg: 'Boa_Constrictor.jpg'},
        {id : 1, cageId : 4, cageName: '4번', alarm : [new Date("2023-07-24")], setTemp : 30, setHum : 60, setUv : true, using : true, createdAt : new Date(), cageImg: "Bredl's_Python.jpg"},
        {id : 1, cageId : 5, cageName: '5번', alarm : [new Date("2023-07-24")], setTemp : 30, setHum : 60, setUv : true, using : true, createdAt : new Date(), cageImg: 'Burmese_Python.jpg'},
      ],
      addCage : (cage:myCage) => console.log(cage),
      updateCage : (cage:myCage) => console.log(cage),
      deleteCage : (id:Number) => console.log(id),
      setCages: (cages:Array<myCage>) => console.log(cages),
      }),
    {name:'myCages'}
  )
)