import {createContext, useContext, useState} from 'react';
import Welcome from './Welcome';
import OnBoard from './onBoard';
import { Link } from 'react-router-dom';
import { cartContext } from './App';

// export const UserContext=createContext();//create context 

function Home(){
    // const[isLogin,setIsLogin]=useState(false);
    const {globalIsLogin,setGlobalIsLogin} =useContext(cartContext);
    return(
        <div>
            {
            globalIsLogin?
            <Welcome />
            :<OnBoard/>
}
        </div>

    );
}
export default Home;