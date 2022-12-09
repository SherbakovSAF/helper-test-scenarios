let state = {
    questions: [
        {
            id: 0,
            question:
                "Пришел репорт на игрока при слежке вы заметили что полицейский без каких-либо отыгровок выдает звезды/начинает арест. Что вы сделаете?",
            command: "/jail",
            minPunish: 0,
            maxPunish: 150,
            currentAnswerQuestion:
                "Все отыгровки для полицейского, кроме визуальных - обязательны. Без них игрок попадает под пункт 'НонРП коп'.",
        },
        {
            id: 1,
            question:
                "Вы принялись за репорт 'Нас убивают при выходе с Казармы', при реконе вы заметили нарушение. Что вы сделаете?",
            command: "/warn",
            currentAnswerQuestion:
                "Убийства на территории выхода с Казармы запрещены. Выход с Казармы - SK Зона.",
        },
        {
            id: 2,
            question:
                "Пришел Варнинг на ТК, вы зашли в рекон и заметили, как игрок убивает людей состоящих в одной организации с ним. Что вы сделаете?",
            command: "/jail",
            minPunish: 1,
            maxPunish: 70,
            currentAnswerQuestion:
                "Убийство членов своей фракции запрещено - это считается ТК(Team Kill). ТК запрещено правилами сервера.",
        },
        {
            id: 3,
            question:
                "Игрок стреляется с другим игроком, после он забегает в интерьер дабы спастись от смерти. Что вы сделаете?",
            command: "/jail",
            minPunish: 1,
            maxPunish: 100,
            currentAnswerQuestion:
                "Заход в интерьер при возможности умереть Интерьер от смерти - запрещено правилами сервера.",
        },
        {
            id: 4,
            question:
                "Вы следите за арестом и на Ваших глазах нарушитель уходит в АФК на 2-3 минуты. Что Вы сделаете?",
            command: "/warn",
            currentAnswerQuestion:
                "АФК при аресте запрещено и наказуемо варном. Но важно подождать 2-3 минуты, так как у игрока могут возникнуть тех.неполадки.",
        },
        {
            id: 5,
            question:
                "Вы поймали репорт,в котором игрок пишет: 'Миллионы, миллионы, миллионы алых роз. Продолжите'. Что Вы сделаете?",
            command: "/skip",
            currentAnswerQuestion:
                "Данная ситуация не имеет серьёзных нарушений. Вы можете продолжить песню, но предупредите игрока, что это является оффтопом и он наказуем. При повторном сообщении, от данного игрока, вы можете выдать ему мут с причиной “оффтоп.",
        },
        {
            id: 6,
            question:
                "Вы поймали репорт, автор репорта жалуется на другого игрока, что он его дм-ит. Зайдя в рекон вы видите, что игрок, на которого пожаловались, просто стоит с оружием в руках и смотрит на игрока в стадии смерти, который обратился в репорт.",
            command: "/skip",
            currentAnswerQuestion:
                "Вы не видели момент нарушения, поэтому не можете выдать наказание, так как не имеет доказательств.Корректнее в этой ситуации продолжить наблюдение, хотя-бы, в течении минуты.",
        },
        {
            id: 7,
            question:
                "Вы ходите по рекону и замечаете игрока 25 уровня, едущего по полям на электробайке (байк,который спавнится на ЖД Вокзале г. Арзамас) Что Вы сделаете?",
            command: "/jail",
            minPunish: 1,
            maxPunish: 40,
            currentAnswerQuestion:
                "Электробайк не является внедорожным транспортом, на которых можно ездить по полям по этому игроку выдается деморган.",
        },
        {
            id: 8,
            question:
                "Допустим Вы видите диалог на авто рынке, между двумя игроками. И один другому говорит:'Prodash machiny?'. Что Вы сделаете?",
            command: "/mute",
            minPunish: 1,
            maxPunish: 20,
            currentAnswerQuestion:
                "Транслитом писать в IC чат запрещено , поэтому игроку выдаётся мут.",
        },
        {
            id: 9,
            question:
                "Вы ходите по рекону и замечаете игроков в количестве двух человек без масок, которые грабят игрока работающего нефтевозом. Что Вы сделаете?",
            command: "/jail",
            minPunish: 20,
            maxPunish: 100,
            currentAnswerQuestion:
                "Во-первых, минимальное количество человек для ограбления - 3.Во-вторых,каждый грабитель должен быть в маске и бронежилете. Поэтому игроку выдается деморган.",
        },
        {
            id: 10,
            question:
                "Ходя по рекону, Вы заметили, что игрок начал стрелять в интерьере в человека?",
            command: "/warn",
            currentAnswerQuestion:
                "Игроку выдаётся warn. Так как он убивает без причины (ДМ) в Зелёной зоне.",
        },
        {
            id: 11,
            question:
                "Человек стоит на ЦР, с занятой лавкой в АФК уже 5+ минут и у него нет товаров.",
            command: "/skip",
            currentAnswerQuestion:
                "На ЦР и так много свободных лавок, поэтому это не наказуемо.",
        },
        {
            id: 12,
            question:
                "А если игрок будет ехать по полю, на Геленваген G63 со скоростью 67 км/ч.",
            command: "/skip",
            currentAnswerQuestion:
                "Езда на внедорожниках разрешенна до 60 км/ч, при этом нужно учитывать погрешность в 5-10 км/ч.",
        },
        {
            id: 13,
            question:
                "Допустим Вы видите диалог, между двумя игроками. И один другому говорит, 'Пошли в Скайп'. Что Вы сделаете?",
                command: "/mute",
                minPunish: 1,
                maxPunish: 70,
            currentAnswerQuestion:
                "Скайп - OOC информация. А использование OOC информации в IC, это МГ, поэтому игроку выдаётся мут.",
        },
        // {
        //     id: ,
        //     question:
        //         "",
        //         command: "",
        //         minPunish: 1,
        //         maxPunish: 70,
        //     currentAnswerQuestion:
        //         "",
        // },
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
            checkTimer.parentElement.innerHTML = `<span style="color: #a8323e">Время закончилось</span>`;
            clearTimeout(timeForQuestion);
            resultFalse(state);
        } else {
            checkTimer.innerHTML = checkTimer.innerHTML - 1;
        }
    }

    timeForQuestion = setInterval(restOfTime, 1000);
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
        document.querySelector(".timer__window").classList.add("none");
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
    fullEnable(document.querySelector(".timer__window"));
    document.querySelector(
        ".timer__window"
    ).innerHTML = `<h1>Оставшееся время 0:<span id="checkTimer">25</span></h1>`;
    answerInput.placeholder = "Пример: /ban 10";
    let objectQuestion =
        elem.questions[Math.floor(Math.random() * elem.questions.length)];
    if (questionArray.indexOf(objectQuestion.id) < 0) {
        questionArray.push(objectQuestion.id);
        questionWindow.innerHTML = objectQuestion.question;
        elem.currentAnswer = objectQuestion;
        conditionAnswer();
        timer();
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
    clearTimeout(timeForQuestion);
    const trueAnswerCount = document.querySelector("#trueAnswerCount");
    trueAnswerCount.innerHTML = Number(trueAnswerCount.innerHTML) + 1;
    checkPossibleQuestions(elem);
}

function resultFalse(elem) {
    clearTimeout(timeForQuestion);
    const falseAnswerCount = document.querySelector("#falseAnswerCount");
    falseAnswerCount.innerHTML = Number(falseAnswerCount.innerHTML) + 1;
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
            debugger;
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
        changeInput("warning");
        return;
    }
    let clearArray = answerInput.value.split(" ").filter((e) => e != "");
    clearArray[0] = clearArray[0].toLowerCase();
    switch (clearArray[0]) {
        case "/mute":
        case "/ban":
        case "/jail":
            debugger;
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

function changeTheme() {
    const el = document.documentElement;
    if (el.hasAttribute("dark-theme")) {
        el.removeAttribute("dark-theme");
    } else {
        el.setAttribute("dark-theme", "true");
    }
}
