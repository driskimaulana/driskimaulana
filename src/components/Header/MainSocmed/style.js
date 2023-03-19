import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";

export default makeStyles(() => ({

    container: {
        '@media(max-width: 800px)' : {
            padding: "5px 10px"
        },
        display: "flex",
        padding: "5px 20px",
        backgroundColor: "#D9D9D9",
        columnGap: "10px",
        alignItems: "center",
        borderRadius: "20px",
    },

    img: {
        '@media(max-width: 800px)': {
            width: "20px",
        }
    },

    p: {
        '@media(max-width: 800px)' : {
            fontSize: "10px",
        },
        fontSize:"14px" ,
        color:"primary" ,
        fontWeight:"bold",
    }

}))