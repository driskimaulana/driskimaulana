import { Box, Button, Grid, Typography } from "@mui/material"

import useStyles from "./style";
import LocationIcon from "./../../../data/images/location.png";
import MailIcon from "./../../../data/images/mail.png";
// import CV from "./../../../data/cv/driskimaulanaCV.pdf";
import CV from "./../../../data/cv/cv.pdf";

import Android from "./../../../data/images/android.png";
import Express from "./../../../data/images/express.png";
import Flutter from "./../../../data/images/flutter.png";
import ReactJs from "./../../../data/images/react.png";
import Laravel from "./../../../data/images/laravel.png";
import NodeJs from "./../../../data/images/nodejs.png";

const Home = () => {

    const classes = useStyles();

    return(
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography sx={{
                    '@media(max-width: 700px)': {
                        textAlign: "center",
                    },
                }}  variant="h1" fontWeight="bold" fontSize="48px">
                    About Me
                </Typography>
                <Typography variant="p" fontSize="18px">
                I am a dedicated and driven individual actively seeking a software engineer intern position. With a passion for technology and a strong desire to contribute to innovative projects, 
                I brings a solid foundation in computer science and a thirst for continuous learning.
                </Typography>
                <Grid container className={classes.locationMailContainer}>
                    <a href={CV} download="CV-D'RiskiMaulana">
                        <button className={classes.button}>
                            <Box>
                                <Typography variant="p" color="secondary">
                                    Download CV
                                </Typography>
                            </Box>
                        </button>
                    </a>

                    <Box className={classes.detailContainer}>
                        <img src={LocationIcon} alt="location icon" />
                        <Typography variant="p">
                            Bandung, Indonesia
                        </Typography>
                    </Box>
                    
                    <Box className={classes.detailContainer} >
                        <img src={MailIcon} alt="mail icon" />
                        <Typography variant="p">
                            maulanadriski@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                <Typography sx={{
                    '@media(max-width: 700px)': {
                        textAlign: "center",
                    },
                }} variant="h1" fontWeight="bold" fontSize="48px">
                    Skills
                </Typography>
                <Grid container className={classes.skillsContainer}>
                    <Grid item>
                        <Box className={classes.skillsItem}>
                            <img src={NodeJs} alt="node js"/>
                            <Typography variant="p" color="secondary" fontWeight="bold">
                                Node Js
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.skillsItem}>
                            <img src={Express} alt="node js"/>
                            <Typography variant="p" color="secondary" fontWeight="bold">
                                Express
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.skillsItem}>
                            <img src={Android} alt="node js"/>
                            <Typography variant="p" color="secondary" fontWeight="bold">
                                Android
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.skillsItem}>
                            <img src={Flutter} alt="node js"/>
                            <Typography variant="p" color="secondary" fontWeight="bold">
                                Flutter
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.skillsItem}>
                            <img src={ReactJs} alt="node js"/>
                            <Typography variant="p" color="secondary" fontWeight="bold">
                                ReactJs
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.skillsItem}>
                            <img src={Laravel} alt="node js"/>
                            <Typography variant="p" color="secondary" fontWeight="bold">
                                Laravel
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Home;