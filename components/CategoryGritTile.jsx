import { Pressable, Text, View, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"

const CategoryGritTile = ({ title, color, onPress }) => {

    // const navigation = useNavigation() alternative if screen is not inside Stack.Navigator

    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#ccc' }} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGritTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        //iOS inly ->
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonPressed: {
        opacity: 0.5
    }
})