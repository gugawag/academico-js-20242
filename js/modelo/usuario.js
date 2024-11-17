class Usuario {

    constructor(nome, idade, cpf) {
        this._nome = nome;
        this._idade = idade;
        this.cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade(){
        return this._idade;
    }

    set idade(novaIdade) {
        if (novaIdade < 0) {
            throw Error('Indade inválida');
        }
        this._idade = novaIdade;
    }



}
