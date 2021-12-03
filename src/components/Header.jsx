import { AppBar, Badge, Container, makeStyles, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ProductState } from '../context/Context.config';

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const { productState, setSearch } = ProductState();

    const useStyles = makeStyles((theme) => ({
    
        logo:{
            textTransform : "uppercase",
            fontWeight : 600,
            cursor : "pointer",
            [theme.breakpoints.down("800")] :{
                fontSize : "1rem"
            },
        },
        nav:{
            textTransform : "uppercase",
            fontWeight : 500,
            [theme.breakpoints.down("800")] :{
                fontSize : "0.9rem"
            },
        },
        container:{
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center"
        },
        input:{
            display : "flex",
            alignItems : "center"
        },
        icon : {
            marginLeft:20,
            [theme.breakpoints.down("800")] :{
                fontSize : "1.2rem",
                marginLeft:10,
            },
        },
        search : {
            [theme.breakpoints.down("480")] :{
                display : "none"
            },
        }
    }));

    const classes = useStyles();
    return (
        <AppBar color ="inherit"
        style={{padding : 20}}
        position="static"
        >
            <Container className={classes.container}>
                <Typography variant="h5" className={classes.logo}
                onClick={() => navigate('/')}
                >
                    online store
                </Typography>
                <Typography className={classes.input}>
                    {open ? <input className={classes.search} type="text" placeholder="search..."
                    style={{padding : "0.3rem", border: "none", 
                    borderBottom : "1px solid #000", outline : "none"}}
                    onChange={(e) => setSearch(e.target.value)}
                    /> : ""}
                    <span className={classes.search} style={{cursor : "pointer"}}>
                        <SearchIcon onClick={() => setOpen(!open)} className={classes.icon}/>
                    </span>
                    <Badge fontSize ="2" badgeContent={productState.product.length} color="primary">
                    <span onClick={() => navigate('/card')} style={{ cursor : "pointer"}}>
                        < ShoppingCartIcon className={classes.icon}/>
                    </span>
                    </Badge>
                    <span style={{ cursor : "pointer"}}>
                        <AccountCircleIcon className={classes.icon}/>
                    </span>
                </Typography>
            </Container>
        </AppBar>
    )
}

export default Header
