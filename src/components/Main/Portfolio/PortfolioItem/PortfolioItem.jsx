import { Card, CardContent, CardMedia, Typography, Box, Divider } from "@mui/material";
import React, { useEffect } from "react";

import useStyles from "./style";

import client from "../../../../client";

const PortfolioItem = ( props ) => {

    const classes = useStyles();

    const handleClick = () => {
        props.changeMenu(5);
        props.changeSlug(props.slug)
    }

    const portfolio = props.portfolio;

    return(
        <Card key={portfolio.name} className={`${classes.cardContainer} ${classes.fullCard}`} sx={{ borderRadius: "20px" }} onClick={handleClick} >
            <Box className={`${classes.container} ${classes.fullCard}`} >
                <CardMedia component="img" sx={{ width: "40%", maxWidth: "200px", backgroundColor: "#949494", objectFit: "cover", minWidth: "100px" }} image={portfolio.screenshots != null ? portfolio.screenshots[0] : "https://cdn-icons-png.flaticon.com/512/3419/3419233.png"} alt="cover portfolio" />
                <Divider sx={{ backgroundColor: "#D9D9D9" }} orientation="vertical" />
                <CardContent sx={{ width: "60%" }}>
                    <Typography
                      sx={{
                        '@media(max-width: 700px)': {
                            fontSize: "20px",
                        },
                        }}
                      variant="h1" fontSize={24} fontWeight="bold" color="white">
                        {portfolio.name}
                    </Typography>
                    <Typography variant="p" fontSize={14} color="white">
                        {portfolio.category}
                    </Typography>
                    <Divider sx ={{ backgroundColor: "#D9D9D9", marginBottom: "10px" }} />
                    <Typography variant="p" fontSize={10} color="white">
                        {portfolio.description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )

}

export default PortfolioItem;