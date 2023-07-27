// 훅 import
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from 'react';
// 상태정보 import
import { dicAnimal } from "../store/animalDicStore";
import { nowPageStore } from '../store/store';
// 스타일 import
import style from '../styles/DicDetail.module.css'


export default function DicDetail():JSX.Element {
  // props 넘겨받기
  const dicItemInfo: null | dicAnimal = useLocation().state;

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("도감 상세보기");
  })

  // 잘못된 접근일 경우
  if (dicItemInfo === null) {
    return (
      <div>
        <h1>잘못된 접근입니다.</h1>
      </div>
    )
  }

  // 이미지 주소
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${dicItemInfo.photo}` 
  
  // 올바른 접근일 경우 페이지 렌더링
  return (
    <>
      <div className={`${style.dicImgContainer} ${style.containerBox}`}>
        <img src={imgUrl} alt="" className={`${style.dicImg}`}/>
        <p className={`${style.dicSpecies}`}>{dicItemInfo.species}</p>
      </div>
      <div className={`${style.containerBox} ${style.categoryContainer}`}>

      </div>
    </>
  )
}