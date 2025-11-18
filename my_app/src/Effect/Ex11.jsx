import React, { useState, useEffect } from "react";

export default function Ex10() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || !age) {
      alert("이름과 나이를 모두 입력해주세요!");
      return;
    }
    setUser({ name, age });
    setMessage(''); // 등록 시 메시지 초기화
  };

  // 이름이 바뀌면 감지
  useEffect(() => {
    if (user && name !== user.name) {
      setMessage('이름이 변경되었습니다.');
    }
  }, [user,name]);

  // 나이가 바뀌면 감지
  useEffect(() => {
    if (user && age !== user.age) {
      setMessage('나이가 변경되었습니다.');
    }
  }, [user,age]);

  return (
    <>
      <h2>이름 나이 등록하기</h2>
      <input
        type="text"
        onChange={handleName}
        value={name}
        placeholder="이름 입력"
      />
      <input
        type="number"
        onChange={handleAge}
        value={age}
        placeholder="나이 입력"
      />
      <button onClick={handleSubmit}>등록</button>

      {/* 등록된 사용자 출력 */}
      {user && (
        <div style={{ marginTop: "10px" }}>
          <strong>등록된 사용자:</strong> {user.name} ({user.age}세)
        </div>
      )}

      {/* 변경 메시지 출력 */}
      {message && (
        <div style={{ color: "blue", marginTop: "5px" }}>
          {message}
        </div>
      )}
    </>
  );
}
