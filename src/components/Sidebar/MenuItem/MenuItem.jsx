import {Box, Button} from "@mui/material";

import useStyles from "./style";
import Certifications from "./../../../data/images/certifications.png";
import Blog from "./../../../data/images/blog.png";
import Contact from "./../../../data/images/contactme.png";
import Portfolio from "./../../../data/images/portfolio.png";
import Home from "./../../../data/images/home.png";
import { Typography } from "@mui/material";

const MenuItem = ( props ) => {

    const classes = useStyles();

    const handleClick = () => {
        props.changeMenu(props.menuNumber);
    }

    return (
        <button className={classes.button} onClick={handleClick}>
            <Box className={classes.container} pt="10px" pb="10px" paddingLeft="25px">
                <img src={props.menuIcon} alt={props.menuIcon} />
                <Typography variant="p" fontWeight="bold" color="primary" fontSize="12px">{props.menuName}</Typography>
            </Box>
        </button>
    );
}

export default MenuItem;