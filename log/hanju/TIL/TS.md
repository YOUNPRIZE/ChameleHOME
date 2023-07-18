# 기본 타입

## 타입 지정 방법
- `{변수명}:{타입명}` 방식으로 지정
- 타입에 맞지 않는 값을 넣으면 오류
```ts
let car:string = "hyundai"
```

## 기본 타입 종류
```ts
// 숫자
let age:number = 27

// 문자열
let name:string = "한주"

// 불린형
let isAddult:boolean = true

// 배열
let nums1:number[] = [1,2,3,4,5]
let nums2:Array<number> = [1,2,3,4,5]

// 튜플
let tuple1:[number, string] = [1, 'a']
```

## 특수 타입
```ts
// void - return 값이 없음
function sayHello():void {
  console.log('hello')
}


// never - 항상 에러를 반환 or 끝나지 않는 함수
function showError():never {
  throw new Error();
}

function inLoop():never {
  while (true) {}
}


// enum - 인덱스(숫자)와 양방향 맵핑
enum Os {
  first, // 0 or 지정값
  second, // first + 1 or 지정값
  third = 5 // second + 1 or 지정값
}

// 문자 입력시 단방향 맵핑
enum OS {
  first = 'a',
  second = 'b',
  third = 'c'
} 


// null, undefined
let a:null = null
let b:undefined = undefined
```
<br>

# 인터페이스

## typescript에서의 `Object`
- 아래 코드는 오류가 발생
- Object에는 특정 속성값에 대한 정보가 없기 때문
```ts
let user:Object;

user = {
    name : 'hanju',
    age : 27
};

console.log(user.name)
```

## `interface` 기본 구조
- `Object` 사용에 의한 오류를 해결하기 위해 사용
- `interface`를 사용해 타입을 정의하여 사용
- 정의하지 않은 속성을 사용하면 오류 발생
- 정의한 속성을 사용하지 않아도 오류 발생

```ts
type score = 'A'|'B'|'C'|'F'  // 커스텀 타입(지정된 값 이외에 존재 불가능)

interface User {
    name:string;  // 반드시 사용해야함
    age:number;   // 반드시 사용해야함
    gender?:string;  // 사용 여부가 자유
    readonly birthdayYear:number;  // 최초 할당 후 수정 불가능
    [grade:number]:score;  // 이름은 자유, '숫자 : Score'이 다수 존재 가능
};

let user:User = {
    name : 'hanju',
    age: 27,
    birthdayYear: 1997,
    1: 'A'
}
```

## 함수에서의 `interface`
- `interface`를 통해 인풋값과 리턴값 타입 지정 가능
```ts
interface Add {
    (num1:number, num2:number): number;
}

const add:Add = function(x,y) {
    return x + y;
}
```

## `implements`
- 상위 인터페이스의 하위 인터페이스 생성
- 값을 미리 지정해줄 수도 있음, 입력값으로 받을 수도 있음
- `constructor` : 생성자 함수
```ts
interface Car {
  color:string;
  wheels: number;
}

class BMW implements Car {
  color;
  wheels = 4;
  constructor(c:string) {
    this.color = c
  }
}

const a = new BMW('white')
```

## `extends`
- 상위 인터페이스에 추가적인 속성값 부여 가능
- 상위 인터페이스의 필수 입력값들 또한 모두 입력해야함
- 여러 인터페이스 추가 가능
```ts
interface Car {
  color:string;
  wheels: number;
}

interface Machine {
  price:number;
}

interface Benz extends Car, Machine {
  doors: number;
}
```


