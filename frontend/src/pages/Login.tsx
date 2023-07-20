import {useRef} from 'react'
import { Link } from 'react-router-dom'
import reptile01 from '../assets/retile01.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from '../styles/Login.module.css';
import { nowPageStore } from '../store/store';

export default function Login():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  changePage("로그인")

  // 유저 정보 input 값들
  const userId = useRef<HTMLInputElement>(null);
  const userPassword = useRef<HTMLInputElement>(null);

  // 로그인 함수
  function Login() {
  }

  return (
    <div className={style.authForm}>
      <Form className='w-75 mx-auto'>
        <img src={reptile01} alt=""/>
        <Form.Group className="mb-3" controlId="inputId">
          <Form.Label className='fw-bold fs-3'>아이디</Form.Label>
          <Form.Control className="bg-secondary-subtle" type="text" placeholder="아이디를 입력해주세요" ref={userId}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPassword">
          <Form.Label className='fw-bold fs-3'>비밀번호</Form.Label>
          <Form.Control className="bg-secondary-subtle" type="password" placeholder="비밀번호를 입력해주세요" ref={userPassword}/>
        </Form.Group>
        <div className='d-flex justify-content-between mt-3'>
          <a href="#" className={style.additionalLink}>비밀번호 찾기</a>
          <Link to="/SignUp" className={style.additionalLink}>회원가입</Link>
        </div>
        <Button size="lg" className={style.loginBtn} variant='success' onClick={Login}>로그인</Button>
      </Form>
    </div>
  )
}