// 문제: 동적 클래스명 적용:
// isActive 상태에 따라 다른 className을 적용하세요
// true: box active
// false: box

// 함수이름은 반드시 대문자
function Test13(){
    // 함수 내부에 반드시 return 필요
    const isActive = true;
    return(
        // pregment 내 작성
        <>  
            <div className={isActive===true?'box active':'box'}>
                박스
            </div>
        </>
    )
}
export default Test13;