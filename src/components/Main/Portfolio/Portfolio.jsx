import { Autocomplete, Box, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { width } from "@mui/system";
import React, {useState, useEffect} from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

import useStyles from "./style";
import client from "../../../client";

const Portfolio = (props) => {

    const classes = useStyles();

    const [portfolios, setportfolios] = useState(null);

    // get portfolio data
    useEffect(() => {
        client.fetch(
            `
            *[_type == "portfolio"]{
              name,
              slug,
              category,
              description,
              screenshots
            }
            `
        ).then((data) => {
            setportfolios(data);
        }).catch(console.error);
    
    }, [])
    

    const categoryList = [
        "Android",
        "Game",
        "API",
        "Web Application"
    ];

    const [category, setcategory] = useState("");

    const [filteredPortfolio, setfilteredPortfolio] = useState(null);

    const handleSelect = (event) => {
        if (event.target.value === "All") {
            setfilteredPortfolio(null);
            setcategory(event.target.value);
            return;
        }
        const filter = portfolios.filter(item => item.category === event.target.value);
        setfilteredPortfolio(filter);
        setcategory(event.target.value);
    }


    return (
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography sx={{
                    '@media(max-width: 700px)': {
                        fontSize: "32px",
                        textAlign: "center",
                    },
                }} variant="h1" fontWeight="bold" fontSize="48px">
                    Portfolio
                </Typography>
                <FormControl fullWidth>
                    <InputLabel id="select-category-label">Category</InputLabel>
                    <Select
                        labelId="select-category-label"
                        id="select-category"
                        value={category}
                        label="Category"
                        onChange={handleSelect}
                    >
                        <MenuItem value="Android">Android</MenuItem>
                        <MenuItem value="Game">Game</MenuItem>
                        <MenuItem value="API">API</MenuItem>
                        <MenuItem value="Web Application">Web Application</MenuItem>
                        <MenuItem value="All">All</MenuItem>
                    </Select>
                </FormControl>
                {
                    portfolios == null 
                    ? 
                    <center>
                        <CircularProgress />
                    </center>
                    :
                    <tbody>
                    {
                        
                        filteredPortfolio == null 
                            ?
                            portfolios != null 
                            &&
                            portfolios.map((item) => {
                                return <PortfolioItem changeValue={props.changeValue} changeMenu={props.changeMenu} slug={item.slug} changeSlug={props.changeSlug} portfolio={item}/> 
                            })
                            :
                            filteredPortfolio.map((item) => {
                                return <PortfolioItem changeValue={props.changeValue} changeMenu={props.changeMenu} slug={item.slug} changeSlug={props.changeSlug} portfolio={item} /> 
                            })
                    }
                    </tbody>            
                }

            </Box>
        </Grid>
    )

}

export default Portfolio;