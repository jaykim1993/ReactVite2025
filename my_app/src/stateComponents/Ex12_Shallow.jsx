import React,{useState} from "react";

export default function ShallowPractice(){
    const [item, setItem] = useState([])
    const AddItem =()=> {
        // item.push(`아이템 ${item.length}`)
        // console.log(`아이템 ${item}`)
        // setItem([item])
            
        let newItem = `아이템 ${item.length+1}`;
        setItem([...item, newItem]);
        console.log("현재 아이템 목록:", [...item, newItem]);
        
    }

    return(
        <div>
            <button type="button" onClick={AddItem} style={{marginTop:'20px', border:'none', outline:'none', backgroundColor:'inherit'}}>아이템추가</button>
            <ul>
                {item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

// console의 item 배열에 값이 추가되어도 
    // React 입장에서는 item의 주소가 
    // 바뀌지 않았다고 판단하여 
    // 화면을 업데이트 하지않는다. 
    // 고로 리렌더링 하지 않아 화면에는 출력이 안됨
// => [...] 얉은 복사 사용 
    // useState 사용해야 하는 이유와 같다