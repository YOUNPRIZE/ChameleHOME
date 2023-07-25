// 함수 import
import { useState, useEffect } from 'react';
// 상태정보 import
import { myCage } from '../store/myCageStore';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/Cages.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons'


interface Props {
  cage: myCage;
}

export default function EachCage(props:Props):JSX.Element {
  // 케이지 내부 환경 정보
  const [nowTem, setNowTem] = useState(0);
  const [nowHum, setNowHum] = useState(0);
  const [nowUv, setnowUv] = useState(true);

  // 실시간 케이지 내부 환경 반영
  useEffect(() => {
    let idx: number = 0;
    const setCircum = () => {
      // 실시간 정보 받아오기(코드 변경해야함)
      const tmpTem: number[] = [30, 31, 32, 31];
      const tmpHum: number[] = [50, 60, 70, 60];
      const tmpUv: boolean[] = [true, false, true, false];
      idx = (idx + 1) % 4;
      // 변수 확정
      setNowTem(tmpTem[idx]);
      setNowHum(tmpHum[idx]);
      setnowUv(tmpUv[idx]);
    };
    const intervalId = setInterval(setCircum, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // 이미지 변수
  const imgUrl:string = process.env.PUBLIC_URL+`/images/${props.cage.cageImg}`

  // 렌더링
  return (
    <div className={style.cageContainer}>
      <div className={`${style.imgContainer}`}>
        <img src={imgUrl} alt="" className={style.img}/>
      </div>
      <div className={` ${style.infoContainer}`}>
        <p className={style.cageName}>{props.cage.cageName}</p>
        <div className={style.cageInfo}>
          <div className={style.eachInfo}>
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} style={{color: "#000000",}} />
            <span> {nowTem}</span>
          </div>
          <div className={style.eachInfo}>
            <FontAwesomeIcon icon={faDroplet} style={{color: "#000000",}} />
            <span> {nowHum}</span>
          </div>
          <div className={style.eachInfo}>
            <FontAwesomeIcon icon={faLightbulb} style={{color: "#000000",}} />
            <span> {nowUv? 'on' : 'off'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}