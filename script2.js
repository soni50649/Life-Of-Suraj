const quizData = [
    {
        question: "How many months have 28 days?",
        a: "1 of them",
        b: "6 of them",
        c: "13 of them",
        d: "All of them",
        correct: "d",
    },
    {
        question: "What has a heart but no other organ?",
        a: "Worm",
        b: "No one",
        c: "Deck of cards",
        d: "Someone in love",
        correct: "c",
    },
    {
        question: "How many letters in the English Alphabet?",
        a: "26",
        b: "36",
        c: "25",
        d: "30",
        correct: "a",
    },
    {
        question: "What is the tallest building in the world?",
        a: "Empire State Building",
        b: "Burj Khalifa",
        c: "Burj Al-Arab",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "WHo won the last Fifa World Cup in 2018",
        a: "Brazil",
        b: "England",
        c: "Belgium",
        d: "France",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})