import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid,  Typography } from "@mui/material";

import useStyles from "./style";
import CertificationItem from "./CertificationItem/CertificationItem";
import client from "../../../client";

const Certifications = () => {

    const classes = useStyles();

    const [certification, setCertification] = useState(null);

    useEffect(() => {
      client.fetch(
        `
        *[_type == "certifications"]{
            name,
            company,
            date,
            credentials
        }
        `
      ).then((data) => {
        setCertification(data);
      }).catch(console.error);
     
    }, [])
    

    return(
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography sx={{
                    '@media(max-width: 700px)': {
                        fontSize: "24px",
                        textAlign: "center",
                    },
                }} variant="h1" fontWeight="bold" fontSize="48px">
                    Certifications
                </Typography>
                {
                    certification == null 
                    ?
                    <center>
                        <CircularProgress />
                    </center>
                    :
                    certification.map((item) => {
                        return <CertificationItem certification={item} />
                    })
                }
            </Box>
        </Grid>
    )
}

export default Certifications;