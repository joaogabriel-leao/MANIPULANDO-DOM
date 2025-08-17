const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");
  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener("click", tarefaConcluida);

  return botaoConclui;
};  

const tarefaConcluida = (evento) => {
  const botaoConclui = evento.target; // Dando acesso ao elemento clicado, identifica qual elemento disparou o evento de clique.
  const tarefaCompleta = botaoConclui.parentElement; // Acessar o elemento que contém tanto o texto quanto o botão de concluir (tarefa completa)
  tarefaCompleta.classList.toggle("done"); // classe done responsável por aplicar o efeito de rabisco na tarefa
};
export default BotaoConclui;
