import { createSlice } from "@reduxjs/toolkit";

const initialState =  ["Men", "Women","Best Offers","Kids"]

const categorySlice = createSlice({
    name:"Category",
    initialState

})

export default categorySlice;