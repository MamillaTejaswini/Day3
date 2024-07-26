import { useContext,useState,useEffect } from "react";
import { cartContext } from "./App";
import Navigation from "./Navigation";

function Profile(){
     const {globalUserObject,setGlobaluserObject,globalIsLogin,setGlobalIsLogin,}=useContext(cartContext);
     const logoutAction=()=>{setGlobalIsLogin(false);}
     const [showPassword, setShowPassword] = useState(false);
     const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    useEffect(()=>{
        const name=localStorage.getItem("name");
        const branch=localStorage.getItem("branch");
        console.log(name);
        console.log(branch);
    })
    return(
        <div>
        <Navigation />
         <div className="container">
         <div className="card" style={{width:'350px',padding:'30px'}}>
         <div>
         <h2>Profile</h2>
         <p>Your details</p>
            <p><b>College ID</b></p>
            <p>{globalUserObject.collegeIdVal}</p>
            <p><b>Password</b></p>
                        <p>
                            {showPassword ? globalUserObject.passwordVal : "......."}
                            <u onClick={togglePasswordVisibility} style={{ marginLeft: "10px" }}>
                                {showPassword ? "Hide" : "Show"}
                            </u>
                            {/* <p><a href={togglePasswordVisibility} className="link-underline-dark">{showPassword ? "Hide" : "Show"}</a></p> */}
                        </p>
            <p><b>Email</b></p> 
            <p>{globalUserObject.emailVal}</p>
            <p><b>Branch</b></p>
            <p>{globalUserObject.branchVal}</p>
            <p><b>Year</b></p> 
            <p>{globalUserObject.yearVal}</p>
            <p><b>Gender</b></p> 
            <p>{globalUserObject.genderVal}</p>
            <button className="btn btn-secondary" onClick={logoutAction}>Log Out</button>

         </div>
</div>
</div>
</div>
    );
}
export default Profile;