import { useState } from "react";
import "./MealForm.css";
import Input from "../UI/Input";

const MealForm = (props) => {
  const [userDate, setUserDate] = useState("");

  const dateChangedHandler = (event) => {
    let newValue = event.target.value;
    setUserDate(newValue);
    console.log(`someone typed ${userDate}`);
  };

  const [userMeal, setUserMeal] = useState("");

  const mealChangedHandler = (event) => {
    let newValue = event.target.value;
    setUserMeal(newValue);
    console.log(`someone typed ${userMeal}`);
  };

  const [userDescription, setUserDescription] = useState("");

  const descriptionChangedHandler = (event) => {
    let newValue = event.target.value;
    setUserDescription(newValue);
    console.log(`someone typed ${userDescription}`);
  };

  const [userCalorie, setUserCalorie] = useState("");

  const calorieChangedHandler = (event) => {
    let newValue = event.target.value;
    setUserCalorie(newValue);
    console.log(`someone typed ${userCalorie}`);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newMeal = {
      id: Math.random(),
      timeStamp: new Date(userDate),
      description: userDescription,
      meal: userMeal,
      calorie: userCalorie,
    };
    console.log("My new meal: ", newMeal);
    if (props.onAddMeal(newMeal)) {
      console.log("Resetting form data");
      setUserDate("");
      setUserDescription("");
      setUserMeal("");
      setUserCalorie("");
    } else {
      console.log("Error found during validation!!!!");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="add-meal__elements">
        <Input
          className="add-metric__element"
          labelText="Date"
          id="date"
          type="datetime-local"
          value={userDate}
          onChange={dateChangedHandler}
        />
        <div className="add-meal__element">
          <label>Meal</label>
          <input type="text" value={userMeal} onChange={mealChangedHandler} />
        </div>
        <div className="add-metric__element">
          <label>Description</label>
          <input
            type="text"
            value={userDescription}
            onChange={descriptionChangedHandler}
          />
        </div>
        <div className="add-meal__element">
          <label>Calorie</label>
          <input
            type="number"
            value={userCalorie}
            min="0"
            step="1"
            onChange={calorieChangedHandler}
          />
        </div>
      </div>
      <div className="add-meal__actions">
        <button type="submit">Add Meal</button>
      </div>
    </form>
  );
};

export default MealForm;
