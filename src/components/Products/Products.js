import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Products = (props) => {
    const { name, price, weight, imageURL , _id} = props.products;
    const history = useHistory()
    const handleClick = id => {
        history.push(`/checkout/${id}`)
    }
    return (
        <>
            <div className="col-md-4 col-lg-3">
                <div className="card h-100 shadow" style={{border:'none'}}>
                    <img src={imageURL} className="card-img-top img-fluid w-100 h-75" style={{borderRadius:'0px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name} - {weight}</h5>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div>
                                <h3>${price}</h3>
                            </div>
                            <div>
                                <button onClick={()=>handleClick(_id)} className="btn btn-dark">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;