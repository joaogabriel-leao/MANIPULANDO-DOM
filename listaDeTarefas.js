// const tarefa = document.querySelector(".form-button");
// // console.log(tarefa);

// tarefa.addEventListener("click", () => {
//   const input = document.querySelector(".form-input");
// //   const valor = input.value;
//   console.log(input.value);
// });

const criarTarefa = (event) => {
  event.preventDefault(); // prevenindo o comportamento padrao dos formuários

  const list = document.querySelector(".list");
  const input = document.querySelector(".form-input");
  const valor = input.value;
  const tarefa = document.createElement("li"); // criando um elemento
  list.appendChild(tarefa); // adicionando um filho a família

  tarefa.classList.add("task"); // add uma classe css a um elemento HTML

  const conteudo = `<p class="content">${valor}</p>`; // utilizando o template
  tarefa.innerHTML = conteudo; // innerHTML permite voce acessar ou modificar o conteudo HTML interno de um elemento.
  tarefa.appendChild(BotaoConclui());

  input.value = "";
};

const novaTarefa = document.querySelector(".form-button");
novaTarefa.addEventListener("click", criarTarefa);

const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");
  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener("click", TarefaConcluida);

  return botaoConclui;
};

const TarefaConcluida = (evento) => {
  const botaoConclui = evento.target; // Dando acesso ao elemento clicado, identifica qual elemento disparou o evento de clique.
  const tarefaCompleta = botaoConclui.parentElement; // Acessar o elemento que contém tanto o texto quanto o botão de concluir (tarefa completa)
  tarefaCompleta.classList.toggle("done"); // classe done responsável por aplicar o efeito de rabisco na tarefa
};
