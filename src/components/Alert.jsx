import { Snackbar } from '@material-ui/core';
import React from 'react';
import { ProductState } from '../context/Context.config';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = () => {
    const {alert, setAlert} = ProductState();
    const closeHandler = (reason, event) => {
        if(reason === 'clickaway'){
            return;
        }
        setAlert({open : false});
    }
    return (
        <Snackbar
        open ={alert.open}
        autoHideDuration = {2000}
        onClose={closeHandler}
        >
            <MuiAlert
            onClick={closeHandler}
            variant="filled" 
            severity={alert.type}
            elevation={10}
            >
                {alert.message}
            </MuiAlert>
        </Snackbar>
    )
}

export default Alert
