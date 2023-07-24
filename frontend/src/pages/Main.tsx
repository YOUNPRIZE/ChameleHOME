// 훅 import 
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import { userInfoStore, userInfoState } from '../store/userInfoStore';
import { myCage, myCagesStore } from '../store/myCageStore';
// 스타일 import
import style from '../styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// 컴포넌트 import
import MainCage from '../components/MainCage';


export default function Main():JSX.Element {
  // 상태 정보 받아오기
  const userInfo = userInfoStore();
  const myCages = myCagesStore(state => (state.cages));

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("홈");
  })

  // 메인 페이지 케이지 표시 컨트롤
  const [mainCageOrder, setMainCageOrder] = useState(0);
  const handleCageOrder = (move:number):void => {
    const numberCage = myCages.length
    const tmpOrder = numberCage !== 0 ? (mainCageOrder + move + numberCage) % numberCage : 0
    setMainCageOrder(Math.floor(tmpOrder))
  }

  // 페이지 렌더링
  return (
    <>
      {/* 케이지 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainCages}`}>
        {/* 케이지 보기 상단바 */}
        <div className={`${style.cagesTop}`}>
          <p>내 케이지들</p>
          <Link to='/Cages' className={style.noDeco}>목록 보기</Link>
        </div>
        {/* 케이지 보기 캐러셀 */}
        <div className={`carousel slide carousel-dark`} id="carouselExample">
          <div className="carousel-inner">
            {myCages.map((cage, index) => (
              <MainCage key={cage.cageId} cage={cage} index={index} order={mainCageOrder}/>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={() => handleCageOrder(-1)}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => handleCageOrder(1)}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
      {/* 도감 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainDic}`}>오늘의 도감</div>
      {/* 관련 상품 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainShops}`}>추천 상품</div>
    </>
  )
}