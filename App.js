import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailsScreen from './screens/DetailsScreen';
import LoginScreen from './screens/LoginScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'; 
import { store } from './store/redux/store';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor:  '#3f2f25'},
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: '#fff',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name='list-outline' color={color} size={size} />,
        title: 'All Categories'
      }} />
      <Drawer.Screen name='Login' component={LoginScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
      }} />
      <Drawer.Screen name='Favorite Meals' component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
      }} />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <>
     <StatusBar style='light'/>  
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
           headerStyle: { backgroundColor: '#351401' },
           headerTintColor: 'white',
           contentStyle: {backgroundColor:  '#3f2f25'}
        }}>
          <Stack.Screen name='Drawer Screen' component={DrawerNavigator} 
          options={{
            headerShown: false,
            // title: 'Meals Categories',
          }} />

          <Stack.Screen name='Meals' options={({route, navigation}) => {
            const { categoryTitle } = route.params
            return {
              title: categoryTitle,
              headerBackImageSource: require('./assets/arrow-left.png')
            }
          }} component={MealsOverviewScreen} />

          <Stack.Screen name='Meal Details' component={DetailsScreen} 
          options={{
            headerBackImageSource: require('./assets/arrow-left.png')
          }}/>
        </Stack.Navigator>
      </NavigationContainer>  
      </Provider>

      {/* <NavigationContainer>
      <Drawer.Navigator>
          <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
            drawerLabel: 'Categories Screen',
            drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
          }} />
          <Drawer.Screen name='Login' component={LoginScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons name='person' size={size} color={color} />
          }} />
        </Drawer.Navigator>
      </NavigationContainer> */}

      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Categories' component={CategoriesScreen} options={{
            tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} /> 
          }} />
          <Tab.Screen name='Login' component={LoginScreen} options={{
            tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
          }} />         
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
 
});
