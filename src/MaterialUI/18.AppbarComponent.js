import React from "react";

import {
    Container,
    Typography,
    AppBar,
    Toolbar,
    Button,
    Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((them) => {
    return {
        root: {},
    };
});

export default function AppbarComponent(props) {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <Typography variant='h6' style={{ flex: 1 }}>Appbar Component</Typography>
                        <Hidden xsDown>
                            <Button color='inherit'>Home</Button>
                            <Button color='inherit'>About</Button>
                            <Button color='inherit'>Details</Button>
                            <Button color='inherit'>Contect Us</Button>
                        </Hidden>
                        <Hidden smUp>
                            <Typography>Make Menu</Typography>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    );
}
