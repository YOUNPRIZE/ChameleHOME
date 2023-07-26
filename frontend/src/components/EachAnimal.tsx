// 함수 import
import { useNavigate } from "react-router-dom";
// 상태정보 import
import { Animal } from "../store/myAnimalStore"
import data from "../constants/AnimalToImage.json"
// 스타일 import
import style from '../styles/CageDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


interface Props {
  animal: Animal;
  index: number;
  order: number;
}

export default function EachAnimal(props:Props):JSX.Element {

  // 이미지 주소
  const species:string = props.animal.species
  const ImgUrls:{ [key: string]: string } = data
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${ImgUrls[species]}`

  // // 클릭하면 케이지 상세페이지로 이동
  // const navigate = useNavigate();
  // const handleMoveDetail = () => {
  //   navigate(`/CageDetail/${props.cage.cageId}`)
  // }

  return (
    <>
      <div className={`${Math.floor(props.index / 2) !== props.order ? 'd-none': ''} ${style.animalContent}`}>
        <img src={imgUrl} className={style.animalImg} alt="..."></img>
        <p className={`my-0 ${style.animalName}`}>{props.animal.name}</p>
      </div>
    </>
  )
}