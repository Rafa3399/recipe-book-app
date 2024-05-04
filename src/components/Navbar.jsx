import "./Navbar.css"
import logo from "../assets/logo.png"
import sidebarIcon from "../assets/sidebar.png"

function Navbar (){
  return(
    <nav>
      <img src={sidebarIcon} className="sidebarIcon" alt="Sidebar icon" />
      <img src={logo} className="logo" alt="App logo" />
    </nav>
  )
}

export default Navbar;