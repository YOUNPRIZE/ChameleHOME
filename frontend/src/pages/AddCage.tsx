// 훅 import 
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'
// 상태 정보 import
import { nowPageStore } from '../store/store';
import data from '../constants/AnimalToImage.json'
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '../styles/AddCage.module.css'
import Dropdown from 'react-bootstrap/Dropdown'

export default function AddCage():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("케이지 추가하기");
  })

  // 변수명 기록
  const [animalToBreed, setAnimalToBreed] = useState('알 수 없음');
  const [animalImg, setanimalImg] = useState(process.env.PUBLIC_URL+'/images/Not_Choosed.jpg')
  const cageName = useRef<HTMLInputElement>(null);
  const cageSerial = useRef<HTMLInputElement>(null);

  // 동물 이미지 선택 함수
  const chooseAnimal = (animal:string, url:string):void => {
    setAnimalToBreed(animal);
    setanimalImg(process.env.PUBLIC_URL+`/images/${url}`)
  }

  // 케이지 추가하기 함수
  const addCage = () => {
    console.log(animalToBreed);
    console.log(cageName.current?.value);
    console.log(cageSerial.current?.value);
  }
  
  // 페이지 렌더링
  return(
    <div>
      {/* 케이지에 넣을 동물 이미지 */}
      <div className={`${style.cageImgContainer} ${style.boxShadow}`}>
        <img src={animalImg} alt="" className={style.cageImg}/>
      </div>
      {/* 케이지에 넣을 동물 리스트 드롭다운 */}
      <Dropdown>
        <Dropdown.Toggle variant="light" className={`${style.inputCageInfo} ${style.boxShadow}`}>
          {animalToBreed === '알 수 없음' ? '어떤 파충류가 살 케이지입니까?' : animalToBreed}
        </Dropdown.Toggle>
        <Dropdown.Menu className={`${style.dropdownItems}`}>
          {
            Object.entries(data).map((animal, index) => (
              <Dropdown.Item key={index} onClick={() => chooseAnimal(animal[0], animal[1])}>
                {animal[0]}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
      {/* 케이지 이름 입력 */}
      <input type="text" placeholder='케이지 이름을 입력해주세요.' 
      className={`${style.inputCageInfo} ${style.boxShadow}`} ref={cageName}/>
      {/* 케이지 시리얼넘버 입력 */}
      <input type="text" placeholder='시리얼 넘버를 입력해주세요.' 
      className={`${style.inputCageInfo} ${style.boxShadow}`} ref={cageSerial}/>
      {/* 케이지 추가하기 버튼 */}
      <button className={`${style.inputCageInfo} ${style.boxShadow} ${style.addBtn}`} onClick={addCage}>
        케이지 추가하기
      </button>
    </div>
  )
}