import "./Meals.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const Meals = (props) => {
   console.log("Filtering on", props.filterDate)
   const date = new Date(props.filterDate)

    const filteredItems = props.data.filter( item => {
        return (
            item.timestamp.getYear() === Date.getYear() &&
            item.timestamp.getMonth() === Date.getMonth() &&
            item.timestamp.getDate() === Date.getDate())
    })
   return (
    <Card className="meals">
      {
        filteredItems.length === 0 
        ?
        <p>No data on that date</p>
        :
      filteredItems.map(item => {
        return (
          <MealItem
          key={item.id}
            date={item.timestamp}
            meal={item.meal}
            description={item.description}
            calorie={item.calorie}
          />
        );
      })
      }
    </Card>
  );
};

export default Meals;