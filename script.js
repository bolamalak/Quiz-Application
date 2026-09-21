const questions = [
    {
        question: "What is HTML used for?",
        options: [
            "Styling web pages",
            "Creating the structure of web pages",
            "Programming games",
            "Managing databases"
        ],
        answer: "Creating the structure of web pages"
    },

    {
        question: "What is CSS used for?",
        options: [
            "Creating databases",
            "Styling web pages",
            "Writing server code",
            "Creating variables"
        ],
        answer: "Styling web pages"
    },

    {
        question: "Which language is used to make web pages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    },

    {
        question: "Which keyword declares a variable in JavaScript?",
        options: [
            "let",
            "print",
            "int",
            "string"
        ],
        answer: "let"
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "##",
            "/* */"
        ],
        answer: "//"
    }
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");

const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const scoreElement = document.getElementById("score");
const answers = document.getElementById("answers");

const finalScore = document.getElementById("finalScore");
const review = document.getElementById("review");


startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", restartQuiz);


function startQuiz() {

    currentQuestion = 0;
    score = 0;

    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    resultScreen.style.display = "none";

    scoreElement.textContent = "Score: 0";

    showQuestion();
}


function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    question.textContent = current.question;

    answers.innerHTML = "";

    current.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("answerButton");

        button.addEventListener("click", function() {
            checkAnswer(option);
        });

        answers.appendChild(button);
    });
}


function checkAnswer(selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;

        scoreElement.textContent = `Score: ${score}`;
    }

    const buttons = answers.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.disabled = true;
    });
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();
    }
}


function showResults() {

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    finalScore.textContent =
        `Your Score: ${score} / ${questions.length}`;

    review.innerHTML = "";

    questions.forEach(function(q, index) {

        const answer = document.createElement("p");

        answer.textContent =
            `${index + 1}. ${q.answer}`;

        review.appendChild(answer);
    });
}


function restartQuiz() {

    resultScreen.style.display = "none";
    startScreen.style.display = "block";

    currentQuestion = 0;
    score = 0;
}