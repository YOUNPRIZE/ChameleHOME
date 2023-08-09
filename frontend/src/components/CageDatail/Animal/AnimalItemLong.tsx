// 훅 import
import { useNavigate } from 'react-router-dom';
// 상태정보 import
import { Animal } from 'store/myAnimalStore';
// 스타일 import
import style from 'styles/CageDetail/AnimalList.module.css'

export default function AnimalItemLong(props: {animal:Animal, age:number}):JSX.Element {
  // 동물 상세보기로 이동
  const navigate = useNavigate();
  const handleDetail = (animalId:number):void => {
    navigate(`../AnimalDetail/${animalId}`)
  }
  // 이미지 url
  const imgUrl  = process.env.PUBLIC_URL+`/images/${props.animal.photo}`

  return (
    <div className={`${style.animalContainer}`} onClick={() => handleDetail(props.animal.id)}>
      <div className={`${style.imgContainer}`}>
        <img src={imgUrl} alt="" className={style.image}/>
      </div>
      <div className={`${style.textContainer}`}>
        <p className={`${style.animalName}`}>{props.animal.name}</p>
        <div className={`${style.animalInfo}`}>
          <p className={`${style.animalText}`}>{props.animal.species}</p>
          <p className={`${style.animalText}`}>{props.age}살</p>
        </div>
      </div>
    </div>
  )
}