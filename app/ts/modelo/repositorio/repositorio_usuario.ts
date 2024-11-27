class RepositorioUsuario {

    private usuarios: Usuario[];

    constructor() {
        this.usuarios = [];
    }

    inserir(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    remover(cpf: string) {
        const indxUsuarioARemover =
            this.usuarios.findIndex(usuario => usuario.cpf === cpf);

        this.usuarios.splice(indxUsuarioARemover);
    }

    buscarPorCpf(cpf: string) {
        return this.usuarios.filter(usuario => usuario.cpf === cpf);
    }

    buscarPorNome(nome: string) {
        return this.usuarios.filter(usuario => usuario.nome === nome);
    }

    getUsuarios(): Usuario[] {
        return this.usuarios;
    }

}
