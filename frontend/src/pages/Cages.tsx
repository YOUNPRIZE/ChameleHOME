// 훅 import 
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import { userInfoStore, userInfoState } from '../store/userInfoStore';
import { myCage, myCagesStore } from '../store/myCageStore';
// 컴포넌트 import
import EachCage from '../components/EachCage';
// 스타일 import
import style from '../styles/Cages.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Cages():JSX.Element {
  // 상태 정보 받아오기
  const userInfo = userInfoStore();
  const myCages = myCagesStore(state => (state.cages));

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("케이지 목록");
  })

  return (
    <div>
      {myCages.map((cage) => (
        <EachCage key={cage.cageId} cage={cage}/>
      ))}
      <button className={style.addCage}>케이지 추가하기</button>
    </div>
  )
}