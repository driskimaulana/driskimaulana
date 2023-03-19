import React, { useState, useEffect, useRef } from "react";

import { createTheme, Grid, ThemeProvider, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Header from "./components/Header/Header";
import Blog from "./components/Main/Blog/Blog";
import Home from "./components/Main/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Portfolio from "./components/Main/Portfolio/Portfolio";
import Certifications from "./components/Main/Certifications/Certifications";
import Contact from "./components/Main/Contact/Contact";
import PortfolioDetails from "./components/Main/PortfolioDetails/PortfolioDetails";
import Footer from "./components/Footer/Footer";
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

function App() {

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Poppins',
        color: '#323232'
      }
    },
    palette: {
      primary: {
        main: '#323232'
      },
      secondary: {
        main: '#ffffff'
      }
    }
  })

  const [menu, setmenu] = useState(0);

  const [slug, setslug] = useState("");

  const [value, setvalue] = useState(0);
  const ref = useRef(null);

  React.useEffect(() => {
    // ref.current.ownerDocument.body.scrollTop = 0;
    setmenu(value);
    // setMessages(refreshMessages());
  }, [value, setmenu]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main>
          <Grid container spacing={8} sx={{ padding: "40px", justifyContent: "center" }} >
            <Sidebar changeMenu={setmenu} activeMenu={menu} />
            { menu === 0 && <Home /> }
            { menu === 1 && <Blog /> }
            { menu === 2 && <Portfolio changeMenu={setmenu} changeSlug={setslug} /> }
            { menu === 3 && <Certifications /> }
            { menu === 4 && <Contact /> }
            { menu === 5 && <PortfolioDetails slug={slug} /> }
          </Grid>
        </main>
        <footer>
          <Footer />
        </footer>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, 

          '@media(min-width:500px)': {
            display: "none",
          }

        }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setvalue(newValue);
            }}
            sx={{
              backgroundColor: "#949494"
            }}
          >
            <BottomNavigationAction value={0} sx={{color: "#fff"}} color="white" label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction value={1} sx={{color: "#fff"}} color="white" label="Blog" icon={<FeedIcon />} />
            <BottomNavigationAction value={2} sx={{color: "#fff"}} label="Portfolio" icon={<DeveloperModeIcon />} />
            <BottomNavigationAction value={3} sx={{color: "#fff"}} label="Certifications" icon={<WorkspacePremiumIcon />} />
            <BottomNavigationAction value={4} sx={{color: "#fff"}} label="Contact" icon={<ContactSupportIcon />} />
          </BottomNavigation>
      </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
