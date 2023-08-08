// import useGetter  from "./getter"; <<----- ERROR DERHI H LINE 

const Player = ({link}) => {
    // const {source,title,thum,err_msg} =  useGetter(link);
    return ( 
        <div style={{marginTop : "2rem"}}>
            <div id="youtube-audio">
                {/* {console.log("Chal to raha h")} */}
                <div style={{width:"100%",height:"30px"}}>
                    {link}
                    {/* Test URL -- https://rr1---sn-gwpa-qxaee.googlevideo.com/videoplayback?expire=1691197753&ei=2
                    UzNZLWIE9mK9fwPztSM8A8&ip=2405%3A201%3A403f%3A1815%3Ac015%3A6b84%3A27b0%3A61e3&id=o-AO-J-dKZ_fOmnnuuttz4qRNZB-dOJbJP48UgqdEBI
                    -pV&itag=251&source=youtube&requiressl=yes&mh=Hm&mm=31%2C29&mn=sn-gwpa-qxaee%2Csn-gwpa-qxae7&ms=au%2Crdu&mv=m&mvi=1&pl=46&init
                    cwndbps=482500&vprv=1&mime=audio%2Fwebm&gir=yes&clen=5901435&dur=366.041&lmt=1606623010615258&mt=1691175230&fvip=3&keepalive=y
                    es&fexp=24007246%2C51000011%2C51000023&c=ANDROID_MUSIC&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2C
                    vprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgTnOz3IJb_kQGmOUyN7O-CD_Wj9dkHbHwMNvLMimQqt8CIQDkk1KK6SnTJsD5Q7P16zfv8NNxgm5W
                    ngeJrFixEHtAJw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgf1n5iriGnVMTY2oM_S1qLuyF1IAK--PrdDE
                    S6ssE0MkCIH1D_Kc8PwiIbn2PzbzJ_SDc-hau1ghq4oUIGES9BBNQ */}
                    <audio controls autoPlay loop><source src= {link} id="audio-player"></source>

                    </audio>
                </div>
            </div>
        </div>
     );
}
 
export default Player;
