import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./App";

function Navigation(){
    const {globalCount,setGlobalCount}=useContext(cartContext)
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#e5e5e5',padding:'15px'}}>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <Link to='/'>Home</Link>
            <Link to="/products">Products</Link>
        </div>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
        <Link to="/cart">Cart{globalCount}</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Log Out</Link>
    </div>
    </div>
    );
}
export default Navigation;