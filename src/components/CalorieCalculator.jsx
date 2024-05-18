
import "./CalorieCalculator.css"

function CalorieCalculator({ foodAte, setFoodAte }) {
 
  function deleteCard(id) {
    const updatedFoodList = foodAte.filter((el) => el.id !== id);
    setFoodAte(updatedFoodList);
  }

  return(
  <div className="FoodList">
      {foodAte.map((el) => (
        <div className="Card" key={el.id}>
          <img id="cardImg" src={el.image} alt={el.name} />
          <section id="cardSection">
            <h2>{el.name}</h2>
            <p><b>Calories:</b> {el.calories} cal</p>
            <button id="delete-btn" onClick={() => deleteCard(el.id)}> Delete </button>
          </section>
        </div>
      ))}
    </div>
 )
}

export default CalorieCalculator;