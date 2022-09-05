

export default function Titulo(props) {
  
    return props.pequeno ? (
        <>
            <h1>{props.principal}</h1>
            <h1>{props.secundario}</h1>
        </>
    ) : (
        <>
            <h6>{props.principal}</h6>
            <h6>{props.secundario}</h6>
        </>
    )
}