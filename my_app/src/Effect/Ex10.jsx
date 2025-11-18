import React, { useEffect, useState } from "react";

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
];

export default function Ex10() {
    const [inputText, setInputText] = useState('');
    const [filter, setFilter] = useState([]);

    const handleInput = (e) => setInputText(e.target.value);

    useEffect(() => {
        const trimmedValue = inputText.trim();
        if (trimmedValue === '') {
            setFilter(users);
            return;
        }
        const resultFiltered = users.filter(user =>
            user.name.toLowerCase().includes(trimmedValue.toLowerCase())
        );
        setFilter(resultFiltered);
        console.log(resultFiltered);
    }, [inputText]);
    

    return(
        <>  
            <h2>간단 사용자 검색</h2>
            <input
                type="text"
                onChange={handleInput}
                value={inputText}
                placeholder="이름 검색"/>
            <ul style={{padding:'0'}}>
               {filter.length > 0 ? (
                    filter.map(user => (
                    <li key={user.id}>
                        <b>{user.name}</b> ({user.email})
                    </li>
                    ))): (<b>검색 결과가 없습니다.</b>)}
            </ul>
        </>
    );
}
