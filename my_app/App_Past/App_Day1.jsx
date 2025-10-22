// import: 외부파일을 가져온다
import './App.css'
import './Ex.css'
// 이미지를 독립적으로 임포트 할 수 있다.
// public 폴더 내 이미지는 자동 임포트됨
// import img01 from '../public/images/image01.png';

// UserCard() 컴포넌트를 App() 컴포넌트의 자식으로 사용하기
// UserCard 안에 name과 age는 일명 매개변수다
// 컴포넌트 사이에 데이터 이동이 가능하다
// 부모에서 자식으로만 매개변수 보낼 수 있다.
// 방법 1
// props 명령어를 이용
// function UserCard({props})
// props는 부모의 모든 매개변수를 대변한다.
// {props.name}, {props.age} ...
// 방법 2
// 필요한 매개변수만 보내려면 자식 컴포넌트 괄호내부에 
// => function UserCard({name, age})
// {name}
// function UserCard({name, age}){
//   return(
//     <>
//       <div style={{border:'1px solid #ddd',
//         padding:"15px",
//         margin:'10px',
//         borderRadius: '8px'
//       }}>
//           <h2>{name}</h2>
//           <h2>{age}</h2>
//       </div>
//     </>
//   )
// }
// import Ex01 from './compents/Ex01.jsx'
import Ex03 from '../src/components/Ex03.jsx'

// function App() {}
//  => react에서 App()는 컴포넌트라 부른다.
function App() {
  // react는 반드시 return() 안에서 실행할 HTML 문서를 작성한다.
  // const isLoggin = true; //true:false 는 문자열이 아니라 ''에 넣지 않는다.
  // const fruits = ['바나나','사과','오렌지'];
  // const user = {name:'김철수', age:25, email:'kim@naver.com'}
  // const clickHandler = () => {
  //   console.log('버튼 클릭')
  // }
  // const products = [
  //   {id:1, name:'노트북', price:12000000},
  //   {id:2, name:'마우스', price:30000},
  //   {id:3, name:'키보드', price:80000},
  // ]
  

  return (
    // Fregment;<></>: 부모태그 하위 자식 요소들을 가져오기 위해 비어있는 태그 사용.
    // => 이유: root DOM 만 존재하기 때문
    <>
      {/* <div style={{backgroundColor:"lightblue", padding:"20px", borderRadius:'10px'}}> */}
        {/* /react에서 변수의 값을 사용하려면 반드시 {변수이름} 형식으로 사용 */}
        {/* {fruits.map((item, index) =>())} : 형식으로 사용 */}
        {/* <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.email}</p> */}
        {/* <p>스타일 적용된 함수</p>
        <button onClick={clickHandler}>클릭</button>
      </div> */}

      {/* <UserCard name='홍길동' age='20' />
      <UserCard name='개나리' age='20' />
      <UserCard name='진달래' age='20' /> */}
{/* 응용 1 */}
        {/* {products
        // 50000원 이상만 출력
        .filter((item) => item.price >= 50000)
        .map((item) => (
          <div 
           key={item.id} 
           style={{backgroundColor:"lightblue", padding:"10px", margin:'10px', borderRadius:'10px'}}>

          <p>{item.name}:</p>
          <p>{item.price.toLocaleString()}원</p>
          </div>
        ))} */}
{/* 응용 2 */}
        {/* {products.map((item) => (
          <div 
           key={item.id} 
           style={{backgroundColor:"lightblue", padding:"10px", margin:'10px', borderRadius:'10px'}}>

          <p>{item.name}:</p>
          <p>{item.price >= 50000 ? '고가' : '저가'}</p>  */}
          {/* 3항연산자로 분류 */}
          {/* </div>
        ))} */}

        {/* <Ex02 />
       */}
    </>
  )
}
// 외부로 App 컴포넌트를 디폴트값을 줘서 내보낸다.
export default App
