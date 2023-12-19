import { useEffect, useState } from 'react';
import Sidebar from './Sidebar'
import Hamburger from "hamburger-react"

const Header = () => {
    const [isOpen,setOpen] = useState(false);
    
    const sideBarView = () =>{
        if (isOpen){
            document.getElementById("sideBar").style.width = "0px";
            document.getElementsByClassName("acc-box")[0].style.zIndex = 0;
            document.getElementById("cover").style.display = "none";
        }
        else{
            document.getElementById("sideBar").style.width = "250px";
            document.getElementsByClassName("acc-box")[0].style.zIndex = -1;
            document.getElementById("cover").style.display = "block";

        }
        
    }
    
    const token = JSON.parse(localStorage.getItem(`${import.meta.env.VITE_REACT_APP_TOKEN_NAME}`));

    if (token){
        console.log("chalra");
        if (token.expiresIn < Date.now()){
            console.log("nahi chalna chahiye")
            localStorage.removeItem(`${import.meta.env.VITE_REACT_APP_TOKEN_NAME}`);
        }
    }
    return (
        <div style={{height:"5rem"}} className='sticky top-0 left-0'>
            <div id="overlay">

            </div>
            <div className="headBar">
                <button className='menuButton' onClick={sideBarView}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={30} />
                </button>
                {
                    token && token.email && (Date.now() < token.expiresIn) && 
                    <div style={{display:"flex",marginRight:"3rem"}}>
                        <img/>
                        <p style={{color:"blue"}}>
                            {token.username}
                        </p>
                    </div>    
                }
                <Sidebar setOpen={setOpen} />
            </div>
        </div>
     );
}
 
export default Header;