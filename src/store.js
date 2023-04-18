import { menShoesReducer } from "./Slices/Men/MenSlice";
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Slices/CartSlice";
import { favoriteReducer } from "./Components/Common/Favorite/favoriteSlice";
import { filterReducer } from "./Components/Filters/FilterSlice";
import { sortSliceReducer } from "./Slices/sortSlice";
import { womenShoesReducer } from "./Slices/womenSlice";
import { kidsShoesReducer } from "./Slices/KidsSlics";


export const store = configureStore({
    reducer: {
        menShoes:menShoesReducer,
        womenShoes:womenShoesReducer,
        kidsShoes: kidsShoesReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
        filter: filterReducer,
        sort: sortSliceReducer,
    }
})




