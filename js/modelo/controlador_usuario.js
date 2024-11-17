class ControladorUsuario {

    constructor() {
        this.servico = new UsuarioServico();
    }

    inserir() {
        const inputNomeElement = document.querySelector('#nome');
        const inputIdadeElement = document.querySelector('#idade');
        const inputCpfElement = document.querySelector('#cpf');

        try {
            this.servico.inserir(inputNomeElement.value, inputIdadeElement.value, inputCpfElement.value);
            this.inserirUsuarioNaLista({nome: inputNomeElement.value, idade: inputIdadeElement.value, cpf: inputCpfElement.value});
        } catch (e) {
            alert(e);
            throw e;
        }
    }

    inserirUsuarioNaLista(usuario) {
        const listaNomesElement = document.querySelector('ul');
        const itemElement = document.createElement('li');
        itemElement.textContent = usuario.nome + ' - ' + usuario.idade + ' - ' + usuario.cpf + ' ';
        listaNomesElement.appendChild(itemElement);
    }
}
