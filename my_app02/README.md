# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Array.map 용도
| 용도                              | 설명                           | 코드 예시                                                                                                                |
| ------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ✅ **단순 나열(리스트 출력)**             | 배열의 각 요소를 순서대로 나열            | `js const arr = [1, 2, 3]; const result = arr.map(n => n); // [1, 2, 3] `                                            |
| ✅ **요소 값 변환(숫자 연산)**            | 각 값에 +1, ×2 같은 연산 적용         | `js const arr = [1, 2, 3]; const result = arr.map(n => n * 2); // [2, 4, 6] `                                        |
| ✅ **문자열 변환**                    | 모든 문자열의 앞/뒤에 텍스트 추가          | ``js const users = ["Tom", "Amy"]; const result = users.map(u => `Hello ${u}`); // ["Hello Tom", "Hello Amy"] ``     |
| ✅ **객체 특정 키 변경**                | 객체 안 특정 속성만 수정 (기본적인 사용 예)   | `js const data = [{id:1, done:false}]; const result = data.map(item => item.id===1 ? {...item, done:true} : item); ` |
| ✅ **삼항연산자 활용(조건부 변경)**          | 조건에 따라 요소를 수정하거나 유지          | `js const nums = [5, 10, 15]; const result = nums.map(n => n > 10 ? "big" : "small"); // ["small", "small", "big"] ` |
| ✅ **filter처럼 보이나 삭제 없이 유지**     | 조건을 만족할 때만 값 변경, 나머지는 그대로 유지 | `js result = items.map(i => i.active ? {...i, flag:true} : i); `                                                     |
| ✅ **인덱스 활용**                    | index를 이용해 번호 붙이기            | ``js const arr = ["a", "b"]; const result = arr.map((v, i) => `${i+1}. ${v}`); // ["1. a", "2. b"] ``                |
| ✅ **React에서 JSX 렌더링** (가장 많이 씀) | 리스트 컴포넌트 렌더링                 | `jsx {items.map(item => <li key={item.id}>{item.name}</li>)} `                                                       |
| ✅ **새로운 배열 형태 만들기**             | 객체 배열에서 특정 키만 추출             | `js const people = [{name:"A", age:20},{name:"B",age:30}]; const names = people.map(p => p.name); // ["A","B"] `     |
| ✅ **중첩 map 사용(2중 배열)**          | 다차원 배열 평탄화(fully flat 아님)    | `js const arr = [[1,2],[3,4]]; const result = arr.map(inner => inner.map(n => n * 2)); // [[2,4],[6,8]] `            |
| ✅ **API 데이터 가공**                | 받아온 데이터를 원하는 형태로 변환          | `js const raw = [{a:1},{a:2}]; const clean = raw.map(r => ({value:r.a})); // [{value:1},{value:2}] `                 |

# ✅ filter / map / reduce 차이 비교표
| 메서드            | 목적                         | 반환값                      | 원본 배열 변화 | 대표 사용 예                 | 코드 예시                                       |
| -------------- | -------------------------- | ------------------------ | -------- | ----------------------- | ------------------------------------------- |
| ✅ **filter()** | **조건을 만족하는 요소만 남기기(걸러내기)** | **조건을 통과한 요소들만 담은 배열**   | ❌ 변화 없음  | 검색 결과, 특정 조건의 데이터만 추출   | `js [1,2,3,4].filter(n => n > 2) // [3,4] ` |
| ✅ **map()**    | **각 요소를 변환하여 새로운 요소로 매핑**  | **변환된 요소들로 이루어진 배열**     | ❌ 변화 없음  | 값 변경, 객체 속성 변경, 리스트 렌더링 | `js [1,2,3].map(n => n*2) // [2,4,6] `      |
| ✅ **reduce()** | **여러 값을 하나로 합치기(누적)**      | **숫자, 객체, 배열 등 “하나의 값”** | ❌ 변화 없음  | 합계 계산, 객체로 변환, 그룹화      | `js [1,2,3].reduce((a,b)=>a+b,0) // 6 `     |
