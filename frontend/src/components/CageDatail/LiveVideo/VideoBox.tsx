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
        <iframe src="https://70.12.246.73:443" width={0.35*vh} height={0.35*vh} title='liveCage' id="content"></iframe>
        {/* <iframe width={0.35*vh} height={0.35*vh} id="content" src="https://www.youtube.com/embed/9Ec-op7MGHc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
    </div>
  )
}