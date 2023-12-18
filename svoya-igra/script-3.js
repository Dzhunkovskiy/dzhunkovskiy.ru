let themeCount = 5
let endWindow = document.querySelector('.end-window')
let container = document.querySelector('.container')
let themesList = document.querySelector('.themes-list')
let closeBtn = document.querySelector('.close-btn')
let answerBtn = document.querySelector('.answer-btn')
let questionWrapper = document.querySelector('.final-question-wrapper')
let question = document.querySelector('.question')
let answer = document.querySelector('.answer')

themesList.addEventListener('click', function (e) {
    if (e.target.classList.contains('final-theme')) {
        if (themeCount == 1) {
            e.target.classList.add('blink')
            setTimeout(() => {
                questionWrapper.classList.remove('hidden')
                questionWrapper.classList.add('show')
            }, 1000)
            return
        }
        themeCount--
        e.target.classList.add('blink')
        setTimeout(() => {
            e.target.classList.add('throw')
            setTimeout(() => {
                e.target.classList.add('hidden')
            }, 100)
        }, 1000)
    }
})

answerBtn.addEventListener('click', function () {
    answer.classList.remove('hidden')
    answer.classList.add('show')
})

closeBtn.addEventListener('click', function () {
    question.classList.add('hidden')
    endWindow.classList.remove('hidden')
    endWindow.classList.add('show')
})
