import React,{ Component } from 'react';
import Wrapper from './Wrapper/Wrapper';
import { Route } from 'react-router-dom';

class Layout extends Component{




    render(){


        return(
            <Route path="/" component={Wrapper}/>
        )
    }
}
export default Layout;