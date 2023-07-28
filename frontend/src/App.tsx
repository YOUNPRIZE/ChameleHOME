// 함수 import
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
// 상태정보 import
import { userInfoStore } from './store/userInfoStore';
// 스타일 import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// 컴포넌트 import
import Header from './components/Header';
import Footer from './components/Footer';
// 페이지 import
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Cages from "./pages/Cages";
import AddCage from "./pages/AddCage";
import CageDeatil from "./pages/CageDetail";
import DicList from "./pages/DicList";
import DicDetail from "./pages/DicDetail";
import AnimalList from "./pages/AnimalList";

function App(): JSX.Element {
  // 로그인 여부 판단
  const userInfo = userInfoStore();
  const [isLoggedIn, setIsLoggedIn] = useState(userInfo.id !== 0);
  useEffect(() => {
    setIsLoggedIn(userInfo.id !== 0);
  }, [userInfo.id]);

  // 랜더링
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* 이 밑으론 로그인 후에 접속 가능 */}
          <Route path="/" element={isLoggedIn? <Main /> : <Navigate replace to="/login"/>} />
          <Route path="/MyPage" element={isLoggedIn? <MyPage /> : <Navigate replace to="/login"/>} />
          <Route path="/Cages" element={isLoggedIn? <Cages /> : <Navigate replace to="/login"/>} />
          <Route path="/AddCage" element={isLoggedIn? <AddCage /> : <Navigate replace to="/login"/>} />
          <Route path="/DicList" element={isLoggedIn? <DicList /> : <Navigate replace to="/login"/>} />
          <Route path="/CageDetail/:cageId" element={isLoggedIn? <CageDeatil /> : <Navigate replace to="/login"/>} />
          <Route path="/DicDetail/:species" element={isLoggedIn? <DicDetail /> : <Navigate replace to="/login"/>} />
          <Route path="/AnimalList/:cageId" element={isLoggedIn? <AnimalList /> : <Navigate replace to="/login"/>} />
        </Routes>
        <Footer isLogged={isLoggedIn}/>
      </div>
    </BrowserRouter>
  );
}

export default App;






