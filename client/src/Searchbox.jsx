import Player from "./Player";
import { useState } from "react";
import "./index.css";
import NewPlayer from "./NewPlayer";
// import { FaSearch } from "react-icons/fa";
import { MdOutlineClear,MdOutlineSearch } from "react-icons/md";

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
        <div className="mainDiv w-full h-full">
            <div className="mainText">
                <h1 className="md:text-[70px] text-[40px] font-bold">
                    Welcome to Music player!
                </h1>
                <p>
                    Search the song you want to play in the field below
                </p>
            </div>
            <div className="searchSpan" style={{width:"100%",marginTop:"3rem"}}> 
                <form onSubmit={searchBut} className="flex flex-col items-center sm:flex-row  w-screen justify-center px-10" >
                    <div className="w-full sm:w-2/3  sm:mr-10">
                        <input id="search" placeholder="Enter the link of the song you want to play" className="text-black w-full" ></input>
                    </div>
                    <div className="flex sm:mt-0 mt-5 justify-between w-1/2 sm:w-[20%] lmd:w-[15%] nh:w-[10%]">
                        <button className="searchButton " type="submit" >
                            {/* <img alt="search" className="searchButton"
                            src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vrr1bI3Vkc97j-xzd3AoKQHaHa%26pid%3DApi&f=1&ipt=24808259ff96a15c856bdca7b58c99e7e4ce69c71b6c262f7717ee1d1d322262&ipo=images">
                            </img> */}
                            <MdOutlineSearch className="font-bold text-[35px] pb-1 icon-hov"/>
                        </button>
                        <button className="clear flex items-center" type="reset" onClick={clearBut}>
                            {/* <img alt = "clr" className="clear"
                            src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CszusTZJsP-n3G-PRlxZ1gAAAA%26pid%3DApi&f=1&ipt=4617dd0a61f0acf1f77cbe0d504caea082e806feed2634f07418d8657a66b04e&ipo=images">
                            </img> */}
                            <MdOutlineClear className="font-bold text-[40px] icon-hov" />
                        </button>
                    </div>
                </form>
                {vis && <NewPlayer link = {link}/>}
            </div>
        </div>
     );
}
export default SearchBox;