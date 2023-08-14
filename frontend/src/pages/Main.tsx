// 훅 import 
import { useEffect } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
// 컴포넌트 import
import CageBox from 'components/Main/CageBox';
import DictionaryBox from 'components/Main/DicionaryBox';
import ItemBox from 'components/Main/ItemBox';
// 스타일 import
import style from 'styles/Main.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main():JSX.Element {
  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("홈");
  }, [])

  // 페이지 렌더링
  return (
    <>
      {/* 케이지 보기 컨테이너 */}
      <CageBox/>
      {/* 도감 보기 컨테이너 */}
      <DictionaryBox/>
      {/* 관련 상품 보기 컨테이너 */}
      <ItemBox/>
    </>
  )
}