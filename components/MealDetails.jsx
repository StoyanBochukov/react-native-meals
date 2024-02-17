import { View, Text, StyleSheet } from "react-native"


const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>{complexity}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{affordability}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    detailsItem: {
        textTransform: 'capitalize',
        marginHorizontal: 4,
        fontSize: 12
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
})