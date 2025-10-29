import { useState } from 'react';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
            <button>메뉴</button>
            {isOpen && ( 
                <ul>
                    <li>항목 1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>)}
        </div>
    );
}
