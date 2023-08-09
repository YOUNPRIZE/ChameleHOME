// 훅 import 
import { useEffect, useState, } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import {animalDicStore} from 'store/animalDicStore';
import { nowCageValueStore } from 'store/myCageStore';
// 컴포넌트 import
import CageContainer from 'components/Main/CageContainer';
import TopBox from 'components/Shared/TopBox';
import CageItemShort from 'components/Main/CageItemShort';
import DicItemBig from 'components/Main/DicItemBig';
import { MoveIconLeft, MoveIconRight } from 'components/Shared/MoveIcon';
// 스타일 import
import style from 'styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Main():JSX.Element {
  // 상태 정보 받아오기
  const animalDic = animalDicStore(state => (state.dictionary))

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("홈");
  }, [])

  // 도감 표시 컨트롤
  const [dicIdx, setDicIdx] = useState(0);
  const handleDicOrder = (move:number):void => {
    const numberDic:number = animalDic.length
    setDicIdx((dicIdx + numberDic + move) % numberDic)
  }

  // 페이지 렌더링
  return (
    <>
      {/* 케이지 보기 컨테이너 */}
      <CageContainer/>
      {/* 도감 보기 컨테이너 */}
      <div className={`${style.mainContainer} ${style.mainDic}`}>
        <TopBox name="파충류 도감" link="/Dictionary"/>
        <div className={`${style.dicContainer} row d-flex`}>
          <MoveIconLeft moveFunc={() => handleDicOrder(-1)}/>
          {animalDic.map((item, index) => (
            <DicItemBig key={index} index={index} dicIdx={dicIdx} item={item}/>
          ))}
          <MoveIconRight moveFunc={() => handleDicOrder(1)}/>
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