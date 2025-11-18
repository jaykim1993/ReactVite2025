import { useState} from "react"
import CartModal from "../food/CartModal"
import FoodList from "../food/FoodList"


export default function FoodApp(){

    const [foods] = useState([
                {id: 1, name: '오리백숙', price:45000},
                {id: 2, name: '닭볶음탕', price:38000},
                {id: 3, name: '올갱이해장국', price:12000},
                {id: 4, name: '선지해장국', price:11000},
                {id: 5, name: '공기밥', price:1000},
                {id: 6, name: '인삼주', price:18000}]);
    let [cart,setCart]=useState([]);
    let [isCartOpen, setIsCartOpen] = useState(false); 


    const addToCart= (food)=> {
        const cartCopy = [...cart];
        const index = cart.findIndex((cartItem)=>(cartItem.id===food.id))
        console.log(index);
        if(index!=-1){
            cartCopy[index].quantity += 1;
        } else{
            cartCopy.push(
            {id:food.id,
            name:food.name, 
            price:food.price, 
            quantity:1});
        }
        setCart(cartCopy);

    }
    const minusQty = (index) => {
        const cartCopy = [...cart]; 
        if (cartCopy[index].quantity > 1) {
        cartCopy[index].quantity--;
        } else alert("1개 이상 담겨야 합니다.");
        setCart(cartCopy);
    };

    const plusQty = (index) => {
        const cartCopy = [...cart];
        if (cartCopy[index].quantity<10) {
            cartCopy[index].quantity++;
        } else alert("최대 10개까지 가능합니다.")
        setCart(cartCopy);
    };

    const deleteItem = (index) => {
        const cartCopy = [...cart];
        cartCopy.splice(index, 1); // index번째 요소 삭제
        setCart(cartCopy);
    };

   
    return(
        <>
            <h2>원조 오리백숙🦆</h2>
            <button type="button" onClick={()=>setIsCartOpen(true)}>장바구니</button>
            <FoodList 
                foods = {foods}
                addToCart ={addToCart}
            />
            {isCartOpen && 
                <CartModal 
                    cart = {cart}
                    isCartOpen = {isCartOpen}
                    onClose = {()=>setIsCartOpen(false)}
                    minusQty = {minusQty}
                    plusQty = {plusQty}
                    deleteItem = {deleteItem}
                />
            }
        </>
    )
}
