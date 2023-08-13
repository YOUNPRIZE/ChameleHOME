// 훅|함수 import 
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import html2canvas from 'html2canvas';
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

  // 영상 캡쳐 함수
  // const handleCapture = async() => {
  //   // const target = document.getElementById('content');
  //   // if (!target) {
  //   //   return alert('결과 저장에 실패했습니다.');
  //   // }
  //   // console.log(target)
  //   html2canvas(document.body).then((canvas) => {
  //     const link = document.createElement('a');
  //     document.body.appendChild(link);
  //     link.href = canvas.toDataURL('image/png');
  //     link.download = 'result.png';
  //     link.click();
  //     document.body.removeChild(link);
  //   });
  // }

  const handleCapture = async (): Promise<void> => {
    const iframe = document.getElementById('content') as HTMLIFrameElement;
    
    if (!iframe) {
      return alert('결과 저장에 실패했습니다.');
    }

    try {
      console.log(iframe)
      const iframeDoc = iframe.contentDocument;
      if (!iframeDoc) {
        throw new Error('Failed to access iframe content document');
      }

      const iframeBody = iframeDoc.body;
      if (!iframeBody) {
        throw new Error('Failed to access iframe body');
      }

      const canvas = await html2canvas(iframe);

      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = canvas.toDataURL('image/png');
      link.download = 'result.png';
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error during capture:', error);
    }
  }

  return (
    <>
      {/* 동영상 컨테이너 */}
      <VideoBox/>
      {/* 카메라 무빙 버튼 */}
      <MoveBtnBox handleCapture={handleCapture}/>
    </>
  )
}