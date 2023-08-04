// 훅 import
import { useRef, useState } from 'react';
// 컴포넌트 import
import AddBtn from 'components/Shared/AddBtn';
// 스타일 import
import style from 'styles/CageDetail/CageSetting.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faDroplet, faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function AutoSettingModal(props:{modalShow:boolean, setModalShow:Function}) {
  // 모달창 닫기 함수
  const handleClose = () => {
    props.setModalShow(false); 
  };

  // 입력값들
  const [useTemp, setUseTemp] = useState(false);
  const [useHum, setUseHum] = useState(false);
  const [useUv, setUseUv] = useState(false);
  const time = useRef<HTMLInputElement>(null);
  const temp = useRef<HTMLInputElement>(null);
  const hum = useRef<HTMLInputElement>(null);
  const uv = useRef<HTMLSelectElement>(null);

  // 자동화 세팅 추가하기
  const addSetting = ():void => {
    const setTemp: number | null = useTemp? Number(temp.current?.value) : null;
    const setHum: number | null = useHum? Number(hum.current?.value) : null;
    const setUv: boolean | null = useUv? Boolean(uv.current?.value) : null;
    console.log(time.current?.value);
    console.log(setTemp);
    console.log(setHum);
    console.log(setUv);
  }

  return (
    <>
      <Modal show={props.modalShow} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title className={`${style.modalTitle}`}>세팅 추가하기</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>닫기</Button>
        </Modal.Header>
        <Modal.Body>
          {/* 시간 입력 */}
          <FloatingLabel controlId="floatingInputGrid" label="시간" className={`${style.inputTime}`}>
            <Form.Control type="time" className={`${style.inputTag}`} ref={time}/>
          </FloatingLabel>
          {/* 온도 입력 */}
          <div className={`${style.inputBox}`}>
            <span className={`${style.iconBox}`} style={{backgroundColor:useTemp?'hotpink':'white'}} onClick={() => setUseTemp(!useTemp)}>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} color={useTemp? 'white':'grey'}  />
            </span>
            <FloatingLabel controlId="floatingInputGrid" label="온도(℃)" className={`${style.inputLabel}`}>
              <Form.Control type="number" readOnly={!useTemp} className={`${style.inputTag}`} ref={temp}/>
            </FloatingLabel>
          </div>
          {/* 습도 입력 */}
          <div className={`${style.inputBox}`}>
            <span className={`${style.iconBox}`} style={{backgroundColor:useHum?'skyblue':'white'}} onClick={() => setUseHum(!useHum)}>
              <FontAwesomeIcon icon={faDroplet} color={useHum? 'white':'grey'}  />
            </span>
            <FloatingLabel controlId="floatingInputGrid" label="습도(%)" className={`${style.inputLabel}`}>
              <Form.Control type="number" readOnly={!useHum} className={`${style.inputTag}`} ref={hum}/>
            </FloatingLabel>
          </div>
          {/* UV등 */}
          <div className={`${style.inputBox}`}>
            <span className={`${style.iconBox}`} style={{backgroundColor:useUv?'gold':'white'}} onClick={() => setUseUv(!useUv)}>
              <FontAwesomeIcon icon={faLightbulb} color={useUv? 'white':'grey'}  />
            </span>
            <FloatingLabel controlId="floatingSelectGrid" label="UV등" className={`${style.inputLabel}`}>
              <Form.Select aria-label="Floating label select example" className={`${style.inputTag}`} ref={uv}>
                {useUv? 
                  <>
                    <option value="1">On</option>
                    <option value="">Off</option></>
                : <>
                    <option value="">설정 X</option>
                  </>
                }

              </Form.Select>
            </FloatingLabel>
          </div>
        </Modal.Body>
        {/* 추가 버튼 */}
        <Modal.Footer>
          <AddBtn feature={addSetting}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}