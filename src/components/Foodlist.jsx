import FoodListData from "../assets/recipes.json"
import { useState } from "react";
import "./Foodlist.css"

function Foodlist (){
  const [foodList, setfoodList] = useState(FoodListData);

  function deleteCard(id){
    let filterFoodList = foodList.filter((el) => {
      return el.id !== id;
    })
    setfoodList(filterFoodList);
  }
  

  return(
    <div className="FoodList">
      {foodList.map((el) => {
        return (
          <div className="Card" key={el.id}>
            <img id="cardImg" src={el.image} />
            <section id="cardSection">
              <h2>{el.name}</h2>
              <p><b>Calories:</b> {el.calories} cal</p>
              <button id="delete-btn" onClick={() => deleteCard(el.id)}> Delete </button>
            </section>
          </div>
        )
       })}
    </div>
  )
}

export default Foodlist;