// 상태정보 import
import { myCage } from "../store/myCageStore"
// 스타일 import
import style from '../styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


interface Props {
  cage: myCage;
  index: Number;
  order: Number;
}

export default function MainCage(props:Props):JSX.Element {
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${props.cage.cageImg}`
  return (
    <>
      <div className={`carousel-item ${props.index == props.order ? 'active': ''} ${style.cagesContent}`}>
        {props.cage.cageName}
        <img src={imgUrl} className="d-block w-25 mx-auto" alt="..."></img>
      </div>
    </>
  )
}