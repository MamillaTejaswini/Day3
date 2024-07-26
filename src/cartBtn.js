import {useContext, useEffect, useState } from 'react';
import { cartContext } from './App';
function CartBtn(){
    
   // const count=0;
   const [count,setCount]=useState(0);
   const {globalCount,setGlobalCount}=useContext(cartContext)
   useEffect(()=>{
    //setCount(5);
    console.log("Use effect is called");
   },[count]);
   const funcAddToKartBtnKey=()=>{
    setCount(count+1);
    setGlobalCount(globalCount+1);
}
   const funcIncBtnKey=()=>{
    setCount(count+1);
    setGlobalCount(globalCount+1);
   }
   const funcDecBtnKey=()=>{
    if(count>0){
    setCount(count-1);
    setGlobalCount(globalCount-1);
   }
}
    return(
        <div>
            {(count===0) ?
            <button className="btn btn-primary" onClick={funcAddToKartBtnKey}>Add To Cart</button>:
            <div style={{display:'flex'}}>
                <button className="btn btn-outline-dark btn-sm" onClick={funcIncBtnKey}>+</button>
                <h1>{count}</h1>
                <button className="btn btn-outline-dark btn-sm" onClick={funcDecBtnKey}>-</button>
                </div>
}
        </div>
    );
}
export default CartBtn;