import React from "react";

import { Container, Grid, Typography, Button, Card, CardContent,
    CardActions,
    CardActionArea,
    CardMedia,
    CardHeader,
    Avatar,
    IconButton,} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";




const useStyles = makeStyles((them) => {
  return {
    root: {},
  };
});




export default function CardComponent(props) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Grid container justify="space-around">
          <Grid item md={4}>
            <Card variant="outlined">
              <CardHeader
                avatar={<Avatar>DK</Avatar>}
                title="Philipina Image"
                subheader="Drimil Mendapara"
                action={
                    <IconButton>
                      <AddShoppingCartIcon />
                    </IconButton>
                  }
              />
              <CardActionArea>
                <CardMedia
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  component="img"
                  height={200}
                />
                <CardContent>
                  <Typography variant="h4">Main Title</Typography>
                  <Typography variant="body1">
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card variant="outlined">
              <CardHeader
                avatar={<Avatar>DK</Avatar>}
                title="Philipina Image"
                subheader="Drimil Mendapara"
                action={
                  <IconButton>
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />
              <CardActionArea>
                <CardMedia
                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                  component="img"
                  height={200}
                />
                <CardContent>
                  <Typography variant="h4">Main Title</Typography>
                  <Typography variant="body1">
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
