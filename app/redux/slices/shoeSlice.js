import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [
    {
      id: 1,
      name: "Nike",
      price: 1000,
      image: "/images/Nike.jpg",
      description:
        "The Nike Air Zoom Pegasus 39 is designed for comfort, speed, and durability. Featuring responsive cushioning, lightweight mesh upper for breathability, and a sleek design, it’s perfect for running, training, or everyday wear. Step into style and performance with every stride.",
      newArrival: false,
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 2000,
      image: "/images/shoes.jpg",
      description:
        "Experience unmatched comfort and energy return with Adidas Ultraboost Sleek design meets performance for running and everyday wear",
      newArrival: true,
    },
    {
      id: 3,
      name: "Vans Old Skool",
      price: 4000,
      image: "/images/Vans Old Skool.jpg",
      description:
        "Classic skate style with durable canvas and suede upper Iconic side stripe and comfortable fit for everyday wear",
      newArrival: false,
    },
    {
      id: 4,
      name: "Samba_OG",
      price: 1000,
      image: "/images/Samba_OG.jpg",
      description:
        "Timeless indoor soccer shoe with leather upper and gum solePerfect blend of style, comfort, and heritage design",
      newArrival: true,
    },
    {
      id: 5,
      name: "Clarks Desert Boot",
      price: 5000,
      image: "/images/Clarks Desert Boot.jpg",
      description:
        "Classic suede ankle boot with crepe sole for all-day comfort Stylish, versatile design perfect for casual and smart-casual wear.",
      newArrival: false,
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