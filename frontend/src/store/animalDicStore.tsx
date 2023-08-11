import {create} from 'zustand'
import {persist} from 'zustand/middleware'

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
  id:number
}

interface animalDic {
  dictionary:Array<dicAnimal>;
  setDictionary: (infos:Array<dicAnimal>) => void
}

// 케이지별 동물들 
export const animalDicStore = create<animalDic>() 
  (persist(set => ({
      dictionary : [],
      setDictionary:(infos:Array<dicAnimal>) => set(
          state => {return {...state, dictionary:infos}}
      )
  }),
  {name:'Dictionary'}
  )
)
