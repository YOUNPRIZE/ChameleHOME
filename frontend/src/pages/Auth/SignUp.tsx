// 훅 import
import {useRef, useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { axiosAuth } from "constants/AxiosFunc";
// 상태정보 import
import { nowPageStore } from "store/myPageStore";
import { User, userInfoStore } from "store/userInfoStore";
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

  // 경고 메시지
  const [idWarning, setIdWarning] = useState("");
  const [pw1Warning, setpw1Warning] = useState("");
  const [pw2Warning, setpw2Warning] = useState("");
  const [nickWarning, setnickWarning] = useState("");
  const [phoneWarning, setphoneWarning] = useState("");

  // 경고 메시지 초기화 함수
  const resetWarning = ():void => {
    setIdWarning("");
    setpw1Warning("");
    setpw2Warning("");
    setnickWarning("");
    setphoneWarning("");
  }

  // 회원가입
  const setUserInfo = userInfoStore(state => state.setUserInfo);
  const handleSignUp = ():void => {
    // 입력값 검증1
    resetWarning();
    if (! id.current?.value) {
      setIdWarning("아이디를 입력해주세요.")
    } else if (!pw1.current?.value) {
      setpw1Warning("패스워드를 입력해주세요.")
    } else if (!pw2.current?.value) {
      setpw2Warning("패스워드를 확인을 진행해주세요")
    } else if (pw1.current?.value !== pw2.current?.value) {
      setpw2Warning("패스워드가 다릅니다!")
    } else if (!nick.current?.value) {
      setnickWarning("닉네임를 입력해주세요.")
    } else if (!phone.current?.value) {
      setphoneWarning("전화번호를 입력해주세요.")
    }
    // 비밀번호 검증 이후 회원가입 진행
    else if (pw1.current?.value === pw2.current?.value) {
      // 회원 등록할 데이터 정의
      const signUpData = { 
        userId: id.current?.value,
        password: pw1.current?.value,
        nickName: nick.current?.value,
        phoneNumber: phone.current?.value,
      };
      (async() => {
        // 회원가입 API 요청(수정 필요)
        try {
          // const userData = await axiosAuth("user", "POST", signUpData);
          // 회원 가입 성공시 로그인(수정 필요)
          setUserInfo({
            id: 1,
            userId: "FRONT",
            password: "1234",
            nickName: "TEST",
            phoneNumber: "010-7777-7777"
          });
        }
        // 회원 가입 실패시 경고 메시지 갱신
        catch {

        }
      })();
      
    }
  }
  
  // 페이지 렌더링
  return (
    <div className={style.authForm}>
      <Form className="w-75 h-100 mx-auto d-flex flex-column justify-content-center">
        <SignUpText name="아이디" placeholder="아이디를 입력해주세요." warning={idWarning} ref={id}/>
        <SignUpPassword name="비밀번호" placeholder="비밀번호를 입력해주세요" warning={pw1Warning} ref={pw1}/>
        <SignUpPassword name="비밀번호 확인" placeholder="비밀번호를 한 번 더 입력해주세요" warning={pw2Warning} ref={pw2}/>
        <SignUpText name="닉네임" placeholder="별명을 지어주세요" warning={nickWarning} ref={nick}/>
        <SignUpText name="전화번호" placeholder="전화번호를 입력하세요" warning={phoneWarning} ref={phone}/>
        <Link to="/Login" className={style.additionalLink}>이미 계정이 있으신가요?</Link>
        <Button variant="success" size="lg" className={style.loginBtn} onClick={handleSignUp}>회원가입</Button>
      </Form>
    </div>
  )
}