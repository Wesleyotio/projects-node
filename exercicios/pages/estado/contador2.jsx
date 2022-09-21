import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador2() {

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
            <NumeroDisplay num={num}/>
            <button onClick={Somar}>+</button>
            <button onClick={Subtrair}>-</button>
        </div>
    )
}