import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState(
        {
            email: "",
            password:""
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
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({email:formData.email,password:formData.password})})
        .then( res =>{
            return res.json();
        })
        .then(data => {
            console.log(data);
            localStorage.setItem(import.meta.env.VITE_REACT_APP_TOKEN_NAME,JSON.stringify(token))
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        })
    }
    return(
        <form className = "acc-box min-w-[30vw] lphone:w-auto w-[90vw] h-auto py-8" onSubmit={submitHandler}>
            <h3 className="acc-text" style={{textAlign:"center"}}>
                Login
            </h3>
            <div className="loginCont">
                <div className="acc-lines">
                    <label style={{marginRight:"20px",width:"33%"}}>
                        Email:
                    </label>
                    <input type="email" name="email" className="acc-input" onChange={changeHandler}/>
                </div> 
                <div className="acc-lines">
                    <label style={{marginRight:"20px",width:"33%"}}>
                        Password:
                    </label>
                    <input name="password" className="acc-input" onChange={changeHandler} type="password"/>
                </div> 
                <div>
                    <input type="submit" className="acc-button"/>
                </div>
            </div>
        </form>
    )
} 
export default Login;