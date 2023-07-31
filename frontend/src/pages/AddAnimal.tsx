// 훅 import 
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import { animalDicStore } from '../store/animalDicStore'
import { myCage, myCagesStore } from '../store/myCageStore';
// 컴포넌트 import
import CageInfoTop from '../components/cageInfoTop';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/AddAnimal.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

export default function AddAnimal():JSX.Element {
  // 상태 정보 Props 로드
  const cageId = Number(useParams().cageId);
  const animalDic = animalDicStore(state => state.dictionary);
  const myCage = myCagesStore(state => (state.cages)).find((cage) => (cage.cageId === cageId));

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("동물 추가하기");
  })

  // 변수명 기록
  const [species, setspecies] = useState('도감에 없음');
  const [image, setanimalImg] = useState(process.env.PUBLIC_URL+'/images/Not_Choosed.jpg')
  const [gender, setGender] = useState('male');
  const name = useRef<HTMLInputElement>(null);
  const birth = useRef<HTMLInputElement>(null);
  const issue = useRef<HTMLInputElement>(null);

  // 도감 선택 함수
  const handleDic = (dic:string, url:string):void => {
    setspecies(dic);
    setanimalImg(process.env.PUBLIC_URL+`/images/${url}`);
  }

  // 성별 선택 함수
  const MaleIcon = ():JSX.Element => <FontAwesomeIcon icon={faMars} color='blue' />
  const FemaleIcon = ():JSX.Element => <FontAwesomeIcon icon={faVenus} color='red' />
  const handleGender = (gender:string):void => {
    setGender(gender);
  } 

  // 동물 추가하기 함수
  const addCage = () => {
    console.log(species);
    console.log(gender);
    console.log(name.current?.value);
    console.log(birth.current?.value);
    console.log(issue.current?.value);
  }

  return (
    <>
      {/* 케이지 */}
      <CageInfoTop cage={myCage}/>
      {/* 도감 이미지 표시 */}
      <div className={`${style.cageImgContainer} ${style.boxShadow}`}>
        <img src={image} alt="" className={style.cageImg}/>
      </div>
      {/* 도감 리스트 드롭다운 */}
      <Dropdown>
        <Dropdown.Toggle variant="light" className={`${style.inputInContainer} ${style.boxShadow} ${style.alignCenter}`} style={{width:"90vw"}}>
          {species}
        </Dropdown.Toggle>
        <Dropdown.Menu className={`${style.dropdownItems}`}>
          {/* 도감에 없는 동물일 경우 */}
          <Dropdown.Item onClick={() => handleDic('도감에 없음', 'Not_Choosed.jpg')}>
            도감에 없음
          </Dropdown.Item>
          {/* 도감에 있으면 드롭다운에서 선택 */}
          { animalDic.map((dic, index) => (
            <Dropdown.Item key={index} onClick={() => handleDic(dic.species, dic.photo)}>
              {dic.species}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {/* 동물 이름 + 성별 입력 */}
      <div className={`${style.inputsContainer}`} >
          {/* 생일 */}
          <Dropdown>
          <Dropdown.Toggle variant="light" className={`${style.inputInContainer} ${style.boxShadow}`} style={{width:"15vw"}} >
            {gender === 'male' ? <MaleIcon/> : <FemaleIcon/>}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleGender('male')}><MaleIcon/></Dropdown.Item>
            <Dropdown.Item onClick={() => handleGender('female')}><FemaleIcon/></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* 이름 */}
        <input type="text" placeholder='동물 이름을 입력해주세요' 
        className={`${style.inputInContainer} ${style.boxShadow}`} 
        style={{width:"70vw"}} ref={name}/>
      </div>
      {/* 생일 입력 */}
      <div className={`${style.inputsContainer}`} >
        <div className={`${style.inputInContainer}`} style={{width:"15vw"}}>생일</div>
        <input type="date" className={`${style.inputInContainer} ${style.boxShadow}`} 
        style={{width:"70vw"}} ref={birth}/>
      </div>
      {/* 특이사항 입력 */}
      <input placeholder='특이사항을 입력해주세요.' ref={issue}
      className={`${style.inputInContainer} ${style.issueInput} ${style.boxShadow} ${style.alignCenter}`} />
      {/* 추가버튼 */}
      <button className={`${style.inputInContainer} ${style.boxShadow} ${style.addBtn} ${style.alignCenter}`} 
      onClick={addCage} style={{width:"90vw"}}>
        동물 추가하기
      </button>
    </>
  )
}