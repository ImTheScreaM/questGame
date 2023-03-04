let inputUserName = document.createElement('input');
let buttonSubmit = document.createElement('button');
let userName;

inputUserName.id = "inputUserName"
buttonSubmit.id = "buttonSubmit"

inputUserName.placeholder = 'Введите имя';
buttonSubmit.innerText = 'Ввод';

document.body.append(inputUserName,buttonSubmit)
console.log(userName)

let ReadyText = document.createElement('h1')
let ReadyInput = document.createElement('input')
let ReadyButton = document.createElement('button')

ReadyText.id = "ReadyText"
ReadyButton.id = "ReadyButton"
ReadyInput.id = "ReadyInput"

ReadyInput.placeholder = "yes / no ?"
ReadyButton.innerHTML = "click";


buttonSubmit.addEventListener('click', () => {
       userName = inputUserName.value
       ReadyText.innerHTML = `Привет ${userName}, вы готовы ?`
       document.body.append(ReadyText,ReadyInput,ReadyButton)
       inputUserName.style.display = "none"
       buttonSubmit.style.display = "none"
})

ReadyButton.addEventListener("click", () => {
       if (ReadyInput.value.toLowerCase() === "f") {
              ReadyText.style.display = "none";
              ReadyInput.style.display = "none";
              ReadyButton.style.display = "none";
              firstQuest.classList.toggle('firstQuest');
              firstQuestText.classList.toggle('firstQuest');

       } else if (ReadyInput.value.toLowerCase() === "no") {
              location.reload()
       } else {
              console.log("Error 666")
       }
})

const firstQuestText = document.querySelector("#firstQuestText")
const firstQuest = document.querySelector('#firstQuest');

for (let i = 0 ; i < 1; i++) {
       const button = document.createElement('button');
       button.innerText = ' ';
       button.style.width = '250px';
       button.style.height = '150px';
       firstQuest.append(button);
}

const trueButton = firstQuest.children[Math.floor(Math.random()*1)]
       
trueButton.addEventListener("click", () => {
       alert('Complete (Hell =)) )') 
       firstQuestText.style.display = "none"
       firstQuest.style.display = "none"
       document.body.append(QuestTwoButton,QuestTwoInput,QuestTwoText,QuestTwoButtonHelp)
})


let QuestTwoText = document.createElement('h1');
let QuestTwoInput = document.createElement('input');
let QuestTwoButton = document.createElement('button');
let QuestTwoButtonHelp = document.createElement('button');

QuestTwoText.id = "QuestTwoText"
QuestTwoInput.id = "QuestTwoInput"
QuestTwoButton.id = "QuestTwoButton"
QuestTwoButtonHelp.id = "QuestTwoButtonHelp"

QuestTwoInput.placeholder = "Ответ"
QuestTwoButton.innerHTML = "answer";
QuestTwoButtonHelp.innerHTML = "Подсказка по кнопке"

trueButton.addEventListener("click", () => {
       QuestTwoText.innerHTML = "Решите математическую задачу <br> x³ + y³ + z³ = k. K — каждое из чисел от 1 до 100. Найти x, y и z. <br>(из числа 42). P.S Что бы ответить надо найти еще кнопку =) "
       document.body.append(QuestTwoButton,QuestTwoInput,QuestTwoText,QuestTwoButtonHelp)
       QuestTwoText.style.width = "700px"
})

QuestTwoButtonHelp.addEventListener('click', () => {
       QuestTwoButtonHelp.innerHTML = "Кнопка где-то в верху"
})

QuestTwoButton.addEventListener('click', () => {
       if (QuestTwoInput.value === "42") {
              alert("Правильно,а решение выглядит так (-80538738812075974)³ + 80435758145817515³ + 12602123297335631³ = 42.")
              QuestTwoText.style.display = "none"
              QuestTwoButton.style.display = "none"
              QuestTwoInput.style.display = "none"
              QuestTwoButtonHelp.style.display = "none"
              document.body.append(halfway,moveOnFour)
       } else {
              console.log("Error")
       }
})

const halfway = document.createElement('h1');
const moveOnFour = document.createElement('button');
moveOnFour.innerHTML = "move on";         

halfway.id = "halfway"
moveOnFour.id = "moveOnFour"

QuestTwoButton.addEventListener('click', () => {
       halfway.innerHTML = `И так ${userName} ты уже прошел пол пути. Дальше больше!!!(Нет)`
})

moveOnFour.addEventListener('click', () => {
       QuestTwoButton.style.display = "none"
       moveOnFour.style.display = "none"
       halfway.style.display = "none"
       document.body.append(MathText,MathButton)
})

const MathText = document.createElement("h1")
const MathButton = document.createElement("button")
MathText.id = "MathText"
MathButton.id = "MathButton"
MathButton.textContent = "GOOOO!!!"

moveOnFour.addEventListener('click',() => {
       MathText.innerHTML = "Щас будет несколько математический задач =)"
})

MathButton.addEventListener('click',() => {
       MathText.style.display = "none"
       MathButton.style.display = "none"
       document.body.append(MathTestOneText,MathTestOneInput,MathTestOneButton)
})

