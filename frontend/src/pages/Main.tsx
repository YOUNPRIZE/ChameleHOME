import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { nowPageStore, userInfoStore, userInfoState } from '../store/store';

// 메인페이지
export default function Main():JSX.Element {
  // 상태 정보 받아오기
  const userInfo = userInfoStore();
  // hooks 불러오기
  const navigate = useNavigate();
  // 로그인이 안 되어있는 경우 로그인 페이지로 이동
  useEffect(() => {
    if (userInfo.id === 0) {
      navigate(`/Login`);
    }
  }, [userInfo.id])
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("홈");
  })

  return (
    <>
      <h1>Home</h1>
      {userInfo.userId}
    </>
  )
}