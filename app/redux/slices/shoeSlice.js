import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [
    { id: 1, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 2, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 3, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 4, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 5, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 6, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 7, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 8, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 9, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 10, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 11, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 12, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 13, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
    { id: 14, name: "Nike", price: 1000, image: "/images/Nike.jpg" },
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