import { Link, useParams } from "react-router-dom";
import "./fakestore.css";

export default function ProdDetail({ data }) {
  const { id } = useParams();

  const product = data?.find((item) => item.id === Number(id));

  if (!product) return <p>상품 정보를 불러오는 중...</p>;

  return (
    <div className="detail-card">
      <Link to="/" className="close-btn">x</Link>

      <div className="detail-left">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-right">
        <h2>{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <p className="desc">{product.description}</p>
        <div className="price">${product.price}</div>

        <button className="buy-btn">BUY NOW</button>
        <Link to="/" className="back">⟵ Back to main</Link>
      </div>
    </div>
  );
}
