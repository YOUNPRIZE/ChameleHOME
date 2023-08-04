// 훅 import 
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import { alarmSettingStore } from 'store/mySettingStore';
// 컴포넌트 import
import AlarmSettingItem from 'components/CageDatail/AlarmSetting/AlarmSettingItem';
import AddBtn from 'components/Shared/AddBtn';
import AlarmSettingModal from 'components/CageDatail/AlarmSetting/AlarmSettingModal';
// 스타일 import

export default function AlarmSetting():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("알람 설정");
  }, [])

  // 상태 정보 + Props 받기
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));
  const alarmSettings = alarmSettingStore(state => state.settingsInCages[cageId])

  // 모달창 컨트롤
  const [modalShow, setmodalShow] = useState(false);

  return (
    <>
      {alarmSettings.map((alarm) => (
        <AlarmSettingItem setting={alarm} key={alarm.alarm_pk}/>
      ))}
      <AddBtn feature={() => setmodalShow(true)}/>
      <AlarmSettingModal modalShow={modalShow} setModalShow={setmodalShow}/>
    </>
  )
}