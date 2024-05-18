import "./Foodlist.css"

function Foodlist({ foodList, setFoodList, foodAte, setFoodAte }) {
  //Delete the card
  function deleteCard(id) {
    const updatedFoodList = foodList.filter((el) => el.id !== id);
    setFoodList(updatedFoodList);
  }
  //Add food to the food ate list
  function addAteList(food) {
    setFoodAte([...foodAte, food]);
    console.log(foodAte)
  }

  return (
    <div className="FoodList">
      {foodList.map((el) => (
        <div className="Card" key={el.id}>
          <img id="cardImg" src={el.image} alt={el.name} />
          <section id="cardSection">
            <h2>{el.name}</h2>
            <p><b>Calories:</b> {el.calories} cal</p>
            <button id="favorite-btn" onClick={() => addAteList(el)}> Favorite </button>
            <button id="delete-btn" onClick={() => deleteCard(el.id)}> Delete </button>
          </section>
        </div>
      ))}
    </div>
  );
}
export default Foodlist;