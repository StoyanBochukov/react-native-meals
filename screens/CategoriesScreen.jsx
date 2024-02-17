import CategoryGritTile from '../components/CategoryGritTile'
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native' 


const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('Meals', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title
            })
        }
    
        return <CategoryGritTile title={itemData.item.title}
         color={itemData.item.color} onPress={onPressHandler} />
    }

  return (
   <FlatList data={CATEGORIES} keyExtractor={(item) => item.id }
   renderItem={renderCategoryItem}
   numColumns={2} />
  )
}

export default CategoriesScreen