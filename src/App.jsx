
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Foodlist from './components/Foodlist'
import Addfood from './components/Addfood'
import FoodListData from "./assets/recipes.json"
import CalorieCalculator from './components/CalorieCalculator'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [foodList, setFoodList] = useState(FoodListData);
  const [foodAte, setFoodAte] = useState([]);

  return (
    <>
      <div className='root'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Foodlist foodList={foodList} setFoodList={setFoodList} foodAte={foodAte} setFoodAte={setFoodAte}/>} />
          <Route path="/add-food" element={<Addfood foodList={foodList} setFoodList={setFoodList} />} />
          <Route path="/calorie-calculator" element={<CalorieCalculator foodAte={foodAte} setFoodAte={setFoodAte}/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;