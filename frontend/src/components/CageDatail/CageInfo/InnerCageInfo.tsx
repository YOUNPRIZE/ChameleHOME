// 훅|함수 import 
import { useParams } from 'react-router-dom';
// 상태 정보 import
import {  myCagesStore } from 'store/myCageStore';
import { nowCageValueStore } from 'store/myCageStore';
// 컴포넌트 import
import InnerCageInfoItem from './InnerCageInfoItem';
// 스타일 import
import style from 'styles/CageDetail/CageDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faTemperatureThreeQuarters, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function InnerCageInfo({handleSetting}:{ handleSetting:Function}):JSX.Element {
  // props|상태정보 받아오기
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));
  const nowCage = nowCageValueStore();

  // 컴포넌트 렌더링
  return (
    <div className={`${style.settingContatiner} ${style.mainContainer}`}>
      {/* 온도 */}
      <InnerCageInfoItem 
        live={nowCage.temp !== 0? `${Math.round(nowCage.temp)}℃` : "연결 X"} 
        setting={`${myCage?.set_temp}℃`} 
        icon={faTemperatureThreeQuarters} 
        up={()=>handleSetting([1,0,false])} 
        down={()=>handleSetting([-1,0,false]) }
      />
      {/* 습도 */}
      <InnerCageInfoItem 
        live={nowCage.hum !== 0? `${nowCage.hum}%` : "연결 X"} 
        setting={`${myCage?.set_hum}%`} 
        icon={faDroplet} 
        up={()=>handleSetting([0,1,false])} 
        down={()=>handleSetting([0,-1,false]) }
      />
      {/* 조명 */}
      <InnerCageInfoItem 
        live={nowCage.uv !== ""? nowCage.uv : "연결X"} 
        setting={myCage?.set_uv? "On":"Off"} 
        icon={faLightbulb} 
        up={()=>handleSetting([0,0,true])} 
        down={()=>handleSetting([0,0,true]) }
      />
    </div>
  )
}