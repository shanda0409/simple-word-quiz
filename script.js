const questions = [
    {
        question: "What is the meaning of 'aberration'?",
        answers: [
            { text: "A type of bird", correct: false },
            { text: "A deviation from what is normal", correct: true },
            { text: "A small insect", correct: false },
            { text: "A type of tree", correct: false },
        ]
    },
    {
        question: "What does 'ephemeral' mean?",
        answers: [
            { text: "Lasting for a very short time", correct: true },
            { text: "A type of flower", correct: false },
            { text: "A rare gemstone", correct: false },
            { text: "A long-lasting friendship", correct: false },
        ]
    },
    {
        question: "Choose the correct meaning of 'ubiquitous'",
        answers: [
            { text: "Found everywhere", correct: true },
            { text: "A type of fruit", correct: false },
            { text: "Difficult to find", correct: false },
            { text: "A rare occurrence", correct: false },
        ]
    },
    {
        question: "What is the definition of 'serendipity'?",
        answers: [
            { text: "A mysterious event", correct: false },
            { text: "A type of dance", correct: false },
            { text: "A fortunate accident", correct: true },
            { text: "A rare disease", correct: false },
        ]
    },
    {
        question: "Choose the correct meaning of 'perfidious'",
        answers: [
            { text: "Loyal and trustworthy", correct: false },
            { text: "Deceitful and untrustworthy", correct: true },
            { text: "Honest", correct: false },
            { text: "Eager to please", correct: false },
        ],
    },
    {
        question: "What does 'querulous' mean?",
        answers: [
            { text: "Joyful and exuberant", correct: false },
            { text: "Silent and reserved", correct: false },
            { text: "Loyal and trustworthy", correct: false },
            { text: "Complaining or whining", correct: true },
        ],
    },
    {
        question: "Choose the correct meaning of 'obfuscate'",
        answers: [
            { text: "To clarify", correct: false },
            { text: "To confuse or make unclear", correct: true },
            { text: "To make something easy to understand", correct: false },
            { text: "To summarize", correct: false },
        ],
    },
    {
        question: "What is the meaning of 'capitulate'?",
        answers: [
            { text: "To celebrate", correct: false },
            { text: "To increase in size", correct: false },
            { text: "To surrender or give in", correct: true },
            { text: "To capture", correct: false },
        ],
    },
    {
        question: "What does 'pernicious' mean?",
        answers: [
            { text: "Harmless", correct: false },
            { text: "Harmful or destructive", correct: true },
            { text: "Temporary", correct: false },
            { text: "Perfumed", correct: false },
        ],
    },
    {
        question: "Choose the correct meaning of 'eloquent'",
        answers: [
            { text: "Shy and reserved", correct: false },
            { text: "Inarticulate", correct: false },
            { text: "Verbose", correct: false },
            { text: "Expressive and persuasive in speech", correct: true },
        ],
    },
    {
        question: "What is the definition of 'gregarious'?",
        answers: [
            { text: "Introverted", correct: false },
            { text: "Lonely", correct: false },
            { text: "Sociable and fond of company", correct: true },
            { text: "Aggressive", correct: false },
        ],
    },
    {
        question: "What is the meaning of 'languid'?",
        answers: [
            { text: "Energetic and lively", correct: false },
            { text: "Weak or lacking energy", correct: true },
            { text: "Fast and furious", correct: false },
            { text: "Confident and assertive", correct: false },
        ]
    },
    {
        question: "What does 'esoteric' mean?",
        answers: [
            { text: "Well-known and common", correct: false },
            { text: "Difficult to understand, known by a select few", correct: true },
            { text: "Simple and straightforward", correct: false },
            { text: "Hidden and secretive", correct: false },
        ]
    },
    {
        question: "Choose the correct meaning of 'auspicious'",
        answers: [
            { text: "Unlucky and unfortunate", correct: false },
            { text: "Promising or favorable", correct: true },
            { text: "Ordinary and unremarkable", correct: false },
            { text: "Dangerous and risky", correct: false },
        ]
    },
    {
        question: "What is the definition of 'querulous'?",
        answers: [
            { text: "Joyful and exuberant", correct: false },
            { text: "Silent and reserved", correct: false },
            { text: "Loyal and trustworthy", correct: false },
            { text: "Complaining or whining", correct: true },
        ]
    },
    {
        question: "Choose the correct meaning of 'egregious'",
        answers: [
            { text: "Average and ordinary", correct: false },
            { text: "Outstandingly bad or shocking", correct: true },
            { text: "Moderate and reasonable", correct: false },
            { text: "Praiseworthy and admirable", correct: false },
        ],
    },
    {
        question: "What is the meaning of 'ephemeral'?",
        answers: [
            { text: "Lasting for a very short time", correct: true },
            { text: "A type of flower", correct: false },
            { text: "A rare gemstone", correct: false },
            { text: "A long-lasting friendship", correct: false },
        ]
    },
    {
        question: "What does 'vex' mean?",
        answers: [
            { text: "To amuse or entertain", correct: false },
            { text: "To confuse or bewilder", correct: false },
            { text: "To irritate or annoy", correct: true },
            { text: "To clarify and explain", correct: false },
        ]
    },
    {
        question: "Choose the correct meaning of 'quixotic'",
        answers: [
            { text: "Exceedingly idealistic and unrealistic", correct: true },
            { text: "Practical and sensible", correct: false },
            { text: "Logical", correct: false },
            { text: "Cautious", correct: false },
        ],
    },
    {
        question: "What is the definition of 'incorrigible'?",
        answers: [
            { text: "Capable of being corrected", correct: false },
            { text: "Unable to be corrected or reformed", correct: true },
            { text: "Open to change and improvement", correct: false },
            { text: "Temporary in nature", correct: false },
        ]
    },
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();