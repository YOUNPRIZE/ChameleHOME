// 훅 import
import { useRef, useState } from 'react';
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
  const time = useRef(null);
  const [useTemp, setUseTemp] = useState(false);
  const [useHum, setUseHum] = useState(false);
  const [useUv, setUseUv] = useState(false);
  const temp = useRef(null);
  const hum = useRef(null);
  const uv = useRef(null);

  // 자동화 세팅 추가하기
  const addSetting = ():void => {
    console.log(temp?.current)
  }

  return (
    <>
      <Modal show={props.modalShow} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className={`${style.modalTitle}`}>세팅 추가하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="time" />
          </div>
          <div className={`${style.inputBox}`}>
            <span className={`${style.iconBox}`} style={{backgroundColor:useTemp?'hotpink':'white'}} onClick={() => setUseTemp(!useTemp)}>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} color={useTemp? 'white':'grey'}  />
            </span>
            <FloatingLabel controlId="floatingInputGrid" label="온도(℃)">
              <Form.Control type="number" readOnly={!useTemp} />
            </FloatingLabel>
          </div>
          <div className={`${style.inputBox}`}>
            <span className={`${style.iconBox}`} style={{backgroundColor:useHum?'skyblue':'white'}} onClick={() => setUseHum(!useHum)}>
              <FontAwesomeIcon icon={faDroplet} color={useHum? 'white':'grey'}  />
            </span>
            <FloatingLabel controlId="floatingInputGrid" label="습도(%)" >
              <Form.Control type="number" readOnly={!useHum} className={`${style.inputTag}`}/>
            </FloatingLabel>
          </div>
          <div className={`${style.inputBox}`}>
            <span className={`${style.iconBox}`} style={{backgroundColor:useUv?'gold':'white'}} onClick={() => setUseUv(!useUv)}>
              <FontAwesomeIcon icon={faLightbulb} color={useUv? 'white':'grey'}  />
            </span>
            <FloatingLabel controlId="floatingSelectGrid" label="UV등 On / Off">
              <Form.Select aria-label="Floating label select example" >
                <option value="1">On</option>
                <option value="2">Off</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>닫기</Button>
          <Button variant="primary" onClick={addSetting}>완료</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}