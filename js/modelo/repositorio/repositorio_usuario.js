class RepositorioUsuario {

    constructor() {
        this.usuarios = [];
    }

    inserir(usuario) {
        this.usuarios.push(usuario);
    }

    remover(cpf) {
        const indxUsuarioARemover =
            this.usuarios.indexOf(usuario => usuario.cpf === cpf);

        this.usuarios.splice(indxUsuarioARemover);
    }

    buscarPorCpf(cpf) {
        return this.usuarios.filter(usuario => usuario.cpf === cpf);
    }

    buscarPorNome(nome) {
        return this.usuarios.filter(usuario => usuario.nome === nome);
    }

}
