import { Link, useParams } from "react-router-dom";
import "./MealDetail.style.css";

export default function ProdDetail({ data }) {
  const { id } = useParams();
  const item = data?.find((item) => item.id === Number(id));


  if (!item) return <p>상품 정보를 불러오는 중...</p>;

  return (
    <div className="recipe-wrap">
      <div className="detail-top">
        <img src={item.image} alt={item.name} />
        <div>
          <h2>{item.name}</h2>
          <p className="cuisine">Cuisine: {item.cuisine}</p>
          <p className="cuisine">difficulty: {item.difficulty}</p>
          <p className="rating">Rating: {item.rating}</p>
          <p className="rating">Reviews: {item.reviewCount}</p>
        </div>
      </div>

        <div className="ingredients">
          <h2>Ingredients </h2>
          <ul >
            {item.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>Instructions </h2>
          <ul >
            {item.instructions.map((instruction, index) => (
              <li key={index}><b>{index + 1}.</b>{instruction}</li>
            ))}
          </ul>
        </div>
        <Link to="/menus"><button className="back-btn">Back to main</button></Link>
      </div>
      
  );
}
