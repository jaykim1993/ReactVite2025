export default function Usercard(props){
  return (
    <div style={{border:'1px solid grey', margin:'10px 0', borderRadius:'10px'}}>
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
      <p>도시: {props.city}</p>
    </div>
  )
}