// 훅 import 
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import { userInfoStore, userInfoState } from '../store/userInfoStore';
import { myCage, myCagesStore } from '../store/myCageStore';
import {animalDicStore} from '../store/animalDicStore'
// 스타일 import
import style from '../styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// 컴포넌트 import
import MainCage from '../components/MainCage';

export default function Main():JSX.Element {
  // 상태 정보 받아오기
  const myCages = myCagesStore(state => (state.cages));
  const animalDic = animalDicStore(state => (state.dictionary))

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("홈");
  })

  // 케이지 표시 컨트롤
  const [mainCageOrder, setMainCageOrder] = useState(0);
  const handleCageOrder = (move:number):void => {
    const numberCage = Math.ceil(myCages.length / 2)
    if (numberCage !== 0) {
      setMainCageOrder((mainCageOrder + move + numberCage) % (numberCage))
    }
  }

  // 도감 표시 컨트롤
  const [todayDic, setTodayDic] = useState(0)
  const [imgUrl, setimgUrl] = useState(process.env.PUBLIC_URL+`/images/${animalDic[0].photo}`)
  const [dicName, setDicName] = useState(animalDic[0].species)
  const numberDic:number = animalDic.length
  const handleDicOrder = (move:number):void => {
    setTodayDic((todayDic + numberDic + move) % (numberDic))
    setimgUrl(process.env.PUBLIC_URL+`/images/${animalDic[todayDic].photo}`)
    setDicName(animalDic[todayDic].species)
  }

  // 페이지 렌더링
  return (
    <>
      {/* 케이지 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainCages}`}>
        {/* 케이지 보기 상단바 */}
        <div className={`${style.containerTop}`}>
          <span>내 케이지들</span>
          <Link to='/Cages' className={style.noDeco}>목록 보기</Link>
        </div>
        {/* 케이지 정보*/}
        <div className={`row ${style.cagesContent} d-flex `}>
          <div className={`col-1 ${style.moveIcon}`}>
            <FontAwesomeIcon icon={faChevronLeft} style={{color: "#000000",}} onClick={() => handleCageOrder(-1)}/>
          </div>
          <div className='d-flex justify-content-center align-items-center col-10 mx-0 px-0 gx-5'>
            {myCages.length!==0? myCages.map((cage, index) => (
              <MainCage key={cage.cageId} cage={cage} index={index} order={mainCageOrder}/>
            )): <h1 className={style.noCage}>등록된 케이지가 없습니다!</h1>}
          </div>
          <div className={`col-1 ${style.moveIcon} justify-content-end`}>
            <FontAwesomeIcon icon={faChevronRight} style={{color: "#000000",}} onClick={() => handleCageOrder(1)}/>
          </div>
        </div>
      </div>
      {/* 도감 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainDic}`}>
        <div className={`${style.containerTop}`}>
          <span>파충류 도감</span>
          <Link to="/DicList" className={style.noDeco}>도감 전체보기</Link>
        </div>
        <div className={`${style.dicContainer} row d-flex`}>
          <div className={`col-1 ${style.moveIcon}`}>
            <FontAwesomeIcon icon={faChevronLeft} style={{color: "#000000",}} onClick={() => handleDicOrder(-1)}/>
          </div>
          <div className={`${style.dicContent} col-10`}>
            <h3 className={style.dicText}>{dicName}</h3>
            <img src={imgUrl} alt="" className={style.dicImg}/>
          </div>
          <div className={`col-1 ${style.moveIcon} justify-content-end`}>
            <FontAwesomeIcon icon={faChevronRight} style={{color: "#000000",}} onClick={() => handleDicOrder(1)}/>
          </div>
        </div>
      </div>
      {/* 관련 상품 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainShops}`}>
        <div className={`${style.containerTop}`}>
          <span>추천 상품</span>
        </div>
        <div className={style.shopContainer}>
          <h1 style={{fontWeight:"bold"}}>Comming Soon!</h1>
        </div>
      </div>
    </>
  )
}