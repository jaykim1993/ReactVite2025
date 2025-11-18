### React + Vite


## 2025-10-20
# React
        • 자바스크립트로 만든 UI(화면) 라이브러리
        • 화면을 컴포넌트 단위로 나눠서 효율적으로 관리


# react 핵심 기술
| 기술 요소                              | 역할                                                            |
| ---------------------------------- | ------------------------------------------------------------- |
| **JSX (JavaScript XML)**           | JavaScript 안에서 HTML처럼 UI를 선언적으로 작성할 수 있는 문법                   |
| **Virtual DOM**                    | 실제 DOM 조작 전, 메모리상에서 변경점을 계산하기 위한 가상 DOM 객체                    |
| **Reconciliation (조정 과정)**         | 이전 Virtual DOM과 새로운 Virtual DOM을 비교하여 실제 DOM을 최소한으로 업데이트하는 과정 |
| **ReactDOM.render**                | React 컴포넌트를 실제 브라우저 DOM에 연결(render)하는 함수                      |
| **Hooks (예: useState, useEffect)** | 함수형 컴포넌트에서도 상태(state)와 생명주기 기능을 사용할 수 있게 해주는 기능               |
| **Event Handling**                 | onClick, onChange 등 이벤트를 통해 사용자 상호작용을 처리하는 기능                 |


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

## 2025-10-21

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
        • 클래스 없이도 상태 관리와 생명주기 제어를 가능하게 해주는 기능
| 구분          | Hook 사용하는 이유                                   | 얕은 복사 사용하는 이유                              |
| ----------- | ---------------------------------------------- | ------------------------------------------ |
| **핵심 목적**   | 함수형 컴포넌트에서도 상태(state)와 생명주기를 제어하기 위해           | React가 상태 변경을 감지하도록 “새로운 참조값”을 만들어주기 위해    |
| **해결하는 문제** | 클래스 컴포넌트의 복잡함(`this`, 생명주기 메서드 등)을 단순화         | 원본 배열/객체 변경 시 React가 리렌더링하지 않는 문제          |
| **관련 기능**   | `useState`, `useEffect`, `useRef`, `useMemo` 등 | `setState([...array])`, `setObj({...obj})` |
| **원리적 공통점** | 둘 다 React의 “상태는 불변해야 한다(immutable)”는 원칙에 따름    | React의 “참조 주소가 달라야 변경으로 인식” 원칙에 따름         |
        • 📦 Hook은 “React에게 상태를 관리할 수 있는 도구를 주는 것”
                🪞 얕은 복사는 “React에게 상태가 정말로 바뀌었다고 알려주는 신호를 주는 것”
        • ✅ 공통점:
                둘 다 React가 상태 변화를 감지하고 리렌더링을 트리거하기 위한 메커니즘과 관련 있다.
                즉, 둘 다 불변성(immutability) 원칙 위에서 작동한다.
        • ❌ 차이점:
                Hook은 “상태 관리 도구”
                얕은 복사는 “상태 변경을 감지시키는 방법”
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
        • 컴포넌트 밑에 따로 export 쓸 필요 없게 함


## 2025-10-22

# 조건문 사용법
| 상황            | 권장 방법                  |
| ------------- | ---------------------- |
| JSX 내부 간단한 조건 | 삼항 연산자, &&             |
| 복잡한 조건 분기     | JSX 밖에서 if문            |
| 조건부 렌더링 X     | null 반환                |
| 스타일 조건부       | 삼항연산자 or classnames 사용 |
| 여러 조건         | 조기 return으로 가독성 확보     |

# JSX에서 style 속성은 문자열이 아니라 “객체”여야 함
        • 첫 번째 중괄호 { ... } → JSX 안에서 자바스크립트 표현식을 넣는다는 의미
        • 두 번째 중괄호 { key: value } → 실제로 전달할 JS 객체 리터럴
                • style={{ backgroundColor: color }}
                   => “style 속성에 { backgroundColor: color }라는 JS 객체를 전달하겠다.”

