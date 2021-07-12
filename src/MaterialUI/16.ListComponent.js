import React from "react";

import {
    Container,
    Typography,
    Box,
    Divider,
    Collapse
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";


import AndroidIcon from '@material-ui/icons/Android';

const useStyles = makeStyles((them) => {
    return {
        root: {},
    };
});

export default function ListComponent(props) {
    const classes = useStyles();

    const [isOpen,setOpen]=React.useState(false);

    return (
        <>
            <Container className={classes.root}>
                <Typography variant="h2">List Component</Typography>
                <Box m={4}>
                    <List disablePadding>
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
                </Box>
            </Container>
        </>
    );
}
