// 훅 import
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// 상태정보 import
import { nowPageStore } from 'store/myExtraStore';
import { userInfoStore } from 'store/userInfoStore';
// 컴포넌트 import
import UserInfoBox from 'components/MyPage/UserInfoBox';
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

  // 페이지 렌더링
  return(
    <>
      {/* 이미지 영역 */}
      <div className={style.imgContainer}>
        <img src={testImg} alt="" className={style.profileImg}/>
      </div>
      <div className={style.cardContainer}>
        {/* 사용자 정보 영역 */}
        <UserInfoBox/>
        {/* 회원 정보 수정, 탈퇴 영역 */}
        <div className={`${style.farContainer} ${style.btnContainer}`}>
          <button className={style.btn}>회원정보수정</button>
          <button className={style.btn}>회원탈퇴</button>
        </div>
      </div>
    </>
  )
}