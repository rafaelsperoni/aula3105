//ao clicar no botao, faça algo

//1 - Identificar o elemento
const btEnviar = document.querySelector("#btEnviar")
const lista = document.querySelector("#lista")
const tarefa = document.querySelector("#tarefa")

//2 - "Ouvir" o evento
btEnviar.addEventListener("click", executaAcao)

lista.addEventListener("click", marcaFeito)

//3 - ação a ser executada, quando acontecer o evento neste elemento
function executaAcao(){
    //aqui está o código que será executado, quando a fn for chamada
    console.log("Chamou a função executaAcao")
    
    let li = document.createElement("li")
    li.innerText = tarefa.value

    let btFeito = document.createElement("button")
    btFeito.textContent = "Feito"

    li.appendChild(btFeito)

    lista.appendChild(li)
}

function marcaFeito(ev){
    if (ev.target.tagName == 'BUTTON'){
        ev.target.parentNode.classList.toggle("feito")
    }
}