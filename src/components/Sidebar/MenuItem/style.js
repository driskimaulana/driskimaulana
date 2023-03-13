import { makeStyles } from "@mui/styles";
import { hover } from "@testing-library/user-event/dist/hover";

export default makeStyles(() => ({
    container: {
        "&:hover": {
            backgroundColor: "#949494",
            "cursor": "pointer",
        },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: "20px",
        columnGap: "20px"
    },

    button : {
        borderRadius: "20px",
        border: "none",
    }

    
}))