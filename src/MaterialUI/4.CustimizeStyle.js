import React from 'react';


import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { indigo } from '@material-ui/core/colors'


const useStyle=makeStyles((them)=>({
    Container:{
        background:indigo['A700'],
        color:them.palette.common.white,
        boxShadow:them.shadows[1]
    }
}))


export default function CustimizeStyle(props) {

    const classes=useStyle();

    return (
        <>
            <Container maxWidth='md' className={classes.Container}>
                <Box>
                    <Typography variant='h4'>
                        Custimize Style For Component
                    </Typography>
                </Box>
            </Container>
        </>
    )
}