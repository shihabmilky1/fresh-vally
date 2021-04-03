import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './header.css'
const Header = () => {
  const [logInUser,setLogInUser , globalCart,setGlobalCart] = useContext(UserContext);

    return (
        <>
     <nav className="navbar navbar-expand-lg " style={{background:'#293845',color:'#fff'}}>
  <div className="container">
    <Link className="navbar-brand" to="/">Fresh Vally</Link>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ms-auto hypertext d-lg-flex align-items-lg-center">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/orders">Orders</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/admin/manageProduct">Admin</Link>
        </li>
        <li className="nav-item">
        {!logInUser.email &&
        <Link className="nav-link text-center" style={{background:'#1765CC',padding:"7px 25px"}} to="/login"><b>Login</b></Link>}
        </li>
        
        {logInUser.email && <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {logInUser.image ? <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={logInUser.image} alt=""/> : <img style={{width:'30px',height:'30px',borderRadius:'50%'}} src="https://i.ibb.co/4spK4g2/man-303792-960-720.png" alt=""/>}
          </Link>
          <ul className="dropdown-menu shadow me-lg-5 text-center" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">{logInUser.name}</Link></li>
            <li>   <button onClick={()=>setLogInUser({})} className="nav-link m-auto mt-3" style={{background:'#1765CC',padding:"7px 25px",color:'#fff',border:'none'}} ><b>Logout</b></button></li>
          </ul>
        </li>}
        <li>
          {logInUser.email && <Link to="/cart" className="ms-0 ms-lg-4 " >
          <div className="cartQuantity">
          {globalCart.length}
          </div>
            <FontAwesomeIcon  style={{fontSize:'20px'}} icon={faCartPlus} />
            </Link>}
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
};

export default Header;