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
            command: "/kpz",
            minPunish: 1,
            maxPunish: 30,
            currentAnswerQuestion:
                "АФК при аресте запрещено. Но важно подождать 2-3 минуты, так как у игрока могут возникнуть тех.неполадки.",
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
        {
            id: 14,
            question:
                "Три мафиози проникли на военную базу, но в масках и бронежилетах, через КПП. Будет ли им что-то и что?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 100,
            currentAnswerQuestion:
                "Нападение на военную базу разрешенно от 6 человек.",
        },
        {
            id: 15,
            question:
                "Вы увидели, что на корабле человек в скине йоды. Что ему будет?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Скин 420(Скин йоды) запрещён, так как его модель отличается от стандартной, что даёт ему преимущество, когда в него стреляют.",
        },
        {
            id: 16,
            question:
                "Игроки, проникая на военную часть решили схитрить и перелезли забор используя газель. Будет ли наказана их хитрость?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Нападение на военную часть разрешено только через КПП.",
        },
        {
            id: 17,
            question:
                "Игрок прописал в чат “/me отрастил крылья с хвостом и взлетел вверх”. Будет ли ему что то за это?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 50,
            currentAnswerQuestion:
                "Это считается НонРП отыгровкой, так как эти действия невозможны в реальной жизни.",
        },
        {
            id: 18,
            question:
                "Вы видите, что игрок давит на машине человека несколько раз. Ваши действия?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 100,
            currentAnswerQuestion:
                "Если игрок несколько раз, то есть намеренно, наезжает на человека автомобилем, то это считает ДБ.",
        },
        {
            id: 19,
            question:
                "Человек, стреляя с оружия в животное приседает и встаёт, тем самым, сбивает анимку, стреляет немного быстрее. Что Вы сделаете?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Сбивая темп стрельбы, анимацией приседания и подъёма, человек использует баг игры, что запрещено. А по сколько животное это не игрок, то наказывается, как за сбив темпа стрельбы в воздух.",
        },
        {
            id: 20,
            question:
                "Наблюдая на ЦР за игроками, вы заметили, что игрок использовал яд на другом игроке. Будет ли он наказан и как?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 80,
            currentAnswerQuestion:
                "Использование яда, на игроках, в Зелёных зонах запрещено.",
        },
        {
            id: 21,
            question:
                "На Ваших глазах игрок без причины человек убил 6 человек используя баг +С. Какие Ваши действия?",
                command: "/ban",
                minPunish: 1,
                maxPunish: 4,
            currentAnswerQuestion:
                "Убийство 4+ человек считается как массовым ДМом.",
        },
        {
            id: 22,
            question:
                "Вы видите, что игрок очень высоко прыгает на велосипеде (высотой в 3 автобуса). Будет ли ему что то за это?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 50,
            currentAnswerQuestion:
                "Высокие прыжки на велосипеде считаются багоюзом.",
        },
        {
            id: 23,
            question:
                "Игрок на мотоцикле Sanchez едет со скоростью 120 км/час по полю. Что Вы предпримите?",
                command: "/skip",
            currentAnswerQuestion:
                "На мотоцикле марки Sanchez езда по полям разрешена без ограничений скорости.",
        },
        {
            id: 24,
            question:
                "Наблюдая за ЦР вы видите, как человек поставил лавку посередине ЦР. Один из игроков, попросил его убрать лавку, но он его проигнорировал. Что будете делать?",
                command: "/kick",
            currentAnswerQuestion:
                "Размещение торговой палатки разрешено только по линии стандартных(размещенные модом) палаток.",
        },
        {
            id: 25,
            question:
                "Игрок А назвал игрока Б - 'Чурка'. Что Вы сделаете с игроком А?",
                command: "/mute",
                minPunish: 1,
                maxPunish: 200,
            currentAnswerQuestion:
                "Слово “чурка” является разжиганием конфликта, на основе национального признака.",
        },
        {
            id: 26,
            question:
                "Игрок включил “Стас Михайлов  - Всё для тебя ” в голосовой чат. Что Вы сделаете?",
                command: "/mute",
                minPunish: 1,
                maxPunish: 50,
            currentAnswerQuestion:
                "Включение музыки в голосовой чат - запрещено.",
        },
        {
            id: 27,
            question:
                "Игрок в ВИП чат каждые 30 секунд присылает объявление о продаже авто. Что ему будет?",
                command: "/mute",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Запрещено подавать больше 1 рекламного сообщения в 'VIP чат' в 60 секунд, 1 человеку.",
        },
        {
            id: 28,
            question:
                "Вы видите  игрока, который в своей лавки установил цену за товар 400011111",
                command: "/kick",
            currentAnswerQuestion:
                "На сервере нет разделение между символами(4.000.000), поэтому символ 1 с повторяющимися значениями выше 3 - обман зрения. Пример: 4001111 - обман, 4000111 - не обман.",
        },
        {
            id: 29,
            question:
                "Игрок поставил лавку на автобазара, в территории продажи авто. После просьбы её убрать. Он Вам ничего не ответил.",
                command: "/kick",
            currentAnswerQuestion:
                "Лавку в зоне продажи авто ставить запрещено. И по сколько игрок никак не отреагировал на Вашу просьбу, то его можно кикнуть.",
        },
        {
            id: 30,
            question:
                "Игрок прилетел на свободный корабль, используя воздушный шар. Можно ли его за это наказать и как?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Влёт на воздушном транспорте в зону корабля запрещен.",
        },
        {
            id: 31,
            question:
                "Вы увидели, как игрок заспавнился прям на корабле. Что Вы сделаете ему?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Устанавливать /setspawn в зоне корабля запрещено.",
        },
        {
            id: 32,
            question:
                "Убив игрока на корабле, игрок использовал анимацию исправления нужды на убитом игроке. Нарушает ли он что то?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "При захвате корабля запрещено использовать какие-либо анимации.",
        },
        {
            id: 33,
            question:
                "Игрок приехал на контрабанду и сильно лагает, его пинг 130. Это будет как то наказываться?",
                command: "/skip",
            currentAnswerQuestion:
                "Приезжать на захват с пингом выше 150 запрещено, а 130 ниже 150.",
        },
        {
            id: 34,
            question:
                "Трое игроков в 21:50 грабят нефтевоз. Ограбление они заканчивают в 22:02 Им что то за это будет, если да, то что?",
                command: "/skip",
            currentAnswerQuestion:
                "Нападение на нефтевоз разрешено с 08:00 до 22:00. Игроки начали нападение в разрешенное время, поэтому на них не распространяется наказание.",
        },
        {
            id: 35,
            question:
                "Игрока грабят, когда он везёт бочки. В ответ на ограбление игрок вышел и начала стрелять по ним без РП отыгровки. Будет ли выдано наказание водителю нефтевоза?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 100,
            currentAnswerQuestion:
                "Игрок не имеет право просто выходить и стрелять без РП отыгровки. Эти действия будут оцениваться как НонРП.",
        },
        {
            id: 36,
            question:
                "Армия везёт боеприпасы, в конвое, в 14:00. На них нападает ОПГ “Санитары” в количестве 5 человек. Будет-ли выдано наказание игрокам состоящим в ОПГ “Санитары”?",
                command: "/skip",
            currentAnswerQuestion:
                "Наказание не будет выдано так как игроки ничего не нарушают. Нападение на конвой разрешено в количестве 4-х и более человек.",
        },
        {
            id: 37,
            question:
                "На военную часть прилетел игрок на шаре. Что ему будет?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 50,
            currentAnswerQuestion:
                "Использовать активный аксессуар на территории военной части запрещено. Активными аксессуарами являются  велосипед и шар.",
        },
        {
            id: 38,
            question:
                "Игроки напали на военную часть. Но там нет ни одного военного. Один из игроков решил отойти и встал в АФК. Он простоял в АФК 5 минут. Будет ли ему что то за это?",
                command: "/kick",
            currentAnswerQuestion:
                "Запрещено уходить в АФК более чем на 60 секунд, при нападении на военную часть.",
        },
        {
            id: 39,
            question:
                "Игрока, во время нападения на военную часть убили. Его коллеги убили всех на военной части и она стала свободной. Игрок вылечился и сразу же вернулся на военную часть. Нарушает ли он что то и если да, то что?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 30,
            currentAnswerQuestion:
                "Если игрок вернулся на место смерти быстрее чем 30 минут, то это считается РК.",
        },
        {
            id: 40,
            question:
                "После рабочего дня Сержант Полиции снял форму и пошёл со своей семьёй грабить ВЧ. Наказуемо ли это?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 60,
            currentAnswerQuestion:
                "Запрещено нападение на вч сотрудникам гос. структур (даже без формы).",
        },
        {
            id: 41,
            question:
                "Вы увидели, как игрок на авто использует гидравлику. Наказуемо ли это?",
                command: "/ban",
                minPunish: 5,
                maxPunish: 15,
            currentAnswerQuestion:
                "Системно гидравлики на сервере нет. Поэтому это считается незначительным преимуществом и наказывается баном.",
        },
        {
            id: 42,
            question:
                "Игрок стоя на шахте написал фразу - “я использую РВХ”. Будет ли он наказан и за что?",
                command: "/ban",
                minPunish: 5,
                maxPunish: 30,
            currentAnswerQuestion:
                "Игрок сознался в нарушение правил сервера, поэтому его следует наказать.",
        },
        {
            id: 43,
            question:
                "Игрок применил ЯД (/poison) на другом игроке без РП отыгровок. Какое наказание он должен получить?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 100,
            currentAnswerQuestion:
                "Данное действие расценивается, как 'Нон РП'.",
        },
        {
            id: 44,
            question:
                "Ходя по рекону,вы видите что игрок закладывает бомбу в общественном месте без рп отыгровок.Что вы сделаете?",
                command: "/ban",
                minPunish: 1,
                maxPunish: 4,
            currentAnswerQuestion:
                "Запрещено нападение на вч сотрудникам гос. структур (даже без формы).",
        },
        {
            id: 45,
            question:
                "Игрок начинает стрелять из авто по другому игроку, используя оружие 'Desert Eagle, Пустынный Орёл'. Какое наказание получит игрок?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 100,
            currentAnswerQuestion:
                "Запрещено производить стрельбу из окошка с оружия 'Desert Eagle'",
        },
        {
            id: 46,
            question:
                "Игрок пытается слить свой автомобиль на автобазаре за 10.000 игровой валюты. Какие действия вы предпримите?",
                command: "/jail",
                minPunish: 1,
                maxPunish: 70,
            currentAnswerQuestion:
                "Игрокам запрещено проводить сливы авто/какого-либо имущества игрокам. Разрешено только в некоторых случаях, а именно: игрок является офф.ютубером проекта. Главный администратор осведомлён о данных действиях. Слив проводит администрация сервера.",
        },
        {
            id: 47,
            question:
                "Игрок написал в репорт “MQ”. Как вы поступите в данной ситуации?",
                command: "/mute",
                minPunish: 100,
                maxPunish: 200,
            currentAnswerQuestion:
                "Фраза 'MQ' считается упоминанием родных. Но данная фраза не является столь серьезным нарушением,, поэтому не стоит выдавать больше чем 200 минут мута.",
        },
        // {
        //     id: 48,
        //     question:
        //         "После рабочего дня Сержант Полиции снял форму и пошёл со своей семьёй грабить ВЧ. Наказуемо ли это?",
        //         command: "/jail",
        //         minPunish: 1,
        //         maxPunish: 60,
        //     currentAnswerQuestion:
        //         "Запрещено нападение на вч сотрудникам гос. структур (даже без формы).",
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
