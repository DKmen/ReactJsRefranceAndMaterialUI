import React from 'react';


import {Typography, Box, Grid, Paper, Button } from '@material-ui/core';






export default function FlotingActionButtonComponent(props) {

    return (
        <>
            <Grid container justify='space-around' spacing={2} direction='row'>
                <Grid item lg={3} sm={12}>
                    <Paper>
                        <Box p={4}>
                            <Typography variant='h4'>Main Title</Typography>
                            <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but</Typography>
                            <Button variant='outlined' color='primary' fullWidth>Read More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} sm={12}>
                    <Paper>
                        <Box p={4}>
                            <Typography variant='h4'>Main Title</Typography>
                            <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but</Typography>
                            <Button variant='outlined' color='primary' fullWidth>Read More</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={3} sm={12}>
                    <Paper>
                        <Box p={4}>
                            <Typography variant='h4'>Main Title</Typography>
                            <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but</Typography>
                            <Button variant='outlined' color='primary' fullWidth>Read More</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
