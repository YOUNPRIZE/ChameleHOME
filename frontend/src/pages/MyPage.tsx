// 훅 import
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 상태정보 import
import { nowPageStore } from 'store/myExtraStore';
import { userInfoStore, userInfoState } from 'store/userInfoStore';
// 스타일 import
import style from 'styles/MyPage.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faSpellCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import testImg from 'assets/test.jpg'


export default function MyPage():JSX.Element {
  // 페이지 명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("마이페이지");
  }, [])

  //로그아웃 함수
  const navigate = useNavigate();
  const userInfo:userInfoState = userInfoStore();
  const handleLogout = ():void => {
    userInfo.deleteUserInfo();
    navigate('/Login')
  }

  // 페이지 렌더링
  return(
    <>
      {/* 이미지 영역 */}
      <div className={style.imgContainer}>
        <img src={testImg} alt="" className={style.profileImg}/>
      </div>
      {/* 카드(사용자 정보 영역) */}
      <div className={style.cardContainer}>
        <div className={style.myInfo}>
          <div className={style.farContainer}>
            <h2 className={style.myName}>{userInfo.user.userId}</h2>
            <a onClick={handleLogout} className={style.logOut}>
              <FontAwesomeIcon icon={faArrowRightToBracket} rotation={180}/>로그아웃
            </a>
          </div>
          <div className={style.infoContainer}>
            <FontAwesomeIcon icon={faSpellCheck} className={style.infoIcon}/>
            <span className={style.infoText}>{userInfo.user.nickname}</span>
          </div>
          <div className={style.infoContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={style.infoIcon}/>
            <span className={style.infoText}>{userInfo.user.email}</span>
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