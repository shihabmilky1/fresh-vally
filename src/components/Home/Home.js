import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Products from '../Products/Products';

const Home = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        fetch('https://safe-brushlands-86563.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            })
    }, [products])
    return (

        <div>
       
            <div className="container">
                <div className="row g-4 mt-5">
                {spinner && <div className="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>}
                    {products.map(pd => <Products products={pd} key={pd._id} ></Products>)}
                </div>
            </div>
        </div>
    );
};

export default Home;