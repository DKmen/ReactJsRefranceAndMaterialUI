import React from 'react';


import {Typography,Box} from '@material-ui/core';


export default function TypographyComponent(props){
    return(
        <>
        <Box>
            <Typography variant='h1'>Typography Variantes</Typography>
            <Typography variant='h2'>Heading2</Typography>
            <Typography variant='h3'>Heading2</Typography>
            <Typography variant='h4'>Heading2</Typography>
            <Typography variant='h5'>Heading2</Typography>
            <Typography variant='h6'>Heading2</Typography>
            <Typography variant='body1'>Drimil Mendapara</Typography>
            <Typography variant='body2' gutterBottom>DKMendapara</Typography>
            <Typography variant='subtitle1' color='secondary' align='justify' gutterBottom> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through</Typography>

            <Typography variant='subtitle2' color='secondary' align='right' display='initial'> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through</Typography>
        </Box>
        </>
    )
}