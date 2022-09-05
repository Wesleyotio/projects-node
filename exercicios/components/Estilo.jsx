export default function Estilo(props) {

    const classAplicada = props.numero >= 0 ? "azul" : "vermelho"


    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.direita ? "right" : "left"
                
            }}>
                Texto
            </h1>
            <h2 className={classAplicada} >
                Texto #02
            </h2>
        </div>
    )
}