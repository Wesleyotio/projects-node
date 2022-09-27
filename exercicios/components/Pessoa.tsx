interface PessoaPros {
    nome: string
    idade?: number
}


export default function Pessoa(props: PessoaPros) {
    return (
        <div> 
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade ?? 'não informado'}</div>
        </div>
    )
}