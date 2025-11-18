import { Link, useParams } from "react-router-dom";

export default function ProdDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>상품 목록 상세 페이지</h2>
            <p>
                이 상품의 ID는 <strong>{id}</strong> 입니다.
            </p>
            <Link to="/">상품 목록으로 이동</Link>
        </>
    );
}