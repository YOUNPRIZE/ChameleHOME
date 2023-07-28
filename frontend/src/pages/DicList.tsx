// 훅 import 
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import { animalDicStore, dicAnimal } from '../store/animalDicStore'
// 스타일 import
import style from '../styles/DicList.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// 도감 페이지
export default function DicList():JSX.Element {
  // 상태 정보 받아오기
  const animalDic = animalDicStore(state => (state.dictionary))

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("도감 목록");
  })

  // 페이지 렌더링
  return (
    <div className={`row ${style.DicList}`}>
      {animalDic.map((dicItem, index) => (
        <DicItem key={index} dicItem={dicItem}/>
      ))}
    </div>
  )
}


// 각 항목별 컴포넌트
function DicItem(props: {dicItem:dicAnimal}):JSX.Element {
  // 변수 설정
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${props.dicItem.photo}`
  
  // 항목 상세보기 이동 함수
  const navigate = useNavigate();
  const handleDicDetail = () => {
    navigate(`/DicDetail/${props.dicItem.species}`, {state : props.dicItem} )
  }

  // 컴포넌트 렌더링
  return (
      <div className={`${style.dicItemContainer}`} onClick={handleDicDetail}>
        <div className={`${style.dicImgContainer}`}>
          <img src={imgUrl} alt="" className={`${style.dicImg}`}/>
        </div>
        <p className={`${style.dicTextContainer}`}>{props.dicItem.species}</p>
      </div>
  )
}