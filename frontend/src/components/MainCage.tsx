// 상태정보 import
import { myCage } from "../store/myCageStore"
// 스타일 import
import style from '../styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


interface Props {
  cage: myCage;
  index: number;
  order: number;
}

export default function MainCage(props:Props):JSX.Element {
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${props.cage.cageImg}`
  return (
    <>
      <div className={`${Math.floor(props.index / 2) !== props.order ? 'd-none': ''} ${style.cageContent}`}>
        <img src={imgUrl} className={style.cageImg} alt="..."></img>
        <p className={`my-0 ${style.cageName}`}>{props.cage.cageName}</p>
      </div>
    </>
  )
}