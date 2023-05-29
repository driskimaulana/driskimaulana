import { Box } from "@mui/system";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

const StyledRoot = styled('div')({
display: 'flex',
minHeight: '100%',
overflow: 'hidden',
});
  

export default function Layout () {
    return (
        <Box>

        <Header />
        <StyledRoot>
            <Box flex={2}>
                <Sidebar />
            </Box>
            <Box flex={6}>
                <Main>
                    <Outlet />
                </Main>
            </Box>
        </StyledRoot>
        <Footer />
        </Box>
    )
}