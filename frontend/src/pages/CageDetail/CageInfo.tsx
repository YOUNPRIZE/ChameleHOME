// 훅 import 
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Client, Message } from 'paho-mqtt';
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import { myAnimalStore } from 'store/myAnimalStore';
// 컴포넌트 import
import AnimalItemShort from 'components/CageDatail/Animal/AnimalItemShort';
// 스타일 import
import style from 'styles/CageDetail/CageDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureThreeQuarters, faDroplet, faLightbulb, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTv, faClock, faBellConcierge, faPencil } from '@fortawesome/free-solid-svg-icons'


export default function CageInfo():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("케이지 정보");
  })

  // 케이지, 동물들 정보
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));
  const myAnimals  = myAnimalStore(state => (state.animalsInCages[cageId]));

  // 상단 동물들 표시 컨트롤
  const [mainCageOrder, setMainCageOrder] = useState(0);
  const handleCageOrder = (move:number):void => {
    const numberAnimal = Math.ceil(myAnimals.length / 2)
    if (numberAnimal !== 0) {
      setMainCageOrder((mainCageOrder + move + numberAnimal) % (numberAnimal))
    }
  }

  // 실시간 케이지 내부 환경 정보
  const [nowTem, setNowTem] = useState(0);
  const [nowHum, setNowHum] = useState(0);
  const [nowUv, setNowUv] = useState("");

  useEffect(() => {
    // MQTT 브로커에 커넥트
    const client = new Client("18.233.166.123", 3000, "client");
    client.connect({
      // 커넥트에 성공
      onSuccess: () => {
        console.log("MQTT Connection Success");
        client.subscribe("serialnumber/sensorval"); // 센서 정보를 받을 토픽
      },
      // 
      onFailure: (err) => {
        console.log("MQTT Connection Error:", err);
      }
    });

    // 토픽에서 메시지를 받을 때 실행되는 콜백 함수
    client.onMessageArrived = (message: Message) => {
      const topic = message.destinationName;
      const payload = message.payloadString;
      // 토픽에 따라 상태 정보 업데이트
      const sensorInfo = JSON.parse(payload);
      setNowTem(Number(sensorInfo.Temp));
      setNowHum(Number(sensorInfo.Humid));
      setNowUv(sensorInfo.uv === "0"? "Off" : "On");
      console.log(sensorInfo)
    };

    // 컴포넌트가 언마운트되면 MQTT 연결 해제
    return () => {
      client.disconnect();
    };
  }, []);

  // 페이지 렌더링
  return (
    <>
    {/* 동물 컨테이너 */}
    <div className={`${style.animalContainer} ${style.mainContainer}`}>
      {/* 동물 보기 상단바 */}
      <div className={`${style.animalTop}`}>
        <span>내 파충류들</span>
        <Link to={`./AnimalList`} className={style.noDeco}>목록 보기</Link>
      </div>
      {/* 각 동물 정보*/}
      <div className={`row ${style.animalsContent} d-flex `}>
        <div className={`col-1 ${style.moveIcon}`}>
          <FontAwesomeIcon icon={faChevronLeft} style={{color: "#000000",}} onClick={() => handleCageOrder(-1)}/>
        </div>
        <div className='d-flex justify-content-center align-items-center col-10 mx-0 px-0 gx-5'>
          {myAnimals.length !== 0 ? 
          myAnimals.map((animal, index) => (
            <AnimalItemShort key={animal.animalId} cageId={cageId} animal={animal} index={index} order={mainCageOrder}/>
          ))
          : <h1 className={style.noCage}>케이지가 비었어요!</h1> }
        </div>
        <div className={`col-1 ${style.moveIcon} justify-content-end`}>
          <FontAwesomeIcon icon={faChevronRight} style={{color: "#000000",}} onClick={() => handleCageOrder(1)}/>
        </div>
      </div>
    </div>
    {/* 실시간 환경 정보 컨테이너 */}
    <div className={`${style.settingContatiner} ${style.mainContainer}`}>
      <EachCageInfo live={`${nowTem}℃`} setting={`${myCage?.setTemp}℃`} icon={faTemperatureThreeQuarters}/>
      <EachCageInfo live={`${nowHum}%`} setting={`${myCage?.setHum}%`} icon={faDroplet}/>
      <EachCageInfo live={nowUv} setting={myCage?.setUv? "On":"Off"} icon={faLightbulb}/>
    </div>
    {/* 추가 세팅 컨테이너 */}
    <div className={`${style.btnContainer}`}>
      <SettingBtn link={"LiveVideo"} feature={"실시간 영상"} icon={faTv} />
      <SettingBtn link={"AutoSetting"} feature={"자동화 설정"} icon={faClock}/>
      <SettingBtn link={"AlarmSetting"} feature={"알람 설정"} icon={faBellConcierge}/>
    </div>
    </>
  )
}


// 케이지 환경 개별 컴포넌트
function EachCageInfo(props: { live: string | undefined, setting: string | undefined, icon: IconDefinition }): JSX.Element {
  // 컴포넌트 렌더링
  return (
    <div className={`${style.eachInfoContainer}`}>
      <FontAwesomeIcon icon={props.icon} style={{ color: "#000000", fontSize:"5vh" }}/>
      <div>
        <div className={`${style.eachInfoText}`}>현재 : {props.live}</div>
        <div className={`${style.eachInfoText}`}>설정 : {props.setting}</div>
      </div>
      <FontAwesomeIcon icon={faCaretUp} style={{ color: "green" , fontSize:"7vh" }} />
      <FontAwesomeIcon icon={faCaretDown} style={{ color: "red" , fontSize:"7vh" }} />
    </div>
  );
}


// 추가 세팅 버튼 컴포넌트
function SettingBtn(props: {link:string, feature:string, icon: IconDefinition}): JSX.Element {
  // 페이지 이동 함수
  const navigate = useNavigate();
  const handleLink = ():void => {
    navigate(`./${props.link}`)
  }
  // 컴포넌트 렌더링
  return (
    <div className={`${style.settingBtn}`} onClick={handleLink}>
      <FontAwesomeIcon icon={props.icon} style={{fontSize:"5vh"}}/>
      <div style={{fontSize:"1.5vh"}}>{props.feature}</div>
    </div>
  )
}