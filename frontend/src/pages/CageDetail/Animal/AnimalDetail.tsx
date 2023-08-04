// 훅 import 
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
// import { animalDicStore } from 'store/animalDicStore'
import { myAnimalStore, Animal } from 'store/myAnimalStore';
// 스타일 import
import 'bootstrap/dist/css/bootstrap.min.css'
import style from 'styles/CageDetail/AnimalDetail.module.css'
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

export default function AnimalDetail():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("동물 상세보기");
  }, [])

  // 상태정보 및 props 받기
  const cageId:number = Number(useParams().cageId);
  const animalId:number = Number(useParams().animalId);
  const myAnimal = myAnimalStore(state => (state.animalsInCages[cageId])).find((animal) => (animal.animalId === animalId));
  
  // 이미지 불러오기
  const imgUrl = process.env.PUBLIC_URL+`/images/${myAnimal?.photo}`

  return (
    <>
    {/* 이미지 */}
    <div className={`${style.infoContainer} ${style.imgContainer}`}>
      <img src={imgUrl} alt="" className={`${style.infoImg}`}/>
    </div>
    {/* 기본 정보 */}
    <div className={`${style.infoContainer} ${style.basicInfoContainer}`}>
      <div className={`${style.textContainer}`}>
        <h1 className={`${style.infoName}`}>{myAnimal?.name}</h1>
        <p className={`${style.infoSpecies}`}>{myAnimal?.species}</p>
      </div>
      <div className={`${style.infoGender}`} style={{backgroundColor: myAnimal?.gender === 'male' ? 'dodgerblue' : 'deeppink',}}>
        <FontAwesomeIcon icon={myAnimal?.gender === 'male'? faMars:faVenus} color='white' />
      </div>
    </div>
    {/* 이슈 정보 */}
      <Accordion className={`${style.infoContainer}`}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={`z-0`}><b>특이사항</b></Accordion.Header>
          <Accordion.Body className={`fw-bold`}>{myAnimal?.issue}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}