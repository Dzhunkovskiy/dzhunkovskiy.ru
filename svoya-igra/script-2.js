let questionCount = 0
let endWindow = document.querySelector('.end-window')
let container = document.querySelector('.container')
let themeCardNames = document.querySelectorAll('.theme-name')
let answerBtns = document.querySelectorAll('.answer-btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.target.parentNode.querySelector('.answer').classList.remove('hidden')
        e.target.parentNode.querySelector('.answer').classList.add('show')
    })
})
let closeBtns = document.querySelectorAll('.close-btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.target.parentNode.parentNode.classList.add('hidden')
        if (questionCount === 24) {
            endWindow.classList.remove('hidden')
            endWindow.classList.add('show')
        }
        questionCount++
    })
})

for (card of themeCardNames) {
    if (card.textContent.length > 17) {
        card.style.fontSize = '16px'
    }
}

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('question-price')) {
        e.target.classList.add('blink')
        setTimeout(() => {
            e.target.nextElementSibling.classList.add('show')
            e.target.nextElementSibling.classList.remove('hidden')
            e.target.classList.add('hidden')
            e.target.classList.remove('question-price')
        }, 1000)
    }
})
