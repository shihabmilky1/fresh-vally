import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import AddProduct from './components/Admin/AddProduct';
import ManageProduct from './components/Admin/ManageProduct';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/Privetroute/PrivetRoute';
import Orders from './components/Orders/Orders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Cart from './components/Cart/Cart';
export const UserContext = createContext()
function App() {
 const [logInUser,setLogInUser] = useState({}) 
 const [globalCart,setGlobalCart] = useState([]) 
 useEffect(()=>{
  fetch('http://localhost:5000/userCart?email='+ logInUser.email)
  .then(res => res.json())
  .then(data => setGlobalCart(data))
},[globalCart])
  return (
    <UserContext.Provider value={[logInUser,setLogInUser,globalCart,setGlobalCart]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/admin/manageProduct">
          <Admin/>
        </Route>
        <Route path="/admin/addProduct">
          <AddProduct/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/cart">
          <Cart/>
        </PrivateRoute>
        <PrivateRoute path="/placeOrder/:ids">
          <PlaceOrder/>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders/>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id">
          <Checkout/>
        </PrivateRoute>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
