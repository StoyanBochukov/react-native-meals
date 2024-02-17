import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";


const MealsOverviewScreen = ({ route }) => {

    const { categoryId, categoryTitle } = route.params;
    
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    

  return (
    <MealsList items={displayedMeals} />
  )
}

export default MealsOverviewScreen

