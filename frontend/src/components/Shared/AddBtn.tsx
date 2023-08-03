import { useNavigate } from "react-router-dom"

export default function AddBtn(props:{feature:Function}):JSX.Element {
  // 페이지 이동 함수
  const navigate = useNavigate();
  // 버튼 스타일
  const AddBtnStyle = {
    width:"90%",
    height: "5vh",
    color: "white",
    backgroundColor: "#5cb15a",
    boxShadow: "2px 2px 2px 1px lightgray",
    margin: "1vh",
    borderRadius: '10px',
    fontSize: "2.5vh",
    fontWeight: "bold",
    Border: "none"
  }
  return (
    <>
      <button className={``} onClick={() => props.feature()} style={AddBtnStyle}>
        추가하기
      </button>
    </>
  )
}