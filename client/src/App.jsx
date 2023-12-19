//import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import SearchBox from "./Searchbox"
import Login from "./Login"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SignUp from './SignUp';
import AnimatedBG from './AnimatedBG';
import Profile from './Profile';


function App() {
  return (
    <Router>
      
      <div className="App">
        <Header/>
        <div className="App-header">
          <div id = "cover" style={{display:"none"}} className='z-1 absolute top-[2.7rem] left-[250px] w-[calc(100vw-250px)] h-[calc(100vh-2.7rem)] duration-500 bg-white/20'> 
          </div> 
            <Routes>
              <Route exact path = "/" element= {<SearchBox/>}/>
              <Route exact path="/login" element= {<Login/>}/>
              <Route exact path = "/signup" element={<SignUp/>}/>
              <Route exact path = "/profile" element={<Profile/>}/>
            </Routes>
          
        </div>
      </div>
      <AnimatedBG/>
    </Router>
  );
}
export default App;
