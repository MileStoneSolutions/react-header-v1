import React,{ Component } from 'react';
//css of Wrapper import
import './Wrapper.css';

//Routing Stuff imports
import { Switch } from 'react-router-dom';


//Hoc
import Aux from '../../Hoc/Auxillary';



//Component imports
import Header from './Header/Header';


class Wrapper extends Component{

    render(){
        return (
            <Aux>
                <Header/>
            </Aux>
        )

    }

}
export default Wrapper;
