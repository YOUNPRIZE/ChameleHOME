// 훅 import 
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react'
import { Message, Client } from 'paho-mqtt';
import mqtt, {IClientOptions} from "precompiled-mqtt";
// 상태 정보 import
import {  myCage, myCagesStore } from 'store/myCageStore';
import { nowCageValueStore } from 'store/myCageStore';
// 컴포넌트 import
import InnerCageInfoItem from './InnerCageInfoItem';
// 스타일 import
import style from 'styles/CageDetail/CageDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faTemperatureThreeQuarters, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons'

// 케이지 내부 실시간 정보 및 세팅 정보
export default function InnerCageInfo(props:{myCage:myCage|undefined}):JSX.Element {
  // props 받아오기
  const cageId = Number(useParams().cageId);
  const myCage = props.myCage;

  // 상태 정보 받아오기
  const nowCage = nowCageValueStore();

  // Mqtt 통신 토픽
  const getInfoTopic = `${cageId}/sensorval`
  const sendInfoTopic = `${cageId}/setval`

  // 케이지 내부 센서값 받기
  const clientRef = useRef<Client|null>(null);
  useEffect(() => {
    // 케이지 아이디 판단
    if (nowCage.cageId !== cageId) {
      nowCage.setCageId(cageId);
      nowCage.setTemp(0);
      nowCage.setHum(0);
      nowCage.setUv("");
    }
    const options:IClientOptions  = {
      protocol: "wss",
      username: 'FRONT',
      password: '1234',
      clientId: 'react-client',
    };
    const client = mqtt.connect('wss://i9a101.p.ssafy.io:8999', options);

    client.on('connect', () => {
        console.log("CONNECTED to broker");
    });

  
    // // Mqtt 연결
    // const client = new Client("i9a101.p.ssafy.io", 8999, "client");
    // clientRef.current = client;
    // if (!client.isConnected()) {
    //   client.connect({
    //     userName: "FRONT",
    //     password: "1234",
    //     // useSSL:true,
    //     // mqttVersion:4,
    //     // 커넥트에 성공(구독)
    //     onSuccess: () => { 
    //       console.log("연결 성공")
    //       client.subscribe(getInfoTopic);
    //     },
    //     // 커넥트 실패
    //     onFailure: () => { 
    //       console.log("연결 실패")
    //     }
    //   });
    // };
    // // 토픽을 통해 센서값 받기
    // client.onMessageArrived = (message: Message) => {
    //   const payload = message.payloadString;
    //   const sensorInfo = JSON.parse(payload);
    //   // 토픽에 따라 상태 정보 업데이트
    //   nowCage.setTemp(Number(sensorInfo.Temp));
    //   nowCage.setHum(Number(sensorInfo.Humid));
    //   nowCage.setUv(sensorInfo.uv === "0"? "Off" : "On");
    // };
    // // 컴포넌트가 언마운트되면 연결 해제
    // return () => {
    //   client.disconnect();
    // };
  }, []);
  
  // 환경 세팅 조절 후 Mqtt로 세팅값 보내기
  const updateCage = myCagesStore(state => state.updateCage);
  const handleSetting = (setting:[number,number,boolean]) => {
    const client = clientRef.current;
    // mycage와 client가 유효할 때만 함수 실행
    if (client && client.isConnected() && myCage) {
      // 세팅값 조절하기
      myCage.setTemp += setting[0];
      myCage.setHum += setting[1];
      myCage.setUv = setting[2]? !myCage.setUv : myCage.setUv;
      updateCage(myCage);
      // 세팅값 Mqtt로 보내기
      const payload = {temp: myCage?.setTemp, humid: myCage?.setTemp, uv: myCage?.setUv,};
      const message = new Message(JSON.stringify(payload));
      message.destinationName = sendInfoTopic;
      client.send(message);
    }
  }

  // 컴포넌트 렌더링
  return (
    <div className={`${style.settingContatiner} ${style.mainContainer}`}>
      {/* 온도 */}
      <InnerCageInfoItem live={nowCage.temp !== 0? `${nowCage.temp}℃` : "연결 X"} setting={`${myCage?.setTemp}℃`} 
      icon={faTemperatureThreeQuarters} up={()=>handleSetting([1,0,false])} down={()=>handleSetting([-1,0,false]) }/>
      {/* 습도 */}
      <InnerCageInfoItem live={nowCage.hum !== 0? `${nowCage.hum}%` : "연결 X"} setting={`${myCage?.setHum}%`} 
      icon={faDroplet} up={()=>handleSetting([0,1,false])} down={()=>handleSetting([0,-1,false]) }/>
      {/* 조명 */}
      <InnerCageInfoItem live={nowCage.uv !== ""? nowCage.uv : "연결X"} setting={myCage?.setUv? "On":"Off"} 
      icon={faLightbulb} up={()=>handleSetting([0,0,true])} down={()=>handleSetting([0,0,true]) }/>
    </div>
  )
}