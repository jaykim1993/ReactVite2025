import { useState } from 'react';

export default function Changimg04() {
    const imgs = [
        { id: 1, name: 'pic-1.jpg', category: 1 },
        { id: 2, name: 'pic-2.jpg', category: 1 },
        { id: 3, name: 'pic-3.jpg', category: 1 },
        { id: 4, name: 'pic-4.jpg', category: 1 },
        { id: 5, name: 'tree-1.jpg', category: 2 },
        { id: 6, name: 'tree-2.jpg', category: 2 },
        { id: 7, name: 'tree-3.jpg', category: 2 },
        { id: 8, name: 'tree-4.jpg', category: 2 },
    ];
    const [selectCate, setSelectCate] = useState(1);
    const filteredImgs = imgs.filter((img)=>img.category===selectCate)
    console.log(filteredImgs)
    return(
        <>
            <h2>이미지 탭 전환 예제</h2>
            <button onClick={()=>setSelectCate(1)}> 배경 </button>
            <button onClick={()=>setSelectCate(2)}> 나무 </button>
            <div style={{ marginTop: '20px', display:'flex', justifyContent:'center'}}>
                {filteredImgs.map((img) => (
                <img
                    key={img.id}
                    src={`/images/${img.name}`}
                    alt={img.name}
                    style={{ margin: '10px'}}
                />
                ))}
            </div>
        </>
    );
}

// 배열이름.filter()
// 무엇을 반환하나: 조건을 만족하는 모든 요소들의 새로운 배열. 만족하는 요소가 없으면 빈 배열 [ ] 반환.
// 용도: 여러 항목을 추출할 때(예: 삭제, 검색 결과, 특정 조건의 모든 요소 추출).
// 원본 배열 변경 여부: 원본을 변경하지 않고 새 배열을 반환.
// 배열이름.filter((요소, 인덱스, 배열) => { return 조건식; } );

// imgs.filter((img)=> 조건입력)
//  조건 만족 하면 새로운 배열로 추출한다.

// DB 실제 추출하는 방법