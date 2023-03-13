import React from "react";
import { Box, Grid, Typography, Link, ImageList, ImageListItem } from "@mui/material";

import useStyles from "./style";
import ToGithubIcon from "./../../../data/images/togithub.png";

const PortfolioDetails = () => {

    const classes = useStyles();

    const images = [
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
        "https://www.linkpicture.com/q/1657538476597-1.jpg",
    ];

    return(
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography variant="h1" fontWeight="bold" fontSize="48px">
                    Covid Info Application
                </Typography>
                <Typography variant="p" fontSize="15px">
                    The application built in Flutter shows the count of COVID cases in different countries. 
                    The data shown in this application is from RapidAPI.
                </Typography>
                <Typography variant="h1" fontWeight="bold" fontSize="48px">
                    Tools & Technologies
                </Typography>
                <Typography variant="p" fontSize="15px">
                    Flutter
                </Typography>
                <Link href="" sx={{ width: "120px" }}>
                    <img src={ToGithubIcon} alt="to github icon" style={{ width: "120px" }} />
                </Link>
                <Typography variant="h1" fontWeight="bold" fontSize="48px">
                    Screenshots
                </Typography>
                <ImageList cols="8">
                    {
                        images.map((item) => (
                            <ImageListItem>
                                <img src={`${item}`} alt="item" style={{ width: "100px" }}/>
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </Box>
        </Grid>
    )
}

export default PortfolioDetails;