// 훅 import 
import {useParams } from 'react-router-dom';
import { useEffect } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import { myAnimalStore } from 'store/myAnimalStore';
// 컴포넌트 import
import AnimalBox from 'components/CageDatail/CageInfo/AnimalBox';
import InnerCageInfo from 'components/CageDatail/CageInfo/InnerCageInfo';
import SettingBtnBox from 'components/CageDatail/CageInfo/SettingBtnBox';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'

export default function CageInfo():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("케이지 정보");
  }, [])

  // 케이지, 동물들 정보
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));
  const myAnimals  = myAnimalStore(state => (state.animalsInCages[cageId]));
  
  // 페이지 렌더링
  return (
    <>
    {/* 동물 컨테이너 */}
    <AnimalBox myAnimals={myAnimals}/>
    {/* 실시간 환경 정보 컨테이너 */}
    <InnerCageInfo myCage={myCage}/>
    {/* 추가 세팅 컨테이너 */}
    <SettingBtnBox/>
    </>
  )
}
