import { useState } from 'react';

export default function Changimg03() {
    const imgs = [
        '/images/coffee-gray.jpg',
        '/images/coffee-blue.jpg',
        '/images/coffee-pink.jpg'
    ];
    const [index,setIndex]=useState(0);
    const changeIndex = ()=>{
        // if(index < imgs.length-1){
        //     setIndex(index+1)
        // }else{
        //     setIndex(0)
        // }
        setIndex((index+1)%imgs.length) // 순회하는 공식, 위 if문과 같다
    }

    return(
        <div>
            <img src={imgs[index]} alt="coffee" onClick={changeIndex}
            style={{cursor:'pointer'}}/>
        </div>
    );
}
