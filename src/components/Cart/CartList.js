import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CartList = (props) => {
    const {name,_id,quantity,price,imageURL} = props.cart.cart;
    const history = useHistory() 
    const handleCheckout = id => {
      history.push(`/placeOrder/${id}`)
    }
    const handleCheckoutRemove = id => {
      fetch(`http://localhost:5000/clearCart/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {})
    }
    return (
        <div>
              <div className="col-md-12">
           <div className="card mb-3 shadow" style={{border:'0'}}>
  <div className="row g-0">
    <div className="col-md-2">
      <img src={imageURL} className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-10">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Quantity : {quantity}</p>
        <p className="card-text">Price : ${price}</p>
        <p className="card-text"><small className="text-muted">Ordered in</small></p>
        <button to="" onClick={()=>handleCheckout(_id)} className="btn btn-dark">Checkout</button>
        <button to="" onClick={()=>handleCheckoutRemove(props.cart._id)} className="btn btn-danger ms-3">Remove Cart</button>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default CartList;