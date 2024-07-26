import { useState,useContext, createContext } from 'react';
import { cartContext } from './App';
//export const RegisterValueContext =createContext();
function Register(){
    const [collegeIdVal,setCollegeId]=useState('');
    const [passwordVal,setPassword]=useState('');
    const [emailVal,setEmail]=useState('');
    const [branchVal,setBranch]=useState('');
    const [yearVal,setYear]=useState('');
    const [genderVal,setGender]=useState('Female');
    const [user,setUser]=useState('');
    const{globalUserObject,setGlobalUserObject}=useContext(cartContext)

    const getCollegeId=(event)=>{
        setCollegeId(event.target.value);
        console.log(event.target.value);
    }
    const getPasswordval=(event)=>{
        setPassword(event.target.value);
        console.log(event.target.value)
    }
    const getEmail=(event)=>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const getBranch=(event)=>{
        console.log(event.target.value);
        setBranch(event.target.value);
       
    }
    const getYear=(event)=>{
        console.log(event.target.value);
        setYear(event.target.value);
    }
    const getGender=(event)=>{
        console.log(event.target.value);
        setGender(event.target.value);
    }
    const submitData=(event)=>{
        event.preventDefault();
        const obj={
            collegeIdVal,passwordVal,emailVal,branchVal,yearVal,genderVal
        //}
           // console.log(obj);
        }
     setUser(obj);
     setGlobalUserObject(obj);
     //setRegisterIsValue(obj);
     console.log(obj);
    console.log(user);
    }

    return(
       // <RegistervalueContext.Provider value={{RegisterIsValue,setRegisterIsValue}}>
        <div className="container">
         <div className="card" style={{width:'350px',padding:'30px'}}>
         <div>
            <form style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h4>Register</h4>
                <p>Provide your details to login</p>
                <label><b>College Id</b></label>
                <input type="text" placeholder='College Id' onChange={getCollegeId}/>
                <label><b>Password</b></label>
                <input type="password" placeholder='Password' onChange={getPasswordval}/>
                <label><b>Email</b></label>
                <input type="email" placeholder='Email' onChange={getEmail}/>
                <label><b>Branch</b></label>
                <select className="form-select" value={branchVal} onChange={getBranch}>
                <option value="">Select a branch</option>
                <option value="AIML">AIML</option>
                <option value="AIDS">AIDS</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="OTHER">OTHER</option>
                </select>
                <label><b>Year</b></label>
                <select className="form-select" aria-label="Default select example" onChange={getYear}>
                <option selected>Select a year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>
                <label><b>Gender</b></label>
                <div style={{display:'flex'}}>
                <input type="radio"  value="Female" checked={genderVal=="Female"} onChange={getGender}/>Female
                <input type="radio"  value="Male"  checked={genderVal=="Male"} onChange={getGender}/>Male
                </div>

                <button type="submit" className="btn btn-dark" style={{ padding: '5px 10px', fontSize: '12px' ,width:'65px'}} onClick={submitData}>Register</button>

            </form>
        </div>
        </div>
        </div>
        //</RegistervalueContext.Provider>
    );

}
export default Register;