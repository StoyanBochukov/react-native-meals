import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";


const MealItem = ({ title, imageUrl, id, duration, complexity, affordability }) => {

    const navigation = useNavigation()
    const onPressHandler = () => {
        navigation.navigate('Meal Details', {
            id
        })
    }

  return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color: 'grey'}} 
        style={({ pressed }) => pressed && styles.buttonPressed} onPress={onPressHandler}>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
  
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 4,
        //iOS only
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity:0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
   
    buttonPressed: {
        opacity: 0.5
    }
})