import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function Header(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <header className={`header ${theme?'dark':'light'}`}>
            <h2>Theme Switch</h2>
            <button type="button" onClick={toggleTheme}>{theme?'LIGHT MODE':'DARK MODE'}로 전환</button>
        </header>
    )
}
// 테마는 true이면 다크모드, false면 라이트 모드이다.
// 다크모드(true)일때 버튼은 라이트가 써져있어야 하고, 
// 라이트(false)일때 버튼은 다크모드 써져 있어야 하기 때문에
// 클래스명과 버튼내 연산자 내부가 반대다!