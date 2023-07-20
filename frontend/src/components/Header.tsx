import { nowPageStore } from '../store/store';
import style from '../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header():JSX.Element {
  const pageName =  nowPageStore(state => state.pageName);  // 현재 페이지 명
  return (
    <div className={`d-flex align-items-center justify-content-center ${style.Header}`}>
      <h1 className={style.pageName}>{pageName}</h1> 
    </div>
  )
}