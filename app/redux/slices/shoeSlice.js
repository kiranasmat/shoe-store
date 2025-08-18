import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [
    { id: 1, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 2000,
      image: "/images/shoes.jpg",
    },
    {
      id: 3,
      name: "Vans Old Skool",
      price: 4000,
      image: "/images/Vans Old Skool.jpg",
    },
    { id: 4, name: "Samba_OG", price: 1000, image: "/images/Samba_OG.jpg" },
    {
      id: 5,
      name: "Clarks Desert Boot",
      price: 5000,
      image: "/images/Clarks Desert Boot.jpg",
    },

  ],
};
const shoeSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        
    }
})
export const selectShoes = (state) => state.shoes.list;
export default shoeSlice.reducer;