import React, { useState } from "react";

export default function Exstate18() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <Child18 Increase={()=>{setNum(num+1)}}/>
      <p>값: {num}</p>
    </div>
  );
}

function Child18(props) {
  return(
    <>
      <button type="button" onClick={props.Increase}>+1</button>
    </>
  )
}

// 부모의 함수를 자식에게 전달하였다.