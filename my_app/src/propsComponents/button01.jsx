
// 부모 컴포넌트
export default function Parent04(){
  const SayHello = () => {
    alert('난 부모');
  }
  return (
    <>
      <Button01 onClickEvent={SayHello}/>
    </>
  )
}

// 자식 컴포넌트
function Button01(props){
  return (
    <>
      <button onClick={props.onClickEvent}>버튼</button>
    </>
  )
}
// 부모와 자식을 같은 jsx 파일
  // props 를 사용 가능
  // 구조분해 할당도 가능