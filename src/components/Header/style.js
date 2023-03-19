import { makeStyles } from "@mui/styles";

const windowHeight = window.innerHeight;

export default makeStyles(() => ({
    coverImg : {
        height: windowHeight,
        width: "100%",
        objectFit: "cover",
    }, 
    typography: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        top: "30%",
        rowGap: "30px"
    },
    logo: {
        position: "absolute", 
        padding: "20px",
    },
    h1: {
        fontSize:"48px", 
        color:"secondary",
        fontWeight:"bold"
    },
    container: {
        display: "flex",
        justifyContent: "center",
    },
    socmedList: {
        display: "flex",
        columnGap: "40px",
        '@media(max-width: 800px)': {
            // flexDirection: "column",
            columnGap: "20px",
            rowGap: "10px",
            justifyContent: "center",
        }
    },
    name: {
        color: "yellow",
    }
}))