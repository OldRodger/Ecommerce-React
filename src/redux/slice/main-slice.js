import { createSlice } from "@reduxjs/toolkit";
import availProducts from '../../utils/products';





const mainSlice = createSlice({
    name: 'mainSlice',
    initialState:{
        products: availProducts,
        bannerVisible: false
    },
    reducers: {
        setBannerVisible(state, action){
            state.bannerVisible = action.payload;
        }
    }
    
})

export const mainSliceAction = mainSlice.actions;
export default mainSlice.reducer;