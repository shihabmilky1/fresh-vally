import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './cart.css'
import CartList from './CartList';
const Cart = () => {
    const  [logInUser,setLogInUser , globalCart,setGlobalCart] = useContext(UserContext)
    return (
           <>
           <div className="container">
               <div className="row mt-5">
               {globalCart.map(cart=> <CartList cart={cart}></CartList>)}
               </div>
           </div>
           </>
    );
};

export default Cart;