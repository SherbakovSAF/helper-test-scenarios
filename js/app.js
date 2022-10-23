let state = [
     {
          id: 0,
          question: "находясь во фракция 'Полиция' будет бить дубинкой всех подряд и садить их?",
          command: "/jail",
          minPunish: "0",
          maxPunish: "150",     
     },
     {
          id: 1,
          question: "убьёт человека без причины в казино, где будет, кроме Вас 4 человека?",
          command: "/jail",
          minPunish: "0",
          maxPunish: "100",
     },
     {
          id: 2,
          question: "если игрок, будет ехать по полю на охоте, на авто 'Niva'",
          command: "-",
     },
     {
          id: 3,
          question: "если игрок, скажет в чат 'Пошли в Скайп'",
          command: "-",
     }
]

const answerInput = document.querySelector('#answer__input')
const questionWindow = document.querySelector('#question__window')
const initialWindow = document.querySelector('.initial__window')
const mainWrap = document.querySelector('.main__wrap ')

function resetQuestion(elem){
     initialWindow.classList.add('none')
     let objectQuestion = elem[Math.floor((Math.random() * elem.length))]
     questionWindow.innerHTML = objectQuestion.question
     mainWrap.classList.remove('none')
     return 
}

function proverka(){
     if (answerInput.value == state[0].prover){
          answerInput.value = 'правильно'
     } else {
          answerInput.value = 'НЕправильно'
     }
}