import React, { useContext, useState } from 'react';
import Sidebar from './Sidebar';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
const axios = require('axios').default;
const AddProduct = () => {
        const { register, handleSubmit, watch, errors } = useForm();
        const [imageURL, setImageURL] = useState(null)
        const handleImage = (e) => {
            const imageData = new FormData();
            imageData.set('key','2b776b88233784a932fd8e1b0a6bd47b')
            imageData.append('image',e.target.files[0])
            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageURL(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });

        }
        const history = useHistory()
        const onSubmit = data => {
           
            const products = {
                name: data.name,
                weight: data.weight,
                price: data.price,
                imageURL : imageURL,
                quantity:1
            }
           if(imageURL){
            fetch('http://localhost:5000/admin/addProduct',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(products)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                history.push('/admin/manageProduct')
            })
           }
           else(alert('Uploading Photo Please Wait'))
           
        };
        const customImage = {
                border: '1px solid #293845',
                padding: '5px 20px',
                borderRadius: '5px',
                background: '#2938454d',
                cursor: 'pointer'
            }
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row h-100 g-0">
                    <div className="col-md-3">
                       <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                       <div className="px-5">
                       <div className="mt-2">
                            <h2>AddProduct</h2>
                        </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mt-3">
                        <div className="col-md-6 my-3">
                            <label htmlFor=""><strong>Product Name</strong></label>
                            <input className="form-control" name="name" placeholder="Product Name" ref={register({ required: true })} />
                             {errors.name && <small>This field is required</small>}
                            </div>
                            <div className="col-md-6 my-3">
                            <label htmlFor=""><strong>Product Price</strong></label>
                            <input type="text" className="form-control" name="weight" placeholder="Product Weight" ref={register({ required: true })} />
                             {errors.weight && <small>This field is required</small>}
                            </div>
                            <div className="col-md-6 my-3">
                            <label htmlFor=""><strong>Product Price</strong></label>
                            <input type="number" className="form-control" name="price" placeholder="Product Price" ref={register({ required: true })} />
                             {errors.price && <small>This field is required</small>}
                            </div>
                            <div className="col-md-6 my-3">
                            <label  htmlFor=""><strong>Add Photo</strong></label>
                            <br/>
                            <label style={customImage} htmlFor="image" id="custom-image" ><strong><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo</strong></label>
                            {imageURL && <strong>Uploaded</strong>}
                            <br/>
                            <input onChange={handleImage} type="file" id="image" className="form-control" name="image" ref={register({ required: true })} hidden/>
                             {errors.image && <small>This field is required</small>}
                            </div>
                        </div>
                         <input className="btn btn-dark" type="submit" value="Save"/>
                    </form>
              
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;