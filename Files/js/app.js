let state = {
    questions: [
        {
            id: 0,
            question:
                "Что если начал стрелять на ЖД Арзамас в человека с Desert Eagle?",
            command: "/warn",
        },
        {
            id: 1,
            question:
                "Человек стоит на ЦР, с занятой лавкой в АФК уже 5+ минут и у него нет товаров",
            command: "/kick",
        },
        {
            id: 2,
            question: "А если игрок будет ехать по полю, на авто марки Niva'",
            command: "/skip",
        },
        {
            id: 3,
            question:
                "Допустим Вы видите диалог, между двумя игроками. И один другому говорит, пошли в 'Скайп'. Что Вы сделаете?",
            command: "/mute",
            minPunish: 0,
            maxPunish: 70,
        },
    ],
    currentAnswer: {},
};

const answerInput = document.querySelector("#answerInput");
const createQuestion = document.querySelector("#createQuestion");
const questionWindow = document.querySelector("#questionWindow");
const answerButton = document.querySelector("#answerButton");
let questionArray = [];

// Кнопка создать пост
function generateQuestion(elem) {
    
    if (questionArray.length >= elem.questions.length) {

        questionWindow.innerHTML =
            "Офигеть. Ты ответил на все вопросы. Перезагрузи страницу и всё начнётся по-новой, Миша";
            questionWindow.style.color = "#a8323e"
            answerButton.style.opacity = 1;
    answerButton.setAttribute("disabled", "");
    answerButton.style.opacity = 0;
    createQuestion.style.opacity = 0;
    createQuestion.setAttribute("disabled", "");
    answerInput.style.opacity = 0;
    answerInput.setAttribute("disabled", "");
        return;
    }
    debugger
    let objectQuestion =
        elem.questions[Math.floor(Math.random() * elem.questions.length)];
    if (questionArray.indexOf(objectQuestion.id) < 0) {
        questionArray.push(objectQuestion.id);
        questionWindow.innerHTML = objectQuestion.question;
    elem.currentAnswer = objectQuestion;
    answerInput.removeAttribute("disabled");
    answerInput.value = "";
    answerInput.className = "answer__input";
    createQuestion.style.opacity = 0;
    createQuestion.setAttribute("disabled", "");
    answerButton.style.opacity = 1;
    answerButton.removeAttribute("disabled");
    } else {
        generateQuestion(elem)
        return
    }
}

function openFAQ() {
    document.querySelector(".modal__window").classList.toggle("none")
}

function nextQuestion(atr) {
    if (atr == true) {
        questionWindow.innerHTML = "Ты большой молодец. Создай ещё один вопрос";
    } else if (atr == false) {
        questionWindow.innerHTML =
            "Посмотри, где ты совершил ошибку" +
            "<br/>" +
            questionWindow.innerHTML;
    }
    answerInput.setAttribute("disabled", "");
    answerInput.value =
        "Чтобы создать новый вопрос, нажмите кнопку 'Создать вопрос'";
    createQuestion.style.opacity = 1;
    answerButton.style.opacity = 0;
    answerButton.setAttribute("disabled", "");
    createQuestion.removeAttribute("disabled");
}

function result(solution) {
    answerInput.className = "";
    answerInput.className = `answer__input  ${solution}`;
}

function checkAnswer(elem) {
    const trueAnswerCount = document.querySelector("#trueAnswerCount");
    const falseAnswerCount = document.querySelector("#falseAnswerCount");
    let clearArray = answerInput.value.split(" ").filter((e) => e != "");
    clearArray[0] = clearArray[0].toLowerCase();
    numberAnswer = elem.currentAnswer;
    console.log(clearArray);
    switch (clearArray[0]) {
        case "/mute":
        case "/ban":
        case "/jail":
            if (
                clearArray[0] == numberAnswer.command &&
                typeof Number(clearArray[1]) == "number" &&
                clearArray[2] >= numberAnswer.minPunish &&
                clearArray[2] <= numberAnswer.maxPunish &&
                clearArray.length === 3
            ) {
                result("answer__true");
                nextQuestion(true);
                trueAnswerCount.innerHTML =
                    Number(trueAnswerCount.innerHTML) + 1;
            } else {
                result("answer__false");
                nextQuestion(false);
                falseAnswerCount.innerHTML =
                    Number(falseAnswerCount.innerHTML) + 1;
            }
            break;
        case "/kick":
        case "/warn":
            if (
                clearArray[0] == numberAnswer.command &&
                typeof Number(clearArray[1]) == "number" &&
                clearArray.length === 2
            ) {
                result("answer__true");
                nextQuestion(true);
                trueAnswerCount.innerHTML =
                    Number(trueAnswerCount.innerHTML) + 1;
            } else {
                result("answer__false");
                nextQuestion(false);
                falseAnswerCount.innerHTML =
                    Number(falseAnswerCount.innerHTML) + 1;
            }
            break;
        case "/skip":
            if (
                clearArray[0] == numberAnswer.command &&
                clearArray.length === 1
            ) {
                result("answer__true");
                nextQuestion(true);
                trueAnswerCount.innerHTML =
                    Number(trueAnswerCount.innerHTML) + 1;
            } else {
                result("answer__false");
                nextQuestion(false);
                falseAnswerCount.innerHTML =
                    Number(falseAnswerCount.innerHTML) + 1;
            }
            break;
        default:
            result("answer__warning");
    }
}
