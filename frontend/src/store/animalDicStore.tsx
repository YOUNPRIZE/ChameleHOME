import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface dicAnimal {
  spices: string;
  lifespan: string;
  feed: string;
  feedCycle: string;
  temp: string;
  lighting: string;
  humidity: string;
  environment: string;
  home: string;
  info: string;
  img: string;
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
