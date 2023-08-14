import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faBook, faBabyCarriage } from '@fortawesome/free-solid-svg-icons'
import style from 'styles/Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

interface Props {
  isLogged : boolean
}

export default function Footer(props:Props):JSX.Element {

  // 컴포넌트 렌더링
  return (
    <div className={`${style.Footer} d-flex align-items-center justify-content-center z-3`}>
      {props.isLogged ? 
        (
          <div className='w-100 d-flex align-items-center justify-content-between'>
            <Link to='/Dictionary'><FontAwesomeIcon icon={faBook} style={{color: "#ffffff",}} className={style.footerIcon}/></Link>
            <Link to='/Cages'><FontAwesomeIcon icon={faBabyCarriage} style={{color: "#ffffff",}} className={style.footerIcon}/></Link>
            <Link to='/'><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} className={style.footerIcon} /></Link>
            <Link to='/MyPage'><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={style.footerIcon}/></Link>
          </div>
        ): 
        (
          <h3 className={style.needLogin}>회원인증이 필요한 서비스입니다</h3>
        )
      }
    </div>
  )
}