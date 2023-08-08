import Sidebar from './Sidebar'

const sideBarView = () =>{
    console.log(document.getElementById('sideBar').style.width);
    if (document.getElementById('sideBar').style.width === "0px"){

        document.getElementById("sideBar").style.width = "250px";
        //document.getElementById("sideBar").style.display = "block"
            
    }
    else{
        document.getElementById("sideBar").style.width = "0px";
        //document.getElementById("sideBar").style.display = "none"
    }
    
}
const Header = () => {
    return (
        <div style={{height:"5rem"}}>
            <div id="overlay">

            </div>
            <div className="headBar">
                <button className='menuButton' onClick={sideBarView}>
                <img alt='menuBar' className = "menu" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fmenu-icon-png-3-lines%2Fmenu-icon-png-3-lines-0.jpg&f=1&nofb=1&ipt=bdace5b9476803f269117c77d27db7300d8ff07457d16dd98df846f8ec71a4f2&ipo=images"></img>
                </button>
                <Sidebar />
            </div>
        </div>
     );
}
 
export default Header;