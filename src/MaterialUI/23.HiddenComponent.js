import React from "react";

import {
    Container,
    Typography,
    Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((them) => {
    return {
        root: {},
    };
});

export default function HiddenComponent(props) {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <Typography style={{fontSize:'2rem'}}>Hidden Component</Typography>
                {/* <Hidden only='sm'>
                    <Typography variant='h2'>Only Small</Typography>
                </Hidden>
                <Hidden only='xs'>
                    <Typography variant='h2'>Only Extrem Small</Typography>
                </Hidden>
                <Hidden only='md'>
                    <Typography variant='h2'>Only Medium</Typography>
                </Hidden>
                <Hidden only='lg'>
                    <Typography variant='h2'>Only Large</Typography>
                </Hidden>
                <Hidden only='xl'>
                    <Typography variant='h2'>Only Extrem Large</Typography>
                </Hidden> */}
                {/* <Hidden smUp>
                    <Typography variant='h2'>Small Up</Typography>
                </Hidden>
                <Hidden xsUp>
                    <Typography variant='h2'>Extrem Small Up</Typography>
                </Hidden>
                <Hidden mdUp>
                    <Typography variant='h2'>Medium Up</Typography>
                </Hidden>
                <Hidden lgUp>
                    <Typography variant='h2'>Large Up</Typography>
                </Hidden>
                <Hidden xlUp>
                    <Typography variant='h2'>Extrem Large Up</Typography>
                </Hidden> */}
                <Hidden smDown>
                    <Typography variant='h2'>Small Down</Typography>
                </Hidden>
                <Hidden xsDown>
                    <Typography variant='h2'>Extrem Small Down</Typography>
                </Hidden>
                <Hidden mdDown>
                    <Typography variant='h2'>Medium Down</Typography>
                </Hidden>
                <Hidden lgDown>
                    <Typography variant='h2'>Large Down</Typography>
                </Hidden>
                <Hidden xlDown>
                    <Typography variant='h2'>Extrem Large Down</Typography>
                </Hidden>
            </Container>
        </>
    );
}
