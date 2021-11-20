import {useEffect} from 'react';


export const totalPrice = (baskets) =>
    baskets.reduce((acc, item) => item.price + acc, 0).toFixed(2);

export const initialState = {
    baskets :JSON.parse(localStorage.getItem('basket')) || [],
}

function reducer (state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART' : 
        return{
            ...state,
            baskets : [...state.baskets, action.payload]
        }
        case 'REMOVE_FROM_BASKET' :
            let newBasket = [...state.baskets]
            const index = state.baskets.findIndex(basketItem => basketItem.id === action.id);
            if(index >= 0 ){
                newBasket.splice(index, 1);
            }else {
                console.log('cant find the id');
            }
            return{
                ...state,
                baskets : newBasket,
            }
        default:
            return state
    }
}

export default reducer