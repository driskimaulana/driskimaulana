import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";

export default makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
    },

    locationMailContainer: {
        display: "flex",
        justifyContent: "space-evenly",
    },

    detailContainer: {
        display: "flex",
        alignItems: "center",
        columnGap: "10px"
    },

    button: {
        "&:hover": {
            "cursor": "pointer",
        },
        border: "none",
        borderRadius: "10px",
        padding: "10px 50px",
        fontWeight: "bold",
        backgroundColor: "#323232",
    },

    skillsContainer: {
        display: "flex",
        columnGap: "20px",
        justifyContent: "space-around",
        rowGap: "20px",
    },

    skillsItem: {
        display: "flex",
        backgroundColor: "#323232",
        flexDirection: "column",
        padding: "10px 30px",
        borderRadius: "20px",
        rowGap: "10px",
        justifyContent: "center",
        height: "121px",
        width: "70px",
    }
}))