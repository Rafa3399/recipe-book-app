import "./Foodlist.css"

function Foodlist({ foodList, setFoodList }) {
  function deleteCard(id) {
    // Filter out the item with the matching id
    const updatedFoodList = foodList.filter((el) => el.id !== id);
    // Update the state with the filtered list
    setFoodList(updatedFoodList);
  }

  return (
    <div className="FoodList">
      {foodList.map((el) => (
        <div className="Card" key={el.id}>
          <img id="cardImg" src={el.image} alt={el.name} />
          <section id="cardSection">
            <h2>{el.name}</h2>
            <p><b>Calories:</b> {el.calories} cal</p>
            {/* Pass the deleteCard function with the id */}
            <button id="delete-btn" onClick={() => deleteCard(el.id)}> Delete </button>
          </section>
        </div>
      ))}
    </div>
  );
}
export default Foodlist;