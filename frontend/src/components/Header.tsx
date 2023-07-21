import { useState,useEffect } from 'react';
import { nowPageStore } from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header():JSX.Element {
  // 현재 페이지명을 받아와서 표시
  // const pageName =  nowPageStore(state => state.pageName);  // 현재 페이지 명
  const [pageName, setPageName] = useState(''); // 페이지명 상태

  useEffect(() => {
    const unsubscribe = nowPageStore.subscribe((state) => {
      setPageName(state.pageName);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={`d-flex align-items-center justify-content-center ${style.Header}`}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <h1 className={style.pageName}>{pageName}</h1> 
      <FontAwesomeIcon icon={faBell} />
    </div>
  )
}