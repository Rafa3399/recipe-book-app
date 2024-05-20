import { useState } from "react";
import "./Addfood.css";

function Addfood({foodList, setFoodList}) {
  const [name, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");

  const handleFoodNameInput = (e) => setFoodName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique id for the new food item
    const id = new Date().getTime().toString();

    const newFood = { id, name, calories, image, servings };

    setFoodList([newFood, ...foodList]);

    setFoodName("");
    setCalories("");
    setImage("");
    setServings("");
  };

  return (
    <div className="main-form">
      <form onSubmit={handleSubmit}>
        <h2 id="add-food-text">Add a Food Item</h2>
        <label>
            Food Name
            <input className="add-food-form" name="name" type="text" placeholder="Food Name" onChange={handleFoodNameInput} value={name} />
          </label>

          <label>
            Image URL
            <input className="add-food-form" name="image" type="url" placeholder="Food Image" onChange={handleImageInput} value={image} />
          </label>

          <label>
            Calories
            <input className="add-food-form" name="calories" type="number" placeholder="Calories" onChange={handleCaloriesInput} value={calories} />
          </label>

          <label>
            Servings
            <input className="add-food-form" name="servings" type="number" placeholder="Servings" onChange={handleServingsInput} value={servings} />
          </label>
        <div>
          <button id="form-button" type="submit">Add Food Item</button>
        </div>
      </form>
    </div>
  );
}

export default Addfood;