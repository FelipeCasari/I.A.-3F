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
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){

}

mostraPergunta();
