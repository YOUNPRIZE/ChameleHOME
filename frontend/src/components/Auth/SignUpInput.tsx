// 훅 import
import { useRef, RefObject, useEffect } from "react"
// 상태정보 import
// 스타일 import
import style from 'styles/Auth/Login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';

interface Props {
  name: string;
  placeholder: string;
  parentRef: RefObject<HTMLInputElement>
}

export function SignUpText({name, placeholder, parentRef}:Props):JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  return (

    <Form.Group className="mb-3" controlId="inputId">
      <Form.Label className={style.textSize}>{name}</Form.Label>
      <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="text" placeholder={placeholder} />
    </Form.Group>
  )
}

export function SignUpPassword({name, placeholder, parentRef}:Props):JSX.Element {
  return (
    <Form.Group className="mb-3" controlId="inputPasswordConfirm">
      <Form.Label className={style.textSize}>{name}</Form.Label>
      <Form.Control className={`bg-secondary-subtle ${style.inputForm}`} type="password" placeholder={placeholder}/>
    </Form.Group>
  )
}
