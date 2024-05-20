import "./Foodlist.css"
import { v4 as uuidv4 } from 'uuid';

function Foodlist({ foodList, setFoodList, foodAte, setFoodAte }) {
  //Delete the card
  function deleteCard(id) {
    const updatedFoodList = foodList.filter((el) => el.id !== id);
    setFoodList(updatedFoodList);
  }
  //Add food to the food ate list
  function addAteList(food) {
    const foodWithId = { ...food, id: uuidv4() };
    setFoodAte([...foodAte, foodWithId]);
  }

  return (
    <>
    <h1 id="title">Food List ({foodAte.length})</h1>
    <div className="FoodList">
      {foodList.map((el) => (
        <div className="Card" key={el.id}>
          <img id="cardImg" src={el.image} alt={el.name} />
          <section id="card-section">
            <h2>{el.name}</h2>
            <p><b>Calories:</b> {el.calories} cal</p>
            <p><b>Servings:</b> {el.servings} </p>
            <button id="eaten-btn" onClick={() => addAteList(el)}> Eaten </button>
          </section>
          <div id="close">
           <button id="delete-btn" onClick={() => deleteCard(el.id)}> ❌ </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
export default Foodlist;