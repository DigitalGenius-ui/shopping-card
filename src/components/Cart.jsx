import React, { useContext } from 'react'
import Basket from './Basket';
import styled from 'styled-components'
import { useGlobalContext } from '../context/Context';
import { totalPrice } from '../context/reducer'

function Cart() {
    const [{baskets}] = useGlobalContext();
    return (
        <CheckOut>
            <Check>
                <h1>{baskets?.length > 0 ? "Your Shopping Basket is" : "Your Shopping Basket is Empty"}</h1>
                <Total>
                    <h4>Your Total Price is ${totalPrice(baskets)}</h4>
                     <button>Process The Payment</button>
                </Total>
            </Check>
            {
            baskets?.map((basket) => (<Basket
            id ={basket.id}
            title ={basket.title}
            price={basket.title}
            star ={basket.star}
            img={basket.img}
            />)
            )}
        </CheckOut>
    )
}

export default Cart

const CheckOut = styled.div`
    padding: 2rem;
`
const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    `
const Total = styled.div`
    border: 1px solid #000;
    padding: 1rem ;
    text-align: center;
    h4{
        border-bottom: 1px solid #000;
        padding-bottom: 1rem;
    }
    button{
        margin: 1rem 0 0 0 ;
        background-color: blue;
        border: none;
        cursor: pointer;
        padding: 0.2rem 1rem;
        color: white;
    }
`