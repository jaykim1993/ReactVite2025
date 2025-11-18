import './App.css'

// 1번 이름바꾸기
  // import UserApp from './UserApp'

// 2번 테마바꾸기
  // import Themeprovider from './ThemeContext'
  // import ThemeLayout from './ContextAPI/pages/ThemeLayout'

// 연습문제 로그인폼
// import Home from './Context02/pages/Home'
// import Profile from './Context02/components/Profile'
// import LoginForm from './Context02/components/LoginForm'
// import Header from './Context02/components/Header'
// import AuthProvider from './Context02/context/AuthContext'
import { Routes, Route } from 'react-router-dom'

// 연습문제 위시리스트
// import WishProvider from './Wishlist/context/WishContext'
// import WishPage from './Wishlist/WishPage'
// import ProductPage from './Wishlist/ProductPage'

// import WishlistProvider from './Wish선생님/WishContext2'
// import WishPage from './Wish선생님/WishPage2'
// import ProductPage from './Wish선생님/ProductPage2'

// import AuthProvider from './LoginExample/Context/Authcontext'
// import LoginPage from './LoginExample/Pages/LoginPage'
// import HomePage from './LoginExample/Pages/HomePage'

import Join from './Addr/Join'


import { useState } from 'react'
function App() {

  // const[showList, setShowList]=useState(false)
  return (
    <>
      {/* <UserApp /> */}

      {/* <Themeprovider>
        <ThemeLayout />
      </Themeprovider> */}


      {/* <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </AuthProvider> */}

      {/* <WishProvider>
        <Routes>
          <Route path='/' element={<ProductPage />} />
          <Route path='/wishlist' element={<WishPage />} />
        </Routes>
      </WishProvider> */}

      {/* <WishlistProvider>
        <header>
          <h2>찜하기 예제</h2>
          <button onClick={()=>setShowList(!showList)}>{showList?'상품 보기':'찜 목록 보기'}</button>
        </header>
        {showList? <WishPage/> : <ProductPage />}
      </WishlistProvider> */}

      {/* <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
      </AuthProvider>       */}
      
      <Join />

    </>
  )
}

export default App
