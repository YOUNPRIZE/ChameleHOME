// 훅 import 
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { Animal, myAnimalStore } from 'store/myAnimalStore';
import { nowPageStore } from 'store/myPageStore';
import { myCagesStore } from 'store/myCageStore';
import imgList from 'constants/AnimalToImage.json'
// 컴포넌트 import
import AddBtn from 'components/Shared/AddBtn';
// 스타일 import
import style from 'styles/CageDetail/AnimalList.module.css'

export default function AnimalList():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("동물 목록");
  })

  // 상태 정보 + Props 받기
  const cageId = Number(useParams().cageId);
  const myAnimals  = myAnimalStore(state => (state.animalsInCages[cageId]));

  // 이미지 매칭 함수
  const matchImg = (animal:Animal):string => {
    const imgFileName = imgList[animal.species as keyof typeof imgList]
    return process.env.PUBLIC_URL+`/images/${imgFileName}`
  }

  // 동물 상세보기로 이동
  const navigate = useNavigate();
  const handleDetail = (animalId:number):void => {
    navigate(`../AnimalDetail/${animalId}`)
  }

  return (
    <>
      {/* 동물 리스트 */}
      {myAnimals.map((animal, index) => (
        <div key={animal.animalId} className={`${style.animalContainer}`} onClick={() => handleDetail(animal.animalId)}>
          <div className={`${style.imgContainer}`}>
            <img src={matchImg(animal)} alt="" className={style.image}/>
          </div>
          <div className={`${style.textContainer}`}>
            <p className={`${style.animalName}`}>{animal.name}</p>
            <div className={`${style.animalInfo}`}>
              <p className={`${style.animalText}`}>{animal.species}</p>
              <p className={`${style.animalText}`}>{animal.age}살</p>
            </div>
          </div>
        </div>
      ))}
      {/* 동물 추가하기로 이동 */}
      <AddBtn feature={() => {navigate('../AddAnimal')}} />
    </>
  )
}