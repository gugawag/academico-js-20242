class ControladorUsuario {

    private servico: UsuarioServico;

    constructor() {
        this.servico = new UsuarioServico();
    }

    inserir() {
        const inputNomeElement: HTMLInputElement = document.querySelector('#nome');
        const inputIdadeElement: HTMLInputElement = document.querySelector('#idade');
        const inputCpfElement: HTMLInputElement = document.querySelector('#cpf');

        try {
            this.servico.inserir(inputNomeElement.value, Number(inputIdadeElement.value), inputCpfElement.value);
            const usuario = new Usuario(inputNomeElement.value, Number(inputIdadeElement.value), inputCpfElement.value);
            this.inserirUsuarioNaLista(usuario);
        } catch (e) {
            alert(e);
            throw e;
        }
    }

    inserirUsuarioNaLista(usuario: Usuario) {
        const listaNomesElement = document.querySelector('ul');
        const itemElement = document.createElement('li');
        itemElement.textContent = usuario.nome + ' - ' + usuario.idade + ' - ' + usuario.cpf + ' ';
        listaNomesElement.appendChild(itemElement);
    }
}
