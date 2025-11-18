import { useState } from "react";

export default function Changeimg02(){
    const [img,setImg]=useState(false)

    return(
        <>
            <div >
                <img src={img? '/images/tree-5.jpg':'/images/tree-4.jpg'} alt="tree"
                onMouseEnter={()=>setImg(true)}
                onMouseLeave={()=>setImg(false)}
                />
            </div>
        </>
    )
}