// 훅 import 
import {useParams } from 'react-router-dom';
import { useEffect } from 'react'
import { axiosAnimal, axiosAuto, axiosAlarm } from 'constants/AxiosFunc';
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import { myAnimalStore } from 'store/myAnimalStore';
import { alarmSettingStore, autoSettingStore } from 'store/mySettingStore';
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
  
  // 동물 정보 db에서 가져오기 함수
  const setAnimals = myAnimalStore(state => state.setAnimals)
  const loadCageInfos = async() => {
    try {
      const animalInfos = await axiosAnimal(`animal?cageId=${cageId}`, "GET")
      setAnimals(animalInfos)
    }
    catch {
      // 오류 처리
    }
  }

  // 자동화 세팅 db에서 가져오기 함수
  const setAutoSetting = autoSettingStore(state => state.setSetting)
  const loadAutoSettingInfos = async() => {
    try {
      const settingInfos = await axiosAuto(`setting?cage_id=${cageId}`, "GET")
      setAutoSetting(settingInfos)
    }
    catch {
      // 오류 처리
    }
  }

  // 자동화 세팅 db에서 가져오기 함수
  const setAlarmSetting = alarmSettingStore(state => state.setSetting)
  const loadAlarmSettingInfos = async() => {
    try {
      const settingInfos = await axiosAlarm(`alarm?cage_id=${cageId}`, "GET")
      setAlarmSetting(settingInfos)
    }
    catch {
      // 오류 처리
    }
  }

  // db 로드 함수 모두 실행
  useEffect(() => {
    loadCageInfos();
    loadAutoSettingInfos();
    loadAlarmSettingInfos();
  },[])

  // 페이지 렌더링
  return (
    <>
    {/* 동물 컨테이너 */}
    <AnimalBox cageId={cageId}/>
    {/* 실시간 환경 정보 컨테이너 */}
    <InnerCageInfo myCage={myCage}/>
    {/* 추가 세팅 컨테이너 */}
    <SettingBtnBox/>
    </>
  )
}
