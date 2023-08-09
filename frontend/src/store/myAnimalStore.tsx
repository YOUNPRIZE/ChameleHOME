import {create} from 'zustand'
import {persist} from 'zustand/middleware'

// 개별 동물 정의
export interface Animal {
  animalId : number;
  cageId : number;
  species : string;
  name : string;
  gender : string;
  birth : Date;
  issue : string;
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
      addAnimal: (animal: Animal) => console.log(animal),
      updateAnimal: (animal: Animal) => console.log(animal),
      deleteAnimal: (id: number) => console.log(id),
      setAnimals: (animals: Array<Animal>) => set(
        state => {return {...state, animals:animals}})
    }),
    {name:'myAnimls'}
  )
)



