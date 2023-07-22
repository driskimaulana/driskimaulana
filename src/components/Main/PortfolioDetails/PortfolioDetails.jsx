import React, {useEffect, useState} from "react";
import { Box, Grid, Typography, Link, ImageList, ImageListItem, CircularProgress } from "@mui/material";

import useStyles from "./style";
import ToGithubIcon from "./../../../data/images/togithub.png";

import client from "../../../client";
import Sidebar from "../../Sidebar/Sidebar";

const PortfolioDetails = ( props ) => {

    const classes = useStyles();

    // const slug = props.slug;
    const slug = window.location.pathname.split("/").pop();

    // console.log(slug2);

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
              screenshots,
              urls
            }
            `
        ).then((data) => {
          console.log(data);
          setportfolio(data[0]);
        }).catch(console.error);
      }, [])



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
                        <Link href={portfolio.github} sx={{ width: "120px" }} target="_blank">
                            <img src={ToGithubIcon} alt="to github icon" style={{ width: "120px" }} />
                        </Link>
                        <Typography variant="h1" fontWeight="bold" fontSize="48px">
                            Tools & Technologies
                        </Typography>
                        <Typography variant="p" fontSize="15px">
                            { portfolio.tools }
                        </Typography>
                        {
                            portfolio.hasOwnProperty('urls') && <Typography variant="h1" fontWeight="bold" fontSize="48px">
                            URLs
                        </Typography>
                        }
                        {
                            portfolio.hasOwnProperty('urls') && portfolio.urls.map((e) => (
                                <Link href={e.value} >
                                    <Typography variant="p">{e.title}</Typography>
                                </Link>
                            ))
                        }

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
                        {
                            portfolio.link && <iframe width="620" height="315" src={portfolio.link}></iframe>
                        }
                    </Box>
                }
                
            </Grid>
    )
}

export default PortfolioDetails;