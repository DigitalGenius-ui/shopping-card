import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/Context';

function Basket({id, title, star, price, img}) {
    const [{baskets}, dispatch] = useGlobalContext();
    const removeFromBasket = () => {
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        });
    }
    return (
        <SingleBasket>
            <BasketImg src= {img}/>
            <BasketText>
                <h4>{title}</h4>
                <p><strong>${price}</strong></p>
                <p className="star">{Array(star).fill().map((_) => <p>⭐</p>)}</p>
                <button onClick={removeFromBasket}>Remove From The Cart</button>
            </BasketText>
        </SingleBasket>
    )
}

export default Basket

const SingleBasket = styled.div`
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
`
const BasketText = styled.div`
    h4{
        font-size: 1.2rem;
    }
    .star{
        display: flex;
    }
    button{
        background-color: blue;
        border: none;
        cursor: pointer;
        padding: 0.2rem 1rem;
        color: white;
    }
`
const BasketImg = styled.img``