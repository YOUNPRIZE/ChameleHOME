// 훅 import
import { useRef, useState } from 'react';
// 컴포넌트 import
import AddBtn from 'components/Shared/AddBtn';
// 스타일 import
import style from 'styles/CageDetail/CageSetting.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsSpin, faCirclePlay, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

export default function AlarmSettingModal(props:{modalShow:boolean, setModalShow:Function}) {
  // 모달창 닫기 함수
  const handleClose = () => {
    props.setModalShow(false); 
  };

  // 입력값들
  const name = useRef<HTMLInputElement>(null);
  const dayCycle = useRef<HTMLInputElement>(null);
  const hourCycle = useRef<HTMLInputElement>(null);
  const minuteCycle = useRef<HTMLInputElement>(null);
  const dayStart = useRef<HTMLInputElement>(null);
  const timeStart = useRef<HTMLInputElement>(null);

  // 알람 세팅 추가하기
  const addSetting = ():void => {
    // 주기 구하기
    const dayCycleValue:number = parseInt(dayCycle.current?.value || "0", 10);
    const hourCycleValue:number = parseInt(hourCycle.current?.value || "0", 10);
    const minuteCycleValue:number = parseInt(minuteCycle.current?.value || "0", 10);
    const cycle:number = dayCycleValue * 1440 + hourCycleValue * 60 + minuteCycleValue;
    // 날짜 구하기
    if (! name.current?.value) {
      alert("알람 이름을 입력해주세!");
    } else if (! cycle ) {
      alert("주기를 입력해주세요!");
    } else if (! dayStart.current?.value) {
      alert("날짜를 입력해주세요!");
    } else {
      const timeStartValue = ! timeStart.current?.value? "09:00" : timeStart.current?.value
      const dateTime = new Date(`${dayStart.current?.value} ${timeStartValue}`);
      console.log(name.current?.value);
      console.log(cycle);
      console.log(dateTime);
      console.log(dayStart.current?.value);
    }
  }

  return (
    <>
      <Modal show={props.modalShow} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title className={`${style.modalTitle}`}>세팅 추가하기</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>닫기</Button>
        </Modal.Header>
        <Modal.Body>
          {/* 알람 제목 */}
          <div className={`${style.alarmContentBox}`}>
            <h3 className={`${style.contentTitle}`}>
              <span>알람 제목</span>
              <FontAwesomeIcon icon={faCircleQuestion} />
            </h3>
            <input type="text" className={`${style.inputShared}`} ref={name}/>
          </div>
          <hr />
          {/* 알람 주기 */}
          <div className={`${style.alarmContentBox}`}>
            <h3 className={`${style.contentTitle}`}>
              <span>알람 주기</span>
              <FontAwesomeIcon icon={faArrowsSpin} />
            </h3>
            <div className={`${style.alarmInputBox}`}>
              <input type="number" placeholder="일" 
              className={`${style.cycleInput} ${style.inputShared}`} ref={dayCycle}/>
              <input type="number" placeholder="시간" 
              className={`${style.cycleInput} ${style.inputShared}`} ref={hourCycle}/>
              <input type="number" placeholder="분" 
              className={`${style.cycleInput} ${style.inputShared}`} ref={minuteCycle}/>
            </div>
          </div>
          <hr />
          {/* 알람 시작일 */}
          <div className={`${style.alarmContentBox}`}>
            <h3 className={`${style.contentTitle}`}>
              <span>알람 시작일</span>
              <FontAwesomeIcon icon={faCirclePlay} />
            </h3>
            <div className={`${style.alarmInputBox}`}>
              <input type="date" className={`${style.startInput} ${style.inputShared}`} ref={dayStart}/>
              <input type="time" className={`${style.startInput} ${style.inputShared}`} ref={timeStart}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <AddBtn feature={addSetting}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}