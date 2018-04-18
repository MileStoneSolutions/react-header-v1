import React from 'react';
//css
import './HeaderLoginCart.css';


//Hoc
import Aux from '../../../Hoc/Auxillary';
const HeaderLoginCart =(props)=>{

    return (
        <Aux>
            <div className="top-header-login justify-content-md-left col-md-2">
<div className="content">
   <p> My Account</p>
   <span>Login/SignUp
       <i className="fas fa-user-circle"></i>
   </span>
</div>
</div>
<div className="top-header-cart justify-content-md-left col-md-2">
<div className="content">
   <i className="fas fa-shopping-cart"></i>
   My Cart
</div>
</div>
        </Aux>
    )

};
export default HeaderLoginCart;