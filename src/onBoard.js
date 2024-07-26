import { useState } from 'react';
import Login from './Login';
import Register from './Register'; 
import Navigation from './Navigation';
function OnBoard(){
    const [isLogin,setMessage]=useState(true);
    const loginButtonClick=()=>{
        setMessage(true);
    }
    const registerButtonClick=()=>{
        setMessage(false);
    }

    return(
        <div>
          <button type="submit" onClick={loginButtonClick} >Login</button>
          <button type="submit" onClick={registerButtonClick} >regiser</button>
          {isLogin ?
          <Login />
          :
          <Register />
}
        </div>
    
    );

}
export default OnBoard;