import { Box, Link, Typography, Grid } from "@mui/material";
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
                <img src={MyLogo} alt="mylogo" 
                    style={
                        { 
                            position: "absolute", 
                            padding: "20px",
                            width: "50px",
                        }
                    } 
                />
            </Link>
            
            <img src={HeaderImg} alt="header" className={classes.coverImg} />
            <Box className={classes.container}>
                <Box className={classes.typography} >
                    <Typography variant="h1" 
                        sx={{ 
                            display: "flex",  
                            '@media (max-width: 800px)': {
                                fontSize:"24px",
                            }
                        }} 
                        fontSize="48px" color="secondary" fontWeight="bold" >
                        <TextAnimation.Rotate1 cname={classes.name}  target="Hello" text={[" Hello", " Hai"]}>
                        Hello
                        </TextAnimation.Rotate1>
                        , I'm D'Riski!

                    </Typography>
                    <Typography 
                        sx={{
                            '@media (max-width: 800px)': {
                                fontSize: "32px"
                            }
                        }}
                        variant="h3" fontSize="68px" color="secondary" fontWeight="bold" >
                        Software Engineer
                    </Typography>
                    <Grid container className={classes.socmedList} >
                        <NamedSocmed />
                    </Grid>
                </Box>
                
            </Box>
           
            
        </header>
    )

}

export default Header;