// 훅 import 
import { useEffect, useState, } from 'react'
import { axiosCage } from 'constants/AxiosFunc';
// 상태 정보 import
import { userInfoStore } from 'store/userInfoStore';
import { myCagesStore } from 'store/myCageStore';
// 컴포넌트 import
import TopBox from 'components/Shared/TopBox';
import CageItemShort from 'components/Main/CageItemShort';
import { MoveIconLeft, MoveIconRight } from 'components/Shared/MoveIcon';
// 스타일 import
import style from 'styles/Main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CageContainer():JSX.Element {
  // 상태 정보 저장
  const userID = userInfoStore(state => state.user).id
  const myCages = myCagesStore(state => state.cages)
  const setCages = myCagesStore(state => state.setCages)

  // 케이지 정보 api 통해서 받아오고
  const loadCageInfos = async() => {
    try {
      const cageInfos = await axiosCage(`cage?userId=${userID}`, "GET")
      setCages(cageInfos)
    }
    catch {
    }
  }
  useEffect(() => {
    loadCageInfos();
  },[])

  // 케이지 표시 컨트롤
  const [mainCageOrder, setMainCageOrder] = useState(0);
  const handleCageOrder = (move:number):void => {
    const numberCage = Math.ceil(myCages.length / 2);
    if (numberCage !== 0) {
      setMainCageOrder((mainCageOrder + move + numberCage) % (numberCage))
    }
  }

  return (
    <div className={`${style.mainContainer} ${style.mainCages}`}>
      <TopBox name="케이지" link="/Cages"/>
      <div className={`row ${style.cagesContent} d-flex `}>
        <MoveIconLeft moveFunc={() => handleCageOrder(-1)}/>
        <div className='d-flex justify-content-center align-items-center col-10 mx-0 px-0 gx-5'>
          {myCages.length!==0? myCages.map((cage, index) => (
            <CageItemShort key={cage.id} cage={cage} index={index} order={mainCageOrder}/>
          )): <h1 className={style.noCage}>등록된 케이지가 없습니다!</h1>}
        </div>
        <MoveIconRight moveFunc={() => handleCageOrder(1)}/>
      </div>
    </div>
  )
}