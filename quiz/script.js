const perguntas = [
  //   // --- HTML ---
  {
    tipo: "mc",
    pergunta: "Qual tag é usada para inserir uma imagem no HTML?",
    opcoes: ["<link>", "<img>", "<image>", "<src>"],
    resposta: 1,
    explicacao: "A tag <img> é usada para exibir imagens no HTML.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: A tag usada para inserir um link é ______.",
    opcoes: ["<link>", "<a>", "<href>", "<url>"],
    resposta: 1,
    explicacao: "<a> é usada para criar hyperlinks.",
  },
  {
    tipo: "mc",
    pergunta: "Qual atributo define o texto alternativo de uma imagem?",
    opcoes: ["title", "alt", "src", "href"],
    resposta: 1,
    explicacao:
      "O atributo 'alt' fornece uma descrição da imagem para acessibilidade.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: O atributo que especifica o destino do link é ______.",
    opcoes: ["alt", "src", "href", "action"],
    resposta: 2,
    explicacao: "'href' define o destino do link.",
  },
  {
    tipo: "mc",
    pergunta: "O que a tag <form> representa?",
    opcoes: ["Tabela", "Imagem", "Formulário", "Parágrafo"],
    resposta: 2,
    explicacao: "<form> define um formulário de entrada de dados.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: A tag ______ é usada para criar listas não ordenadas.",
    opcoes: ["<ul>", "<li>", "<ol>", "<list>"],
    resposta: 0,
    explicacao: "<ul> é usada para listas sem ordem numérica.",
  },
  {
    tipo: "mc",
    pergunta: "Qual tag representa o conteúdo principal da página?",
    opcoes: ["<body>", "<main>", "<header>", "<article>"],
    resposta: 1,
    explicacao: "<main> é usada para o conteúdo principal.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: A tag ______ é usada para títulos de nível 1.",
    opcoes: ["<title>", "<h1>", "<header>", "<head>"],
    resposta: 1,
    explicacao: "<h1> representa o título principal.",
  },
  {
    tipo: "mc",
    pergunta: "Qual atributo abre o link em nova aba?",
    opcoes: [
      'target="_blank"',
      'target="_self"',
      'open="_new"',
      'blank="true"',
    ],
    resposta: 0,
    explicacao: 'target="_blank" abre o link em nova aba.',
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: A tag ______ define um parágrafo.",
    opcoes: ["<div>", "<text>", "<p>", "<span>"],
    resposta: 2,
    explicacao: "<p> é usada para parágrafos.",
  },

  //   // --- CSS ---
  {
    tipo: "mc",
    pergunta: "Qual propriedade define a cor de fundo?",
    opcoes: ["color", "background", "background-color", "bgcolor"],
    resposta: 2,
    explicacao: "background-color define a cor de fundo.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: A propriedade que muda o tamanho da fonte é ______.",
    opcoes: ["font-weight", "font-size", "text-size", "font"],
    resposta: 1,
    explicacao: "font-size define o tamanho da fonte.",
  },
  {
    tipo: "mc",
    pergunta: "Como se aplica estilo a um id no CSS?",
    opcoes: [".id", "#id", "@id", "/id"],
    resposta: 1,
    explicacao: "Usa-se # para selecionar um id.",
  },
  {
    tipo: "lacuna",
    pergunta:
      "Complete: Para aplicar estilo a todas as tags <p>, usa-se ______ no seletor.",
    opcoes: ["#p", ".p", "p", "*p"],
    resposta: 2,
    explicacao: "O seletor 'p' se refere diretamente à tag.",
  },
  {
    tipo: "mc",
    pergunta: "Qual propriedade centraliza texto?",
    opcoes: ["align", "text-align", "center", "text"],
    resposta: 1,
    explicacao: "text-align centraliza o texto.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: A propriedade ______ define a largura de um elemento.",
    opcoes: ["height", "size", "length", "width"],
    resposta: 3,
    explicacao: "width define a largura.",
  },
  {
    tipo: "mc",
    pergunta:
      "Qual valor de 'position' fixa um elemento mesmo ao rolar a página?",
    opcoes: ["absolute", "relative", "fixed", "sticky"],
    resposta: 2,
    explicacao: "fixed fixa o elemento na tela.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: Para aplicar sombra, usamos ______.",
    opcoes: ["box-shadow", "shadow", "text-shadow", "filter"],
    resposta: 0,
    explicacao: "box-shadow aplica sombra em caixas.",
  },
  {
    tipo: "mc",
    pergunta: "Qual propriedade define a borda de um elemento?",
    opcoes: ["border", "outline", "stroke", "edge"],
    resposta: 0,
    explicacao: "border define a borda de um elemento.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: Para selecionar todos os elementos usamos ______.",
    opcoes: ["*", ".", "#", "all"],
    resposta: 0,
    explicacao: "* seleciona todos os elementos.",
  },

  //   // // --- JavaScript ---
  {
    tipo: "mc",
    pergunta: "Qual função exibe algo no console?",
    opcoes: ["print()", "write()", "log()", "console.log()"],
    resposta: 3,
    explicacao: "console.log() mostra mensagens no console.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: O operador para comparar valor e tipo é ______.",
    opcoes: ["==", "=", "===", "!="],
    resposta: 2,
    explicacao: "=== compara valor e tipo.",
  },
  {
    tipo: "mc",
    pergunta: "Qual método adiciona ao final de um array?",
    opcoes: ["push()", "pop()", "unshift()", "shift()"],
    resposta: 0,
    explicacao: "push() adiciona ao final do array.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: O método que transforma objeto em JSON é ______.",
    opcoes: ["parse()", "stringify()", "JSON.stringify()", "toJSON()"],
    resposta: 2,
    explicacao: "JSON.stringify() converte objeto para JSON.",
  },
  {
    tipo: "mc",
    pergunta: "Qual estrutura repete até condição ser falsa?",
    opcoes: ["for", "while", "if", "switch"],
    resposta: 1,
    explicacao: "while repete enquanto a condição for verdadeira.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: Para declarar variável que não muda, usamos ______.",
    opcoes: ["var", "const", "let", "static"],
    resposta: 1,
    explicacao: "const declara variável constante.",
  },
  {
    tipo: "mc",
    pergunta: "Qual palavra-chave cria uma função?",
    opcoes: ["func", "function", "def", "fun"],
    resposta: 1,
    explicacao: "'function' declara uma função.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: O evento que ocorre ao clicar é ______.",
    opcoes: ["onclick", "onchange", "onmouseover", "onload"],
    resposta: 0,
    explicacao: "onclick é acionado ao clicar.",
  },
  {
    tipo: "mc",
    pergunta: "Qual método remove o último item do array?",
    opcoes: ["pop()", "push()", "shift()", "unshift()"],
    resposta: 0,
    explicacao: "pop() remove o último item.",
  },
  {
    tipo: "lacuna",
    pergunta: "Complete: Para converter string em número, usamos ______.",
    opcoes: ["Number()", "parseInt()", "toNumber()", "convert()"],
    resposta: 0,
    explicacao: "Number() converte string para número.",
  },
];

