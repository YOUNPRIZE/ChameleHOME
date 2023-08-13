// 훅|함수 import 
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react'
import { Client, Message } from 'paho-mqtt';
// 상태 정보 import
// 컴포넌트 import
// 스타일 import
import style from 'styles/CageDetail/LiveViedo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faCamera } from '@fortawesome/free-solid-svg-icons'

export default function MoveBtnBox({handleCapture}:{handleCapture:Function}):JSX.Element {
  // props 받아오기
  const cageId = Number(useParams().cageId);
  
  // Mqtt 커넥트
  const clientRef = useRef<Client|null>(null);
  useEffect(() => {
    const client = new Client("i9a101.p.ssafy.io", 9001, "client");
    clientRef.current = client;
    // Mqtt 연결
    if (!client.isConnected()) {
      client.connect({
        // 계정 정보
        userName: "FRONT",
        password: '1234',
        // https 보안을 위해 사용
        useSSL: true,
        // 커넥트에 성공
        onSuccess: () => {
        },
        // 커넥트 실패
        onFailure: (err) => { 
        }
      });
    }
    // 컴포넌트가 언마운트되면 연결 해제
    return () => {
      client.disconnect();
    };
  }, []);

  // 카메라 이동 함수
  const moveCamera = (direction:string):void => {
    const client = clientRef.current
    // client가 null값이 아니고 연결되었을 때만 함수 실행
    if (client && client.isConnected()) {
      const message = new Message(direction);
      message.destinationName = `${cageId}/angle`;
      client.send(message);
    }
  }

  return (
    // 카메라 무빙 버튼
    <div className={`${style.btnContainer}`}>
      <div className={`${style.btnRow}`}>   
        <FontAwesomeIcon icon={faCaretUp} onClick={() => {moveCamera("up")}}/>
      </div>
      <div className={`${style.btnRow}`}>
        <FontAwesomeIcon icon={faCaretLeft}  onClick={() => {moveCamera("left")}}/>
        <FontAwesomeIcon icon={faCamera} onClick={() => handleCapture()}/>
        <FontAwesomeIcon icon={faCaretRight}  onClick={() => {moveCamera("right")}}/>
      </div>
      <div className={`${style.btnRow}`}>
        <FontAwesomeIcon icon={faCaretDown}  onClick={() => {moveCamera("down")}}/>
      </div>
    </div>
  )
}