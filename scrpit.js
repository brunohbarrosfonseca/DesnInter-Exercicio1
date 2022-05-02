let resposta = document.querySelector('.resposta')
let resultado = document.querySelector('.resultado')
let quiz = document.querySelector ('.quiz')
let imagemerrada = document.querySelector ('.imagemerrada')
let imagemcerta = document.querySelector ('.imagemcerta')

function checkAnswer(event) {
    quiz.classList.add('inactive')
    let opcao = event.target
    opcao.classList.add('clicked')

    if (opcao.classList.contains ('respostacorreta')) {
        resultado.textContent = 'Acertou!'
        resultado.style.color = 'Green'
        imagemcerta.style.display = 'initial'
        imagemerrada.style.display = 'none'
    } else {
        resultado.textContent = 'Errou!'
        resultado.style.color = 'Red'
        imagemerrada.style.display = 'initial'
        imagemcerta.style.display = 'none'
    }

    resposta.style.display = 'initial'

    }

    let opcoes = document.querySelectorAll ('li')

    for (let opcao of opcoes) {

        opcao.addEventListener ('click',checkAnswer)
    }