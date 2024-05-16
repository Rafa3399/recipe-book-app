
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Foodlist from './components/Foodlist'
import Addfood from './components/Addfood'
import FoodListData from "./assets/recipes.json"
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [foodList, setFoodList] = useState(FoodListData);

  return (
    <>
      <div className='root'>
        <Navbar />
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/" element={<Foodlist foodList={foodList} setFoodList={setFoodList} />} />
          <Route path="/add-food" element={<Addfood foodList={foodList} setFoodList={setFoodList} />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;