import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    coverImg : {
        width: "100%",
        objectFit: "cover",
    }, 
    typography: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        top: "25%",
        rowGap: "30px"
    },
    container: {
        display: "flex",
        justifyContent: "center",
    },
    socmedList: {
        display: "flex",
        columnGap: "40px",
    },
    name: {
        color: "yellow",
    }
}))