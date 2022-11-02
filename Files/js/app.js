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
const createQuestion = document.querySelector("#createQuestion")
    const questionWindow = document.querySelector("#questionWindow")
    const answerButton = document.querySelector("#answerButton")

// Кнопка создать пост
function generateQuestion(elem) {
    let objectQuestion = elem.questions[Math.floor(Math.random() * elem.questions.length)];
    questionWindow.innerHTML = objectQuestion.question;
    elem.currentAnswer = objectQuestion;
    answerInput.removeAttribute("disabled")
    answerInput.value = ""
    createQuestion.style.opacity = 0
    answerButton.style.opacity = 1
    createQuestion.setAttribute("disabled","")
    answerButton.removeAttribute("disabled")
}

function nextQuestion(atr) {
    if (atr == true) {
        questionWindow.innerHTML = "Ты большой молодец. Создай ещё один вопрос" 
    } else if (atr == false){
        questionWindow.innerHTML = "Посмотри, где ты совершил ошибку" + "<br/>" + questionWindow.innerHTML
    }
    answerInput.setAttribute("disabled", '')
    answerInput.value = "Чтобы создать новый вопрос, нажмите кнопку 'Создать вопрос'"
    createQuestion.style.opacity = 1
    answerButton.style.opacity = 0
    answerButton.setAttribute("disabled","")
    createQuestion.removeAttribute("disabled")
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
                clearArray[0] == numberAnswer.command &&
                typeof Number(clearArray[1]) == "number" &&
                clearArray[2] >= numberAnswer.minPunish &&
                clearArray[2] <= numberAnswer.maxPunish &&
                clearArray.length === 3
            ) {
                nextQuestion(true)
                trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            } else {
                nextQuestion(false)
                falseAnswerCount.innerHTML = Number(falseAnswerCount.innerHTML) + 1
            }
            break;
        case "/kick":
        case "/warn":
            if (
                clearArray[0] == numberAnswer.command &&
                typeof Number(clearArray[1]) == "number" &&
            clearArray.length === 2) {
                nextQuestion(true)
                trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            } else {
                nextQuestion(false)
                falseAnswerCount.innerHTML = Number(falseAnswerCount.innerHTML) + 1
            }
            break;
        case "/skip":
            if (
                clearArray[0] == numberAnswer.command &&
                clearArray.length === 1) {
                nextQuestion(true)
                trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1
            } else {
                nextQuestion(false)
                falseAnswerCount.innerHTML = Number(falseAnswerCount.innerHTML) + 1
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




