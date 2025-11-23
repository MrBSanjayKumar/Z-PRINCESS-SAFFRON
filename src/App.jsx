import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './Components/Login/Login.jsx';
import NavBar from './Components/NavBar.jsx';
import Register from './Components/Register/Register.jsx';
import Team from './Components/Team/Team.jsx';
import Compay from './Components/Compay/Compay.jsx';
import Products from './Components/Products/Products.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Us from './Components/Why/Us.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/team" element={<Team />} />
        <Route path="/compay" element={<Compay />} />
        <Route path="products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/us" element={<Us />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
