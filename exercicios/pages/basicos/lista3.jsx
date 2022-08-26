function createList(num = 10) {
    const lista = [ ]
    for( let i = 1; i <= num; i++ ){
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function list() {
    return (
        <div>
            <div>
                {createList(20)}
            </div>
            <div>
                {createList(2)}
            </div>
        </div>
    )
}