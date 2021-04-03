import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import UserOrder from './UserOrder';

const Orders = () => {
    const [logInUser,setLogInUser ] = useContext(UserContext);
    const [userOrder,setUSerOrder] = useState([]);
    useEffect(()=>{
        fetch('https://safe-brushlands-86563.herokuapp.com/getOrders?email=' + logInUser.email)
        .then(res => res.json())
        .then(data => setUSerOrder(data))
    },[userOrder])
    return (
        <div>
            
           <div className="container">
           <h1 className="mt-3">Orders</h1>
               <div className="row mt-5">
               {userOrder.map(order => <UserOrder orders={order}></UserOrder>)}
               </div>
           </div>
        </div>
    );
};

export default Orders;