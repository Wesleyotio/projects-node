import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

    const [num, setNum] = useState(0)
 
    const Somar = () => setNum(num +1)
    const Subtrair = () => setNum(num -1)
    
    return ( 
        <div style= {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
            <h1>Contador</h1>
            <ContadorDisplay num={num}/>
            <button onClick={Somar}>+</button>
            <button onClick={Subtrair}>-</button>
        </div>
    )
}