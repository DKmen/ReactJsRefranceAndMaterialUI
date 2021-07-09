import React from "react";

import {
  Container,
  Typography,
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';



const useStyles = makeStyles((them) => {
  return {
    root: {},
  };
});

export default function CheckBoxComponent(props) {
  const classes = useStyles();

  const [check, setCheck] = React.useState();
  console.log(check)
  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h2">Form Check Box</Typography>
        <Box m={4}>
          <FormControl>
            <FormLabel>Chose gender</FormLabel>
            <FormControlLabel
              label="aggre terms and condition"
              control={
                <Checkbox icon={<BookmarkBorderOutlinedIcon/>} checkedIcon={<BookmarkOutlinedIcon/>} onChange={(event) => setCheck(event.target.checked)} />
              }
            />
          </FormControl>
        </Box>
      </Container>
    </>
  );
}
