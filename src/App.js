import React, { useState } from "react";

import { createTheme, Grid, ThemeProvider } from "@mui/material";
import Header from "./components/Header/Header";
import Blog from "./components/Main/Blog/Blog";
import Home from "./components/Main/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Portfolio from "./components/Main/Portfolio/Portfolio";
import Certifications from "./components/Main/Certifications/Certifications";
import Contact from "./components/Main/Contact/Contact";
import PortfolioDetails from "./components/Main/PortfolioDetails/PortfolioDetails";
import Footer from "./components/Footer/Footer";

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
        main: '#D9D9D9'
      }
    }
  })

  const [menu, setmenu] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main>
          <Grid container spacing={8} sx={{ padding: "40px" }}>
            <Sidebar changeMenu={setmenu} />
            { menu === 0 && <Home /> }
            { menu === 1 && <Blog /> }
            { menu === 2 && <Portfolio changeMenu={setmenu} /> }
            { menu === 3 && <Certifications /> }
            { menu === 4 && <Contact /> }
            { menu === 5 && <PortfolioDetails /> }
          </Grid>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
