// 훅 import 
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { Animal, myAnimalStore } from '../../store/myAnimalStore';
import { nowPageStore } from '../../store/myPageStore';
import { myCagesStore } from '../../store/myCageStore';
import imgList from '../../constants/AnimalToImage.json'
// 스타일 import
import style from '../../styles/AnimalList.module.css'

export default function AlarmSetting():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("알람 설정");
  })

  // 상태 정보 + Props 받기
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));

  return (
    <>
      <h1>알람설정</h1>
    </>
  )
}