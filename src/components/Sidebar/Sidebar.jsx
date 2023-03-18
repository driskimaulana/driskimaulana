import { Avatar, Box, Drawer, Grid, Link, Typography } from "@mui/material";

import Driski from "./../../data/images/driskimaulana.png";
import useStyle from "./style";
import Mail from "./../../data/images/mail_2.png";
import Github from "./../../data/images/github_2.png";
import Instagram from "./../../data/images/instagram_2.png";
import Medium from "./../../data/images/medium_2.png";
import Linkedin from "./../../data/images/linkedin_2.png";
import MenuItem from "./MenuItem/MenuItem";

import Certifications from "./../../data/images/certifications.png";
import Blog from "./../../data/images/blog.png";
import Contact from "./../../data/images/contactme.png";
import Portfolio from "./../../data/images/portfolio.png";
import Home from "./../../data/images/home.png";

const Sidebar = ( props ) => {

    const classes = useStyle();

    return(
        <Grid item xs={10} md={3}>
           <aside>
                <Box className={classes.container}  sx={{ padding: "20px" }}>
                    <Avatar src={Driski} alt="D'Riski Maulana" className={classes.avatar} sx={{ width: "150px", height: "150px",}} />
                    <Typography variant="p" fontWeight="bold" color="secondary" fontSize="24px">
                        D'Riski Maulana
                    </Typography>
                    <Box className={classes.socmedContainer}>
                        <Link href="https://linkedin.com/in/driskimaulana" target="_blank">
                            <img src={Linkedin} alt="linkedin icon"/>
                        </Link>
                        <Link href="https://github.com/driskimaulana" target="_blank">
                            <img src={Github} alt="github icon"/>
                        </Link>
                        <Link href="https://instagram.com/driskimaulana" target="_blank">
                            <img src={Instagram} alt="instagram icon"/>
                        </Link>
                        <Link href="mailto:maulanadriski@gmail.com" target="_blank">
                            <img src={Mail} alt="mail icon"/>
                        </Link>
                        <Link href="https://medium.com/@driskimaulana" target="_blank">
                            <img src={Medium} alt="medium icon"/>
                        </Link>
                    </Box>
                    <Typography variant="p" color="secondary" fontSize="11px" maxWidth="200px" textAlign="center">
                        Software Engineer | Cloud Computing Student at Bangkit Academy
                    </Typography>
                    <Box className={classes.menuContainer}>
                        <MenuItem changeMenu={props.changeMenu} menuNumber={0} menuIcon={Home} menuName="Home" activeMenu={props.activeMenu} />
                        <MenuItem changeMenu={props.changeMenu} menuNumber={1} menuIcon={Blog} menuName="Blog" activeMenu={props.activeMenu} />
                        <MenuItem changeMenu={props.changeMenu} menuNumber={2} menuIcon={Portfolio} menuName="Portfolio" activeMenu={props.activeMenu} />
                        <MenuItem changeMenu={props.changeMenu} menuNumber={3} menuIcon={Certifications} menuName="Certifications" activeMenu={props.activeMenu} />
                        <MenuItem changeMenu={props.changeMenu} menuNumber={4} menuIcon={Contact} menuName="Contact Me" activeMenu={props.activeMenu} />
                    </Box>
                </Box>
           </aside>

        </Grid>
    );
}

export default Sidebar;