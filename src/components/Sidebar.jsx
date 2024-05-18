import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar (){
  return(
    <div id="sidebar">
      <Link className='text-link' to='/'>
        <section id="home">Home</section>
      </Link>
      <section id="food">Food</section>
      <Link className='text-link' to='/add-food'>
        <section id="add-food">Add food</section>
      </Link>
      <Link className='text-link' to='/calorie-calculator'>
        <section id="calorie-calculator">Calorie Calculator</section>
      </Link>
      <section id="about">About</section>
    </div>
  )
}

export default Sidebar;