// 함수 import
// import { useNavigate } from "react-router-dom";
// 상태정보 import
import { myCage } from "../store/myCageStore"
// 스타일 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/CageDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


interface Props {
  cage: myCage | undefined;
}

export default function CageInfoTop(props:Props):JSX.Element {
  return (
    <>
      <div className={style.cageName}>
        <span>{props.cage?.cageName} 케이지 </span>
        <div className={style.editContainer}><FontAwesomeIcon icon={faPencil} /></div>
      </div>
    </>
  )
}