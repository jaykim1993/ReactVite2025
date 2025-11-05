import './App.css'

// 1번 이름바꾸기
  // import UserApp from './UserApp'

// 2번 테마바꾸기
  // import Themeprovider from './ThemeContext'
  // import ThemeLayout from './ContextAPI/pages/ThemeLayout'

// 연습문제
import Home from './Context02/pages/Home'
import Profile from './Context02/components/Profile'
import LoginForm from './Context02/components/LoginForm'
import Header from './Context02/components/Header'
import AuthProvider from './Context02/context/AuthContext'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      {/* <UserApp /> */}

      {/* <Themeprovider>
        <ThemeLayout />
      </Themeprovider> */}


      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </AuthProvider>

    </>
  )
}

export default App
