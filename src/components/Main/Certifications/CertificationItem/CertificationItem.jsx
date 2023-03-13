import { Card, CardContent, CardMedia, Typography, Box, Divider, Link } from "@mui/material";
import React from "react";

import useStyles from "./style";
import CalendarIcon from "./../../../../data/images/calendar.png";
import CompanyIcon from "./../../../../data/images/company.png";

const CertificationItem = ( props ) => {

    const classes = useStyles();

    return(
        <Link href="" sx={{ textDecoration: "none" }}>
            <Card className={``} sx={{ borderRadius: "20px" }} >
                <Box  >
                    <CardContent className={`${classes.container}`}>
                        <Typography variant="h3" fontWeight="bold" fontSize="28px" color="white">
                            Belajar Dasar Pemrograman JavaScript
                        </Typography>
                        <Box className={classes.containerDetail}>
                            <img src={CompanyIcon} alt="company icon" />
                            <Typography variant="p" fontSize="10px" color="white">
                                Dicoding
                            </Typography>
                        </Box>
                        <Box className={classes.containerDetail}>
                            <img src={CalendarIcon} alt="calendar icon" />
                            <Typography variant="p" fontSize="10px" color="white">
                                January 2023
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    )

}

export default CertificationItem;