import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
import { ProductState } from '../context/Context.config';
import SingleProduct from './SingleProduct';

const Products = () => {
    const { searchHandler } = ProductState();
    const useStyles = makeStyles((theme) => ({
        grid:{
            display : "grid",
            gridTemplateColumns : "repeat(auto-fit, minmax(250px, 1fr))",
        },
    }));
    const classes = useStyles();
    return (
        <div>
            {!searchHandler ? <CircularProgress 
            size="250" thickness={3}/> : <>
                <div className={classes.grid}>
                {searchHandler.map((item) => <SingleProduct key={item.id} item={item}/>)}</div>
            </>
            }
        </div>
    )
}

export default Products
