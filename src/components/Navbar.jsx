import "./Navbar.css"
import logo from "../assets/logo.png"
import sidebarIcon from "../assets/sidebar.png"
import Sidebar from '../components/Sidebar'
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar (){

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return(
    <div>
    <nav>
      <img src={sidebarIcon} className="sidebarIcon" alt="Sidebar icon" onClick={toggleSidebar}/>
      <Link to='/'>
        <img src={logo} className="logo" alt="App logo" />
      </Link>
    </nav>
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Navbar;