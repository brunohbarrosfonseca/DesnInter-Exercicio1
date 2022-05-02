let resposta = document.querySelector('.resposta')
let resultado = document.querySelector('.resultado')
let quiz = document.querySelector ('.quiz')
let image = document.querySelector ('img')

function checkAnswer(event) {
    quiz.classList.add('inactive')
    let opcao = event.target
    opcao.classList.add('clicked')

    if (opcao.classList.contains ('respostacorreta')) {
        resultado.textContent = 'Acertou!'
        resultado.style.color = 'Green'
        image.style.display = 'initial'
    } else {
        resultado.textContent = 'Errou!'
        resultado.style.color = 'Red'
    }

    resposta.style.display = 'initial'

    }

    let opcoes = document.querySelectorAll ('li')

    for (let opcao of opcoes) {

        opcao.addEventListener ('click',checkAnswer)
    }