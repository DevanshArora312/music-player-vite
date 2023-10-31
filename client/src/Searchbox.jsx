import Player from "./Player";
import { useState } from "react";

const SearchBox = () => {
    
    const [vis,setVis] = useState(null);
    const [link,setLink] = useState("");
    const searchBut = (event) =>{
        event.preventDefault();
        if (!vis ){
            setVis(true);
        }
        const val = document.getElementById("search").value;
        setLink(val);
    }
    const clearBut = () =>{
        if (vis){
            setVis(false);
        }
        setLink("");
    }
    return ( 
        <div className="mainDiv">
            <div className="mainText">
                <h1>
                    Welcome to Music player!
                </h1>
                <p>
                    Search the song you want to play in the field below
                </p>
            </div>
            <span className="searchSpan">
                <form onSubmit={searchBut}>
                    <span>
                        <input id="search" placeholder="Enter the link of the song you want to play" ></input>
                    </span>
                    <button className="searchButton" type="submit" >
                        <img alt="search" className="searchButton"
                        src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vrr1bI3Vkc97j-xzd3AoKQHaHa%26pid%3DApi&f=1&ipt=24808259ff96a15c856bdca7b58c99e7e4ce69c71b6c262f7717ee1d1d322262&ipo=images">
                        </img>
                    </button>
                    <button className="clear" type="reset" onClick={clearBut}>
                        <img alt = "clr" className="clear"
                        src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CszusTZJsP-n3G-PRlxZ1gAAAA%26pid%3DApi&f=1&ipt=4617dd0a61f0acf1f77cbe0d504caea082e806feed2634f07418d8657a66b04e&ipo=images">
                        </img>
                    </button>
                </form>
                {vis && <Player link = {link}/>}
            </span>
        </div>
     );
}
export default SearchBox;