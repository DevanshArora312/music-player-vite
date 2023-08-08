import {Link} from "react-router-dom";

const Sidebar = () => {
    return ( 
        <div id="sideBar">
            <div className="sideitem">
                <Link to ="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div className="sideitem">
                <Link to="/login" style={{textDecoration:"none"}}>Login </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div className="sideitem">
                <Link to = "/signup" style={{textDecoration:"none"}}>Sign-Up</Link>
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
