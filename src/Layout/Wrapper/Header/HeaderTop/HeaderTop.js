import React,{ Component } from 'react';
//css
import './HeaderTop.css'


//componet imports
import HeaderLoginCart from '../../../../Component/HeaderComponents/HeaderLoginCart/HeaderLoginCart'
import HeaderLogoLocation from '../../../../Component/HeaderComponents/HeaderLogoLocation/HeaderLogoLocation'
import HeaderSearch from '../../../../Component/HeaderComponents/HeaderSearch/HeaderSearch'




class HeaderTop extends Component{
    render(){

        return(
            <div className="top-header container-fluid col-md-12">
                 <div className="row justify-content-around">
                   <HeaderLogoLocation />
                 
        <div className="col-md-8 row">
              <HeaderSearch/>
            <HeaderLoginCart />
        </div>
        </div>
</div>
        )
    }

}



export default HeaderTop;