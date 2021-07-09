import React from "react";

import {
  Container,
  Radio,
  Typography,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((them) => {
  return {
    root: {},
  };
});

export default function RadioButtonComponent(props) {
  const classes = useStyles();

  const [gender,setGender]=React.useState('male');
  const selectGender=(event)=>setGender(event.target.value);
  console.log(gender);
  return (
    <>
      <Container className={classes.root}>
        <Typography variant='h2'>Form Radio Button</Typography>
        <Box m={4}>
            <FormControl>
                <FormLabel>Chose gender</FormLabel>
                <RadioGroup value={gender} onChange={selectGender} row>
                    <FormControlLabel label='Male' control={<Radio/>} value='male'/>
                    <FormControlLabel label='Female' control={<Radio/>} value='female'/>
                    <FormControlLabel label='other' control={<Radio/>} value='other'/>
                </RadioGroup>
            </FormControl>
        </Box>
      </Container>
    </>
  );
}
