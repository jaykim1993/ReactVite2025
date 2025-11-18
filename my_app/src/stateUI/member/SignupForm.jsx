import { useState } from "react";

export default function SignForm(props) {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");

  const Signup = () => {
    if (!name || !pw) return alert("이름과 비밀번호를 모두 입력해주세요!");
    props.OnSuccess(name);
  };

  return (
    <div className="signupForm">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="비밀번호"
      />
      <button type="button" onClick={Signup}>
        회원가입
      </button>
    </div>
  );
}


// 자식 컴포넌트
// 입력창 2개(name, pw)
// 버튼 클릭 시 onSuccess(name) 콜백 실행 -> 부모에게 이름 전달