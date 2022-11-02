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
            question:
                "А если игрок будет ехать по полю, на авто марки Niva'",
            command: "/skip",
        },
        {
            id: 3,
            question: "Допустим Вы видите диалог, между двумя игроками. И один другому говорит, пошли в 'Скайп'. Что Вы сделаете?",
            command: "/mute",
            minPunish: 0,
            maxPunish: 70,
        },
    ],
    currentAnswer: {},
};



const answerInput = document.querySelector("#answerInput")

// Кнопка создать пост
function generateQuestion(elem) {
    const createQuestion = document.querySelector("#createQuestion")
    const questionWindow = document.querySelector("#questionWindow")
    const answerButton = document.querySelector("#answerButton")
    let objectQuestion =
        elem.questions[Math.floor(Math.random() * elem.questions.length)];
    questionWindow.innerHTML = objectQuestion.question;
    elem.currentAnswer = objectQuestion;
    createQuestion.classList.add("none")
    answerInput.removeAttribute("disabled")
    answerButton.classList.remove("none")
    answerInput.value = ""
    console.log(elem.currentAnswer);
}

function result(solution){
    answerInput.className = ""
    answerInput.className = `answer__input  ${solution}`
}

function checkAnswer(elem) {
    const trueAnswerCount = document.querySelector("#trueAnswerCount")
    const falseAnswerCount = document.querySelector("#falseAnswerCount")
    let clearArray = answerInput.value.split(" ").filter((e) => e != "");
    numberAnswer = elem.currentAnswer;
    console.log(clearArray);
    switch (clearArray[0]) {
        case "/mute":
        case "/ban":
        case "/jail":
            if (
                typeof Number(clearArray[1]) == "number" &&
                clearArray[2] >= numberAnswer.minPunish &&
                clearArray[2] <= numberAnswer.maxPunish &&
                clearArray.length === 3
            ) {
                result("answer__true");
                trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            } else {
                result("answer__false");
                falseAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            }
            break;
        case "/kick":
        case "/warn":
            if (typeof Number(clearArray[1]) == "number" &&
            clearArray.length === 2) {
                result("answer__true");
                trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            } else {
                result("answer__false");
                falseAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            }
            break;
        case "/skip":
            if (clearArray.length === 1) {
                result("answer__true");
                trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            } else {
                result("answer__false");
                falseAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            }
            break;
        default:
            result("answer__warning");
    }

    // if (clearArray.length === 3) {
    //     if (
    //         clearArray[0] === numberAnswer.command &&
    //         typeof Number(clearArray[1]) == "number" &&
    //         clearArray[2] >= numberAnswer.minPunish &&
    //         clearArray[2] <= numberAnswer.maxPunish
    //     ) {
    //         result("answer__true")
    //     } else {
    //         result("answer__false")
    //     }
    // } else if (clearArray.length === 2) {
    //     if (
    //         clearArray[0] === numberAnswer.command &&
    //         typeof Number(clearArray[1]) == "number"
    //     ) {
    //         result("answer__true")
    //     } else {
    //         result("answer__false")
    //     }
    // } else if (clearArray.length === 1) {
    //     if (clearArray[0] === numberAnswer.command) {
    //         result("answer__true")
    //     } else {
    //         result("answer__false")
    //     }
    // } else {
    //     result("answer__warning")
    // }
}


// function resetQuestion(elem) {
//     initialWindow.classList.add("none");
//     generateQuestion(elem);
//     mainWrap.classList.remove("none");
// }



// function windowTotal(text, className) {
//     answer.firstElementChild.innerHTML = text
//     answer.firstElementChild.classList.add(className)
//     answer.classList.remove("none");
//     answerInput.value = ""
// }




