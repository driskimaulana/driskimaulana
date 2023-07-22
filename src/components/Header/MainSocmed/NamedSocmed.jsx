import { Box, Icon, Link, Typography } from "@mui/material";
import useStyles from "./style";

import Medium from "./../../../data/images/medium_1.png";
import Github from "./../../../data/images/github_1.png";
import Linkedin from "./../../../data/images/linkedin_1.png";


const NamedSocmed = () => {

    const classes = useStyles();

    return (
        <>
            <Link href="https://medium.com/@driskimaulana" target="_blank" underline="none">
                <Box className={classes.container} >
                    <img src={Medium} alt="medium" className={classes.img} />
                    <Typography variant="p" className={classes.p} >@driskimaulana</Typography>
                </Box>
            </Link>
            <Link href="https://github.com/driskimaulana" target="_blank" underline="none">
                <Box className={classes.container} >
                    <img src={Github} alt="github" className={classes.img} />
                    <Typography variant="p" className={classes.p}>@driskimaulana</Typography>
                </Box>
            </Link>
            <Link href="https://linkedin.com/in/driskimaulana" target="_blank" underline="none">
                <Box className={classes.container} >
                    <img src={Linkedin} alt="linkedin" className={classes.img} />
                    <Typography variant="p" className={classes.p}>@driskimaulana</Typography>
                </Box>
            </Link>
        </>
        
    );
}

export default NamedSocmed;