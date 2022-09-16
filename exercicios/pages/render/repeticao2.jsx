import listaProdutos from "../../data/listaProdutos"
export default function repeticao2() {

    function renderizarLinhas() {
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        } )
    }

    return (

        <div>
            <table style={{
                border: "1px solid #0f0"
            }}>
                <thead>
                    <tr>
                        <th> Código</th>
                        <th> Nome</th>
                        <th> Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}