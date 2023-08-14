// 훅 import 
import { useEffect, useState, useRef } from 'react';
import { Client } from 'paho-mqtt';
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
import { mqttClientStore } from 'store/mqttClientStore';
// 컴포넌트 import
import CageBox from 'components/Main/CageBox';
import DictionaryBox from 'components/Main/DicionaryBox';
import ItemBox from 'components/Main/ItemBox';
// 스타일 import

export default function Main():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("홈");
  }, [])

  // mqtt 브로커 커넥트 시도 완료까지 로딩
  const [endConnect, setEndConnect] = useState(false);
  const mqttclient = mqttClientStore(state => state.client);
  const setClient = mqttClientStore(state => state.setClient);
  console.log(mqttclient)
  useEffect(() => {
  }, [])  



  // 페이지 렌더링
  return (
    <>
      {/* 케이지 보기 컨테이너 */}
      <CageBox/>
      {/* 도감 보기 컨테이너 */}
      <DictionaryBox/>
      {/* 관련 상품 보기 컨테이너 */}
      <ItemBox/>
    </>
  )
}