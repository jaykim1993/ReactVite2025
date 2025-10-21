
// 부모 컴포넌트
function Parent03(){
  const name='진달래';
  const age=18;
  return (
    <>
      <Profile name={name} age={age} />
    </>
  )
}
export default Parent03;

//자식 컴포넌트
function Profile(props){
  return (
    <div>
      <h1>이름: {props.name}님</h1>
      <p>나이: {props.age}세</p>
    </div>
    
  )
}

// 부모와 자식을 같은 jsx 파일
  // props 사용 가능
  // 구조분해 할당도가능