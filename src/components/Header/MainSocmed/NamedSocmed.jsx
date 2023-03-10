import { Box, Icon, Link, Typography } from "@mui/material";
import useStyles from "./style";

import Medium from "./../../../data/images/medium_1.png";
import Github from "./../../../data/images/github_1.png";
import Linkedin from "./../../../data/images/linkedin_1.png";


const NamedSocmed = ( props ) => {

    const classes = useStyles();

    return (
        <>
            <Link href="https://medium.com/@driskimaulana" underline="none">
                <Box className={classes.container} >
                    <img src={Medium} alt="medium" />
                    <Typography variant="p" fontSize="14px" color="primary" fontWeight="bold">@driskimaulana</Typography>
                </Box>
            </Link>
            <Link href="https://github.com/driskimaulana" underline="none">
                <Box className={classes.container} >
                    <img src={Github} alt="github" />
                    <Typography variant="p" fontSize="14px" color="primary" fontWeight="bold">@driskimaulana</Typography>
                </Box>
            </Link>
            <Link href="https://linkedin.com/in/driskimaulana" underline="none">
                <Box className={classes.container} >
                    <img src={Linkedin} alt="linkedin" />
                    <Typography variant="p" fontSize="14px" color="primary" fontWeight="bold">@driskimaulana</Typography>
                </Box>
            </Link>
        </>
        
    );
}

export default NamedSocmed;