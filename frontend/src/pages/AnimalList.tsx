// 훅 import 
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
// 상태 정보 import
import { Animal, MyAnimal, myAnimalStore } from '../store/myAnimalStore';
import { nowPageStore } from '../store/store';
import imgList from '../constants/AnimalToImage.json'
// 스타일 import
import style from '../styles/AnimalList.module.css'

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

  return (
    <>
      {myAnimals.map((animal, index) => (
        <div key={animal.animalId} className={`${style.animalContainer}`}>
          <div className={`${style.imgContainer}`}>
            <img src={matchImg(animal)} alt="" className={style.image}/>
          </div>
          <div className={`${style.textContainer}`}>
            <p className={`${style.animalName}`}>{animal.name}</p>
            <div className={`${style.animalInfo}`}>
              <p>{animal.species}</p>
              <p>{animal.age}살</p>
            </div>
          </div>
        </div>
      ))}
      <button className={style.addCage}>동물 추가하기</button>
    </>
  )
}