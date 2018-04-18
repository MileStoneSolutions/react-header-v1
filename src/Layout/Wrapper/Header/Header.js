import React,{ Component } from 'react';


//import Hoc
import Aux from '../../../Hoc/Auxillary';

//HeaderTop imports
import HeaderTop from  './HeaderTop/HeaderTop';

class Header extends Component{




    render(){


        return(
            <Aux>
                <HeaderTop />
                <h1>Header Bottom</h1>
            </Aux>
        )
    }
}
export default Header;