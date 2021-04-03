import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [logInUser,setLogInUser ,  globalCart,setGlobalCart] = useContext(UserContext)
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const handleClick = (ids) => {
        const userCart = {cart:product,...logInUser}
        fetch('http://localhost:5000/addCart',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userCart)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    
    }
    const handleCheckout = ids => {
        history.push(`/placeOrder/${ids}`)
    }
    const { name, price, weight, quantity } = product;
    useEffect(() => {
        fetch('http://localhost:5000/product/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <>
        <div className="cartQuantity">
            {globalCart.length}
        </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>checkout</h1>
                        <table className="table">
                            <thead style={{borderBottom:'0px'}}>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">{name}</td>
                                    <td>{quantity}</td>
                                    <td>${price}</td>
                                </tr>
                                <tr >
                                    <th scope="row">Total</th>
                                    <td></td>
                                    <th>${price}</th>
                                </tr>
                            </tbody>
                        </table>
                        <div className="ms-auto">
                        <button onClick={()=>handleClick(id)} className="mt-3 btn btn-dark me-2">Add To Cart</button>
                        <button onClick={()=>handleCheckout(id)} className="mt-3 btn btn-dark">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;