
import { Child } from './child'

export const Parent = () => {
  return (
    <>
      <Child name='홍길동'/>
      <Child name='개나리'/>
      <Child name='미나리'/>
    </>
  )
}
// 부모와 자식을 같은 jsx 파일
    // 구조분해 할당 가능
    // props 가능