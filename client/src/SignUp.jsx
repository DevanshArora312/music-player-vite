import {useNavigate} from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState(
        {
            email: "",
            password:"",
            username:""
        }
    )
    const changeHandler = e =>{
        setFormData(prev => {
            return(
                {
                    ...prev,
                    [e.target.name] : e.target.value
                }
            )
        })
    }
    const submitHandler = e =>{
        e.preventDefault();
        fetch(`http://localhost:4000/api/v1/signup`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({email:formData.email,password:formData.password,username:formData.username})})
        .then( res =>{
            return res.json();
        })
        .then(data => {
            console.log(data);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        })
    }
    return(
        <form className = "acc-box min-w-[30vw] lphone:w-auto w-[90vw] h-auto py-8" onSubmit={submitHandler}>
            <h3 style={{textAlign:"center"}}>
                Sign-Up
            </h3>
            <div className="signCont">
                <div className="acc-lines">
                    <label style={{marginRight:"20px",width:"33%"}}>
                        Email:
                    </label>
                    <input name="email" className="acc-input" type="email" onChange={changeHandler}/>
                </div> 
                <div className="acc-lines">
                    <label style={{marginRight:"20px",width:"33%"}}>
                        Username:
                    </label>
                    <input name="username" className="acc-input" onChange={changeHandler}/>
                </div>
                <div className="acc-lines">
                    <label style={{marginRight:"15px",fontSize:"20px",width:"33%"}}>
                        Password:
                    </label>
                    <input className="acc-input ml-1" name= "password" type="password" onChange={changeHandler}/>
                </div>  
                <div>
                    <input type="submit" className="acc-button"/>
                </div>
            </div>
        </form>
    )
} 
export default SignUp;