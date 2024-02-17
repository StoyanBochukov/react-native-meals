import { View, Text, StyleSheet } from "react-native" 

const List = ({ data }) => {
  return (
    data.map((dataPoin) => (
        <View style={styles.listItem} key={dataPoin}>
            <Text style={styles.itemText}>{dataPoin}</Text>
        </View>
    ))
  )
}

export default List


const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})