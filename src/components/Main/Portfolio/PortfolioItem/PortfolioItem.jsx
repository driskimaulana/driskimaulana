import { Card, CardContent, CardMedia, Typography, Box, Divider } from "@mui/material";
import React from "react";

import useStyles from "./style";

const PortfolioItem = ( props ) => {

    const classes = useStyles();

    const handleClick = () => {
        props.changeMenu(5);
    }

    return(
        <Card className={`${classes.cardContainer} ${classes.fullCard}`} sx={{ borderRadius: "20px" }} onClick={handleClick} >
            <Box className={`${classes.container} ${classes.fullCard}`} >
                <CardMedia component="img" sx={{ width: "40%", objectFit: "cover" }} image="https://www.linkpicture.com/q/1657538476597-1.jpg" alt="cover portfolio" />
                <Divider sx={{ backgroundColor: "#D9D9D9" }} orientation="vertical" />
                <CardContent>
                    <Typography variant="h1" fontSize={24} fontWeight="bold" color="white">
                        Covid Info Application
                    </Typography>
                    <Typography variant="p" fontSize={14} color="white">
                        Flutter, Android
                    </Typography>
                    <Divider sx ={{ backgroundColor: "#D9D9D9", marginBottom: "10px" }} />
                    <Typography variant="p" fontSize={10} color="white">
                        The application built in Flutter shows the count of COVID cases in different countries. The data shown in this application is from RapidAPI.
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )

}

export default PortfolioItem;