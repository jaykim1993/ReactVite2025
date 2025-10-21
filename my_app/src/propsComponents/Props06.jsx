export default function Alert({text, msg}){

    const colorChange =
        text==='error'? 'red'
        :text==='sucess'? 'green':'blue';
        
  return (
    <>
      <div style={{backgroundColor:colorChange, 
        color:'white', 
        padding:'16px', 
        borderRadius:'10px',
        margin:'15px'}}>
        {msg}
      </div>
    </>
  )
}