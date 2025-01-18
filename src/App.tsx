import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import New from './New'
import Parent from './props/Parent'
import Child from './props/Child'
import Formvalid from './Fromvalidation/Fromvalid'
import CardLayout from './Cards/Parent'
import Cruditem from './CrudOperation/Cruditem'
import Apiget from './useeffect/Apiget'

import { BrowserRouter, Routes ,Route, Form, } from 'react-router-dom'
 
import Navbars from './Route/Navbars'
import Home from './Route/Home'
import About from './Route/About'
import Contact from './Route/Contact'
import Error from './Route/Error'
import Footer from './Route/Footer'
import Success from './Route/Success'
import Protected from './Route/Protected'
import Courses from './Route/Courses'
import Task from './exam/Task'
import Search from './exam/Search'
import Home1 from './PROJECT/Home1'
import About1 from './PROJECT/About1'
import Contact1 from './PROJECT/Contact1'
import Calculator from './calculator/Calculator'
import UsersList from './Route/Userlist'
import UserProfile from './Route/UserProfile'
import Protected1 from './Route/Try/Protected1'
import Store from './Store/Store'
import ProductDetails from './Store/ProductDetails'



// function App() {
//    const [islogin, setIslogin] = useState<boolean>(false);
//    const logout =()=>{
//     setIslogin(false);
//    }
//    const login =()=>{
//     setIslogin(true)
  
//    }








function App() {
  // const [islogin] = useState<boolean>(false);



  return (
    <>
{/* { <New/> */} 
{/* <Parent/>  */}
{/* <Formvalid/> */}
{/* <Try/> */}
{/* <CardLayout/> */}
<Cruditem/>
{/* <Apiget/> */}

 {/* <BrowserRouter> 
 <Navbars/>
<Routes>  
  <Route path='/' element={<Home/>}/>
<Route path='/about' element= {<Protected signin={islogin}><About/></Protected>}/>
<Route path='/about/courses'element={<Courses/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='*' element={<Error/>} />  
 <Route path ='/succ' element={<Success/>}/>  
 {/* <Route path="/" element={<UsersList />} /> */}
  {/* <Route path="/users/:id" element={<UserProfile />} />   */}
  {/* <Route path='/' element={<Home1/>}/>
  <Route path='/about1'element={<Protected1 signin={islogin}><About1/></Protected1>}/> */}
{/* 
</Routes> */}
  {/* (islogin)?(<button onClick={logout}>Logout</button>):(<button onClick={login}>Login</button>) */}

{/* <Footer/>  */}

  {/* </BrowserRouter>       */}

{/* <Calculator/> */} 

 {/* <Task/>  */}
{/* <Search/> */}
{/* 
<BrowserRouter>
<Routes>
  <Route path="/Store/:id" element={<Store/>}/>
</Routes>

</BrowserRouter> */}

{/* <BrowserRouter>
<Routes>
<Route path="/" element={<Store/>} />
<Route path="/users/:id" element={<ProductDetails />} /> 
</Routes>

</BrowserRouter> */}




    </>
  )
}

export default App
