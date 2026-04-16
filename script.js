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

projetos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
  `;

  lista.appendChild(div);
});
