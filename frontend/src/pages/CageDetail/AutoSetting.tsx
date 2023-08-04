// 훅 import 
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import { autoSettingStore } from 'store/mySettingStore';
// 컴포넌트 import
import AddBtn from 'components/Shared/AddBtn';
import AutoSettingItem from 'components/CageDatail/AutoSetting/AutoSettingItem';
import AutoSettingModal from 'components/CageDatail/AutoSetting/AutoSettingModal';
// 스타일 import
import style from 'styles/CageDetail/CageSetting.module.css'

export default function AutoSetting():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("자동화 설정");
  }, [])
  // 상태 정보 + Props 받기
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));
  const autoSettings = autoSettingStore(state => (state.settingsInCages[cageId]))

  // 모달창 컨트롤
  const [modalShow, setmodalShow] = useState(false);
  
  return (
    <>
      {autoSettings.map((setting, index) => (
        <AutoSettingItem setting={setting} key={setting.setting_pk}/>
      ))}
      <AddBtn feature={() => setmodalShow(true)}/>
      <AutoSettingModal modalShow={modalShow} setModalShow={setmodalShow}/>
    </>
  )
}
