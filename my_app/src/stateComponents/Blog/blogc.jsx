// 부모 컴포넌트: state는 모두 부모

//import 내역 : useState / 자식 UI / CSS
import { useState } from "react";
import './Blog.css';
import PostList from "./postList";
import Modal from "./modal";


export default function BlogC(){
        const [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
        const [inputValue, setInputValue] = useState('');
        const [likes, setLikes] = useState([0,0,0]);
        const [modalOpen, setModalOpen] = useState(false);
        const [selectedIndex, setSelectedIndex] = useState(null);

      // 포스트 추가(기본 + 인풋값 업데이트) / 얉은 복사 
        const AddPost =()=>{
            // 인풋값 없이 제출하면 경고창 출력
            if(inputValue.trim() === ''){
            return alert('자료를 입력하세요');
            }
            // 얉은 복사 선언
            let shallowPosts = [...posts]; 
            let shallowLikes = [...likes];
            shallowPosts.unshift(inputValue);
            shallowLikes.unshift(0);
            setPosts(shallowPosts);
            setLikes(shallowLikes);
            setInputValue(''); // inputValue 빈값 업데이트 ('')
        };
        

        // 삭제 시 가장 최신 포스트 삭제 / 얉은 복사 
        const DeletePost =(index)=> {
            // 얉은 복사 선언
            let shallowPosts = [...posts]; 
            let shallowLikes = [...likes];
            // 포스트 배열 인덱스 0번값 삭제
            // 라이크 배열 인덱스 0번값 삭제
            shallowPosts.splice(index, 1);
            shallowLikes.splice(index, 1);
            setPosts(shallowPosts);
            setLikes(shallowLikes);
        }


        // 좋아요 수 카운트 / 얉은 복사 
        const LikeCounter = (index) => {
            // 얉은 복사 선언
            let shallowLikes = [...likes];
            shallowLikes[index] ++;
            setLikes(shallowLikes);
        };
          // 인풋값 배열에 넣기
        const AddInput =(e) => {
            setInputValue(e.target.value)
        }


        // 엔터키 감지
        const EnterPress = (e) => {
            if (e.key === "Enter") {
            e.preventDefault(); // 엔터로 인한 폼 제출 방지
            AddPost();
            }
        };

        return(
            <>
             <div>
                {/* 자식 컴포넌트로 블로그 글 목록 UI로 출력 */}
                <PostList 
                    posts={posts} 
                    likes={likes}
                    setModalOpen={setModalOpen}
                    setSelectedIndex={setSelectedIndex}
                    LikeCounter={LikeCounter}
                    DeletePost={DeletePost}
                    />
                <input 
                    type="text" 
                    placeholder="입력하세요"
                    value={inputValue}
                    onChange={AddInput}
                    onKeyUp={EnterPress} // 엔터키 이벤트 연결
                />
                <button className='postBtn' type="button" onClick={AddPost}>
                글 발행
                </button>
                {
                modalOpen && 
                    <Modal 
                        color = {'lightgray'} 
                        posts = {posts} 
                        setPosts = {setPosts}
                        selectedIndex = {selectedIndex}
                        modalOpen = {modalOpen}
                        onClose={()=>setModalOpen(false)}
                    />
                }
                
             </div>
            </>
        )
    
}