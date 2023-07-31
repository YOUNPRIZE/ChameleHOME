// 훅 import 
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import { animalDicStore } from '../store/animalDicStore'
import { myCage, myCagesStore } from '../store/myCageStore';
// 컴포넌트 import
import CageInfoTop from '../components/cageInfoTop';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AnimalDetail():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("동물 상세보기");
  })

  // 상태정보 및 props 받기
  const cageId:number = Number(useParams().cageId);
  const animalId:number = Number(useParams().animalId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));

  return (
    <>
      {/* 케이지 */}
      <CageInfoTop cage={myCage}/>
      <h1>동물 상세보기</h1>
    </>
  )
}