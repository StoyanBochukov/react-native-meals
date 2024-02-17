import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorites } from "../store/redux/favoritesSlice";


const DetailsScreen = ({ route, navigation }) => {

    const { id } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === id);
    const { mealsIds } = useSelector(state => state.favMeals);
    const dispatch = useDispatch();

    const mealsFavorites = mealsIds.includes(id);
    const changeFavoriteStatusHandler = () => {
        if(mealsFavorites){
            dispatch(removeFavorites({id}))
        }else{
            dispatch(addFavorite({id}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={changeFavoriteStatusHandler} icon={mealsFavorites ? 'star' : 'star'} 
                color={mealsFavorites ? 'yellow' : '#fff'} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])
   

  return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity}
             affordability={selectedMeal.affordability} textStyle={styles.detailText} />
        </View>
        <View style={styles.listWrapper}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </ScrollView>
  )
}

export default DetailsScreen


const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
    listWrapper: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff'
    },
    detailText: {
        color: '#fff'
    },
    listContainer: {
        width: '80%',
    }
   
})