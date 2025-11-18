import React, { useState } from "react";
import './ScoreManager.css'



export default function ScoreManager() {
  const [student, setStudent] = useState([
    {id:1, name:'김철수', score:85},
    {id:2, name:'이영희', score:92},
    {id:3, name:'박민수', score:78},
  ])

  // 학생 점수 얉은 배열
  const ShallowStudent = [...student];
  // 버튼 +
  const Plus =(id)=>{
    (ShallowStudent[id].score+10)<=100 ? ShallowStudent[id].score += 10 : alert('100점을 넘을 수 없습니다.');
    setStudent(ShallowStudent);
  }
  // 버튼 -
  const Minus =(id)=>{
    (ShallowStudent[id].score-10)>=0 ? ShallowStudent[id].score -= 10 : alert('점수는 0점 이상이어야 합니다.');
    setStudent(ShallowStudent);
  }
  console.log(ShallowStudent)
  console.log(student)
  return(
    <>
      <h1>학생 점수 관리 시스템</h1>
      < StudentCard
        student = {student}
        Plus = {Plus}
        Minus = {Minus}
      />
    </>
  )
  
}



const StudentCard =(props)=> {
  // student, onScoreIncrease, onScoreDecrease
    return(
    <>
      {props.student.map((student, id)=> (
          <div className='list' key={student.id}>
            <div className="good" style={{backgroundColor:student.score >= 80 ?'blue' : student.score <= 60 ?'red':'inherit'}}>{student.score >= 80 ? 'EXCELLENT!' : student.score <= 60 ? '노력요망!':''}</div>
            <h2>{student.name}</h2>
            <p>점수: {student.score}</p>
            <button type="button" onClick={()=>props.Minus(id)}>-10점</button>
            <button type="button" onClick={()=>props.Plus(id)} >+10점</button> 
          </div>
        ))}
    </>
  )
}




// props로 부모와 자식 컴포넌트를 분리하는 이유는 
// 데이터 흐름을 명확히 하고, 컴포넌트를 독립적으로 관리·재사용할 수 있게 하여 
// 유지보수성과 확장성을 향상시키기 위함이다.
