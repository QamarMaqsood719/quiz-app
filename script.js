// const question = document.querySelector("#question");
const questions = [
    {
        question: "HTML stands for ______ ",
        answer: [
            {text: "HTTP Language", correct: false},
            {text: "Hyper Text Mail Language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "All of these", correct: false},
        ]
    },
    {
        question: "Which of the following is used for styling web pages?",
        answer: [
            {text: "HTML", correct: false},
            {text: "PHP", correct: false},
            {text: "Boostrap", correct: false},
            {text: "CSS", correct: true},
        ]
    },
    {
        question: "Which protocol is used for web borwsing?",
        answer: [
            {text: "Hyper Text Mail Language", correct: false},
            {text: "HTTP", correct: true},
            {text: "Hyper Text Markup Language", correct: false},
            {text: "All of these", correct: false},
        ]
    },
    {
        question: "Which language is used for AI/ML? ",
        answer: [
            {text: "Python", correct: true},
            {text: "C/C++", correct: false},
            {text: "PHP", correct: false},
            {text: "None of these", correct: false},
        ]
    },
    {
        question: "Binary stands for:",
        answer: [
            {text: "Basic Numbers", correct: false},
            {text: "Bit System", correct: false},
            {text: "Binary Digits", correct: true},
            {text: "Boolean System", correct: false},
        ]
    },
    {
        question: "Hiding Data means:",
        answer: [
            {text: "Encapsulation", correct: true},
            {text: "Decomposition", correct: false},
            {text: "Polymopism", correct: false},
            {text: "Inheritence", correct: false},
        ]
    }
]

// console.log(questions[4])
const quizQuestion = document.querySelector("#question");
const answerBtns = document.querySelector("#answer");
const nextBtn = document.querySelector(".next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
    console.log("Start Quiz");
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quizQuestion.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer_btns");
        answerBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    }else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    quizQuestion.innerHTML = `You scored ${score} out of ${questions.length}`;
    quizQuestion.style.backgroundColor = "#a8dadc"; 
    quizQuestion.style.padding = "20px";
    quizQuestion.style.marginTop = "10px";
    quizQuestion.style.borderRadius = "8px";
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();