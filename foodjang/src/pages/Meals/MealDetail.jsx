import { Link, useParams } from "react-router-dom";
import "./MealDetail.style.css";
import star from "../star.png"

export default function ProdDetail({ data }) {
  const { id } = useParams();
  const item = data?.find((item) => item.id === Number(id));


  if (!item) return <p>상품 정보를 불러오는 중...</p>;

  return (
    <div className="recipe-wrap">
      <div className="detail-top">
        <img className="detailimg" src={item.image} alt={item.name} />
        <div className="recipe-section">
          <h2>{item.name}</h2>
          <p className="rating">
            {item.rating >= 4.8 ? 
              <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>:
              item.rating >= 4.4 ? 
              <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>: 
              <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>
            }
          </p>
          <p className="cuisine">Cuisine: {item.cuisine}</p>
          <p className="cuisine">difficulty: {item.difficulty}</p>
          <p className="rating">Rating: {item.rating}</p>
          <p className="rating">Reviews: {item.reviewCount}</p>
        </div>
      </div>

        <div className="ingredients">
          <div className="recipe-section">
            <h2>Ingredients </h2>
            <ul >
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="instructions">
          <div className="recipe-section">
            <h2>Instructions </h2>
            <ul >
              {item.instructions.map((instruction, index) => (
                <li key={index}><b>{index + 1}.</b>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/menus"><button className="back-btn">Back to main</button></Link>
      </div>
      
  );
}
