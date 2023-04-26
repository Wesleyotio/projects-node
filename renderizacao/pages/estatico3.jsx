export function getStaticPros() {
    return {
        revalidate: 7, // tempo em segundos que o app espera até a refazer a chamada 
        props: {
            numero: Math.random() 
        }
    }
}

export default function Estatico3(props) {
    
    return (
        <div>
            <h1>Estatico #3</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}