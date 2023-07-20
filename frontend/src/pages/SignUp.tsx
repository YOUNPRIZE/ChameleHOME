import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from '../styles/Login.module.css'

export default function SignUp():JSX.Element {
  return (
    <div>
      <div className='w-75 mx-auto'>
        <h1>회원 가입</h1>
        <Form>
          <Form.Group className="mb-3" controlId="inputId">
            <Form.Label className='fw-bold'>아이디</Form.Label>
            <Form.Control size="sm" className="bg-secondary-subtle" type="text" placeholder="아이디를 입력해주세요" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPassword">
            <Form.Label className='fw-bold'>비밀번호</Form.Label>
            <Form.Control size="sm" className="bg-secondary-subtle" type="password" placeholder="비밀번호를 입력해주세요"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPasswordConfirm">
            <Form.Label className='fw-bold'>비밀번호 확인</Form.Label>
            <Form.Control size="sm" className="bg-secondary-subtle" type="password" placeholder="비밀번호를 한 번 더 입력해주세요"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputNickName">
            <Form.Label className='fw-bold'>닉네임</Form.Label>
            <Form.Control size="sm" className="bg-secondary-subtle" type="text" placeholder="별명을 지어주세요"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputPhone">
            <Form.Label className='fw-bold'>전화번호</Form.Label>
            <Form.Control size="sm" className="bg-secondary-subtle" type="text" placeholder="전화번호를 입력하세요"/>
          </Form.Group>
          <Button variant='success' size="lg" className={style.loginBtn}>회원가입</Button>
        </Form>
      </div>
    </div>
  )
}