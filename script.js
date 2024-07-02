const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que fazer quando  identificar que uma criança está sofrendo bullying?",
        alternativas: [
            "Reportar imediatamente à equipe escolar e oferecer apoio emocional, garantindo que o aluno saiba que tem suporte e não está sozinho.", 
            "Intervir e defender a vítima, conversar com o agressor."
        ]
    },
    {
        enunciado: "A prática regular  de um esporte melhora  o condicionamento físico e a socialização. Você pratica algum esporte regularmente?",
        alternativas: [
            "Eu não pratico esportes da maneira convencional, mas amo o esporte como meio para socialização.",
 
            "O esporte é uma atividade competitiva que tem regras fixas e treinamentos e pratico regularmente."
        ]
    },
    {
        enunciado: "A energia solar é uma fonte de energia renovável e sustentável que é obtida a partir da luz do sol. Diante disso eu:",
        alternativas: [
            "Investiria em energia solar", 
            "Iria dar continuade ao uso da energia hidrelétrica"
        ]
    }  
];

let atual = 0;/*variável com posição zero(listas começam com posição zero),o valor mudará quando percorrermos a lista (aula4)*/ 
let perguntaAtual;/*variável vazia, receberá o texto da pergunta. Essa variável também mudará com o tempo, recebendo o texto de diferentes perguntas.(aula4)*/ 


/*Agora, para que possamos efetivamente mostrar a pergunta, vamos usar uma função. A primeira coisa que nossa função precisa fazer é colocar
dentro da variável perguntaAtual o texto da pergunta. Então, vamos primeiro declarar a função: (aula4)*/
function mostraPergunta() { /*declarar a função*/
   /**/ if (atual >= perguntas.length) { 
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];/*instrução para receber o texto da pergunta atual.(aula4)*/
    caixaPerguntas.textContent = perguntaAtual.enunciado;/*alterarando o atributo textcontent e inserindo o atributo enunciado(aula4)*/ 
    caixaAlternativas.textContent = "";
    mostraAlternativas();/*chamar a função (aula4)*/
}