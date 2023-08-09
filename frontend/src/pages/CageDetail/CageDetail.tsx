// 훅 import 
import { useParams, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
// 상태 정보 import
import { myCagesStore } from 'store/myCageStore';
// 컴포넌트 import
import CageInfo from './CageInfo';
import AnimalList from './Animal/AnimalList';
import AddAnimal from './Animal/AddAnimal';
import AnimalDetail from './Animal/AnimalDetail';
import LiveVideo from './LiveVideo';
import AlarmSetting from './AlarmSetting';
import AutoSetting from './AutoSetting';
import CageUpdateModal from 'components/CageDatail/CageUpdateModal';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from 'styles/CageDetail/CageDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'



export default function CageDeatil():JSX.Element {
  // 상태정보 변수에 할당
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.id === cageId));

  // 케이지 정보 수정 모달
  const [modalShow, setModalShow] = useState(false); 

  // 페이지 렌더링
  return (
    <>
    <div className={style.cageName}>
      <span>{myCage?.cageName}</span>
      <div className={style.edit}><FontAwesomeIcon icon={faPencil} onClick={() => setModalShow(!modalShow)}/></div>
    </div>
    <CageUpdateModal modalShow={modalShow} setModalShow={setModalShow} cageInfo={myCage}/>
    <Routes>
      <Route path='/' element={<CageInfo/>}></Route>
      <Route path='/LiveVideo' element={<LiveVideo/>}></Route>
      <Route path='/AutoSetting' element={<AutoSetting/>}></Route>
      <Route path='/AlarmSetting' element={<AlarmSetting/>}></Route>
      <Route path='/AnimalList' element={<AnimalList/>}></Route>
      <Route path='/AddAnimal' element={<AddAnimal/>}></Route>
      <Route path='/AnimalDetail/:animalId' element={<AnimalDetail/>}></Route>
    </Routes>
    </>
  )
}

