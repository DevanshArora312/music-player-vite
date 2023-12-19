import { useAudioPlayer } from "react-use-audio-player";
import { useState,useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader"
import { FaPause,FaPlay } from "react-icons/fa6";
// import {  } from "react-icons/fa";
const NewPlayer = ({link}) => {
    console.log(link)
    // const [playableAudioLink,setPlayableAudioLink] = useState(null);
    const [data,setData] = useState(null);
    const audio = useAudioPlayer();
    const [play,setPlay] = useState(true);
    useEffect( ()=>{
        fetch(`http://localhost:4000/api/v1/get-link`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({link})})
            .then(res => {
                return res.json();
            })
            .then( data => {
                console.log(data);
                setData({link:data.link,title:data.title,thumbnail:data.thumbnail});
                audio.load(data.link, {
                    autoplay: true
                });
            })
            .catch(err => {
                console.log("some error occured!!");
            })
    },[]);
    const togglePlayer = ()=>{
        audio.togglePlayPause();
        setPlay(prev => !prev);
    }
    return (  
        <div className="flex justify-center m-10">
            {
                        !data &&
                        <ScaleLoader
                        color="#ffffff"
                        speedMultiplier={0.5}
                        />
            }
            {
                data && <div className=" p-5 border-white border-2 rounded-xl bg-white/20 flex flex-col justify-around items-center max-w-[400px] w-[70%]" style={{backdropFilter:"blur(5)"}}>
                <div>
                    <img src = {data.thumbnail} className=" h-auto rounded-xs"/>
                </div>
                <div>
                    <p className="sm:text-xl text-[13px] my-2">
                        {data.title}
                    </p>
                </div>
                <div id="progress-bar" className=""></div>
                <div className="flex">
                    <button className="rounded-full bg-white" onClick={togglePlayer}>
                        {
                            play ? <FaPause className="rounded-full h-[40px] w-[40px] text-black p-2"/> : 
                            <FaPlay className="rounded-full h-[40px] w-[40px] text-black p-2" />
                        }
                    </button>
                </div>
            </div>
            }
        </div>
    );
}
 
export default NewPlayer;