import "./Addfood.css"
import { useState } from "react";
import FoodListData from "../assets/recipes.json"

function Addfood(){

  const [foodList, setfoodList] = useState(FoodListData);

  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const handleFoodNameInput = (e) => setFoodName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {foodName, calories, image, servings};

    setfoodList([newFood, ...foodList]); 

    setFoodName("");
    setCalories("");
    setImage("");
    setServings("");
  };

  return(
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="foodName" type="text" placeholder="Food Name" onChange={handleFoodNameInput} value={foodName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Food Image" onChange={handleImageInput} value={image} />
          </label>

          <label>
            Phone
            <input name="calories" type="number" placeholder="Calories" onChange={handleCaloriesInput} value={calories} />
          </label>

          <label>
            Email
            <input name="servings" type="number" placeholder="Servings" onChange={handleServingsInput} value={servings} />
          </label>
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>Add Student</button>
        </div>

      </form>
    </div>
  )
}

export default Addfood;