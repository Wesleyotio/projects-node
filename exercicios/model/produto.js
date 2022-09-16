export default class Produto {
    #id
    #name
    #preco


    constructor(id, nome, preco) {
        this.#id = id
        this.#name = nome
        this.#preco = preco
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#name
    }

    get preco(){
        return this.#preco
    }
}