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
        
        borderRadius: "20px",
        columnGap: "20px"
    },

    containerColor: {
        backgroundColor: "#949494",
    },

    button : {
        borderRadius: "20px",
        border: "none",
    }

    
}))