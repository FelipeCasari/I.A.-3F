const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Em sua opinião, a I.A. poderá ser mais bem aproveitada futuramente, ou será degradada?",
        alternativas: [
            {texto: "Será bem aproveitada",
                afirmação: "A I.A. poderá ser mais bem aproveitada."},

            {texto: "Irá degradar-se",
                afirmação: "A I.A. será degradada."}]
    },
    {
        enunciado: "Você pensa que a I.A. desenvolverá pessoas ou fará elas regredirem?",
        alternativas: [
            {texto: "Desenvolverá",
                afirmação: "A I.A. desevolverá pessoas."},
            {texto: "Fará elas regredirem",
                afirmação: "A I.A. fará as pessoas regredirem."}]
    },
    {
        enunciado: "Você se vê usando a I.A. com grande frequência futuramente?",
        alternativas: [
            {texto: "Sim, me vejo", 
                afirmação: "Me vejo usando a I.A. com grande frequência futuramente."},
            {texto: "Não, não me vejo",
                afirmação: "Não me vejo usando a I.A. com grande frequência futuramente."}]
    },
    {
        enunciado: "Existe maior probabilidade da I.A. ser universalmente utilizada ou utilizada apenas para processos específicos?",
        alternativas: [
            {texto: "Maior probabilidade de ser universalizada", 
                afirmação: "Existe maior probabilidade da I.A. ser universalmente utilizda."},
            {texto: "Maior probabilidade de ser utilizada em processos específicos",
                afirmação: "Existe maior probabilidade da I.A. ser utilizada apenas para processos específicos."}]
    },
    {
        enunciado: "Você utiliza, utilizou ou utilizaria produções feitas inteiramente por I.A.?",
        alternativas: [
            {texto: "Utilizei, mas não utilizei mais",
                afirmação: "Utilizei produções feitas inteiramente por I.A., mas não utilizei mais"},
            {texto: "Uitlizei e utilizaria",
                afirmação: "Uitlizei produções feitas inteiramente por I.A. e utilizaria"},
            {texto: "Não utilizei e não utilizaria",
                afirmação: "Não utilizei produções feitas inteiramente por I.A. e não utilizaria"},
            {texto: "Não utilizei, mas utilizaria",
                afirmação: "Não utilizei produções feitas inteiramente por I.A., mas utilizaria"}]
    },
    {
        enunciado: "Você tem conhecimento da abrangência onde a I.A. pode ser utilizada e/ou já teve conato com isso?",
        alternativas: ["Sim","Não"]},
]

let posicao = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){

    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " "
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Sendo assim, você pensa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";

}

mostraPergunta();