import React from 'react';


import { Container, Typography, Paper , Box} from '@material-ui/core';


export default function PaperComponent(props) {
    return (
        <>
            <Container maxWidth='md'>
                <Paper square elevation={4} component={Box} m={4}>
                    <Box p={4}>
                    <Typography variant='h4'>
                        Paper Component 
                    </Typography>
                    </Box>
                </Paper>
                <Paper square variant='outlined'>
                    <Box p={4}>
                    <Typography variant='h4'>
                        Paper Component 
                    </Typography>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}