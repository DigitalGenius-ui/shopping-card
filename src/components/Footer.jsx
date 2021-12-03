import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import { Email, Instagram } from '@material-ui/icons';

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        footer:{
            width : "100%",
            paddingBottom : "2rem",
            backgroundColor : "#505050"
        },
        title:{
            textAlign : "center",
            textTransform : "uppercase",
            padding : "2rem 0 1rem 0",
            color : "white"
        },
        tagline : {
            textAlign : "center",
            color : "white",
            [theme.breakpoints.down("xs")]: {
                fontSize : "0.9rem",
                width : "75%",
                margin : "0 auto",
            }
        },
        icons : {
            textAlign : "center",
            color : "white",
            padding : '1rem 0 0 0',
        },
        a : {
            margin : 5,
        }
    }));
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h4" className={classes.title}>
                online store
            </Typography>
            <Typography variant="subtitle1" className={classes.tagline}>
                Online Store is designed & developed by Milad Amiri. &copy;All rights are reserved.
            </Typography>
            <Typography variant="subtitle1" className={classes.tagline}>
                For projects orders pleas contact me throw below contact paths.
            </Typography>
            <div className={classes.icons}>
                <a href="https://www.facebook.com/profile.php?id=100009019544917" target="_Blank" className={classes.a}><Facebook/></a>
                <a href="https://www.instagram.com/milad_amiri01/" target="_Blank" className={classes.a}><Instagram/></a>
                <a href="https://digitalgenius-ui.github.io/my-profile/" className={classes.a}><Email/></a>
            </div>
        </footer>
    )
}

export default Footer
