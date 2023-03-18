import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    container: {
        display: "flex",
        backgroundColor: "#323232",
        width: "100%",
        height: "100%",
        "&:hover": {
            "cursor": "pointer",
            "boxShadow": "5px 5px #595959",
            "backgroundColor": "#696969",
        },
        transition: "background-color 400ms ease-out 100ms",
    },

    cardContainer: {
        display: "flex", 
        backgroundColor: "primary", 
        height: "195px", 
        alignItems: "center",
        transition: "background-color 2s ease-out 100ms",
        marginBlock: "20px",
    },
}))