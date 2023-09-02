const SignUp = () => {
    return(
        <div id = "sign-box">
            <h3 style={{textAlign:"center"}}>
                Sign-Up
            </h3>
            <div className="signCont">
                <div className="sign-lines">
                    <label style={{marginRight:"20px"}}>
                        User Id:
                    </label>
                    <input>
                    </input>
                </div> 
                <div className="sign-lines">
                    <label style={{marginRight:"20px"}}>
                        Password:
                    </label>
                    <input>
                    </input>
                </div>
                <div className="sign-lines">
                    <label style={{marginRight:"15px"}}>
                        Confirm Password:
                    </label>
                    <input>
                    </input>
                </div>  
                <div>
                    <button className="sign-button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
} 
export default SignUp;