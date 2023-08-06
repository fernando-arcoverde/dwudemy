document.getElementById("teste").innerText = "Alterando o texto através do ID e InnerText";

console.log(document.getElementById("teste2").innerText);

document.getElementsByClassName("piloto-atual")[0].innerText = 'Fernando Alonso';

let pilotosAtuais = document.getElementsByClassName("piloto-atual");

for (let index = 0; index < pilotosAtuais.length; index += 1) {
    pilotosAtuais[index].innerText = "Lewis Hamilton";
}