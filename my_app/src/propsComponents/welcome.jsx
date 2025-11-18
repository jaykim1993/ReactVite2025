
// 부모 컴포넌트
export const Parent02 = () => {
  return (
    <>
      <Welcome name='홍길동'/>
      <Welcome name='개나리'/>
      <Welcome name='미나리'/>
    </>
  )
}

// 자식 컴포넌트
function Welcome(props){
  return (
    <h1>안녕하세요. {props.name}님</h1>
  )
}
// 부모와 자식을 같은 jsx 파일
  // props 사용 가능
  // 구조분해 할당 가능