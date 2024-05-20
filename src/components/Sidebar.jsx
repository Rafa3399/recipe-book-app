
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>X</button>
      <Link className='text-link' to="/">
        <section id="home">Home</section>
      </Link>
      <Link className='text-link' to="/add-food">
        <section id="add-food">Add food</section>
      </Link>
      <Link className='text-link' to="/calorie-calculator">
        <section id="calorie-calculator">Calorie Calculator</section>
      </Link>
    </div>
  );
}

export default Sidebar;