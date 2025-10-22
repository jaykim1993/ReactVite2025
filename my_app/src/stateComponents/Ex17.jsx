import React, { useState } from "react";

export default function Exstate17() {
  const [user, setUser] = useState({text: '박찬하', size: 16, color:'black'});



  
  const Update = () => {
    setUser({text:'박찬화', size: user.size+10, color: user.color === 'black'?'blue':user.color === 'blue'?'green':'black'})
  };

  return (
    <div>
      <button type="button" onClick={Update}>변경</button>
      <p style={{fontSize:user.size, color:user.color}}>{user.text}</p>
    </div>
  );
}

