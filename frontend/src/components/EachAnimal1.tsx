// 함수 import
import { useNavigate } from "react-router-dom";
// 상태정보 import
import { Animal } from "../store/myAnimalStore"
import data from "../constants/AnimalToImage.json"
// 스타일 import
import style from '../styles/CageDetail/CageDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


interface Props {
  cageId: number
  animal: Animal;
  index: number;
  order: number;
}

export default function EachAnimal1(props:Props):JSX.Element {

  // 이미지 주소
  const species:string = props.animal.species
  const ImgUrls:{ [key: string]: string } = data
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${ImgUrls[species]}`

  // 동물 상세보기로 이동
  const navigate = useNavigate();
  const handleDetail = ():void => {
    navigate(`../AnimalDetail/${props.animal.animalId}`)
  }

  return (
    <>
      <div className={`${Math.floor(props.index / 2) !== props.order ? 'd-none': ''} ${style.animalContent}`} onClick={handleDetail}>
        <img src={imgUrl} className={style.animalImg} alt="..."></img>
        <p className={`my-0 ${style.animalName}`}>{props.animal.name}</p>
      </div>
    </>
  )
}