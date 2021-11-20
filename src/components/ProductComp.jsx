import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/Context';

function Product({id,title,price,star,img}) {
    const [{baskets}, dispatch] = useGlobalContext();
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(baskets));
    }, [baskets]); 
    const addItem = () => {
        dispatch({
            type : 'ADD_TO_CART',
            payload : {
                id,
                title,
                price,
                star,
                img,
            }
        })
    }
    return (
        <SingleProduct key={id}>
                <h1>{title}</h1>
                <p>${price}</p>
                <p className="star">{Array(star).fill().map((_) => (<p>⭐</p>))}</p>
                <Photo>
                    <Image src={img}/>
                </Photo>
                <Button>
                    <button onClick={addItem}>Add To Cart</button>
                </Button>
        </SingleProduct>
    )
}

export default Product

const SingleProduct= styled.div`
    width: 100%;
    border: 1px solid #000;
    padding: 0.5rem;
    h1{
        font-size: 1rem;
    }
    .star{
        display: flex;
    }
`
const Image= styled.img`
    width: 11rem;
`

const Photo= styled.div`
    text-align: center;
`

const Button = styled.div`
    text-align: center;
    padding: 2rem 0 1rem 0;
    button{
        background-color: blue;
        border: none;
        cursor: pointer;
        padding: 0.2rem 1rem;
        color: white;
    }
`