# 🧩 JSX 중괄호 {} 사용 3가지 상황 정리
| 구분                    | 사용 위치                    | 예시 코드                                                                 | 의미 / 작동 방식                                            | 주의할 점                                                             |
| --------------------- | ------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| **① JSX 내부 (표현식)**    | JSX 안에서 값이나 연산 결과를 출력할 때 | `jsx <p>{name}</p> <h2>{age + 1}</h2> `                               | JSX는 HTML처럼 보이지만 실제로 JS이므로 `{}` 안에 변수, 계산식, 함수 호출 가능  | `{}` 안에는 **표현식(Expression)** 만 가능, 문(Statement)인 `if`, `for`는 불가능 |
| **② 속성값에 표현식 전달**     | props나 속성 값으로 변수를 전달할 때  | `jsx <img src={imgUrl} /> <input disabled={isDisabled} /> `           | 속성값에 문자열 대신 **JS 변수나 논리값** 전달 가능                      | 문자열은 따옴표 `" "`로, 변수/표현식은 `{ }`로 구분                                |
| **③ style 속성에 객체 전달** | 인라인 스타일을 객체로 작성할 때       | `jsx <div style={{ backgroundColor: color, width: size + 'px' }} /> ` | JSX의 `style`은 **문자열이 아니라 JS 객체**를 받음. 그래서 **중괄호가 2겹** | 1겹은 JSX 표현식, 1겹은 객체 리터럴 — 객체 안에서는 변수 그대로 사용 (`{color}` ❌)         |



# Shallow Copy(얕은 복사)
                • 얕은 복사란 객체나 배열을 겉부분만 복사하고, 
                  내부의 중첩된 객체나 배열은 원본과 같은 참조(주소)를 공유하는 복사 방법
                • 객체나 배열을 새로운 메모리 공간에 복사하는 것
                • 참조(reference)를 공유하지 않고 최상위 속성만 복사
        # React에서 state를 직접 수정하지 않고 얕은 복사를 사용하는 이유
                • React는 상태 변화를 감지해야 재렌더링을 함
                        • React는 state나 props의 주소(참조값)가 바뀌었는지 비교해서 변경 여부를 판단한다.
                        • 만약 기존 객체/배열을 그대로 수정하면 참조가 바뀌지 않아서 React가 변화를 감지하지 못함.
                • 불변성(Immutable) 유지
                        • 원본 state를 직접 수정하면 다른 컴포넌트나 이전 상태를 참조하는 로직이 예상치 못한 버그를 발생시
                        킬 수 있음.
                        • 얕은 복사로 새 객체를 만들고 변경하면 안전하게 상태를 관리할 수 있음.
| 잘못된 방법         | 올바른 방법                   |
| -------------- | ------------------------ |
| `item.push()`  | `setItem([...item, 새값])` |
| 기존 배열 직접 수정    | 새로운 배열 생성 후 교체           |
| React가 변경 감지 X | React가 변경 감지 O           |

# 얕은 복사 필요한 이유
                • 리액트에서는 상태(state)가 참조형 데이터(배열, 객체)일 경우, 
                기존 참조주소 를 그대로 사용하면 변경을 감지하지 못하기 때문에, 
                얕은 복사(shallow copy) 를 사용하여 새로운 참조주소를 가진 배열로 만들어야 한다.
