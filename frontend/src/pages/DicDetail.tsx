// 훅 import
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
// 상태정보 import
import { dicAnimal } from "../store/animalDicStore";
import { nowPageStore } from '../store/store';
// 스타일 import
import style from '../styles/DicDetail.module.css'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function DicDetail():JSX.Element {
  // props 넘겨받기
  const dicItemInfo: null | dicAnimal = useLocation().state;

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("도감 상세보기");
  })

  // 표시할 정보
  const infoToShow = {
    "수명" : dicItemInfo?.lifespan,
    "서식지": dicItemInfo?.from,
    "먹이" : dicItemInfo?.feed,
    "먹이주기" : dicItemInfo?.feedCycle,
    "온도" : dicItemInfo?.temp,
    "습도" : dicItemInfo?.humidity,
    "조명" : dicItemInfo?.lighting,
    "주거 환경" : dicItemInfo?.environment,
    "추가 정보" : dicItemInfo?.info,
  }

  // 잘못된 접근일 경우
  if (dicItemInfo === null) {
    return (
      <div>
        <h1>잘못된 접근입니다.</h1>
      </div>
    )
  }

  // 올바른 접근일 경우 페이지 렌더링
  return (
    <>
      <div className={`${style.dicImgContainer} ${style.containerBox}`}>
        <p className={`${style.dicSpecies}`}>{dicItemInfo.species}</p>
        <img src={process.env.PUBLIC_URL+`/images/${dicItemInfo.photo}`} alt="" className={`${style.dicImg}`}/>
      </div>
      <Accordion className={`${style.containerBox}`}>
        {Object.entries(infoToShow).map((info, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header><b>{info[0]}</b></Accordion.Header>
            <Accordion.Body className="fw-bold">{info[1]}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}