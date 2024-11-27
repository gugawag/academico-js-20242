const controlador = new ControladorUsuario();
















// const nomes = ['Ana', 'Carla', 'Trísia'];
//
// u = new Usuario('Gustavo', 44, '123');
// u.idade = 34;
// u.cpf = '3445';
//
// console.log(u.idade);
//
// const usuarios = [
//     {
//         nome: 'Gustavo',
//         idade: 25,
//         cpf: '0012'
//     },
//     {
//         nome: 'Gustavo',
//         idade: 25,
//         cpf: '0012'
//     },
//     {
//         nome: 'Gustavo',
//         idade: 25,
//         cpf: '0012'
//     },
//     {
//         nome: 'Gustavo',
//         idade: 25,
//         cpf: '0012'
//     }
// ];
//
// const listaNomesElement = document.createElement('ul');
// document.body.appendChild(listaNomesElement);
//
// for (let usuario of usuarios) {
//     inserirUsuarioNaLista(usuario);
// }
//
// function inserirNome() {
//     const inputNomeElement = document.querySelector('#nome');
//     inserirUsuarioNaLista(inputNomeElement.value);
// }
//
// function inserirUsuarioNaLista(usuario) {
//     const liElement = document.createElement('li');
//     const botaoRemoverElement = document.createElement('button');
//     botaoRemoverElement.textContent = 'X';
//     botaoRemoverElement.addEventListener('click', (event) => {
//         liElement.remove();
//     });
//
//     const spanElement = document.createElement('span');
//     spanElement.textContent = usuario.nome + ' - ' + usuario.idade + ' - ' + usuario.cpf + ' ';
//
//     spanElement.addEventListener('click', event => {
//         const inputElement = document.createElement('input');
//         inputElement.value = usuario.nome;
//         liElement.appendChild(inputElement);
//         spanElement.remove();
//     });
//
//     liElement.appendChild(spanElement);
//     liElement.appendChild(botaoRemoverElement);
//
//     listaNomesElement.appendChild(liElement);
// }
//
//
//
