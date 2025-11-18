// 컴포넌트 이름은 반드시 대문자
function Ex05(){
    const users = [
    { id: 1, name: '김철수', age: 30,job: '개발자' },
    { id: 2, name: '이영희', age: 28, job: '디자이너' },
    { id: 3, name: '박민수', age: 35, job: '기획자' },
  ];
    // 함수 내부에 반드시 return 필요
    return(
        // pregment 내 작성
       <table border="1">
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}
export default Ex05;