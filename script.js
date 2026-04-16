const projetos = [
  {
    nome: "Site Pessoal",
    descricao: "Meu primeiro site em HTML e CSS"
  },
  {
    nome: "Calculadora",
    descricao: "Projeto interativo com JavaScript"
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples para organização"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach((p, i) => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.style.opacity = "0";
  div.style.transform = "translateY(20px)";

  setTimeout(() => {
    div.style.transition = "0.5s";
    div.style.opacity = "1";
    div.style.transform = "translateY(0)";
  }, i * 300);

  div.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
  `;

  lista.appendChild(div);
});
