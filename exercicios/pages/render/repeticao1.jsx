export default function Repeticao1() {

    const listaAprovados = [
        'Antonio',
        'Betânia',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    function renderizarLista() {

        const intens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            intens.push(<li key={i}>{listaAprovados[i]}</li>)
        }
        return intens

    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}