import { useState } from "react"

export default function mouse() {
    const [x, alterarX] = useState(0)
   
    
    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

    const estilo = {
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alingnItens: "center",
        backgroundColor: "#265",
        color: "red",
        height: "100vh"
    }

    function quandoMOver(ev) {
        alterarX(ev.clientX)
        alterarY(ev.clientY)
       
    }
    return (
        <div style={estilo} onMouseMove={quandoMOver}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}