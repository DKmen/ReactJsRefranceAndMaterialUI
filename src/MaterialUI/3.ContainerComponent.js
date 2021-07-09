import React from 'react';


import {Container,Typography,Box} from '@material-ui/core';


export default function ContainerComponent(props){
    return(
        <>
        <Container maxWidth='sm'>
            <Box border={1}>
            <Typography variant='h4'>
                Container Component small width
            </Typography>
            </Box>
        </Container>
        </>
    )
}