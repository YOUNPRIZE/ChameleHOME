import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import data from '../constants/dictionary.json'

export interface dicAnimal {
  species: string;
  lifespan: string;
  feed: string;
  feedCycle: string;
  temp: string;
  lighting: string;
  humidity: string;
  environment: string;
  from: string;
  info: string;
  photo: string;
}

interface animalDic {
  dictionary:Array<dicAnimal>;
}

// 케이지별 동물들 
export const animalDicStore = create<animalDic>() (set => ({
  dictionary : data.dic,
  })
)