| 구분                     | 설명                                                                        | 예시 코드                                                       | 결과                 |
| ---------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------ |
| **1️⃣ 기본 원칙**          | React는 상태(state)가 “값이 바뀌었는지”를 **참조 주소(reference)** 기준으로 판단한다.             | `setItem(item)`                                             | 주소가 동일하면 **렌더링 X** |
| **2️⃣ 상태 변경 시 주의점**    | 배열/객체는 힙(Heap) 메모리에 저장되므로, `push`, `pop`, `splice` 등은 **원본 배열을 직접 변경**한다. | `item.push('A')`                                            | ❌ 불변성 깨짐           |
| **3️⃣ 올바른 방법 (얕은 복사)** | 기존 배열을 복사하고 새 요소를 추가 → **새로운 주소 생성**                                      | `setItem([...item, 'A'])`                                   | ✅ 렌더링 O            |
| **4️⃣ 객체 업데이트 시**      | 객체도 같은 원리로, `...` 전개 연산자를 사용해 새로운 객체를 만들어야 함                              | `setUser({...user, name:'홍길동'})`                            | ✅ 렌더링 O            |
| **5️⃣ 얕은 복사란?**        | 배열 또는 객체의 **1단계 값만 복사**하는 것. 내부에 또 객체가 있으면 참조 주소를 공유함.                    | `const copy = [...arr]`                                     | 1단계만 복사            |
| **6️⃣ 깊은 복사란?**        | 내부의 중첩 객체까지 **완전히 새로운 참조**로 복사하는 것.                                       | `structuredClone(obj)`<br>`JSON.parse(JSON.stringify(obj))` | 모든 단계 복사           |
| **7️⃣ 불변성 유지 이유**      | React의 **리렌더링 최적화(Virtual DOM diff)** 가 빠르게 작동하도록 도와줌                     | —                                                           | ✅ 성능 향상            |

# 인풋박스에서 엔터키 누를 시 값 버튼 클릭과 같은 효과 주기
                • 엔터키 감지 컴포넌트:
                        const EnterPress = (e) => {
                                if (e.key === "Enter") {
                                        e.preventDefault(); // 엔터로 인한 폼 제출 방지
                                        Resetter();
                                }};
                • <input> 내 추가할 요소 값:
                       •  value={output} 
                                => input의 현재 값(state)을 연결
                       •  onKeyUp={EnterPress} 
                                => 엔터키 이벤트 연결


## 2025-10-23

# 로직함수 생성 후 return 내 태그에 지정하는 방식
                • onClick = {addPost} : 클릭할때마다 실행(정상)
                        onClick = {addPost()} : 렌더링 시 바로 실행, 일명 즉시 실행 함수 (비정상)
                • onClick = {() => addPost()} : 클릭할때마다 실행, 함수 형식으로 불러와서 쓰겠다. (정상)

# props로 부모와 자식 컴포넌트를 분리하는 이유
                • 데이터 흐름을 명확히 하고, 컴포넌트를 독립적으로 관리·재사용할 수 있게 하여 유지보수성과 확장성을 향상시키기 위함.


## 2025-10-24

# 프롬포트 ; prompt("이름을 입력하세요","홍길동") , JS 문법
                • 자바스크립트에서 **prompt()**는 사용자에게 입력을 받기 위한 기본      
                대화상자(팝업 창)를 띄우는 내장 함수입니다.
                • 사용자가 **입력 후 "확인"**을 누르면,
                        → 입력값이 문자열(String)로 반환됩니다.
                • 사용자가 **"취소"**를 누르면,
                        → null이 반환됩니다.
# 상태 끌어올리기(Lifting state up)
                • Parent (setOpen) → Child (onToggle props로 전달) → 클릭 시 setOpen(true)
                • 상태(state)는 부모가 갖고 있고
                상태를 바꾸는 함수를 자식에게 내려보내서,
                자식이 클릭 이벤트로 부모의 상태를 바꾸는 구조
# {modalOpen && <Modal />}
                = {modalOpen ? <Modal /> : null}
                • modalOpen이 true일 때만 <Modal />을 렌더링

# 컴포넌트 분리하고 props로 연결
                • 컴포넌트로 분리하고 props로 연결한다.
                • state는 부모에, UI와 입력은 자식에게
                • 
