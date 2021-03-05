export default {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0",
        bottom: "0",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: ".8rem",
        display: "flex",
        justifyContent: "space-between"
    },
    DeleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}