const elementoPergunta = document.getElementById("pergunta");
const elementoOpcoes = document.getElementById("opcoes");
const elementoRetorno = document.getElementById("retorno");
const botaoProxima = document.getElementById("botao-proxima");
const botaoRecomecar = document.getElementById("botao-recomecar");
const resultadoFinal = document.getElementById("resultado-final");

let indicePerguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarPergunta() {
  respondeu = false;
  elementoRetorno.textContent = "";
  const p = perguntas[indicePerguntaAtual];

  elementoPergunta.textContent = `${indicePerguntaAtual + 1}. ${p.pergunta}`;
  elementoOpcoes.innerHTML = "";

  for (let i = 0; i < p.opcoes.length; i++) {
    const botao = document.createElement("button");
    botao.textContent = p.opcoes[i];
    botao.addEventListener("click", () => verificarResposta(i));
    elementoOpcoes.appendChild(botao);
  }

  botaoProxima.style.display = "none";
  botaoRecomecar.style.display = "none";
  resultadoFinal.textContent = "";
}

function verificarResposta(opcaoSelecionada) {
  if (respondeu) return;
  respondeu = true;

  const p = perguntas[indicePerguntaAtual];
  const botoes = elementoOpcoes.querySelectorAll("button");

  if (opcaoSelecionada === p.resposta) {
    pontuacao++;
    elementoRetorno.textContent = `Resposta correta! ✅ ${p.explicacao}`;
    elementoRetorno.className = "retorno correto";
    botoes[opcaoSelecionada].style.backgroundColor = "#c8e6c9";
  } else {
    elementoRetorno.textContent = `Resposta errada ❌ ${p.explicacao}`;
    elementoRetorno.className = "retorno errado";
    botoes[opcaoSelecionada].style.backgroundColor = "#ffcdd2";
    botoes[p.resposta].style.backgroundColor = "#c8e6c9";
  }

  botoes.forEach((btn) => (btn.disabled = true));
  botaoProxima.style.display = "block";
}

botaoProxima.addEventListener("click", () => {
  indicePerguntaAtual++;
  if (indicePerguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultadoFinal();
  }
});

botaoRecomecar.addEventListener("click", () => {
  indicePerguntaAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
});

function mostrarResultadoFinal() {
  elementoPergunta.textContent = "";
  elementoOpcoes.innerHTML = "";
  elementoRetorno.textContent = "";

  resultadoFinal.textContent = `Fim do quiz! Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  botaoProxima.style.display = "none";
  botaoRecomecar.style.display = "block";
}

// Iniciar o quiz
mostrarPergunta();
