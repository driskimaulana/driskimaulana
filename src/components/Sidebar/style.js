import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({

    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#323232",
        alignItems: "center",
        borderRadius: "20px",
        rowGap: "10px",
    },

    avatar: {
        backgroundColor: "#D9D9D9", 
        marginTop: "40px"
    },

    socmedContainer: {
        display: "flex",
        columnGap: "10px",
    },

    menuContainer: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        width: "100%",
        marginTop: "20px",
        paddingBottom: "40px",
    }
    
}))