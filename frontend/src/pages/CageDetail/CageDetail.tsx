// 훅 import 
import { useParams, Routes, Route } from 'react-router-dom';
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
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from 'styles/CageDetail/CageDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


export default function CageDeatil():JSX.Element {
  // 상태정보 변수에 할당
  const cageId = Number(useParams().cageId);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));

  // 페이지 렌더링
  return (
    <>
    <div className={style.cageName}>
      <span>{myCage?.cageName} 케이지 </span>
      <div className={style.editContainer}><FontAwesomeIcon icon={faPencil} /></div>
    </div>
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

