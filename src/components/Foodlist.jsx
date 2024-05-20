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
    <>
    <h1 id="title">Food List</h1>
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