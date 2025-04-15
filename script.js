
const questions = [
    "Você usa Spotify diariamente?",
    "Você recomendaria o Spotify a um amigo?",
    "Qual nota você dá ao Spotify?"
];

let current = 0;

function nextQuestion() {
    current++;
    if (current < questions.length) {
        document.getElementById('question').innerText = questions[current];
    } else {
        document.getElementById('question-box').innerHTML = `
            <p>Obrigado por responder! Clique no botão abaixo para continuar.</p>
            <a href="https://dashboard.kiwify.com.br/checkout-builder/e348c056-283f-49b3-a2aa-7833cf9a1022" class="final-button">Continuar</a>
        `;
    }
}
