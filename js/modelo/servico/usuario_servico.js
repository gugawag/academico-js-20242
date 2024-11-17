class UsuarioServico {

    constructor() {
        this.repositorio = new RepositorioUsuario();
    }

    inserir(nome, idade, cpf) {
        this.validarIdade(idade);
        this.validarCpf(cpf);
        this.validarUsuariosDuplicados(cpf);
        const usuarioAInserir = new Usuario(nome, idade, cpf);
        this.repositorio.inserir(usuarioAInserir);
    }

    remover(cpf) {
        this.repositorio.remover(cpf);
    }

    listar() {
        return this.repositorio.usuarios;
    }

    buscarPorCpf(cpf) {
        return this.repositorio.buscarPorCpf(cpf);
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }

    validarIdade(idade) {
        if (idade < 0) {
            throw new Error('Idade inválida!');
        }
    }

    validarCpf(cpf) {
        if (cpf.length !== 11) {
            throw new Error('CPF inválido!');
        }
    }

    validarUsuariosDuplicados(cpf) {
        const usuarioBuscado = this.repositorio.buscarPorCpf(cpf);
        if (usuarioBuscado && usuarioBuscado.length > 0) {
            throw new Error('Usuário já cadastrado!');
        }
    }

}