const MathTestOneText = document.createElement('h1')
const MathTestOneInput = document.createElement('input')
const MathTestOneButton = document.createElement('button')

MathTestOneText.id = "MathTestOneText"
MathTestOneInput.id = "MathTestOneInput"
MathTestOneButton.id = "MathTestOneButton"
MathTestOneButton.textContent = "Answer"

MathButton.addEventListener('click',() => {
       MathTestOneText.innerHTML = "Какое число получится, если перемножить все цифры на цифровой клавиатуре телефона?"
})

MathTestOneButton.addEventListener('click', () => {
       if (MathTestOneInput.value.toLowerCase() === "0") {
              alert("Правильно!!")
              MathTestOneText.style.display = "none"
              MathTestOneInput.style.display = "none"
              MathTestOneButton.style.display = "none"
              document.body.append(MathTestTwoText,MathTestTwoInput,MathTestTwoButton)
       } else {
              alert("Неправильно")
       }
})

const MathTestTwoText = document.createElement('h1')
const MathTestTwoInput = document.createElement('input')
const MathTestTwoButton = document.createElement('button')

MathTestTwoText.id = "MathTestTwoText"
MathTestTwoInput.id = "MathTestTwoInput"
MathTestTwoButton.id = "MathTestTwoButton"
MathTestTwoButton.textContent = "Answer"

MathTestOneButton.addEventListener('click', () => {
       MathTestTwoText.innerHTML = "Где можно прибавить 2 к 11 и получить 1?"
})

MathTestTwoButton.addEventListener('click', () => {
       if (MathTestTwoInput.value.toLowerCase() === "на часах") {
              alert('Это тоже верно!')
              MathTestTwoText.style.display = "none"
              MathTestTwoInput.style.display = "none"
              MathTestTwoButton.style.display = "none"
              document.body.append(MathTestThreeText,MathTestThreeInput,MathTestThreeButton)
       } else {
              alert('Не правильно')
       }
})

const MathTestThreeText = document.createElement('h1')
const MathTestThreeInput = document.createElement('input')
const MathTestThreeButton = document.createElement('button')

MathTestThreeText.id = "MathTestThreeText"
MathTestThreeInput.id = "MathTestThreeInput"
MathTestThreeButton.id = "MathTestThreeButton"
MathTestThreeButton.textContent = "Answer"

MathTestTwoButton.addEventListener('click', () => {
       MathTestThreeText.innerHTML = "Утка получила 9 долларов, паук — 36 долларов, пчела — 27 долларов. Основываясь на этой информации, сколько денег дадут кошке?"
})

MathTestThreeButton.addEventListener('click', () => {
       if (MathTestThreeInput.value.toLowerCase() === "18") {
              alert('Я думал ты не настолько умный')
              MathTestThreeText.style.display = "none"
              MathTestThreeInput.style.display = "none"
              MathTestThreeButton.style.display = "none"
              document.body.append(finalMathTest,finalMathTestBtn)
       } else {
              alert('Не верно')
       }
})

const finalMathTest = document.createElement('h1')
const finalMathTestBtn = document.createElement('button')

finalMathTest.id = "finalMathTest"
finalMathTestBtn.id = "finalMathTestBtn"

finalMathTestBtn.textContent = "Go =*("

MathTestThreeButton.addEventListener('click', () => {
       finalMathTest.innerHTML = "Остался последний вопрос"
})

finalMathTestBtn.addEventListener('click', () => {
       finalMathTest.style.display = "none"
       finalMathTestBtn.style.display = "none"
       document.body.append(MathTestFourText,MathTestFourInput,MathTestFourButton)
})


const MathTestFourText = document.createElement('h1')
const MathTestFourInput = document.createElement('input')
const MathTestFourButton = document.createElement('button')
MathTestFourText.id = "MathTestFourText"
MathTestFourInput.id = "MathTestFourInput"
MathTestFourButton.id = "MathTestFourButton"


MathTestFourButton.textContent = "Answer"

finalMathTestBtn.addEventListener('click', () => {
       MathTestFourText.innerHTML = "Сколько сторон у круга? {Здесь без стиля т.к это изюминка это го вопроса =) }"
})

MathTestFourButton.addEventListener('click', () => {
       if (MathTestFourInput.value.toLowerCase() === "2") {
              alert('Внутри и снаружи =)')
              MathTestFourButton.style.display = 'none'
              MathTestFourInput.style.display = 'none'
              MathTestFourText.style.display = 'none'
              document.body.append(FinalText,ResetBtn)
       }else {
              alert('Подумай еще')
       }
})

const FinalText = document.createElement('h1')
const ResetBtn = document.createElement('button')
FinalText.id = "FinalText"
ResetBtn.id = "ResetBtn"

ResetBtn.textContent = "RESET"

MathTestFourButton.addEventListener('click', () => {
       FinalText.innerHTML = `Поздравляем ${userName} это ФИНАЛ!!!( Т.к у автора закончились идеи =)) ) ,но вы можете ресетнуть нажав по кнопке RESET`
})

ResetBtn.addEventListener('click', () => {
       location.reload()
})







