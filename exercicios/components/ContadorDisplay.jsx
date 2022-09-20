export default function ContadorDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#fff",
            color: "#000",
            fontSize: "1.5rem",
            margin: "20px"
        }}>
            {props.num}
        </div>
    )
}