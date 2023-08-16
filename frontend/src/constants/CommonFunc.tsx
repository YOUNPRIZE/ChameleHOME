// 나이 구하기
const getAge = (birth:Date):number => {
  const today = new Date();
  const birthDate = new Date(birth);
  return today.getFullYear() - birthDate.getFullYear() + 1;
}

//비밀번호 유효성 검사
const checkPassword = (pw:string) => {
    //  8 ~ 16자 영문, 숫자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
    // 형식에 맞는 경우 true 리턴
    return regExp.test(pw)
}

// 이메일 유효성 검사
const checkEmail = (email:string) => {
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  return emailRegEx.test(email)
}


export { getAge, checkPassword, checkEmail }