import React, { useEffect, useState } from 'react';
import ProductMange from './ProductMange';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    const [spinner,setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://safe-brushlands-86563.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                 setManageProduct(data)
                 setSpinner(false)
                })
    }, [])
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row h-100 g-0">
                    <div className="col-md-12">
                        <div className="px-5">
                            <h2 className="mt-2">Manage Products</h2>


                            <table class="table table-striped table-inverse table-responsive">
                                <thead className="thead-inverse">
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Weight</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {manageProduct.map(pd => <ProductMange key={pd._id} products={pd}></ProductMange>)}
                                </tbody>
                            </table>
                            {spinner && <div className="text-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageProduct;