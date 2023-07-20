import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from '../styles/Login.module.css'
import { nowPageStore } from '../store/store';

export default function SignUp():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  changePage("회원 가입")

  return (
    <div className={style.authForm}>
      <Form className='w-75 h-100 mx-auto d-flex flex-column justify-content-center'>
        <Form.Group className="mb-3" controlId="inputId">
          <Form.Label className={style.textSize}>아이디</Form.Label>
          <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="text" placeholder="아이디를 입력해주세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPassword">
          <Form.Label className={style.textSize}>비밀번호</Form.Label>
          <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="password" placeholder="비밀번호를 입력해주세요"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPasswordConfirm">
          <Form.Label className={style.textSize}>비밀번호 확인</Form.Label>
          <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="password" placeholder="비밀번호를 한 번 더 입력해주세요"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputNickName">
          <Form.Label className={style.textSize}>닉네임</Form.Label>
          <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="text" placeholder="별명을 지어주세요"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputPhone">
          <Form.Label className={style.textSize}>전화번호</Form.Label>
          <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="text" placeholder="전화번호를 입력하세요"/>
        </Form.Group>
        <Button variant='success' size="lg" className={style.loginBtn}>회원가입</Button>
      </Form>
    </div>
  )
}