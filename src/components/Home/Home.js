import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Products from '../Products/Products';

const Home = () => {
    const [logInUser,setLogInUser , globalCart,setGlobalCart] = useContext(UserContext);
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    return (
        
        <div>
            <div className="container">
                <div className="row g-4 mt-5">
                {products.map(pd => <Products products={pd} key={pd._id} ></Products>)}
                </div>
            </div>
        </div>
    );
};

export default Home;