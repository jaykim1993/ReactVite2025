# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 2025-10-20
# React
        • 자바스크립트로 만든 UI(화면) 라이브러리야.
        • 화면을 컴포넌트 단위로 나눠서 효율적으로 관리


# react 핵심 기술
        | 기술 요소                 | 역할                                           |
        | ------------------------ | ---------------------------------------------- |
        | **JSX**                  | UI를 선언적으로 작성하는 문법                    |
        | **Virtual DOM**          | 실제 DOM 대신 비교용으로 사용하는 JavaScript 객체 |
        | **Reconciliation**       | 이전 가상 DOM과 새로운 가상 DOM 비교             |
        | **ReactDOM.render**      | 앱을 브라우저 DOM에 연결                         |
        | **Hooks (예: useState)** | 함수형 컴포넌트에서 상태 관리                     |
        | **Event Handling**       | 사용자 인터랙션 처리                             |

# JSX(javaScript XML)
        = JS + HTML
        • JavaScript 안에서 HTML 문법처럼 UI를 작성할 수 있게 해주는 문법 확장(Syntax Extension)
        • 특징:	   {}로 JS 표현식 사용, camelCase 속성, 닫는 태그 필수
        • 변환 도구:	Babel (JSX → JS)
                        JSX는 브라우저에서 실행되기 전에 코드가 
                        번들링(Bundleling = 그룹화 작업) 되는 과정에서 바벨
                        (babel = 트랜스파일러의 역할로 호환되는 버전으로 변경)을 사용하여 자바스크립트 형태로 변환된다.


# SPA(single page application) vs MPA(Multi page application); 일반적인 웹사이트
        • 브라우저가 최초로 index.html 하나를 받음
        • JavaScript 프레임워크(예: React, Vue, Angular)가 실행됨
        • 사용자의 요청(페이지 이동 등)이 발생하면
          → 서버에 HTML 요청 ❌
          → 대신 API 요청으로 데이터만 가져와서
          → 화면 일부만 갱신 ✅
        • main.jsx를 통해 각기 다른 컴포넌트를 가져온다.
            • 브라우저가 처음에 index.html 하나만 받아옴
            • React가 실행되면서 <div id="root"> 안에 컴포넌트를 렌더링
            • 사용자가 페이지 이동을 해도 URL만 바뀌고, 실제로는 React Router가 해당  컴포넌트를 교체해서 보여줌
            • 서버에 새로운 페이지 요청이 가지 않음 → 빠르고 부드러운 사용자 경험 (UX)

# Virtual DOM
        • 실제 DOM을 직접 건드리지 않고, 
            메모리 상의 복제본을 통해 변경점을 계산해서 필요한 부분만 효율적으로 업데이트하는 기술.
        • React는 이전 Virtual DOM과 새 Virtual DOM을 비교(diff)해서
            어떤 부분이 바뀌었는지 계산합니다.

# Fragment<> </> 사용하기
        • 불필요한 div 없이 여러 요소를 반환(추가 DOM 없음)
        • 두 개 이상의 루트 엘리먼트가 존재할 경우 반드시 하나의 엘리먼트로 감싸져야 한다.
# object 배열 출력
# if문, 3항연산자 사용법
        • JSX 내부의 JS 표현식에서는 if문을 사용할 수 없다. 
            때문에 조건에 따라 다른 내용을 렌더링 하고자 할 경우 
            JSX 밖에서 if 문을 사용하거나, 중괄호 안에서 삼항 연산자를 사용하면 된다.
# .map()
        • React는 JSX 내부에 반복문(for)을 직접 사용할 수 없기에
        • .map() 함수 사용
        •  **리스트(배열)**를 JSX 요소로 
            반복 렌더링할 때 거의 100% 사용
        • 문법: {array.map((item, index) => <JSX key={...} />)}
            • object 배열 만들 때, id 값을 주고 index 대신 사용(item.id)
        • 응용 예시: 조건문
                    {users
                    .filter(user => user.age >= 25)
                    .map((user) => (
                        <p key={user.id}>{user.name} ({user.age})</p>
                    ))
                    }
    
# ES7+React 확장팩 기능
        • rafce 입력 시 함수형 컴포넌트 생성
# 터미널(gitBash)
        • 리액트 웹 화면 출력: npm run dev
        • 리액트 웹 화면 닫기: ctrl C, exit
        • cd my_app : cd 는 자식 폴더로 이동할때
# main.jsk 내 import : 외부 파일을 가져오기

## 2025-10-20

# inlineCSS
        • style 내에서 조건문 심을 수 있다(삼항연산자 추천)
        • Function() 만들어서 심어도 된다.
# 구조 흐름
        • JSX -> Component -> Props -> State
# 렌더링 흐름
        • Ex01.jsx - 컴포넌트 작성
        • App.jsx - Ex01 import 및 사용
        • main.jsx - App을 root에 렌더링
        • index.html - root div 제공
        • 브라우저 - 최종 화면 출력
# Props
        • 부모 -> 자식으로 전달되는 읽기 전용 데이터
        • 함수의 매개변수와 같은 개념이다.
        • 컴포넌트를 효율적으로 재사용
       
# Hook
        • 동적으로 변해야하는 경우 사용
        • 함수형 컴포넌트 안에서 리액트의 기능
          (상태 관리, 생명주기 등)을 사용할 수 있게 해주는 함수
            # useState
                • 컴포넌트 안에서 “변하는 값(상태)”을 저장하고
                  관리할 수 있게함
                • 문법:
                    const [변수명, set변수명] = useState(초기값);
| 훅 이름                  |설명                                                                                | 대표 사용 예시                                         |
| ----------------------- | ----------------------------------------------------------------------------------  | ----------------------------------------------------- |
| **useState**            | 컴포넌트의 **상태(state)** 를 관리. 값이 바뀌면 자동으로 렌더링 갱신.                 | `const [count, setCount] = useState(0)`               |
| **useEffect**           | **컴포넌트의 생명주기(Lifecycle)** 를 제어. (마운트, 업데이트, 언마운트 시 실행)      | API 호출, 이벤트 등록/해제, 타이머 설정 등             |
| **useRef**              | DOM 요소나 변수의 **참조(reference)** 를 저장. 값이 바뀌어도 렌더링 안 됨.            | DOM 직접 접근, 이전 값 저장, focus 제어                |
| **useMemo**             | 연산량이 큰 계산 결과를 **메모이제이션(캐싱)** 하여 불필요한 재계산 방지.             | `const result = useMemo(() => heavyCalc(a,b), [a,b])` |
| **useCallback**         | 함수를 **메모이제이션** 해서 자식 컴포넌트에 불필요한 렌더링 방지.                    | `const handleClick = useCallback(()=>{},[])`          |
| **useContext**          | Context API를 통해 전역 데이터(테마, 로그인 등) 쉽게 공유.                            | `const user = useContext(UserContext)`                |
| **useReducer**          | `useState`의 대체. 복잡한 상태 로직을 **리듀서 함수**로 관리.                        | Redux 비슷한 구조로 상태 관리 가능                      |
| **useLayoutEffect**     | `useEffect`와 비슷하지만 **DOM이 그려지기 직전**에 실행됨.                           | DOM 크기 계산, 스크롤 위치 조정 등                     |
| **useImperativeHandle** | `forwardRef`와 함께 사용. 부모가 자식 컴포넌트의 **특정 메서드만 접근** 가능하게 함. | 커스텀 컴포넌트에서 내부 메서드 노출 시 사용             |

# export default function
