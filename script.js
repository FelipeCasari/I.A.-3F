const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Em sua opinião, a I.A. poderá ser mais bem aproveitada futuramente, ou será degradada?",
        alternativas: [
            {texto: "Será bem aproveitada",
                afirmação: "Afirmação da alternativa 1"},

            {texto: "Irá degradar-se",
                afirmação: "Afirmação da alternativa 2"}]
    },
    {
        enunciado: "Você pensa que a I.A. desenvolverá pessoas ou fará elas regredirem?",
        alternativas: [
            {texto: "Desenvolverá",
                afirmação: "Afirmação da alternativa 1"},
            {texto: "Fará elas regredirem",
                afirmação: "Afirmação da alternativa 2"}]
    },
    {
        enunciado: "Você se vê usando a I.A. com grande frequência futuramente?",
        alternativas: [
            {texto: "Sim, me vejo", 
                afirmação: "Afirmação da alternativa 1"},
            {texto: "Não, não me vejo",
                afirmação: "Afirmação da alternativa 2"}]
    },
    {
        enunciado: "Existe maior probabilidade da I.A. ser universalmente utilizada ou utilizada apenas para processos específicos?",
        alternativas: [
            {texto: "Maior probabilidade de ser universalizada", 
                afirmação: "Afirmação da alternativa 1"},
            {texto: "Maior probabilidade de ser utilizada em processos específicos",
                afirmação: "Afirmação da alternativa 2"}]
    },
    {
        enunciado: "Você utiliza, utilizou ou utilizaria produções feitas inteiramente por I.A.?",
        alternativas: [
            {texto: "Utilizei, mas não utilizei mais",
                afirmação: "Afirmação da alternativa 1"},
            {texto: "Utilizei e utilizaria",
                afirmação: "Afirmação da alternativa 2,"},
            {texto: "Não utilizei e não utilizaria",
                afirmação: "Afirmação da alternativa 3"},
            {texto: "Não utilizei, mas utilizaria",
                afirmação: "Afirmação da alternativa 4"}]
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
