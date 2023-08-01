// 훅 import
import {useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
// 상태정보 import
import { nowPageStore } from 'store/myPageStore';
import { userInfoStore, userInfoState } from 'store/userInfoStore';
// 스태틱 데이터 import
import reptile01 from 'assets/retile01.png'
// 스타일 import
import style from 'styles/Auth/Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// 로그인 페이지
export default function Login():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("로그인");
  })

  // 유저 정보 input 값들
  const userId = useRef<HTMLInputElement>(null);
  const userPassword = useRef<HTMLInputElement>(null);

  // 로그인
  const  userInfo:userInfoState = userInfoStore();
  const handleLogin = function():void {
    userInfo.login(userId.current?.value, userPassword.current?.value)
  }

  // 로그인이 되었다면 메인페이지로 이동
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo.id !== 0) {
      navigate(`/`);
    }
  }, [userInfo.id])

  // 페이지 렌더링
  return (
    <div className={style.authForm}>
      <Form className='w-75 h-100 mx-auto d-flex flex-column justify-content-center align-items-center'>
        <img src={reptile01} alt="" className={style.imgSize}/>
        <Form.Group className="mb-3 w-100" controlId="inputId">
          <Form.Label className='fw-bold fs-3'>아이디</Form.Label>
          <Form.Control className="bg-secondary-subtle" type="text" placeholder="아이디를 입력해주세요" ref={userId}/>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="inputPassword">
          <Form.Label className='fw-bold fs-3'>비밀번호</Form.Label>
          <Form.Control className="bg-secondary-subtle" type="password" placeholder="비밀번호를 입력해주세요" ref={userPassword}/>
        </Form.Group>
        <div className='d-flex justify-content-between mt-3 w-100'>
          <a href="#" className={style.additionalLink}>비밀번호 찾기</a>
          <Link to="/SignUp" className={style.additionalLink}>회원가입</Link>
        </div>
        <Button size="lg" className={style.loginBtn} variant='success' onClick={handleLogin}>로그인</Button>
      </Form>
    </div>
  )
}