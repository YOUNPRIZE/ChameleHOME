// 훅|함수 import 
// 상태 정보 import
// 스타일 import
import style from 'styles/CageDetail/LiveViedo.module.css'

export default function VideoBox():JSX.Element {
  // 영상 크기 조절 
  const vh = window.innerHeight;

  return (
    // 동영상 컨테이너
    <div className={`${style.videoContainer}`}>
        {/* <iframe src="http://192.168.114.97:8008/" width={0.35*vh} height={0.35*vh} title='liveCage'></iframe> */}
        <iframe width={0.35*vh} height={0.35 * vh} src="https://www.youtube.com/embed/HDAO1qE79nc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  id="content"></iframe>
    </div>
  )
}