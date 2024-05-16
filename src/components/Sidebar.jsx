import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar (){
  return(
    <div id="sidebar">
      <Link to='/'>
        <section id="home">Home</section>
      </Link>
      <section id="food">Food</section>
      <Link to='/add-food'>
        <section id="add-food">Add food</section>
      </Link>
      <section id="about">About</section>
    </div>
  )
}

export default Sidebar;