const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Em sua opinião, a I.A. poderá ser mais bem aproveitada futuramente, ou será degradada?",
        alternativas: ["Será bem aproveitada","Irá degradar-se"]
    },
    {
        enunciado: "Você pensa que a I.A. desenvolverá pessoas ou fará elas regredirem?",
        alternativas: ["Desenvolverá","Fará elas regredirem"]
    },
    {
        enunciado: "Você se vê usando a I.A. com grande frequência futuramente?",
        alternativas: ["Sim, me vejo","Não, não me vejo"]
    },
    {
        enunciado: "Existe maior probabilidade da I.A. ser universalmente utilizada ou utilizada apenas para processos específicos?",
        alternativas: ["Maior probabilidade de ser universalizada","Maior probabilidade de ser utilizada em processos específicos"]
    },
    {
        enunciado: "Você utiliza, utilizou ou utilizaria produções feitas inteiramente por I.A.?",
        alternativas: ["Utilizei, mas não utilizei mais","Utilizei e utilizaria","Não utilizei e não utilizaria","Não utilizei, mas utilizaria"]
    },
    {
        enunciado: "Você tem conhecimento da abrangência onde a I.A. pode ser utilizada e/ou já teve conato com isso?",
        alternativas: ["Sim","Não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();