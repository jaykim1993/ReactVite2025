import { useState } from "react"

export default function likeNum(){
    const[like,setLike]=useState(0)
    const likeBtn =()=>{{
        setLike(like+1)
    }}
    return(
        <button onClick={likeBtn}>♡ like {like}</button>
    )
}