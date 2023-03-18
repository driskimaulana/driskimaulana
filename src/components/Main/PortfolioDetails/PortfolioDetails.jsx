import React, {useEffect, useState} from "react";
import { Box, Grid, Typography, Link, ImageList, ImageListItem, CircularProgress } from "@mui/material";

import useStyles from "./style";
import ToGithubIcon from "./../../../data/images/togithub.png";

import client from "../../../client";

const PortfolioDetails = ( props ) => {

    const classes = useStyles();

    const slug = props.slug;

    const [portfolio, setportfolio] = useState(null);

    useEffect(() => {
        client.fetch(
          `
          *[_type=="portfolio" && slug == "${slug}"]{
              name,
              category,
              description,
              tools,
              github,
              link,
              screenshots
            }
            `
        ).then((data) => {
          console.log(data);
          setportfolio(data[0]);
        }).catch(console.error);
      }, [])

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
            {
                portfolio == null 
                ?
                <center>
                    <CircularProgress />
                </center>
                :
                <Box className={classes.container}>
                    <Typography variant="h1" fontWeight="bold" fontSize="48px">
                        { portfolio.name }
                    </Typography>
                    <Typography variant="p" fontSize="15px">
                        { portfolio.description }
                    </Typography>
                    <Typography variant="h1" fontWeight="bold" fontSize="48px">
                        Tools & Technologies
                    </Typography>
                    <Typography variant="p" fontSize="15px">
                        { portfolio.tools }
                    </Typography>
                    <Link href={portfolio.github} sx={{ width: "120px" }} target="_blank">
                        <img src={ToGithubIcon} alt="to github icon" style={{ width: "120px" }} />
                    </Link>
                    <Typography variant="h1" fontWeight="bold" fontSize="48px">
                        Screenshots
                    </Typography>
                    <ImageList cols="8">
                        {
                            portfolio.screenshots != null 
                            &&
                            portfolio.screenshots.map((item) => (
                                <ImageListItem>
                                    <img src={`${item}`} alt="item" style={{ width: "auto", height:"300px"}}/>
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                </Box>
            }
            
        </Grid>
    )
}

export default PortfolioDetails;