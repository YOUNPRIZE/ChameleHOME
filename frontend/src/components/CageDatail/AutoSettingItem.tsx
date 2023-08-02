
// 상태 정보 import
import { autoSetting } from 'store/mySettingStore';
// 스타일 import
import style from 'styles/CageDetail/CageSetting.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

// 각 세팅별 컴포넌트
export default function AutoSettingItem(props:{setting:autoSetting}):JSX.Element {
  const setting:autoSetting = props.setting
  return (
    <div className={`${style.settingContainer}`}>
      {/* 상단 부분 */}
      <div className={`${style.topContent}`}>
        {/* 시간 표시 */}
        <h1 className={`${style.settingTime}`}>{setting.time}</h1>
        {/* 수정, 삭제 버튼 */}
        <div>
          <FontAwesomeIcon icon={faPenToSquare} color="black" className={`${style.operIcon}`}/>
          <FontAwesomeIcon icon={faTrash} color="red" className={`${style.operIcon}`}/>
        </div>
      </div>
      {/* 하단 부분(선택된 옵션은 배경색으로 표시) */}
      <div className={`${style.bottomContent}`}>
        {/* 설정 온도 표시 */}
        <div className={`${style.item} ${setting.set_temp !== null && style.selected}`}>
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} color={setting.set_temp !== null? 'red':'black'} className={`${style.settingIcon}`}/>
          {setting.set_temp? `${setting.set_temp}℃` : ''}
        </div>
        {/* 설정 습도 표시 */}
        <div className={`${style.item} ${setting.set_hum !== null && style.selected}`}>
          <FontAwesomeIcon icon={faDroplet} color={setting.set_hum !== null? 'skyblue':'black'} className={`${style.settingIcon}`}/>
          {setting.set_hum !==null ? `${setting.set_hum}%` : ''}
        </div>
        {/* UV 설정 표시 */}
        <div className={`${style.item} ${setting.set_uv !== null && style.selected}`}>
          <FontAwesomeIcon icon={faLightbulb} color={setting.set_uv === true? 'peru':'black'} className={`${style.settingIcon}`}/>
          {setting.set_uv && 'On'}{setting.set_uv === false && 'Off'}
        </div>
      </div>
    </div>
  )
}