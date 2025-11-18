export default function FoodList(props){
    return(
        <>
            <ul>
                {props.foods.map((food)=>(
                    <li key={food.id}>
                        {food.name} - {food.price}원 
                        <button type="button" onClick={()=>props.addToCart(food)}>
                            담기
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
