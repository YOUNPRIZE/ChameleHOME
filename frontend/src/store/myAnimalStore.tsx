import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 테스트 동물 데이터
const test = {
  1 : [
    {
      animalId : 1,
      cageId : 1,
      species : "공비단뱀",
      name : "뱀1",
      gender : "female",
      age : 5,
      birth : new Date("2022-02-01"),
      issue : "특이사항 없음",
      created_at : new Date(),
    },
    {
      animalId : 2,
      cageId : 1,
      species : "서부구렁이",
      name : "뱀2",
      gender : "male",
      age : 5,
      birth : new Date("2022-02-01"),
      issue : "특이사항 없음",
      created_at : new Date(),
    },
    {
      animalId : 3,
      cageId : 1,
      species : "왕뱀",
      name : "뱀3",
      gender : "male",
      age : 5,
      birth : new Date("2022-02-01"),
      issue : "특이사항 없음",
      created_at : new Date(),
    },
    {
      animalId : 4,
      cageId : 1,
      species : "모렐리아브레들리",
      name : "뱀4",
      gender : "male",
      age : 5,
      birth : new Date("2022-02-01"),
      issue : "특이사항 없음",
      created_at : new Date(),
    },
  ],
  2: [
    {
      animalId : 5,
      cageId : 2,
      species : "버마왕뱀",
      name : "뱀5",
      gender : "male",
      age : 5,
      birth : new Date("2022-02-01"),
      issue : "특이사항 없음",
      created_at : new Date(),
    },
  ],
  3 : [],
  4 : [],
  5 : [],
}

// 개별 동물 정의
export interface Animal {
  animalId : number;
  cageId : number;
  species : string;
  name : string;
  gender : string;
  age : number;
  birth : Date;
  issue : string;
  created_at : Date;
}

// 케이지별 동물들 리스트 정의
export interface MyAnimal {
  animalsInCages: { [key: number]: Array<Animal> };
  addAnimal: (animal: Animal) => void;
  updateAnimal: (animal: Animal) => void;
  deleteAnimal: (id: number) => void;
  setAnimals: (animals: Array<Animal>) => void;
}

// 케이지별 동물들 
export const myAnimalStore = create<MyAnimal>() (
  persist(
    set => ({
      animalsInCages : test,
      addAnimal: (animal: Animal) => console.log(animal),
      updateAnimal: (animal: Animal) => console.log(animal),
      deleteAnimal: (id: number) => console.log(id),
      setAnimals: (animals: Array<Animal>) => console.log(animals),
    }),
    {name:'myAnimls'}
  )
)



