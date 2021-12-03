import { Card, CardContent, CardMedia,Typography, makeStyles, Button } from '@material-ui/core';
import React,{useState} from 'react';
import { ProductState } from '../context/Context.config';
// import { Link } from 'react-router-dom';

const SingleProduct = (props) => {

    const {id, title, image, price, rating, disc} = props.item;
    const { productDispatch, setAlert } = ProductState();
    const [disable, setDisable] = useState(false);
    const addItem = () => {
        productDispatch({
            type: "ADD_ITEM",
            payload: {
                id,image,rating,title,disc,price
            }
        })
        setDisable(true);
        setAlert({
            open : true,
            message : `${title} is added successfully `,
            type : "success"   
        })
    }

    const useStyles = makeStyles((theme) => ({
        card:{
            margin : 10,
            width: "100%",
        },
        rating:{
            display: "flex",
            fontSize : 10,
            marginTop : 10
        },
        title:{
            fontWeight : 500, 
            fontSize: 15, 
            color : "black",
            "&:hover": {
                opacity : "0.5"
            }
        }
    }));
    const classes = useStyles();

    return (
        <div style={{display : "flex"}}>
            <Card key={id} className={classes.card}>
                <CardMedia 
                component="img"
                src={image}
                height="200"
                alt={title}
                />
                <CardContent>
                {/* <Link to ={`/detail/${id}`} > */}
                    <Typography className={classes.title} >
                        {title}
                    </Typography>
                {/* </Link> */}
                    <div className={classes.rating}>
                        {Array(rating).fill().map((_, i) => (
                          <p>⭐</p>
                        ))}
                    </div>
                    <Typography style={{marginTop : 15}} variant="h5">
                        ${price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color = "secondary"
                        style={{marginTop : 20}}
                        onClick={addItem}
                        disabled={disable && true }
                        >
                        { disable ?"Item Added" :  "Add Item"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default SingleProduct
