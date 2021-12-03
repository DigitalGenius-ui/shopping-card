import { Container, Typography, makeStyles, } from '@material-ui/core';
import React,{useState} from 'react';
import Products from './Products';
import data from '../data/Data';
import { ProductState } from '../context/Context.config';
const categoryNames = ['all',...new Set(data.map(item => item.brand))];
const SideBar = () => {
    const { setCardData } = ProductState();
    const [button] = useState(categoryNames);
    
    const filter = (category) => {
        const newFilter = data.filter(item => item.brand === category);
        if(category === 'all'){
            setCardData(data);
            return;
        }
        setCardData(newFilter);
    }

    const useStyles = makeStyles(theme => ({
        container:{
            display: "flex",
            marginTop : 50,
            gap : 15,
            marginBottom : 20,
            backgroundColor : "white",
            padding : 30,
            [theme.breakpoints.down('1000')]: {
                flexDirection : 'column',
            },
            
        },
        sidebar:{
            flex : 1,
        },
        product:{
            flex: 3,
            marginTop : 5,
        },
        side :{
            textTransform:"uppercase", 
            borderBottom:"1px solid #e79e0090",
            paddingBottom : 20
        },
        photo:{
            backgroundImage: `linear-gradient(#00000071, #00000071),url(https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
            height: "60vh",
            width: "100%",
            backgroundPosition : "center",
            backgroundSize : "cover",
            marginTop : 20,
            display: "flex",
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column"
        },
        text:{
            display: "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center",
            border : "5px solid #fff",
            height: "55vh",
            width: "90%",
            [theme.breakpoints.down('1000')]: {
                width: "95%",
            },
        },
        number:{
            padding:4,
            marginRight : 7,
            cursor: "pointer",
            "&:hover":{
                borderBottom: "1px solid #000",
            }
        }
    }));
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.sidebar}>
                <Typography variant="h6" className={classes.side} style={{marginBottom: 20}}>
                    categories
                </Typography>
                {button.map((br, i) => {
                    return(
                    <Typography key={i} onClick={() => filter(br)} variant="h6" className="select">
                           <div className="transform">{br}</div>
                    </Typography>
                    )})}
                <div className={classes.photo}>
                    <div className={classes.text}>
                        <span style={{color: "white", textTransform : "uppercase", fontSize : 45, fontWeight:500,
                        letterSpacing: 6}}>shoes</span>
                        <span style={{color: "white", textTransform : "uppercase", fontSize : 30,
                        letterSpacing: 6}}>style</span>
                    </div>
                </div>
            </div>
            <div className={classes.product}>
                <Products/>
            </div>
        </Container>
    )
}

export default SideBar
