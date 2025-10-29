import React, { useState } from "react"
import  CartList from "./CartList"
import  CartModal from "../TableOrder/CartModal"
import  OrderModal from "../TableOrder/OrderModal/"
import  MenuList from "./MenuList"


import  "../TableOrder/TableOrder.css"



export default function TableApp() {
  const imgs = [
        { id: 1,name:'바질라멘', src:'ramen01.png', price:11000, info:'향긋한 바질과 돈코츠라멘의 만남. 지금껏 먹어보지 못한 JMT 라멘', category: 1},
        { id: 2,name:'마라라멘', src:'ramen02.png', price:12000, info:'시그니처 양념우삼겹에 고급피쉬볼과 청경채까지 더한 마라맛 라멘', category: 1},
        { id: 3,name:'오로지라멘', src:'ramen03.png', price:13000, info:'오로지라멘만의 특제 시그니처 라멘', category: 1},
        { id: 4,name:'돈코츠라멘', src:'ramen04.png', price:16000, info:'돈코츠육수에 천연재료로 만든 특제소스로 깊은 육수맛을 가진 라멘', category: 1},
        { id: 5,name:'매운돈코츠라멘', src:'ramen05.png', price:16000, info:'돈코츠육수에 천연재료로 만든 특제소스에 매콤한 맛을 더한 라멘', category: 1},
        { id: 6,name:'소유라멘', src:'ramen06.png', price:15000, info:'전용 간장소스를 베이스로한 소유 특유의 깔끔한 라멘', category: 1},
        { id: 7,name:'마제소바', src:'main01.png', price:12000, info:'매콤한 특제 마제소스에 비벼먹은 한국식 마제소바', category: 1},
        { id: 8,name:'냉모밀', src:'main02.png', price:11000, info:'진하게 우려낸 모밀육수과 쫄깃한 메밀면의 상큼한 조화', category: 1},
        { id: 9,name:'카레라이스', src:'main03.png', price:13000, info:'좋은 재료로 만들어낸 카레소스에 양념우삽겹과 가라아케의 조합', category: 2},
        { id: 10,name:'핫카레라이스', src:'main04.png', price:13000, info:'좋은 재료로 만들어낸 매콤한 카레소스에 양념우삽겹과 가라아케의 조합', category: 2},
        { id: 11,name:'카레우동', src:'main05.png', price:12000, info:'정통 카레소스에 탱글한 우동면, 오로지만의 스페셜한 조합', category: 1},
        { id: 12,name:'매운카레우동', src:'main06.png', price:12000, info:'매콤한 정통 카레소스에 탱글한 우동면, 오로지만의 스페셜한 조합', category: 1},
        { id: 14,name:'차슈덮밥', src:'rice02.png', price:14000, info:'오로지라멘의 감동차슈가 가득한 한국식 차슈덮밥', category: 2},
        { id: 15,name:'돼지고기덮밥', src:'rice03.png', price:12000, info:'높은 퀄리티의 특제소스로 재운 한국식 돼지고기덮밥', category: 2},
        { id: 16,name:'핫돼지고기덮밥', src:'rice04.png', price:12000, info:'높은 퀄리티의 매콤한 특제소스로 재운 한국식 돼지고기덮밥', category: 2},
        { id: 18,name:'타코야키', src:'side02.png', price:9000, info:'통문어살 그대로 겉바속촉한 정통 타코야키', category: 2},
        { id: 21,name:'오로지교자', src:'side05.png', price:11000, info:'오로지만의 특별한 소가 들어간 겉바속촉 교자', category: 2},
        { id: 22,name:'미니카레', src:'side06.png', price:6000, info:'진한 미니카레를 밥과 즐길 수 있는 특별메뉴', category: 2},
        { id: 23,name:'미니챠슈덮밥', src:'side07.png', price:8000, info:'감동차슈가 올라간 미니 덮밥', category: 2},
        { id: 24,name:'치킨가라아케', src:'side08.png', price:5500, info:'특별한 반죽으로 튀겨낸 비법 가라아케', category: 2},
  ]
  const categories = [
    { id: 1, label: "라멘 & 누들" },
    { id: 2, label: "디시 & 덮밥" },
  ];
  const [selectCate, setSelectCate] = useState(1);
  const [cart, setCart] = useState([]);
  const [selectItem, setSelectItem] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [order, setOrder]=useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const filteredImgs = imgs.filter((img) => img.category === selectCate);

  // 모달에 선택된 항목 추가 for CartModal.jsx
  const addToModal = (food) => {
    setSelectItem(food);
    setIsCartModalOpen(true);
  };

  // 수량 조절 for CartList.jsx
  const minusQty = (id) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((item) => item.id === id);
    if (index !== -1 && cartCopy[index].quantity > 1) cartCopy[index].quantity--;
    else alert("1개 이상 담겨야 합니다.");
    setCart(cartCopy);
  };

  const plusQty = (id) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((item) => item.id === id);
    if (index !== -1 && cartCopy[index].quantity < 10) cartCopy[index].quantity++;
    else alert("최대 10개까지 가능합니다.");
    setCart(cartCopy);
  };

  const deleteItem = (id) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((item) => item.id === id);
    if (index !== -1) cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  // 장바구니 총 금액 for CartList.jsx // gpt★
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
 

  // 주문 목록 업데이트
  const  orderList=()=> {
    alert('주문이 완료되었습니다.(장바구니 초기화 + 주문 목록 업데이트)');
    const cartCopy = [...cart];
    setOrder((prevOrder) => [...prevOrder, ...cartCopy]);
    console.log(order);
    // 카트 비우기
    setCart([]);
  }

  // 주문 목록 보이기
  const showOrderlist=()=> {
    setIsOrderModalOpen(true);
  }
  return (
    <div className="container">
      <div className="sideWrap">
        <img src="./tableImg/logo02.png" alt="logo" style={{ width: "280px" }} />
        <div className="tableNum">09</div>
        <div className="category">
          {categories.map((cate) => (
            <div
              key={cate.id}
              className={`cateBtn ${selectCate === cate.id ? "active" : ""}`}
              onClick={() => setSelectCate(cate.id)}
            >
              {cate.label}
            </div>
          ))}
        </div>
        <div className="sideBottom">
          <div className="sideBtn" onClick={()=>{alert('잠시만 기다려주세요!')}}>🔔 <br /><span>직원호출</span></div>
          <div className="sideBtn" onClick={showOrderlist}>📃 <br /><span>주문내역</span></div>
        </div>
      </div>
      <MenuList
        filteredImgs={filteredImgs}
        addToModal={addToModal}
        setIsCartModalOpen={setIsCartModalOpen}
      />
      <div className="cartWrap">
        <h3>장바구니</h3>
        <div className="cartList">
        {showCart && (
            <CartList
            cart={cart}
            minusQty={minusQty}
            plusQty={plusQty}
            deleteItem={deleteItem}
            setShowCart={setShowCart}
            />
        )}
        </div>
        <div className="totalPrice">총 금액: <span>{totalPrice.toLocaleString()}원</span></div>
        <div className="orderBtn" onClick={orderList}>주문하기</div>
      </div>
      {isCartModalOpen && (
        <CartModal
          selectItem={selectItem}
          cart={cart}
          onClose={() => setIsCartModalOpen(false)}
          showCartlist={() => setShowCart(true)}
          setCart ={setCart}
        />
      )}
      {isOrderModalOpen && (
        <OrderModal
          onClose={() => setIsOrderModalOpen(false)}
          order ={order}
        />
      )}
    </div>
  );
}



// 1. 목록에서 음식을 선택한다 
    // -> 모달이 출력되며 해당 음식에 대한 설명과 수량 조절 / 장바구니 담기 / 장바구니 취소
    // * 이미 해당 음식이 장바구니에 담겨있다면 그 수량을 모달에 반영하여 출력

// 2. 장바구니 담기 시 장바구리 리스트로 넘어가며 장바구니가 보임
    // 이미 해당 음식이 존재한다면 수량만 변경
// 3. 결제 하기 누를 시 , 결제 된 내용은 결제목록으로 넘어가고 장바구니 초기화