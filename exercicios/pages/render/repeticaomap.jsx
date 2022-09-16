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

       return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)

    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}