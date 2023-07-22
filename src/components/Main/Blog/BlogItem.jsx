import React from "react";
import { Card, Box, CardContent, Typography, CardMedia, Link } from "@mui/material";

const BlogItem = ( props ) => {

    return (
        <Card >
            <Link sx={{ display: 'flex', textDecoration: 'none' }} href={props.blog.link} target="_blank">
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" fontWeight='bold'>
                            {props.blog.title}
                        </Typography>
                        <Typography variant="subtitle4" color="text.secondary" mt={2} component="div">
                            {props.blog.summary}
                        </Typography>
                        </CardContent>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 300 }}
                        image={props.blog.cover}
                        alt={props.blog.title}
                    />
            </Link>
        </Card>
    )
}

export default BlogItem;