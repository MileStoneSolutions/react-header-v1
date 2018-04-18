



import React from 'react';
//css
import './HeaderLogoLocation.css';

//Hoc
import Aux from '../../../Hoc/Auxillary';
const HeaderLogoLocation =(props)=>{

    return (
        <Aux>
            <div className="col-md-2 row">
                     <div className="top-header-logo col-md-12">
                       <a href=""> <p>Prashant's</p>
                         <span>serving since 2007</span></a>
                     </div>
                    </div>
                    <div className="col-md-2">
                        <div className="top-header-location">
                            <div className="dropdown">
                                <i className="fas fa-map-marker"></i>
                            <button className="btn btn-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Your Location
                            <i className="fas fa-angle-down"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                            </div>
                        </div>
        </div>
        </Aux>
    )

};
export default HeaderLogoLocation;