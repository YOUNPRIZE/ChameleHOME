import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { nowPageStore } from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header():JSX.Element {
  // 현재 페이지명을 받아와서 표시
  const [pageName, setPageName] = useState(''); // 페이지명 상태
  useEffect(() => {
    const unsubscribe = nowPageStore.subscribe((state) => {
      setPageName(state.pageName);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // 뒤로 가기 함수
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // -1을 전달하여 뒤로 이동
  };

  // 컴포넌트 렌더링
  return (
    <div className={`${style.Header} z-3`}>
      <FontAwesomeIcon icon={faArrowLeft} className={style.headerIcon} onClick={handleGoBack}/>
      <h1 className={style.pageName}>{pageName}</h1> 
      <FontAwesomeIcon icon={faBell} className={style.headerIcon}/>
    </div>
  )
}