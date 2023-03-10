import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header/Header";

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

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
