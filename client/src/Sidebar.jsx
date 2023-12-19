import {Link, useNavigate} from "react-router-dom";

const Sidebar = ({setOpen}) => {
    const token = JSON.parse(localStorage.getItem(`${import.meta.env.VITE_REACT_APP_TOKEN_NAME}`));
    const logout = () => {
        localStorage.removeItem(`${import.meta.env.VITE_REACT_APP_TOKEN_NAME}`);
        setOpen(prev => !prev);
        document.getElementById("sideBar").style.width = "0px";
        document.getElementsByClassName("acc-box")[0].style.zIndex = 0;
        document.getElementById("cover").style.display = "none";
    }
    const func = () => {
        setOpen(prev => !prev);
        document.getElementById("sideBar").style.width = "0px";
        document.getElementsByClassName("acc-box")[0].style.zIndex = 0;
        document.getElementById("cover").style.display = "none";
    }
    return ( 
        <div id="sideBar">
            <div className="sideitem">
                <Link to ="/" style={{textDecoration:"none",color:"black"}} onClick={func}>Home</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div className="sideitem">
                {
                    !token || !token.email || Date.now() > token.expiresIn ?
                    <Link to="/login" style={{textDecoration:"none"}} onClick={func}>Login </Link> :
                    <Link to="/profile" style={{textDecoration:"none"}} onClick={func}>Profile</Link> 
                    
                }
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div className="sideitem">
            {
                    !token || !token.email || Date.now() > token.expiresIn ?
                    <Link to="/signup" style={{textDecoration:"none"}} onClick={func}>Sign-up </Link> :
                    <a style={{textDecoration:"none"}} onClick={logout} href = {`${import.meta.env.VITE_REACT_APP_BASE_URL}/`}>Logout</a> 
                    
            }
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div className="sideitem">
                Donate
            </div>
            <hr style={{
                width:"100%"
            }}/>
        </div>
     );
}
 
export default Sidebar
