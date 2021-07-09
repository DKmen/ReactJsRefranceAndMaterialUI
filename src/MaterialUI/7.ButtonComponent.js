import React from "react";

import { Container, Typography, Paper, Box, Button } from "@material-ui/core";

import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";

export default function ButtonComponent(props) {
  return (
    <>
      <Container maxWidth="md">
        <Paper square elevation={4} component={Box} m={4}>
          <Box p={4}>
            <Typography variant="h4">All About Button</Typography>
            <Button color="secondary">Simple Button</Button>
            <Button variant="outlined" color="primary" size="medium">
              Button1
            </Button>
            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<AccessAlarmsIcon />}
            >
              Button2
            </Button>
            <Button variant="contained" color="secondary" fullWidth>
              Button Full width
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
