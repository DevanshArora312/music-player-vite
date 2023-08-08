const Login = () => {
    return(
        <div id = "login-box">
            <h3 style={{textAlign:"center"}}>
                Login
            </h3>
            <div className="loginCont">
                <div className="login-lines">
                    <label style={{marginRight:"20px"}}>
                        User Id:
                    </label>
                    <input>
                    </input>
                </div> 
                <div className="login-lines">
                    <label style={{marginRight:"20px"}}>
                        Password:
                    </label>
                    <input>
                    </input>
                </div> 
                <div>
                    <button className="login-button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
} 
export default Login;