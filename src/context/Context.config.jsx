import React, { useContext, useEffect, useState } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react';
import reducer,{ basket } from '../context/reducer';
import data from '../data/Data';


export const ProductContext = createContext();

export const totalPrice = (products) =>
    products.reduce((item, amount) => amount.price + item,0).toFixed(2);

    // const initState = () => JSON.parse(localStorage.getItem("product"))

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, basket);
    const [cardData, setCardData] = useState(data);
    const [search, setSearch] = useState('');
    const [alert, setAlert] = useState({
        open : false,
        message : '',
        type : "success"
    })

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(state.product));
    },[state.product])

    const searchHandler = cardData.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <ProductContext.Provider value={{
            productState : state,
            productDispatch : dispatch,
            totalPrice,
            cardData, 
            setCardData,
            search, 
            setSearch,
            searchHandler,
            alert, 
            setAlert
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default Context;

export const ProductState = () => useContext(ProductContext);

