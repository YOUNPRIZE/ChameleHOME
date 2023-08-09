import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 개별 동물 정의
export interface Animal {
  id : number;
  cageId : number;
  species : string;
  name : string;
  gender : string;
  birth : Date;
  issue : string|null;
  created_at : Date;
  photo: string;
}

// 케이지별 동물들 리스트 정의
export interface MyAnimal {
  animals: Array<Animal>;
  addAnimal: (animal: Animal) => void;
  updateAnimal: (animal: Animal) => void;
  deleteAnimal: (id: number) => void;
  setAnimals: (animals: Array<Animal>) => void;
}

// 케이지별 동물들 
export const myAnimalStore = create<MyAnimal>() (
  persist(
    set => ({
      animals : [],
      // 동물 추가하기
      addAnimal: (animal: Animal) => {
        set((state) => {
          state.animals.push(animal);
          return {...state}
        })
      },
      updateAnimal: (animal: Animal) => console.log(animal),
      deleteAnimal: (id: number) => console.log(id),
      // 기존 동물 데이터 입력
      setAnimals: (animals: Array<Animal>) => set(
        state => {return {...state, animals:animals}})
      }),
    {name:'myAnimls'}
  )
)



