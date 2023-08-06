// document.getElementById("teste").innerText = "Alterando o texto através do ID e InnerText";

// console.log(document.getElementById("teste2").innerText);

// document.getElementsByClassName("piloto-atual")[0].innerText = 'Fernando Alonso';

// let pilotosAtuais = document.getElementsByClassName("piloto-atual");

// for (let index = 0; index < pilotosAtuais.length; index += 1) {
//     pilotosAtuais[index].innerText = "Lewis Hamilton";
// }

/* getElementsByClassName e getElementsByTagName entregam listas,
mesmo que só tenha um elemento e deve ser acessado como posições de um array.
Também pode ser tratado como array para realizar loops, etc.
*/

document.getElementsByTagName("span")[0].innerText = "Carlos Sanz";