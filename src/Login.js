import { useRef, useState ,useEffect, useContext} from "react";
import Welcome from "./Welcome";
import OnBoard from "./onBoard";
import { cartContext } from "./App";
import { RegisterValueContext } from "./Register";
function Login(){
    // const width=200;
    const firstRef=useRef(null);
    const secondRef=useRef(null);
    const [loginMessage,setMessage]=useState('');
    const {globalIsLogin,setGlobalIsLogin,globalUserObject}=useContext(cartContext);
    //useEffect to focus on input field
    //const{RegisterIsValue,setRegisterIsValue}=useContext(RegisterValueContext);
    useEffect(()=>{
        firstRef.current.focus();
    });
    const formSubmitted=(event)=>{
        //to prevent default refresh after submitting
        event.preventDefault();
        if(firstRef.current.value==globalUserObject.collegeIdVal && secondRef.current.value==globalUserObject.passwordVal){
            //  console.log("Correct");
           // if(firstRef.current.value==RegisterIsValue.collegeIdVal){
             setMessage("Correct");
             setGlobalIsLogin(true);
            // setRegisterIsValue(true);
        }
        else{
            // console.log("Incorrect");
            setMessage("Incorrect");
            //print on user interface
        }
        // firstRef.current.value='';
        // secondRef.current.value='';
        //clear value in text area after submitting
    }
    return(
        <div className="container">
         <div className="card" style={{width:'290px',padding:'30px'}}>
         <div>
            <form onSubmit={formSubmitted} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h4>Login</h4>
                <p>Provide your details to login</p>
                <label><b>College Id</b></label>
                <input type="text" ref={firstRef}/>
                <label><b>Password</b></label>
                <input type="password" ref={secondRef}/>
                <button type="submit" className="btn btn-dark" style={{ padding: '5px 10px', fontSize: '12px' ,width:'65px'}}>Login</button>
                {loginMessage}
            </form>
        </div>
        </div>
        </div>
    );
}
export default Login;