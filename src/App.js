import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    fontSize: '1rem'
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Raisely() {
  const classes = useStyles();

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('https://api.raisely.com/v3/campaigns/raisely-pk-8c047df67a79692b5eb4e0afccee9b06').then((res) => {
      setCampaigns(res.data.data);
      console.log(campaigns);
    })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>

        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Raisely layout
            </Typography>
            <Typography className={classes.heroContent} variant="h5" align="left" color="textSecondary" paragraph>
              1. <strong>Why would you be a good fit for the Campaign Developer role?</strong> <em>I have nearly a decade of experience as a freelance web developer/designer working across multiple genres.</em> <br /><br />
              2. <strong>Why do you want to work here over somewhere else?</strong> <em>Remote and actually working for a good cause.</em> <br /><br />
              3. <strong>Look at this list of tasks and tell us which two you are excited by, which two you want to learn and the two you don’t want to do.</strong> <em> I would like to learn how to customize a raisely pre-built theme and run SQL reports. I'm excited about all of them, but the main two are helping customers create rapid-response campaigns to a current crisis and building custom themes on Raisely with sass and javascript. The two things I would probably shy away from is looking at SQL spreadsheets and running SQL reports. </em> <br /><br />
              4. <strong>Tell us about a platform you believe has solved a complex problem really well, and why. Would you change anything in their approach?</strong> <em>I believe Tandem.chat has solved a complex problem with companies and remote worker collaboration.  It's easy for communications and important notes to fall through the cracks when everyone is not in the same office, but this company has made it seamless to collaborate real-time from anywhere about anything. I would not change anything in their approach.</em>
            </Typography>

          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid className={classes.cardGrid} container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {campaigns.name}
                    <br />
                    Goal: {campaigns.goal}
                  </Typography>
                  <Typography>
                    This is a demo campaign from Raisely API.
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <a href={campaigns.url}>Visit Campaign</a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </main>

    </React.Fragment >
  );
}
