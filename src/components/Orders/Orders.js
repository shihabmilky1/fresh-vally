import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import UserOrder from './UserOrder';

const Orders = () => {
    const [logInUser,setLogInUser ] = useContext(UserContext);
    const [userOrder,setUSerOrder] = useState([]);
    const [spinner,setSpinner] = useState(true);
    useEffect(()=>{
        fetch('https://safe-brushlands-86563.herokuapp.com/getOrders?email=' + logInUser.email)
        .then(res => res.json())
        .then(data => {
            setUSerOrder(data)
            setSpinner(false)
        })
    },[userOrder])
    return (
        <div>
            
           <div className="container">
           <h1 className="mt-3">Orders</h1>
               <div className="row mt-5">
               {spinner && <div className="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>}
               {userOrder.map(order => <UserOrder orders={order}></UserOrder>)}
               </div>
           </div>
        </div>
    );
};

export default Orders;