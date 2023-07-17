# 시작하기

### 1. 리액트 설치
```cmd
npm install -g create-react-app
```

### 2. 리액트 프로젝트 시작
```cmd
npx create-react-app {프로젝트명}
```
<br><br>

# 리액트 기초

## 변수 사용하기
- `{}`안에 넣어 사용하기
- 속성값도 가능
```jsx
// App.js
function App() {
  const name = "김한주"
  const url = "https://www.naver.com/"
  return (
    <div className="App">
      <div>{김한주}</div>
      <a href={url}></a>
    </div>
  );
}
```

## 이벤트 처리
- 미리 정의된 함수를 사용 가능
```jsx
// App.js
function App() {

  function showName(e) {
    console.log(txt)
  }

  return (
    <div className="App">
      <input onChange={e => {
        showName(e.target.value)
      }}/>
    </div>
  );
}

export default App;
```

## `useState`
- 자주 변하는 변수를 사용할 때 주로 사용
- `setName`과 같은 함수로 해당 변수를 변화시키면 자동 렌더링
```jsx
// component/Hello.js
import { useState } from "react"
 
const Hello = function(props) {
  const [name, setName] = useState('Mike')
	const [age, setAge] = useState(props.age)

	const msg = age > 19 ? '성인입니다.' : '미성년자입니다.'

  return (
    <div>
      <h2>{name} ({age}세)</h2>
			<button onClick={() => setAge(age + 1)}>▲</button>
			<button onClick={() => setAge(age - 1)}>▼</button>
			<h3>{msg}</h3>
    </div>
  )
}
```

## `map` 함수 사용
- 배열을 통해 요소를 반복 시키기 위해 `map`함수 사용
- json 파일을 불러와 데이터 로드 가능
```jsx
import dummy from '../db/data.json'

const DayList = function() {
  return (
    <ul className='list_day'>
      {dummy.days.map(day => (
        <li key={day.id}>
          Day {day.day}
        </li>
      ))}
    </ul>
  )
}

export default DayList
```
<br><br>

# Component

## 컴포넌트 사용하기(+ css 개별 컴포넌트에 적용시키기)
- 새로운 js 파일(`App.js`도 가능)에 함수 선언을 통해 컴포넌트 선언
- `import` 한 후에 사용 가능
```jsx
// App.js
import Modal from './component/Modal'

function App() {
  const name = "김한주"
  const url = "https://www.naver.com/"
  return (
    <div className="App">
      <Modal/>
    </div>
  );
}

export default App;


// component/Modal.js
import styles from './Modal.module.css'

const Modal = function(){
    return (
        <div className={styles.modal}>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
    )
}

export default Modal
```

## `props`
- 하위 컴포넌트에 변수 전달 가능
- 하위 컴포넌트에선 `props.{key값}` 형식을 통해 접근 가능
```jsx
// component/Hello.js
import { useState } from "react"
import UserName from './UserName'
 
const Hello = function(props) {
  const [name, setName] = useState('Mike')
	const [age, setAge] = useState(props.age)

	const msg = age > 19 ? '성인입니다.' : '미성년자입니다.'

  return (
    <div>
      <h2>{name} ({age}세)</h2>
			<button onClick={() => setAge(age + 1)}>▲</button>
			<button onClick={() => setAge(age - 1)}>▼</button>
			<UserName name={name} />
			<h3>{msg}</h3>
    </div>
  )
}


// component/userName.js
const UserName = function(props) {
    return (
      <div>{props.name}</div>  
    )
}

export default UserName
```
<br><br>

# Router

## 라우터 설치
```cmd
npm install npm i react-router-dom 
```

## 라우터 사용하기
- 6버젼 부턴 `<Routes>`태그 안에 `<Route path="/" element={<DayList/>}/>` 식으로 구현
- `/day/:day` 콜론 뒤의 값을 인자로 전달 가능
- 인자를 전달받는 쪽은 `useParams`을 통해 접근 가능
- `path="*"` : 잘못된 url 입력시 잘못된 페이지 접근임을 알려주기
```jsx
// App.js
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<DayList/>}/>
            <Route path="/day/:day" element={<Day/>}/>
            <Route path="*" element={<EmptyPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

```jsx
// component/Day.js
import dummy from '../db/data.json'
import { useParams } from 'react-router-dom'

export default function Day() {
  const day = useParams().day
  console.log(day)
  ...
}
```
<br><br>

# 서버와의 통신

## `json-server`
- 테스트 등의 간단한 통신에 사용

### 1. Json 서버 설치
```cmd
npm install -g json-server
```

### 2. Json 서버 켜기
```cmd
json-server --watch {json 파일 경로} --port {port번호}
```

## `useEffect`
- 어떤 상태값이 바뀌었을 때 동작하는 함수
- 두 번째 인자를 넣어주게 되면 인자 속 변수가 변할 때만 함수 실행
```jsx
// component/DayList.js
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

const DayList = function() {
  const [count, setCount] = useState(0)

  function changeCount() {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <button onClick={changeCount}></button>
    </div>
  )
}

export default DayList
```

## `fetch()`함수를 통해 API 호출
- fetch 함수를 통해 API 호출 가능
- ajax 함수 또한 사용 가능
```jsx
// component/DayList.js
import { useState, useEffect } from 'react'
...
  useEffect(() => {
    fetch('http://localhost:3001/days')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setDays(data)
    })
  }, [])
...
```