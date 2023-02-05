import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { toast } from 'react-toastify';

export const countSlice = createSlice({
    name: "count",
    initialState: {
        count: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : [],
        quintliy: 0,
        amaunt: 0,
    },

    reducers: {
        INCER: (state, action) => {
            const itemIndex = state.count.find((item) => item.id === action.payload.id);
            if (itemIndex) {
                state.quantity++
                toast.success('Savatga qoshildi');
            } else {
                state.count.push({ ...action.payload, quantity: 1 });
                toast.success('Savatga qoshildi');

            }

            localStorage.setItem("cartItems", JSON.stringify(state.count));

        },

        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        
        decrementQuantity: (state, action) => {
            const item = state.count.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },

        removeItem: (state, action) => {
            const removeItem = state.count.filter((item) => item.id !== action.payload);
            state.count = removeItem;
        }
    }
});

export const { INCER, removeItem, incrementQuantity, decrementQuantity } = countSlice.actions;
export default countSlice.reducer;

// const teamProduct = { ...action.payload, quintliy: 1 };

// state.count.push(teamProduct.id);
