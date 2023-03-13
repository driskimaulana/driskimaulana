import { Autocomplete, Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { width } from "@mui/system";
import React, {useState} from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

import useStyles from "./style";

const Portfolio = (props) => {

    const classes = useStyles();

    const categoryList = [
        "Android",
        "Game",
        "API",
        "Web Application"
    ];

    const [category, setcategory] = useState("");

    const handleSelect = (event) => {
        setcategory(event.target.value);
    }

    return (
        <Grid item xs={12} md={9}>
            <Box className={classes.container}>
                <Typography variant="h1" fontWeight="bold" fontSize="48px">
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
                    </Select>
                </FormControl>

                <PortfolioItem changeMenu={props.changeMenu} />
            </Box>
        </Grid>
    )

}

export default Portfolio;