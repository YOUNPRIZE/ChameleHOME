// 함수 import
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// 상태정보 import
import { userInfoStore } from 'store/userInfoStore';
// 스타일 import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// 컴포넌트 import
import Header from './components/Header';
import Footer from './components/Footer';
// 페이지 import
import Main from "pages/Main";
import Login from "pages/Auth/Login";
import SignUp from "pages/Auth/SignUp";
import MyPage from "pages/MyPage";
import Cages from "pages/Cage/Cages";
import AddCage from "pages/Cage/AddCage";
import CageDeatil from "pages/CageDetail/CageDetail";
import Dictionray from "pages/Dictionary/Dictionary";
import WrongAccess from "pages/WrongAccess";
import Loading from "components/Shared/Loading";


function App(): JSX.Element {
  // 로그인 여부 판단
  const isLoggedIn = userInfoStore(state => state.isLoggedIn)

  // 랜더링
  return (
    <BrowserRouter>
      <div className="App">
      {isLoggedIn && <Header/>}
        <Routes>
          <Route path="/Login" element={isLoggedIn?  <Main /> : <Login />} />
          <Route path="/SignUp" element={isLoggedIn?  <Main /> : <SignUp />} />
          {/* 이 밑으론 로그인 후에 접속 가능 */}
          <Route path="/" element={isLoggedIn? <Main /> : <Navigate replace to="/login"/>} />
          <Route path="/MyPage" element={isLoggedIn? <MyPage /> : <Navigate replace to="/login"/>} />
          <Route path="/Dictionary/*" element={isLoggedIn? <Dictionray /> : <Navigate replace to="/login"/>} />
          <Route path="/Cages" element={isLoggedIn? <Cages /> : <Navigate replace to="/login"/>} />
          <Route path="/AddCage" element={isLoggedIn? <AddCage /> : <Navigate replace to="/login"/>} />
          <Route path="/CageDetail/:cageId/*" element={isLoggedIn? <CageDeatil /> : <Navigate replace to="/login"/>} />
          <Route path="*" element={<WrongAccess/>} />
        </Routes>
        {isLoggedIn && <Footer/>}
      </div>
    </BrowserRouter>
  );
}

export default App;






