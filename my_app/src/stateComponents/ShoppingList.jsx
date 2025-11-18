import React, { useState } from "react";



export default function ShoppingList() {

  const [items, setItems] = useState([
  { id:0, name: '우유', done: false},
  { id:1, name: '계란', done: false},
  ]);

  const [inputItem, setInputItem] = useState('');



  // 얉은 복사 선언
  let shallowItems = [...items] ;

  // 인풋값 받기

  const AddItem =(e) => {
    setInputItem(e.target.value)
  }
  // 엔터키 (추가기능)
  const EnterPress = (e) => {
    if (e.key === "Enter") {
      AddItemList();
    }
  };

  // 포스트 추가(기본 + 인풋값 업데이트)
  const AddItemList =()=>{
    if(inputItem === ''){
      return alert('아이템을 추가하세요!')
    }
    let newItem = {id:items.length, name: inputItem, done: false};
    setItems([newItem,...shallowItems])
    setInputItem('');

  };
 
  

  // 삭제 시 가장 최신 포스트 삭제
  const DeleteItem =(index)=> {
    shallowItems.splice(index, 1);
    setItems(shallowItems); 
  }


  // 구매취소 버튼

  const ConfirmItem= (index) => {
    
    if(shallowItems[index].done === true){
      shallowItems[index].done = false;
      setItems(shallowItems);
    }  else if (shallowItems[index].done === false){
      shallowItems[index].done = true;
      setItems(shallowItems);
    }
             
  };


console.log(items)



  return (
      // 배열값 출력
      <>
        <h1 style={{marginBottom:'80px'}}>🛒 쇼핑 리스트</h1>

        
        <input 
          type="text" 
          placeholder="물건 이름 입력"
          value={inputItem}
          onKeyUp={EnterPress} 
          onChange={AddItem}
          style={{ outline: "none", padding:'18px 50px', borderRadius:'5px', fontSize:'20px' }}
        />
        <button type="button" onClick={AddItemList} style={{width:'150px',height:'60px', fontSize:'18px', marginLeft:'90px', border:'1px solid black'}}>
          추가
        </button>


        {items.map((items, index) => (
          <div key={items.id} 
          style={{width:'600px', 
          height:'80px', 
          border:'1px solid black', 
          alignContent:'center',
          justifyContent:'space-around',
          borderRadius:'10px',
          margin:'20px', display:'flex'}}>
            <h2 style={{width:'300px',
               textDecoration:items.done?'line-through':'none', color:items.done?'#888':'black'}}>
                {items.name}
            </h2>
            <button type="button" onClick={() => ConfirmItem(index)} 
            style={{width:'132px', height:'80px', fontSize:'20px'}}>
               {items.done?'취소':'구매완료'}
            </button>
            <button type="button" onClick={() => DeleteItem(index)} 
            style={{fontSize:'20px'}}>삭제</button>
          </div>
        ))}



        
      </>
  );
}

