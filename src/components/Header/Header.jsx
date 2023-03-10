import { Box, Link, Typography } from "@mui/material";
import HeaderImg from "./../../data/images/header.png";
import useStyles from './style';

import NamedSocmed from "./MainSocmed/NamedSocmed";
import TextAnimation from "react-text-animations";
import MyLogo from "./../../data/images/mylogo.png";

const Header = () => {

    const classes = useStyles();

    return (
        <header id="home" >
            <Link href="#home" >
                <img src={MyLogo} alt="mylogo" style={{ position: "absolute", padding: "20px" }} />
            </Link>
            <img src={HeaderImg} alt="header" className={classes.coverImg} />
            <Box className={classes.container}>
                <Box className={classes.typography} >
                    <Typography variant="h1" sx={{ display: "flex" }} fontSize="48px" color="secondary" fontWeight="bold" >
                        <TextAnimation.Rotate1 cname={classes.name}  target="Hello" text={[" Hello", " Hai"]}>
                        Hello
                        </TextAnimation.Rotate1>
                        , I'm D'Riski!

                    </Typography>
                    <Typography variant="h3" fontSize="68px" color="secondary" fontWeight="bold" >
                        Software Engineer
                    </Typography>
                    <Box className={classes.socmedList} >
                        <NamedSocmed />
                    </Box>
                </Box>
                
            </Box>
           
            
        </header>
    )

}

export default Header;