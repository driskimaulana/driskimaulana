import { Box, Grid, Typography } from "@mui/material";

import useStyles from "./style";

const Blog = () => {

    const classes = useStyles();
    
    return(
        <div id="main">
            <Grid item xs={12} md={9}>
                <Box className={classes.container}>
                    <Typography variant="h1" fontWeight="bold" fontSize="48px">
                        Blog
                    </Typography>

                    <Typography variant="p" fontSize="18px">
                        Coming Soon ...
                    </Typography>
                </Box>
            </Grid>
        </div>
    )

}

export default Blog;