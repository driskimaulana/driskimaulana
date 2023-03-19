import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({

    container: {
        '@media(max-width: 500px)': {
            // width:
        },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#323232",
        alignItems: "center",
        borderRadius: "20px",
        justifyContent: "center",
        rowGap: "10px",
    },

    avatar: {
        '@media(max-width: 500px)': {
            marginTop: "0px"
        },
        backgroundColor: "#D9D9D9", 
        marginTop: "40px"
    },

    socmedContainer: {
        display: "flex",
        columnGap: "10px",
    },

    menuContainer: {
        '@media(max-width: 500px)': {
            display: "none",
        },
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        width: "100%",
        marginTop: "20px",
        paddingBottom: "40px",
    }
    
}))