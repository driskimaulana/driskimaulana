import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        justifyContent: "center",
        alignItems: 'center',
        
    },

    socmedContainer: {
        '@media(max-width: 700px)': {
            justifyContent: "center",
        },
        display: "flex",
        columnGap: "10px",
        alignItems: "center",
        
    },
}))