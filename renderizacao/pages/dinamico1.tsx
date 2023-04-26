export function getServerSideProps() {
    console.log('[Sever] gerando props para o componente ...')
    return {
       props: {
            numero: Math.random()
       }
    }
}

export default function Dinamico1(props: any) {
    return (
        <div>
            <h1>Dinamico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}