# 버블링
| 구분        | 설명                              |
| --------- | ------------------------------- |
| **버블링**   | 이벤트가 자식 요소에서 부모 요소로 **전파되는 과정** |
| **기본 동작** | 대부분의 브라우저 이벤트는 **버블링됨**         |
| **막는 방법** | `event.stopPropagation()`       |
| **활용 예시** | 이벤트 위임(Event Delegation)        |
# 오브젝트 빈 배열 후 id 부여 팁
                • id: 배열명.length를 인덱스로 사용 시 삭제 이슈가 있을 수 있기에 
                • id: Date.now() 쓰면 중복없이 할당가능

# onMouseOver - 요소나 자식 요소 위로 마우스가 올라갈 때마다 발생
        const handleMouseOver = () => {setMsg('마우스가 올라왔습니다 (Over)'); };
# onMouseEnter - 요소 위로 마우스가 처음 진입할 때만 발생 (자식 요소 무시)
        const handleMouseEnter = () => { setMsg('마우스가 진입했습니다 (Enter)’); };
# onMouseLeave - 요소에서 마우스가 벗어날 때 발생
        const handleMouseLeave = () => { setMsg('마우스가 벗어났습니다 (Leave)’); };
# onMouseOut - 요소나 자식 요소에서 마우스가 벗어날 때 발생
        const handleMouseOut = () => { setMsg('마우스가 나갔습니다 (Out)’); };

# 배열이름.filter()
                • 무엇을 반환하나: 조건을 만족하는 모든 요소들의 새로운 배열. 만족하는 요소가 없으면 빈
                배열 [ ] 반환.
                • 용도: 여러 항목을 추출할 때(예: 삭제, 검색 결과, 특정 조건의 모든 요소 추출).
                • 원본 배열 변경 여부: 원본을 변경하지 않고 새 배열을 반환.
                • 배열이름.filter((요소, 인덱스, 배열) => { return 조건식; } );
                
# const totalPrice = props.order.reduce((sum, item) => sum + item.price * item.quantity, 0);
                • props.order 배열의 모든 항목을 돌면서
                        각 상품의 가격(price) × 수량(quantity) 값을 합산해
                        전체 주문 금액(totalPrice)을 구한다.
                • reduce()는 배열의 모든 요소를 순회하면서
                        이전까지의 누적값(sum)과 현재 요소(item)를 가지고 하나의 값으로 줄이는 함수
                • array.reduce((누적값, 현재요소) => { ... }, 초기값);
| 부분                                 | 의미                          |
| ---------------------------------- | --------------------------- |
| `props.order`                      | 주문 목록 배열                    |
| `.reduce()`                        | 배열의 모든 요소를 하나의 값으로 축약       |
| `(sum, item)`                      | `sum`은 누적 합계, `item`은 현재 항목 |
| `sum + item.price * item.quantity` | 각 상품의 **가격 × 수량**을 더함       |
| `, 0`                              | 누적의 **초기값 0** 설정            |
| `totalPrice`                       | 전체 주문 금액이 저장됨               |

# 🧩 JSON이란?
        • 객체 형태처럼 생긴 문자열
                {
                "name": "Kangarooboi",
                "age": 26,
                "job": "IT 개발자"
                }
| 이유        | 설명                                         |
| --------- | ------------------------------------------ |
| 🌍 언어 독립성 | 어떤 언어로 만들어도 다 읽고 쓸 수 있음                    |
| 🔄 호환성    | 서버 ↔ 클라이언트 데이터 전송에 표준                      |
| ⚙️ 단순함    | 구조가 간단하고 빠름                                |
| 💾 저장용도   | 설정파일(`package.json`, `tsconfig.json`)로도 활용 |
| 🔍 가독성    | 사람도 쉽게 읽을 수 있음                             |


| 항목 | 설명                                           |
| -- | -------------------------------------------- |
| 형식 | 텍스트 기반 (문자열로 표현됨)                            |
| 구성 | `{}` 객체, `[]` 배열, `"key": value` 쌍           |
| 키  | 반드시 **쌍따옴표("")**로 감싸야 함                      |
| 값  | 문자열, 숫자, 불리언, null, 객체, 배열 가능                |
| 주석 | ❌ 지원 안 함                                     |
| 언어 | 자바스크립트 문법과 유사하지만, **언어 독립적** (모든 언어에서 사용 가능) |

# REST API의 특징 정리
        • “자원의 상태(데이터)를 표현(전달)하는 방법”
        • 주소(URL)와 HTTP 요청 방식(GET, POST 등)으로 서버의 데이터를 주고받는 규칙이다.
| 특징                       | 설명                                      |
| ------------------------ | --------------------------------------- |
| 🌐 **HTTP 기반**           | GET, POST, PUT, DELETE 등의 메서드 사용        |
| 🧩 **자원 중심**             | URL은 "무엇을" 나타냄 (ex: `/users`, `/posts`) |
| 📦 **JSON 응답**           | 대부분의 REST API는 JSON으로 데이터 전송            |
| 🚫 **상태 비저장(stateless)** | 서버는 클라이언트의 이전 상태를 기억하지 않음               |
| 🔁 **일관성 있는 구조**         | 어떤 자원이든 동일한 규칙으로 접근 가능                  |

# 동기(Synchronous) & 비동기(Asynchronous)
        ▪ 동기(Synchronous): 작업 A가 끝나야 작업 B가 시작됨.
                예) 전화 통화: 통화가 끝나야 다른 일 가능.
                → 브라우저에서 동기 처리로 네트워크 요청을 하면 UI가 멈춤(사용자 입력 불가).
        ▪ 비동기(Asynchronous): 작업 A를 요청하고, A가 끝날 때까지 기다리지 않고 다음 작업을 계속함.
                예) 택배 주문: 주문하고 다른 일 함 → 택배 도착하면 알림.
                → 네트워크 요청을 비동기로 하면 UI가 반응 상태(버튼 클릭, 애니메이션) 유지.
        ▪ fetch는 이런 비동기 통신에 request(요청) 도구이며, 
                응답이 오면 then이나 await으로 결과를 받는다.

# 비동기 json object배열화 하기
| 구분     | `fetch/.then()`  | `async/await`             |
| ------ | ---------- | ------------------------- |
| 코드 스타일 | 함수 체인      | 동기처럼 자연스러운 순서             |
| 에러 처리  | `.catch()` | `try / catch`             |
| 가독성    | 중첩되면 복잡함   | 깔끔하고 직관적                  |
| 성능     | 동일         | 동일                        |
| 사용 위치  | 전역에서도 가능   | 반드시 `async` 함수 안에서만 사용 가능 |

        ▪ fetch 방식
                fetch("https://api.example.com/users")
                .then((res) => res.json())      // 응답을 JSON으로 변환
                .then((data) => console.log(data)) // 변환된 데이터 사용
                .catch((err) => console.error(err)); // 에러 처리
        ▪ async 방식
                async function getUsers() {
                try {
                const res = await fetch("https://api.example.com/users");
                const data = await res.json();
                console.log(data);
                } catch (err) {
                console.error(err);
                }
                }
                getUsers();

# useEffect
                ▪ React의 훅(Hook) 중 하나로, 컴포넌트가 렌더링된 이후에 
                        부수 효과(side effect) 를 수행할 수 있게 해줍니다.
                        (예: 데이터 불러오기, DOM 조작, 콘솔 로그, 타이머 등)
| 패턴                                | 실행 시점           |
| --------------------------------- | --------------- |
| `useEffect(() => {...}, [])`      | 처음 렌더링 시 1회     |
| `useEffect(() => {...}, [state])` | 특정 state 변경 시마다 |
| `useEffect(() => {...})`          | 모든 렌더링마다        |
| `return () => {...}`              | 컴포넌트 언마운트 시 정리용 |

# 🧭 React 함수·변수 작명 원칙 요약표
| 구분                  | 작명 규칙                         | 예시 (✅ 올바른 예 / ❌ 잘못된 예)                                    | 설명                                                    |
| ------------------- | ----------------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| **컴포넌트 이름**         | **PascalCase** (대문자로 시작)      | ✅ `UserList`, `OrderModal`<br>❌ `userList`, `order_modal` | React는 대문자로 시작하는 함수를 컴포넌트로 인식                         |
| **일반 변수 / 함수**      | **camelCase** (소문자 시작)        | ✅ `totalPrice`, `fetchData`, `handleClick`                | JS 표준 네이밍. 명확한 역할 기반 동사 사용 (`get`, `set`, `update` 등) |
| **State 변수**        | `[명사, set명사]`                 | ✅ `[user, setUser]`, `[isOpen, setIsOpen]`                | `useState` 반환 구조에 맞게 setter는 `set+대문자` 형태             |
| **불린형 변수**          | `is / has / can / should` 접두어 | ✅ `isLoading`, `hasError`, `canSubmit`                    | 참/거짓을 직관적으로 표현 (“~인지”, “~가 있는지”)                      |
| **이벤트 핸들러**         | `handle + 동작`                 | ✅ `handleClick`, `handleChange`, `handleSubmit`           | JSX 속성명(`onClick`, `onChange`)과 의미 연결                 |
| **props 이름**        | 의미 있는 데이터명 / 함수는 `on+동사`      | ✅ `cartItems`, `user`, `onAddItem`, `onDeleteItem`        | 데이터는 명사, 콜백은 `on+동사`로 구분                              |
| **useEffect 내부 함수** | 역할 기반 동사형 이름                  | ✅ `fetchUserList()`, `loadData()`                         | 데이터/이벤트 로직 중심으로 명확히 작성                                |
| **파일명 (컴포넌트)**      | PascalCase                    | ✅ `UserList.jsx`, `CartModal.jsx`                         | 컴포넌트명과 파일명 일치시키기                                      |
| **파일명 (유틸/함수)**     | camelCase                     | ✅ `formatDate.js`, `calculateTotal.js`                    | 일반 함수/도우미용 스크립트에 사용                                   |
| **정리 규칙**           | 명확성 + 일관성                     | ✅ 짧고 의미 있는 단어 사용, 불필요한 접두어 피하기                            | 읽기 쉬운 코드 = 유지보수 쉬움                                    |
# filter / find / includes 비교
        ✅ filter → “조건에 맞는 여러 개 찾기”

        ✅ find → “조건에 맞는 하나만 찾기”

        ✅ includes → “그 값이 있나 없나 확인하기”
| 구분                    | `filter()`                                               | `find()`                                               | `includes()`                                  |
| --------------------- | -------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- |
| **설명**                | 조건을 만족하는 **모든 요소를 배열로 반환**                               | 조건을 만족하는 **첫 번째 요소만 반환**                               | 배열에 특정 값이 **포함되어 있는지 여부를 반환**                 |
| **반환값**               | 배열 (`[]`)                                                | 단일 값 (요소 1개 또는 `undefined`)                            | 불리언 (`true` / `false`)                        |
| **원본 배열 변경 여부**       | ❌ 변경 안 함                                                 | ❌ 변경 안 함                                               | ❌ 변경 안 함                                      |
| **콜백 함수 필요 여부**       | ✅ 필요 (예: `arr.filter(x => x > 10)`)                      | ✅ 필요 (예: `arr.find(x => x > 10)`)                      | ❌ 필요 없음 (예: `arr.includes(10)`)               |
| **조건을 만족하는 요소가 없을 때** | 빈 배열 `[]`                                                | `undefined`                                            | `false`                                       |
| **사용 예시 (배열)**        | `[1,2,3,4,5].filter(x => x > 3)` → `[4,5]`               | `[1,2,3,4,5].find(x => x > 3)` → `4`                   | `[1,2,3,4,5].includes(3)` → `true`            |
| **사용 예시 (객체 배열)**     | `users.filter(u => u.age > 20)` → 나이 20초과인 **모든 사용자 배열** | `users.find(u => u.id === 1)` → id가 1인 **한 명의 사용자 객체** | `[1,2,3].includes(2)` → `true` (객체엔 직접 사용 불가) |
| **적합한 상황**            | 조건에 맞는 모든 항목을 얻을 때                                       | 조건에 맞는 첫 번째 항목만 찾을 때                                   | 특정 값이 존재하는지만 확인할 때                            |
        예)         const resultFiltered = users.filter(user =>
            user.name.toLowerCase().includes(trimmedValue.toLowerCase())
        );

#  Fetch(url)~ .then() ~.catch()~ .finally() 구조
| 단계                      | 설명                                |
| ----------------------- | --------------------------------- |
| **1️⃣ fetch()**         | 네트워크 요청을 보냄 (Promise 반환)          |
| **2️⃣ .then(response)** | 서버로부터 응답이 오면 실행됨                  |
| **3️⃣ .then(data)**     | `response.json()`으로 변환된 실제 데이터 처리 |
| **4️⃣ .catch(error)**   | 네트워크 에러나 `.then` 내부의 예외 처리        |
| **5️⃣ .finally()**      | 성공/실패 상관없이 마지막에 항상 실행됨 (정리작업 등)   |

# sort() 사용법
| 구분                   | 데이터 예시                                                                     | 오름차순 정렬                                     | 내림차순 정렬                                     | 결과 (예시)                                                                       |
| -------------------- | -------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------- |
| **숫자 배열**            | `[5, 2, 9, 1]`                                                             | `numbers.sort((a, b) => a - b);`            | `numbers.sort((a, b) => b - a);`            | 🔼 `[1, 2, 5, 9]`<br>🔽 `[9, 5, 2, 1]`                                        |
| **문자열 배열**           | `['banana', 'apple', 'cherry']`                                            | `fruits.sort();`                            | `fruits.sort().reverse();`                  | 🔼 `['apple', 'banana', 'cherry']`<br>🔽 `['cherry', 'banana', 'apple']`      |
| **객체 배열 (숫자 속성 기준)** | `[{name:'Tom', age:25}, {name:'Anna', age:30}, {name:'Bob', age:20}]`      | `users.sort((a, b) => a.age - b.age);`      | `users.sort((a, b) => b.age - a.age);`      | 🔼 age 기준 `[Bob(20), Tom(25), Anna(30)]`<br>🔽 `[Anna(30), Tom(25), Bob(20)]` |
| **한글 문자열 배열**        | `['바나나', '사과', '체리']`                                                      | `words.sort((a, b) => a.localeCompare(b));` | `words.sort((a, b) => b.localeCompare(a));` | 🔼 `['바나나', '사과', '체리']`<br>🔽 `['체리', '사과', '바나나']`                          |
| **날짜 배열**            | `[new Date('2023-01-01'), new Date('2024-05-10'), new Date('2022-07-15')]` | `dates.sort((a, b) => a - b);`              | `dates.sort((a, b) => b - a);`              | 🔼 오래된 → 최신<br>🔽 최신 → 오래된                                                    |

# Router – DOM이란 ?
        • 리액트에서 페이지 이동(경로 전환) 을 담당하는 라이브러리이다.
        • 전통적인 웹은 A.html, B.html처럼 페이지마다 별도 파일을 불러왔다.
        • 하지만 리액트는 하나의 HTML 안에서 화면만 바꿔주는 방식(SPA) 
                으로 동작한다.
        • 즉, 실제로는 페이지가 바뀌지 않지만 화면이 바뀌는 것처럼 보이게 만든다.

# Context API란?
        • React에서 컴포넌트 간 깊은 구조로 props를 계속 전달하는 문제
                (Prop Drilling) 를 해결하기 위한 전역 상태 관리 도구.
        • Redux, Recoil 같은 외부 라이브러리 없이도 가능.
        • 여러 컴포넌트에서 같은 데이터를 써야 할 때
        • 트리구조에서 손자 이상 자료를 공유받고 싶을 때
        • 예: 로그인 유저 정보, 다크모드 설정, 언어 설정, 장바구니, 테마 등
        • props로 계속 내려보내기 귀찮을 때
| 기능                       | 설명             |
| ------------------------ | -------------- |
| `createContext()`        | Context 생성     |
| `<Provider value={...}>` | 자식들에게 값 공급     |
| `useContext()`           | Context 값 가져오기 |
       • import { createContext } from 'react';
                // Context 생성 (이름은 자유)
                export const Context이름 = createContext();
                
                import { Context이름 } from './Context이름';
                const { user, setUser } = useContext(Context이름);
# children 의 의미

        • children 은 React의 특수한 props 중 하나로,
                컴포넌트 태그 안쪽에 들어가는 모든 JSX를 의미
        • ThemeProvider 같은 “Provider 컴포넌트”에서 children 을 
                사용하는 이유는 Provider로 감싸진 모든 컴포넌트에 값을 전달하기 위해서야.
# import { useNavigate } from 'react-router-dom';
        • const navigate = useNavigate();

# Redux
        • JavaScript 애플리케이션의 전역 상태 관리 라이브러리 이다.
        • “상태(State)를 한곳(Store)에 모아 관리한다.”
        • Context API의 확장판 이다.
                         ┌───────────────────┐
                 │       STORE       │
                 │ (앱 전체 상태 저장) │
                 └─────────┬─────────┘
                           │
                           │ (새로운 상태 저장)
                           ▼

     ┌──────────────┐      dispatch      ┌────────────────┐
     │   COMPONENT   │ ───────────────▶  │     ACTION     │
     │ (UI, 클릭 등) │                   │  (무슨 일을 할지)│
     └──────────────┘                    └────────┬───────┘
                                                  │
                                                  │ (type, payload 전달)
                                                  ▼

                                   ┌────────────────────────┐
                                   │        REDUCER         │
                                   │ (이전 state + action →  │
                                   │      새로운 state)      │
                                   └─────────────┬──────────┘
                                                 │
                                                 │ (new state 반환)
                                                 ▼

                                   ┌────────────────────────┐
                                   │         STORE          │
                                   │ (새로운 상태 저장 후 UI 업데이트) │
                                   └────────────────────────┘

npm install react-router-dom
npm install redux
npm install react-redux
npm install @reduxjs/toolkit


# Axios
        • Axios는 브라우저와 Node.js에서 사용할 수 있는 HTTP 클라이언트 라이브러리이다.
        • 쉽게 말해서, 서버(API)로 데이터 요청(GET, POST 등)을 보내고, 응답을 받아올 때 쓰는 도구이다.
        Fetch 업그레이드 버젼 -> npm install axios 필요
        • Promise 기반 → async/await와 잘 어울린다.
        • JSON 데이터를 쉽게 다룰 수 있다.
        • 요청/응답 가로채기(interceptors) 가능하다.
        • 브라우저 호환성 좋다.
        import { useEffect } from "react";
        import axios from 'axios'
        • 공식
        export default function Test(){
                useEffect(()=>{
                // load라는 비동기 함수를 만들어서 API 요청과 상태 업데이트를 처리
                        const load = async() =>{
                                        try{
                                                // axios.get()을 사용하여 API 호출
                                                // 'https://dummyjson.com/products?limit=20'에서 상품 데이터를 가져옴
                                                const res = await axios.get('https://dummyjson.com/products?limit=20');
                                                console.log(res.data);
                                        }catch(error){
                                                //요청 실패 시 에러 출력
                                                console.error('상품 데이터 요청 실패:', error);
                                        }finally{
                                                // 로딩 종료: 성공/실패 상관없이 실행
                                                console.log('요청 완료')
                                        }
                                }
                        load();
                },[])
        }