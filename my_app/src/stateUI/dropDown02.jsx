import { useState } from 'react';

export default function Dropdow02() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        style={{ position: 'relative', display: 'inline-block' }}
    >
        <button>메뉴 ▼</button>
        {/* 조건부 렌더링 대신 항상 렌더링하되 CSS로 숨김 */}
        <ul
            style={{
            display: isOpen ? 'block' : 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            listStyle: 'none',
            padding: '8px 0',
            margin: '0',
            minWidth: '150px',
            }}
            >
        <li style={{ padding: '8px 16px' }}>항목 1</li>
        <li style={{ padding: '8px 16px' }}>항목 2</li>
        <li style={{ padding: '8px 16px' }}>항목 3</li>
        </ul>
    </div>
    );
}
