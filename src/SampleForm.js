import React from "react";
import qs from 'qs';
import axios from 'axios';

import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  CssBaseline,
  Button,
  Grid,
  Dialog,
  Box,
  Hidden,
  TextField,
  CardMedia,
} from "@material-ui/core";

import Logo from "./Logo.svg";


export default function SampleForm(props) {
  const [openDialog, setOpenDialog] = React.useState(false);



  const [time, setTime] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [hear, setHear] = React.useState("");

  const selectTime = (event) => setTime(event.target.value);
  const selectHearAbout = (event) => setHear(event.target.value);


  const summitEvent = async()=>{

	// Build the Field Ids and Answers dictionary object
	// (replace with your Google Form Ids and Answers)
	var bodyValues = 
	{
    'entry.923575230':'we', 
    'entry.959771919':'wed', 
    'entry.1470857061':9999999990, 
    'entry.766642417':'1 - 2',
    'entry.210369612':'Facebook' 
	};
  //https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

	var response = await axios.post('https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse',qs.stringify(bodyValues));

	// Use the StatusCode and Response Content
      console.log(response +"con");
  }

  return (
    <>
      <CssBaseline />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item md={6} sm={12}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setOpenDialog(!openDialog)}
            fullWidth
          >
            Open Register Form
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        component={Box}
        maxWidth="md"
        fullWidth
      >
        <Grid container>
          <Grid item md={5}>
            <Hidden smDown>
              <Grid
                container
                justify="center"
                alignContent="center"
                alignItems="center"
                fullWidth
                style={{
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  height: "100%",
                  background:
                    "linear-gradient(to right, #473B7B,#3584A7,#30D2BE)",
                }}
              >
                <Grid item>
                  <CardMedia component="img" src={Logo} />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ color: "white" }}
                  >
                    PolyMatic
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ color: "white" }}
                  >
                    Redesign Everything
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
          <Grid item md={7} sm={12} component={Box} py={4} px={2}>
            <Typography
              align="center"
              style={{ lineHeight: "10px", fontSize: "2em" }}
              component={Box}
              marginBottom={0}
            >
              Get A Free Demo
            </Typography>
            <Typography
              align="center"
              style={{ margin: 20, lineHeight: 1, fontSize: "2em" }}
            >
              It's Completely
              <Typography
                component={Box}
                display="inline"
                style={{ fontSize: "1em" }}
                color="primary"
              >
                Free
              </Typography>
            </Typography>
            <Box p={1} fullWidth>
              <Typography
                variant="body1"
                style={{ lineHeight: "16px", fontWeight: 400 }}
              >
                Name
              </Typography>
              <TextField
                placeholder="Enter your name here"
                variant="outlined"
                margin="dense"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                fullWidth
              />
            </Box>
            <Box p={1} fullWidth>
              <Typography
                variant="body1"
                style={{ lineHeight: "16px", fontWeight: 400 }}
              >
                Address
              </Typography>
              <TextField
                placeholder="Enter your address here"
                variant="outlined"
                margin="dense"
                value={address}
                onChange={(event)=>setAddress(event.target.value)}
                fullWidth
              />
            </Box>
            <Box p={1} fullWidth>
              <Typography
                variant="body1"
                style={{ lineHeight: "16px", fontWeight: 400 }}
              >
                Phone Number
              </Typography>
              <TextField
                type="Number"
                variant="outlined"
                margin="dense"
                value={number}
                onChange={(event)=>setNumber(event.target.value)}
                fullWidth
              />
            </Box>
            <FormControl component={Box} p={1} style={{ padding: 8 }} fullWidth>
              <Typography
                variant="body1"
                style={{ lineHeight: "16px", fontWeight: 400 }}
              >
                Select Demo Time
              </Typography>
              <RadioGroup value={time} onChange={selectTime} row>
                <FormControlLabel
                  control={
                    <Radio
                      icon={
                        <Box
                          px={1}
                          border={1}
                          style={{ paddingTop: 2, paddingBottom: 2 }}
                          borderRadius={4}
                        >
                          <Typography>1 - 3</Typography>
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          px={1}
                          border={1}
                          borderRadius={4}
                          style={{
                            background:
                              "linear-gradient(to right, #473B7B,#3584A7,#30D2BE)",
                            color: "white",
                            paddingTop: 2,
                            paddingBottom: 2,
                          }}
                        >
                          <Typography>1 - 3</Typography>
                        </Box>
                      }
                    />
                  }
                  value="1 - 3"
                />
                <FormControlLabel
                  control={
                    <Radio
                      icon={
                        <Box
                          px={1}
                          border={1}
                          style={{ paddingTop: 2, paddingBottom: 2 }}
                          borderRadius={4}
                        >
                          <Typography>3 - 4</Typography>
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          px={1}
                          border={1}
                          borderRadius={4}
                          style={{
                            background:
                              "linear-gradient(to right, #473B7B,#3584A7,#30D2BE)",
                            color: "white",
                            paddingTop: 2,
                            paddingBottom: 2,
                          }}
                        >
                          <Typography>3 - 4</Typography>
                        </Box>
                      }
                    />
                  }
                  value="3 - 4"
                />
                <FormControlLabel
                  control={
                    <Radio
                      icon={
                        <Box
                          px={1}
                          border={1}
                          style={{ paddingTop: 2, paddingBottom: 2 }}
                          borderRadius={4}
                        >
                          <Typography>5 - 6</Typography>
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          px={1}
                          border={1}
                          borderRadius={4}
                          style={{
                            background:
                              "linear-gradient(to right, #473B7B,#3584A7,#30D2BE)",
                            color: "white",
                            paddingTop: 2,
                            paddingBottom: 2,
                          }}
                        >
                          <Typography>5 - 6</Typography>
                        </Box>
                      }
                    />
                  }
                  value="5 - 6"
                />
                <FormControlLabel
                  control={
                    <Radio
                      icon={
                        <Box
                          px={1}
                          border={1}
                          style={{ paddingTop: 2, paddingBottom: 2 }}
                          borderRadius={4}
                        >
                          <Typography>7 - 8</Typography>
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          px={1}
                          border={1}
                          borderRadius={4}
                          style={{
                            background:
                              "linear-gradient(to right, #473B7B,#3584A7,#30D2BE)",
                            color: "white",
                            paddingTop: 2,
                            paddingBottom: 2,
                          }}
                        >
                          <Typography>7 - 8</Typography>
                        </Box>
                      }
                    />
                  }
                  value="7 - 8"
                />
              </RadioGroup>
            </FormControl>
            <Box fullWidth p={1} marginBottom={1}>
              <Typography variant="body1" style={{ fontWeight: 400 }}>
                Where did you hear about us ?
              </Typography>
              <Select variant="outlined" value={hear} onChange={selectHearAbout} margin="dense" fullWidth>
                <MenuItem value={1}>Google</MenuItem>
                <MenuItem value={2}>Facebook</MenuItem>
                <MenuItem value={3}>Friends</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
              </Select>
            </Box>
            <Button
              variant="contained"
              component={Box}
              style={{
                borderRadius: 40,
                background:
                  "linear-gradient(to right, #473B7B,#3584A7,#30D2BE)",
                color: "white",
                maxWidth: 180,
                textAlign: "center",
                display: "block",
                margin: "auto",
              }}
              onClick={summitEvent}
            >
              Continue
            </Button>
            <Typography
              variant="caption"
              component={Box}
              style={{ marginTop: 10 }}
              display="block"
              align="center"
            >
              By registering here, I agree to PolyMatic’s Terms & Conditions and
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
