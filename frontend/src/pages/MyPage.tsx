import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { nowPageStore } from '../store/store';
import { userInfoStore, userInfoState } from '../store/userInfoStore';
import style from '../styles/MyPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faSpellCheck, faPhone } from '@fortawesome/free-solid-svg-icons'
import testImg from '../assets/test.jpg'


export default function MyPage():JSX.Element {
  // 로그인이 안 되어있는 경우 로그인 페이지로 이동
  const navigate = useNavigate();
  const userInfo:userInfoState = userInfoStore();
  

  // 페이지 명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("마이페이지");
  })

  //로그아웃 함수
  const handleLogout = ():void => {
    userInfo.logout();
    navigate('/Login')
  }

  // 페이지 렌더링
  return(
    <>
      {/* 이미지 영역 */}
      <div className={style.imgContainer}>
        <img src={testImg} alt="" className={style.profileImg}/>
      </div>
      <div className={style.cardContainer}>
        {/* 카드(사용자 정보 영역) */}
        <div className={style.myInfo}>
          <div className={style.farContainer}>
            <h2 className={style.myName}>{userInfo.userId}</h2>
            <a onClick={handleLogout} className={style.logOut}>
              <FontAwesomeIcon icon={faArrowRightToBracket} rotation={180}/>로그아웃
            </a>
          </div>
          <div className={style.infoContainer}>
            <FontAwesomeIcon icon={faSpellCheck} className={style.infoIcon}/>
            <span className={style.infoSpace}></span>
            <span className={style.infoText}>{userInfo.nickName}</span>
          </div>
          <div className={style.infoContainer}>
            <FontAwesomeIcon icon={faPhone} className={style.infoIcon}/>
            <span className={style.infoSpace}></span>
            <span className={style.infoText}>{userInfo.phoneNumber}</span>
          </div>
        </div>
        {/* 회원 정보 수정, 탈퇴 영역 */}
        <div className={`${style.farContainer} ${style.btnContainer}`}>
          <button className={style.btn}>회원정보수정</button>
          <button className={style.btn}>회원탈퇴</button>
        </div>
      </div>
    </>
  )
}