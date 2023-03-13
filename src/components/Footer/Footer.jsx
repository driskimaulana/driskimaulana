import { Box, Typography } from "@mui/material";
import React from "react";

import useStyles from "./style";

const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.container} >
            <Typography variant="p" fontSize={10} fontWeight="bold" color="secondary">
                © 2023 D’Riski Maulana. All Rights Reserved
            </Typography>
        </Box>
    );
}

export default Footer;