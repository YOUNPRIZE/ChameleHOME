import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { userInfoStore } from '../store/store';

// 메인페이지
export default function Main():JSX.Element {
  const userInfo = userInfoStore();
  const navigate = useNavigate();

  // 로그인이 안 되어있는 경우 로그인 페이지로 이동
  useEffect(() => {
    if (userInfo.id === 0) {
      navigate(`/Login`);
    }
  }, [userInfo.id])

  return (
    <>
      <h1>Home</h1>
      {userInfo.id}
    </>
  )
}