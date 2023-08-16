import { axiosAuth } from 'constants/AxiosFunc';

//비밀번호 유효성 검사
const checkPassword = (pw:string | null | undefined) => {
    if (!pw) return false;
    //  8 ~ 16자 영문, 숫자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
    // 형식에 맞는 경우 true 리턴
    return regExp.test(pw)
}

// 이메일 유효성 검사
const checkEmail = (email:string | null) => {
  if (!email) return false;
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  return emailRegEx.test(email)
}

// 로그인 함수
const loginRequest = async(id:string, pw:string) => {
  // 로그인 API 요청(수정 필요)
  try {
    // 백엔드와 연결 시 수정 필요
    const loginInfo = {
      userId: id, 
      password: pw
    }
    const token = await axiosAuth("user/login", "POST", loginInfo);
    sessionStorage.setItem('token', `Bearer ${token}`)
    const userInfo = await axiosAuth(`user/${loginInfo.userId}`, "GET");
    return userInfo
  }
  catch {
  }
};

export { checkPassword, checkEmail, loginRequest }