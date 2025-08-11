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

  const conteudo = `${valor}`; // utilizando o template
  tarefa.innerHTML = conteudo; // innerHTML permite voce acessar ou modificar o conteudo HTML interno de um elemento.

  input.value = "";
};

const novaTarefa = document.querySelector(".form-button");
novaTarefa.addEventListener("click", criarTarefa);
