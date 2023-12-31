import { useEffect, useState, CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader"

const Player = ({link}) => {
    // console.log(link);
    // const {source,title,thum,err_msg} =  useGetter(link);
    const [playableAudioLink,setPlayableAudioLink] = useState(null);
    useEffect( ()=>{https://music-player-backend-95j9.onrender.com/api/v1
        // fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-link`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({link})})
        fetch(`${import.meta.env.VITE_REACT_APP_BASE_URL}/get-link`,{method:"POST",headers:{"Content-Type" : "application/json"},body:JSON.stringify({link})})
            .then(res => {
                return res.json();
            })
            .then( data => {
                console.log(data);
                setPlayableAudioLink(data.link);
            })
            .catch(err => {
                console.log("some error occured!!");
            })
    },[]);

    return ( 
        <div style={{marginTop : "2rem"}}>
            <div id="youtube-audio">
                <div style={{width:"100%",height:"30px",background:"transparent"}}>
                    {
                        !playableAudioLink &&
                        <ScaleLoader
                        color="#ffffff"
                        speedMultiplier={0.5}
                        />
                    }
                    {   
                        playableAudioLink &&
                        <audio controls autoPlay loop>
                            <source src= {playableAudioLink} id="audio-player"></source>
                        </audio>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Player;
