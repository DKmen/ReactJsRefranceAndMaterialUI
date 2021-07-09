import React from "react";

import {
  Container,
  TextField,
  Typography,
  Box,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((them) => {
  return {
    root: {},
  };
});

export default function TextFieldComponent(props) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Typography variant='h4'>Form TextField</Typography>
        <Box m={4}>
          <TextField
            placeholder="First Name"
            margin="normal"
            label="lable"
            helperText="Enter your full name"
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircleOutlinedIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <TextField
            placeholder="First Name"
            margin="normal"
            label="lable"
            variant="outlined"
            fullWidth
          />
          <TextField
            placeholder="First Name"
            margin="normal"
            label="lable"
            variant="filled"
            fullWidth
          />
          <TextField
            placeholder="First Name"
            margin="normal"
            label="lable"
            variant="outlined"
            multiline
            rows={4}
            rowsMax={8}
            fullWidth
          />
        </Box>
      </Container>
    </>
  );
}
