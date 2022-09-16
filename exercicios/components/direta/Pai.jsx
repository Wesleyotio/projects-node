import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="maria" familia={props.familia}/>
            <Filho nome="sofia" familia={props.familia}/>
            <Filho nome="julia" familia={props.familia}/>
            <Filho {...props}   nome="Gabriela" />
        </div>
    )
}