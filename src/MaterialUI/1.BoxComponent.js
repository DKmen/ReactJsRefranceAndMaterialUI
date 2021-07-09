import React from 'react';


import {Box} from '@material-ui/core';


export default function BoxComponent(props){
    return(
        <>
        <Box p={10} boxShadow={4} m={4} >
            <h1>This is Box Component Example</h1>
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through  </p>
        </Box>
        </>
    )
}