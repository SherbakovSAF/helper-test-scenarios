let state = {
    questions: [
        {
            id: 0,
            question:
                "находясь во фракция 'Полиция' будет бить дубинкой всех подряд и садить их?",
            command: "/kick",
            // minPunish: 0,
            // maxPunish: 100,
        },
        {
            id: 1,
            question:
                "убьёт человека без причины в казино, где будет, кроме Вас 4 человека?",
            command: "/kick",
            minPunish: 0,
            maxPunish: 100,
        },
        {
            id: 2,
            question:
                "если игрок, будет ехать по полю на охоте, на авто 'Niva'",
            command: "/kick",
            minPunish: 0,
            maxPunish: 100,
        },
        {
            id: 3,
            question: "если игрок, скажет в чат 'Пошли в Скайп'",
            command: "/kick",
            minPunish: 0,
            maxPunish: 100,
        },
    ],
    currentAnswer: {},
};

const answerInput = document.querySelector("#answer__input");
const questionWindow = document.querySelector("#question__window");
const initialWindow = document.querySelector(".initial__window");
const mainWrap = document.querySelector(".main__wrap");
const answer = document.querySelector(".answer");


function generateQuestion(elem) {
    let objectQuestion =
        elem.questions[Math.floor(Math.random() * elem.questions.length)];
    questionWindow.innerHTML = objectQuestion.question;
    elem.currentAnswer = objectQuestion;
    console.log(elem.currentAnswer);
}

function resetQuestion(elem) {
    initialWindow.classList.add("none");
    generateQuestion(elem);
    mainWrap.classList.remove("none");
}

function windowTotal(text, className) {
    answer.firstElementChild.innerHTML = text
    answer.firstElementChild.classList.add(className)
    answer.classList.remove("none");
    answerInput.value = ""
}


function checkAnswer(elem) {
    let clearArray = answerInput.value.split(" ").filter((e) => e != "");
    numberAnswer = elem.currentAnswer;
    if (clearArray.length === 3) {
        if (
            clearArray[0] === numberAnswer.command &&
            typeof Number(clearArray[1]) == "number" &&
            clearArray[2] >= numberAnswer.minPunish &&
            clearArray[2] <= numberAnswer.maxPunish
        ) {
            return console.log("ответ верный");
        } else {
            windowTotal("Ответ неверный", "bad");
        }
    } else if (clearArray.length === 2) {
        if (
            clearArray[0] === numberAnswer.command &&
            typeof Number(clearArray[1]) == "number"
        ) {
            return console.log("ответ верный");
        } else {
            windowTotal("Ответ неверный", "bad");
        }
    } else {
        return console.log(
            "Проверьте правильность написания, оно должны быть из 3 элементов. Пример: /ban 0 00"
        );
    }
}
