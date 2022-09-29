import logo from './logo.svg';
import './App.css';
//import Navbar from './components/Navbar';
//import Carousel from './components/Carousel';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
//import NewsLetter from './components/NewsLetter';
import Team from './components/Team';
//import About from './components/About';s
import Navbarrr from './components/Navbarrr';
import SignUp from './components/SignUp';
import Login from './components/Login.js'
import ForgetPass from './components/ForgetPass'
import ContactUs from './components/ContactUs'
import Admin from './components/Admin'
import Products from './components/Products'
import Order from './components/Order'
import AdminLogin from './components/AdminLogin'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter';
import { ApolloClient } from '@apollo/client';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
   
    <Navbarrr/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element ={<SignUp/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/ForgetPass" element ={<ForgetPass/>}/>
      <Route path="/Team" element ={<Team/>}/>
      <Route path="/ContactUs" element ={<ContactUs/>}/>
      <Route path="/admin" element ={<Admin/>}/>
      <Route path="/Products" element ={<Products/>}/>
      <Route path="/order" element ={<Order/>}/>
      <Route path="/adminlogin" element ={<AdminLogin/>}/>
      <Route path="/NewsL" element ={<NewsLetter/>}/>
      <Route path="/Order" element ={<Order/>}/>
      <Route path='/Products/Order' element={<Order/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>

     </Routes>
     
       
    </>
  );
}

export default App;
