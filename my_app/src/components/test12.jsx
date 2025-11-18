// 문제: score 값에 따라 다른 색상을 표시하기
    // score가 80 이상이면 파란색,
    // score가 60 이상이면 초록색,
    // score가 60 밑으로 빨간색이 출력되도록 작성

// 함수이름은 반드시 대문자
function Test12(){
    // 함수 내부에 반드시 return 필요
    const score = 70;

    return(
        // pregment 내 작성
        <>  
        <div> 점수: 
            <p  style = 
                {{
                color: score >= 80? 'blue':
                score >= 60? 'green' : 'red'
                }}>
                {score}
            </p>
        </div>
        </>
    )
}
export default Test12;