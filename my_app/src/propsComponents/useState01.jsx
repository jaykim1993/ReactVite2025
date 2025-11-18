export default function Counter01(){
    let count = 0;
    function Increase(){
        count= count + 1;
        console.log('count 누적'+count)
    }
    return(
        <>
            <p>현재 카운트 : {count} </p>
            <button type="button" onClick={Increase}>+1</button>
        </>
    )
}

// 버튼 클릭해도 console 내 count값은 증가하지만 
// 웹화면상에서 변화 x
// => 메모리 상에서는 값이 변경되었지만 
// 리액트는 변경된 값을 알지 못한다.
    // => useState() 필요하다!