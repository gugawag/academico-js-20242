class UsuarioServico {

    private repositorio: RepositorioUsuario;

    constructor() {
        this.repositorio = new RepositorioUsuario();
    }

    inserir(nome: string, idade: number, cpf: string) {
        this.validarIdade(idade);
        this.validarCpf(cpf);
        this.validarUsuariosDuplicados(cpf);
        const usuarioAInserir = new Usuario(nome, idade, cpf);
        this.repositorio.inserir(usuarioAInserir);
    }

    remover(cpf: string) {
        this.repositorio.remover(cpf);
    }

    listar() {
        return this.repositorio.getUsuarios();
    }

    buscarPorCpf(cpf: string) {
        return this.repositorio.buscarPorCpf(cpf);
    }

    buscarPorNome(nome: string) {
        return this.repositorio.buscarPorNome(nome);
    }

    validarIdade(idade: number) {
        if (idade < 0) {
            throw new Error('Idade inválida!');
        }
    }

    validarCpf(cpf: string) {
        if (cpf.length !== 11) {
            throw new Error('CPF inválido!');
        }
    }

    validarUsuariosDuplicados(cpf: string) {
        const usuarioBuscado = this.repositorio.buscarPorCpf(cpf);
        if (usuarioBuscado && usuarioBuscado.length > 0) {
            throw new Error('Usuário já cadastrado!');
        }
    }

}
