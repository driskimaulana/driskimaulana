import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";

import useStyles from "./style";
import ContactAnim from "./../../../data/images/pana.png";
import Mail from "./../../../data/images/mail_1.png";
import Github from "./../../../data/images/github_1.png";
import Instagram from "./../../../data/images/instagram_1.png";
import Linkedin from "./../../../data/images/linkedin_1.png";

const Contact = () => {

    const classes = useStyles();

    return(
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography variant="h1" fontWeight="bold" fontSize="48px">
                    Contact Me
                </Typography>

                <img src={ContactAnim} alt="contact animations" style={{ width: "80%" }} />
                <Typography variant="p" fontSize="18px">
                    You can get in touch with me via <span><a href="mailto:maulanadriski@gmail.com">email</a></span> or my other social media.
                </Typography>

                <Box className={classes.socmedContainer}>
                    <Link href="https://linkedin.com/in/driskimaulana" target="_blank">
                        <img src={Linkedin} alt="linkedin icon"/>
                    </Link>
                    <Link href="https://github.com/driskimaulana" target="_blank">
                        <img src={Github} alt="github icon"/>
                    </Link>
                    <Link href="https://instagram.com/driskimaulana" target="_blank">
                        <img src={Instagram} alt="instagram icon"/>
                    </Link>
                    <Link href="mailto:maulanadriski@gmail.com" target="_blank">
                        <img src={Mail} alt="mail icon"/>
                    </Link>
                </Box>
            </Box>
        </Grid>
    )
}

export default Contact;