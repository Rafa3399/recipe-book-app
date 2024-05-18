import { useState } from 'react';
import "./CalorieCalculator.css";

function CalorieCalculator({ foodAte, setFoodAte }) {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const handleGenderChange = (e) => setGender(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleActivityLevelChange = (e) => setActivityLevel(e.target.value);

  function deleteCard(id) {
    const updatedFoodList = foodAte.filter((el) => el.id !== id);
    setFoodAte(updatedFoodList);
  }

  const calculateRecommendedCalories = () => {
    if (!gender || !weight || !height || !age || !activityLevel) {
      return 0;
    }
    
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseInt(age);
    const activityMultiplier = parseFloat(activityLevel);

    let bmr = 0;

    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * ageInYears);
    } else if (gender === 'female') {
      bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * ageInYears);
    }

    return bmr * activityMultiplier;
  };

  const totalCaloriesConsumed = foodAte.reduce((total, food) => total + food.calories, 0);
  const recommendedCalories = calculateRecommendedCalories();
  const calorieDifference = recommendedCalories - totalCaloriesConsumed;

  return (
    <div className="CalorieCalculator">
      <div className='calculator'>
        <div className='calories-intake'>
          <h2>Calorie Intake Calculator</h2>
          <label>
            Gender:
            <select value={gender} onChange={handleGenderChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Weight (kg): 
            <input type="number" value={weight} onChange={handleWeightChange} />
          </label>

          <label>
            Height (cm):
            <input type="number" value={height} onChange={handleHeightChange} />
          </label>

          <label>
            Age (years):
            <input type="number" value={age} onChange={handleAgeChange} />
          </label>

          <label>
            Activity Level:
            <select value={activityLevel} onChange={handleActivityLevelChange}>
              <option value="">Select</option>
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
              <option value="1.9">Super active (very hard exercise/sports & physical job)</option>
            </select>
          </label>
        </div>
        <div className="meals">
          <h3>Meals Consumed</h3>
          {foodAte.map((el) => (
            <div className="food-list-calories" key={el.id}>
              <b>{el.name}</b>
              <p><b>Calories:</b> {el.calories} cal</p>
              <button id="delete-btn" onClick={() => deleteCard(el.id)}>❌</button>
            </div>
          ))}
        </div>
      </div>
      <h3>Total Calories Consumed: {totalCaloriesConsumed} cal</h3>
      <h3>Recommended Daily Calories: {recommendedCalories.toFixed(2)} cal</h3>
      <h3>
        {calorieDifference > 0 
          ? `You need to consume ${calorieDifference.toFixed(2)} more calories to reach the recommended intake.`
          : `You have exceeded the recommended intake by ${Math.abs(calorieDifference).toFixed(2)} calories.`}
      </h3>
    </div>
  );
}

export default CalorieCalculator;