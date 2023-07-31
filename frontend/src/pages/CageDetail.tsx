// 훅 import 
import { useParams, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { myCagesStore } from '../store/myCageStore';
import { myAnimalStore } from '../store/myAnimalStore';
// 컴포넌트 import
import CageInfo from './CageDetail/CageInfo';
import AnimalList from './CageDetail/AnimalList';
import AddAnimal from './CageDetail/AddAnimal';
import AnimalDetail from './CageDetail/AnimalDetail';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/CageDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


export default function CageDeatil():JSX.Element {
  // 케이지, 동물들 정보
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));
  const myAnimals  = myAnimalStore(state => (state.animalsInCages[cageId]));

  // 페이지 렌더링
  return (
    <>
    <div className={style.cageName}>
      <span>{myCage?.cageName} 케이지 </span>
      <div className={style.editContainer}><FontAwesomeIcon icon={faPencil} /></div>
    </div>
    <Routes>
      <Route path='/' element={<CageInfo/>}></Route>
      <Route path='/AnimalList' element={<AnimalList/>}></Route>
      <Route path='/AddAnimal' element={<AddAnimal/>}></Route>
      <Route path='/AnimalDetail/:animalId' element={<AnimalDetail/>}></Route>
    </Routes>
    </>
  )
}

