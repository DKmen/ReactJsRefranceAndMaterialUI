import React from 'react';

import { Container,Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import AddIcon from '@material-ui/icons/Add';

const useStyle=makeStyles({
    Container:{
        width:'100vw',
        height:'100vh'
    }
})

export default function GridSystem(props) {
    const classes=useStyle();
    return (
        <>
        <Container className={classes.Container}>
            <Fab color='primary' variant='extended'>
                <AddIcon/> Add
            </Fab>
        </Container>
        </>
    )
}