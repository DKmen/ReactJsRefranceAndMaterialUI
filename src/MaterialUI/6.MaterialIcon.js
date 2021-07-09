import React from 'react';


import { Container, Typography, Paper, Box, Icon } from '@material-ui/core';

import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';


export default function MaterialIcon(props) {
    return (
        <>
            <Container maxWidth='md'>
                <Paper square elevation={4} component={Box} m={4}>
                    <Box p={4}>
                        <Typography variant='h4'>
                            <Icon color='secondary'>help</Icon> All About Icon <AccessAlarmsIcon color='secondary'/>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </>
    )
}