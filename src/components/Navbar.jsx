import "./Navbar.css"
import logo from "../assets/logo.png"
import sidebarIcon from "../assets/sidebar.png"
import { Link } from "react-router-dom";

function Navbar (){
  return(
    <nav>
      <Link to='/sidebar'>
        <img src={sidebarIcon} className="sidebarIcon" alt="Sidebar icon" />
      </Link>
      <Link to='/'>
        <img src={logo} className="logo" alt="App logo" />
      </Link>
    </nav>
  )
}

export default Navbar;