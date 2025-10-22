// import: 외부파일을 가져온다
import './App.css'
import './components/Ex.css'


// import Ex13 from './components/Ex13.jsx'
// import { Parent } from './propsComponents/parent.jsx';
// import { Parent02 } from './propsComponents/welcome.jsx';
// import  Parent04  from './propsComponents/button01.jsx';
// import  Parent04  from './propsComponents/button01.jsx';
// import  Welcome  from './propsComponents/Props01.jsx';
// import  Usercard  from './propsComponents/Props02.jsx';
// import  Product  from './propsComponents/Props03.jsx';
// import  Button  from './propsComponents/Props04.jsx';
// import  Counter01  from './propsComponents/useState01.jsx';
// import  Counter02  from './propsComponents/useState02.jsx';
// import Alert from './propsComponents/Props06.jsx';
import Exstate01 from '../src/stateComponents/Ex01.jsx';

function App() {
  
  
  return (
    <>
        {/* < Welcome name = '개나리'/>
        < Usercard name = '개나리' age={18} city='서울'/>
        < Usercard name = '김백합' age={40} city='경기'/>
        < Usercard name = '최영숙' age={25} city='인천'/>
        < Product name='노트북' price={120000}/>
        < Product name='마우스' price={15000}/>
        < Button text='제출'/>
        < Button text='종료'/>
        < Button text='클릭'/>
        < Counter01/> */}
        {/* < Counter02/> */}
        {/* < Alert text='error' msg='오류'/>
        < Alert text='sucess' msg='성공'/>
        < Alert text='randomword' msg='틀린값'/>
        < Alert text='ded' msg='경고'/> */}
        <Exstate01 />
    </>
  )
}
export default App
