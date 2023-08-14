// 훅|함수 import 
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
// 상태 정보 import
import { nowPageStore } from 'store/myPageStore';
// 컴포넌트 import
import VideoBox from 'components/CageDatail/LiveVideo/VideoBox';
import MoveBtnBox from 'components/CageDatail/LiveVideo/MoveBtnBox';
// 스타일 import

export default function LiveVideo():JSX.Element {
  // props 받아오기
  const cageId = Number(useParams().cageId);

  // 페이지명 변경
  const changePage = nowPageStore(state => state.setPage);
  useEffect(() => {
    changePage("실시간 영상");
  }, [changePage])



  return (
    <>
      {/* 동영상 컨테이너 */}
      <VideoBox/>
      {/* 카메라 무빙 버튼 */}
      <MoveBtnBox/>
    </>
  )
}