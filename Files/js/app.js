let state = {
    questions: [
        {
            id: 0,
            question:
                "Что если начал стрелять на ЖД Арзамас в человека с Desert Eagle?",
            command: "/warn",
            currentAnswerQuestion:
                "Игроку выдаётся /warn. Так как он убивает без причины (ДМ) в Зелёной зоне",
        },
        {
            id: 1,
            question:
                "Человек стоит на ЦР, с занятой лавкой в АФК уже 5+ минут и у него нет товаров",
            command: "/kick",
            currentAnswerQuestion:
                "Человек просто так занимает лавку, поэтому ему нужно кикнуть /kick",
        },
        {
            id: 2,
            question: "А если игрок будет ехать по полю, на авто марки Niva'",
            command: "/skip",
            currentAnswerQuestion:
                "Авто 'Нива' разрешён для езды по полям, поэтому наказание тут не будет",
        },
        {
            id: 3,
            question:
                "Допустим Вы видите диалог, между двумя игроками. И один другому говорит, пошли в 'Скайп'. Что Вы сделаете?",
            command: "/mute",
            minPunish: 0,
            maxPunish: 70,
            currentAnswerQuestion:
                "Скайп - OOC информация. А использование OOC информации в IC, это МГ, поэтому игроку выдаётся мут - /mute [ID] 0-70",
        },
    ],
    currentAnswer: {},
};

const answerInput = document.querySelector("#answerInput");
const createQuestionBtn = document.querySelector("#createQuestionBtn");
const questionWindow = document.querySelector("#questionWindow");
const answerButton = document.querySelector("#answerButton");

let questionArray = [];
let timeForQuestion;


function timer() {
    const checkTimer = document.querySelector("#checkTimer");
    function restOfTime() {
        if (Number(checkTimer.innerHTML == 0)) {
            checkTimer.parentElement.innerHTML = `<span style="color: #a8323e">Время закончилось</span>`
            clearTimeout(timeForQuestion)
            resultFalse(state);
        } else {
            checkTimer.innerHTML = checkTimer.innerHTML - 1;
        }
    }
    
    timeForQuestion = setInterval(restOfTime, 1000)
}

function fullDisableElem(elem, title) {
    elem.setAttribute("disabled", "");
    elem.style.opacity = 0;
    elem.style.cursor = "default";
    elem.classList.className = title;
}

function fullEnable(elem, title) {
    elem.removeAttribute("disabled");
    elem.style.opacity = 1;
    elem.style.cursor = "pointer";
    elem.classList.className = title;
}

function checkPossibleQuestions(elem) {
    changeInput("default");
    if (questionArray.length >= elem.questions.length) {
        questionWindow.innerHTML =
            "Офигеть! Ты разобрал все вопросы! Перезагрузи страницу, и всё начнётся по-новой, Миша";
    document.querySelector(".timer__window").classList.add("none")
        questionWindow.style.color = "#a8323e";
        answerButton.style.opacity = 1;
        fullDisableElem(answerButton);
        fullDisableElem(createQuestionBtn);
        fullDisableElem(answerInput);
    } else {
        questionGeneration(elem);
    }
}

function questionGeneration(elem) {
    fullEnable(document.querySelector(".timer__window"))
    document.querySelector(".timer__window").innerHTML = `<h1>Оставшееся время 0:<span id="checkTimer">25</span></h1>`
    answerInput.placeholder = "Пример: /ban 10"
    document.querySelector(".ticket__img").classList.add('none')
    let objectQuestion =
        elem.questions[Math.floor(Math.random() * elem.questions.length)];
    if (questionArray.indexOf(objectQuestion.id) < 0) {
        questionArray.push(objectQuestion.id);
        questionWindow.innerHTML = objectQuestion.question;
        elem.currentAnswer = objectQuestion;
        conditionAnswer();
        timer()
        return;
    } else {
        checkPossibleQuestions(elem);
        return;
    }
}

function conditionAnswer() {
    fullEnable(answerInput, "answer__input");
    answerInput.style.cursor = "text";
    answerInput.value = "";
    fullDisableElem(createQuestionBtn);
    fullEnable(answerButton);
}

function resultTrue(elem) {
    const trueAnswerCount = document.querySelector("#trueAnswerCount");
    trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1;
    checkPossibleQuestions(elem);
}

function resultFalse(elem) {
    clearTimeout(timeForQuestion)
    const falseAnswerCount = document.querySelector("#falseAnswerCount");
    falseAnswerCount.innerHTML = Number(falseAnswerCount.innerHTML) + 1;
    document.querySelector(".ticket__img").classList.remove('none')
    questionWindow.innerHTML = `<span style="color: #C30052">Ты совершил ошибку</span> <br> ${elem.currentAnswer.currentAnswerQuestion}`;
    createQuestionBtn.innerHTML = "Учту! Создать новый вопрос.";
    fullDisableElem(answerButton);
    fullEnable(createQuestionBtn);
    changeInput("false");
}

function changeInput(status) {
    if (status == "false") {
        answerInput.className = `answer__input answer__false`;
        answerInput.value = "";
        answerInput.placeholder =
            "Ошибочка. Советуем прочитать ворпрос и запомнить его";
        answerInput.setAttribute("disabled", "");
    } else if (status == "default") {
        answerInput.className = `answer__input`;
        answerInput.value = "";
        answerInput.removeAttribute("disabled");
    } else if (status == "warning") {
        answerInput.className = `answer__input answer__warning`;
        answerInput.value = "";
        answerInput.placeholder =
            "Что-то пошло не так. Советую прочитать F.A.Q";
    }
}

function answerConditions(condition, value1, value2) {
    switch (condition) {
        case 2:
            debugger
            if (
                value1[0] == value2.command &&
                value1[1] >= value2.minPunish &&
                value1[1] <= value2.maxPunish &&
                value1.length === 2
                
            ) {
                return true;
            } else {
                return false;
            }
        case 1:
            if (value1[0] == value2.command && value1.length === 1) {
                return true;
            } else {
                return false;
            }
    }
}

function checkAnswer(elem) {
    if (answerInput.value == "") {
        changeInput("warning") 
        return
    }
    let clearArray = answerInput.value.split(" ").filter((e) => e != "");
    clearArray[0] = clearArray[0].toLowerCase();
    switch (clearArray[0]) {
        case "/mute":
        case "/ban":
        case "/jail":
            debugger
            answerConditions(2, clearArray, elem.currentAnswer)
                ? resultTrue(state)
                : resultFalse(state);
            break;
        case "/kick":
        case "/warn":
        case "/skip":
            answerConditions(1, clearArray, elem.currentAnswer)
                ? resultTrue(state)
                : resultFalse(state);
            break;
        default:
            changeInput("warning");
    }
}

function openFAQ() {
    document.querySelector(".modal__window").classList.toggle("none");
}

function changeOnLightTheme() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
}

function changeOnDarkTheme() {
    document.body.style.backgroundColor = "#222222";
    document.body.style.color = "#ffffff";
}