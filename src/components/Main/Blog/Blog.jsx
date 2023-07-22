import React, {useEffect, useState} from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import client from "../../../client";
import useStyles from "./style";
import BlogItem from "./BlogItem";

const Blog = () => {

    const classes = useStyles();

    const [blog, setblog] = useState(null);

    useEffect(() => {
      client.fetch(
        `
        *[_type == "blog"]{
            title,
            summary,
            cover,
            link
        }
        `
      ).then((data) => {
        setblog(data);
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
                    Blog
                </Typography>
                {
                    blog == null 
                    ?
                    <center>
                        <CircularProgress />
                    </center>
                    :
                    blog.map((item) => {
                        return <BlogItem blog={item} />
                    })
                }
            </Box>
        </Grid>
    )

}

export default Blog;