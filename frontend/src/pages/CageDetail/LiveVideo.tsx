// 훅 import 
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
// 상태 정보 import
import { nowPageStore } from '../../store/myPageStore';
import { myCagesStore } from '../../store/myCageStore';
// 스타일 import
import style from '../../styles/CageDetail/LiveViedo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faCamera } from '@fortawesome/free-solid-svg-icons'

export default function LiveVideo():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("실시간 영상");
  })

  // 상태 정보 + Props 받기
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));

  // 카메라 이동 함수
  const moveCamera = (direction:string):void => {
    console.log(direction)
  }

  // 영상 캡쳐 함수
  const handleCapture = ():void => {
    console.log("capture")
  }

  return (
    <>
      <div className={`${style.videoContainer}`}>
        <h1>비디오를 넣어주세오</h1>
      </div>
      <div className={`${style.btnContainer}`}>
        <div className={`${style.btnRow}`}>   
          <FontAwesomeIcon icon={faCaretUp} onClick={() => {moveCamera("up")}}/>
        </div>
        <div className={`${style.btnRow}`}>
          <FontAwesomeIcon icon={faCaretLeft}  onClick={() => {moveCamera("left")}}/>
          <FontAwesomeIcon icon={faCamera} onClick={handleCapture}/>
          <FontAwesomeIcon icon={faCaretRight}  onClick={() => {moveCamera("right")}}/>
        </div>
        <div className={`${style.btnRow}`}>
          <FontAwesomeIcon icon={faCaretDown}  onClick={() => {moveCamera("down")}}/>
        </div>
      </div>
    </>
  )
}