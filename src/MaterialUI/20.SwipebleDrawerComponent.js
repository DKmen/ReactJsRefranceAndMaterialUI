import React from "react";

import {
    Container,
    Typography,
    AppBar,
    Toolbar,
    Button,
    SwipeableDrawer,
    IconButton,
    Hidden,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Collapse,
    Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import DehazeIcon from '@material-ui/icons/Dehaze';
import AndroidIcon from '@material-ui/icons/Android';



const useStyles = makeStyles((them) => {
    return {
        root: {},
    };
});

export default function SwipebleDrawerComponent(props) {
    const classes = useStyles();

    const [isOpen,setOpen]=React.useState(false);
    const [drawerOpen,setDrawerOpen]=React.useState(false);

    return (
        <>
            <Container className={classes.root}>
                <SwipeableDrawer open={drawerOpen} onClose={()=>setDrawerOpen(false)} >
                <List disablePadding style={{width:'80vw',maxWidth:300}}>
                        <ListItem button>
                            <ListItemIcon>
                                <AndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary="List Item 1" secondary="this is discripation" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <AndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary="List Item 2" secondary="this is discripation" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary="List Item 3" secondary="this is discripation" />
                        </ListItem>
                        <ListItem button onClick={()=>setOpen(!isOpen)}>
                            <ListItemText primary="List Item 4" secondary="this is discripation" />
                        </ListItem>
                        <Collapse in={isOpen}>
                            <List disablePadding component={Box} style={{ paddingLeft: 40 }}>
                                <ListItem button>
                                    <ListItemText primary="Nested Item 1" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Nested Item 2" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Nested Item 3" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </SwipeableDrawer>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={()=>setDrawerOpen(true)}>
                            <DehazeIcon style={{color:'white'}}/>
                        </IconButton>
                        <Typography variant='h6' style={{ flex: 1 }}>Simple Drawer</Typography>
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
