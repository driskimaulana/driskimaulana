import React from "react";
import { Autocomplete, Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

import useStyles from "./style";
import CertificationItem from "./CertificationItem/CertificationItem";

const Certifications = () => {

    const classes = useStyles();

    return(
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography variant="h1" fontWeight="bold" fontSize="48px">
                    Certifications
                </Typography>
                <CertificationItem />
            </Box>
        </Grid>
    )
}

export default Certifications;