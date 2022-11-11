let state = {
    questions: [
        {
            id: 0,
            question:
                "Что если начал стрелять на ЖД Арзамас в человека с Desert Eagle?",
            command: "/warn",
            currentAnswerQuestion: "Игроку выдаётся /warn [ID]. Так как он убивает без причины (ДМ) в Зелёной зоне",
        },
        {
            id: 1,
            question:
                "Человек стоит на ЦР, с занятой лавкой в АФК уже 5+ минут и у него нет товаров",
            command: "/kick",
            currentAnswerQuestion: "Человек просто так занимает лавку, поэтому ему нужно кикнуть /kick [ID]",
        },
        {
            id: 2,
            question: "А если игрок будет ехать по полю, на авто марки Niva'",
            command: "/skip",
            currentAnswerQuestion: "Авто 'Нива' разрешён для езды по полям, поэтому наказание тут не будет",
        },
        {
            id: 3,
            question:
                "Допустим Вы видите диалог, между двумя игроками. И один другому говорит, пошли в 'Скайп'. Что Вы сделаете?",
            command: "/mute",
            minPunish: 0,
            maxPunish: 70,
            currentAnswerQuestion: "Скайп - OOC информация. А использование OOC информации в IC, это МГ, поэтому игроку выдаётся мут - /mute [ID] 0-70",
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

function nextQuestion(atr, elem) {
    if (atr == true) {
        questionWindow.innerHTML = "Ты большой молодец. Создай ещё один вопрос";
    } else if (atr == false) {
        questionWindow.innerHTML =
            "Ты совершил ошибку" +
            "<br/>" +
            elem.currentAnswer.currentAnswerQuestion;
            createQuestion.innerHTML = "Учту. Создать новый вопрос"
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
                nextQuestion(true);
                trueAnswerCount.innerHTML =
                    Number(trueAnswerCount.innerHTML) + 1;
            } else {
                result("answer__false");
                nextQuestion(false, elem);
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
                nextQuestion(true);
                trueAnswerCount.innerHTML =
                    Number(trueAnswerCount.innerHTML) + 1;
            } else {
                result("answer__false");
                nextQuestion(false, elem);
                falseAnswerCount.innerHTML =
                    Number(falseAnswerCount.innerHTML) + 1;
            }
            break;
        case "/skip":
            if (
                clearArray[0] == numberAnswer.command &&
                clearArray.length === 1
            ) {
                nextQuestion(true);
                trueAnswerCount.innerHTML =
                    Number(trueAnswerCount.innerHTML) + 1;
            } else {
                result("answer__false");
                nextQuestion(false, elem);
                falseAnswerCount.innerHTML =
                    Number(falseAnswerCount.innerHTML) + 1;
            }
            break;
        default:
            result("answer__warning");
    }
}
