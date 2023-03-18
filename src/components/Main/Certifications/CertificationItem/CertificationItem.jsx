import { Card, CardContent, CardMedia, Typography, Box, Divider, Link } from "@mui/material";
import React from "react";

import useStyles from "./style";
import CalendarIcon from "./../../../../data/images/calendar.png";
import CompanyIcon from "./../../../../data/images/company.png";

const CertificationItem = ( props ) => {

    const classes = useStyles();

    const certification = props.certification;

    return(
        <Link href={ certification.credentials } sx={{ textDecoration: "none" }} target="_blank" >
            <Card sx={{ borderRadius: "20px" }} >
                <Box  >
                    <CardContent className={`${classes.container}`}>
                        <Typography variant="h3" fontWeight="bold" fontSize="28px" color="white">
                            { certification.name }
                        </Typography>
                        <Box className={classes.containerDetail}>
                            <img src={CompanyIcon} alt="company icon" />
                            <Typography variant="p" fontSize="10px" color="white">
                                { certification.company }
                            </Typography>
                        </Box>
                        <Box className={classes.containerDetail}>
                            <img src={CalendarIcon} alt="calendar icon" />
                            <Typography variant="p" fontSize="10px" color="white">
                                { certification.date }
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Link>
    )

}

export default CertificationItem;