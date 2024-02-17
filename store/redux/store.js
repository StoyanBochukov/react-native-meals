import { configureStore } from "@reduxjs/toolkit"; 
import favorites from './favoritesSlice'


export const store = configureStore({
    reducer: {
        favMeals: favorites,
    }
});