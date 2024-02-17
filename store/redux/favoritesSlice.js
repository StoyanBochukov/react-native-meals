import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        mealsIds: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.mealsIds.push(action.payload.id);
        },
        removeFavorites: (state, action) => {
            state.mealsIds.splice(state.mealsIds.indexOf(action.payload.id), 1);
        }
    }
});


export default favoritesSlice.reducer;
export const { addFavorite, removeFavorites } = favoritesSlice.actions;