import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./Recipe.css";

export default function ProdDetail({ data }) {
  const { id } = useParams();
  const item = data?.find((item) => item.id === Number(id));

  // 훅은 항상 최상위에서 호출
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  if (!item) return <p>상품 정보를 불러오는 중...</p>;

  return (
    <div className="detail-card">
      <div className="detail-left">
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p className="cuisine">Cuisine: {item.cuisine}</p>
        <p className="cuisine">difficulty: {item.difficulty}</p>
        <p className="rating">Rating: {item.rating}</p>
        <p className="rating">Reviews: {item.reviewCount}</p>
        <Link to="/"><button className="back-btn">Back to main</button></Link>
      </div>

      <div className="detail-right">
        <Link to="/" className="close-btn">x</Link>
        <div className="toggle-section">
          <strong onClick={() => setShowIngredients(prev => !prev)}>Ingredients ▼</strong>
          <ul className={`ingredients ${showIngredients ? "show" : ""}`}>
            {item.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="toggle-section">
          <strong onClick={() => setShowInstructions(prev => !prev)}>Instructions ▼</strong>
          <ul className={`instructions ${showInstructions ? "show" : ""}`}>
            {item.instructions.map((instruction, index) => (
              <li key={index}><b>{index + 1}.</b>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
