import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    container: {
        display: "flex",
        backgroundColor: "#323232",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        "&:hover": {
            "cursor": "pointer",
            "boxShadow": "5px 5px #595959",
            "backgroundColor": "#696969",
        },
        transition: "background-color 400ms ease-out 100ms",
        rowGap: "10px",
        padding: "20px",
    },

    containerDetail: {
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
    }
}))