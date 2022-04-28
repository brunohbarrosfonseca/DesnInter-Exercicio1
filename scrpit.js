let answer = document.querySelector('answer')


function result(event) {
    if (this.classList.contains('correct')){
        alert('Acertou!')
    }
    else {
        alert('Errou!')
    }
    answer.style.display = 'initial'
}

let choices = document.querySelectorAll('li')
for (let choice of choices) {

choice.addEventListener('click', result)
}