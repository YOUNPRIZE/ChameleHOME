// 훅 import
import {useRef, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
// 상태정보 import
import { nowPageStore } from "store/myPageStore";
import { userInfoStore } from "store/userInfoStore";
// 컴포넌트 import
import { SignUpText, SignUpPassword } from "components/Auth/SignUpInput";
// 스타일 import
import style from "styles/Auth/Login.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// 회원가입 페이지
export default function SignUp():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("회원 가입");
  }, [])

  // 입력 변수
  const id = useRef<HTMLInputElement>(null);
  const pw1 = useRef<HTMLInputElement>(null);
  const pw2 = useRef<HTMLInputElement>(null);
  const nick = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  // 회원가입
  const handleSignUp = ():void => {
    console.log(id)
    // 비밀번호 검증 이후 회원가입 진행
    if (pw1.current?.value === pw2.current?.value) {
      
    }
  }

  // 회원가입 성공시 자동으로 로그인


  
  // 페이지 렌더링
  return (
    <div className={style.authForm}>
      <Form className="w-75 h-100 mx-auto d-flex flex-column justify-content-center">
        <SignUpText name="아이디" placeholder="아이디를 입력해주세요." parentRef={id}/>
        <SignUpPassword name="비밀번호" placeholder="비밀번호를 입력해주세요" parentRef={pw1}/>
        <SignUpPassword name="비밀번호 확인" placeholder="비밀번호를 한 번 더 입력해주세요" parentRef={pw2}/>
        <SignUpText name="닉네임" placeholder="별명을 지어주세요" parentRef={nick}/>
        <SignUpText name="전화번호" placeholder="전화번호를 입력하세요" parentRef={phone}/>
        <Link to="/Login" className={style.additionalLink}>이미 계정이 있으신가요?</Link>
        <Button variant="success" size="lg" className={style.loginBtn} onClick={handleSignUp}>회원가입</Button>
      </Form>
    </div>
  )
}