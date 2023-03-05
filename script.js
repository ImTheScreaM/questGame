// Audio \\
const player = document.querySelector('.player'),
              imgSrc = document.querySelector('.img__src'),
              playBtn = document.querySelector('.play'),
              audio = document.querySelector('.audio');
                              
// Play function
function playSong() {
      player.classList.add('play') 
      imgSrc.src = '/audio/pause.svg'  
      audio.play()
}

// Pause function
function pauseSong() {
      player.classList.remove('play')
      imgSrc.src = "/audio/play.svg"
      audio.pause()
}

//Play && Pause btn
playBtn.addEventListener('click', () => {
      const isPlaying = player.classList.contains('play')
      if (isPlaying) {
            pauseSong()
      } else {
            playSong()
      }
})

// Preloader \\

window.onload = function () {
       setTimeout(() => {
              const preloader = document.getElementById('preloader');
              preloader.style.display = 'none'
              
       },4000)
}

const gitHub = document.createElement('h1')
gitHub.innerHTML = "https://github.com/ImTheScreaM"
gitHub.id = "gitHub"
gitHub.onclick = gotoLink
document.body.append(gitHub)

function gotoLink() {
       location.href = "https://github.com/ImTheScreaM";
}

// Game \\

let inputUserName = document.createElement('input');
let buttonSubmit = document.createElement('button');
let userName;

inputUserName.id = "inputUserName"
buttonSubmit.id = "buttonSubmit"

inputUserName.placeholder = 'Введите имя';
buttonSubmit.innerText = 'Ввод';

document.body.append(inputUserName,buttonSubmit)

buttonSubmit.addEventListener('click', () => {
       userName = inputUserName.value
       readyText.innerHTML = `Привет ${userName}, вы готовы ?`
       document.body.append(readyText,readyInput,readyButton)
       inputUserName.style.display = "none"
       buttonSubmit.style.display = "none"
})

let readyText = document.createElement('h1')
let readyInput = document.createElement('input')
let readyButton = document.createElement('button')

readyText.id = "ReadyText"
readyButton.id = "ReadyButton"
readyInput.id = "ReadyInput"

readyInput.placeholder = "yes / no ?"
readyButton.innerHTML = "click";

readyButton.addEventListener("click", () => {
       if (readyInput.value.toLowerCase() === "yes") {
              readyText.style.display = "none";
              readyInput.style.display = "none";
              readyButton.style.display = "none";
              firstQuest.classList.toggle('firstQuest');
              firstQuestText.classList.toggle('firstQuest');

       } else if (readyInput.value.toLowerCase() === "no") {
              location.reload()
       } else {
              console.log("%cError 666" , "color:red;text-transform:uppercase;font-size:35px;")
       }
})

const firstQuestText = document.querySelector("#firstQuestText")
const firstQuest = document.querySelector('#firstQuest');

for (let i = 0 ; i < 100; i++) {
       const button = document.createElement('button');
       button.id = "questButton"
       button.innerText = ' ';
       button.style.width = '250px';
       button.style.height = '150px';
       firstQuest.append(button);
}

const trueButton = firstQuest.children[Math.floor(Math.random()*100)]
const falseButton = firstQuest.children[Math.floor(Math.random()*100)]

trueButton.addEventListener("click", () => {
       alert('Complete (Hell =)) )') 
       firstQuestText.style.display = "none"
       firstQuest.style.display = "none"
       document.body.append(questTwoButton,questTwoInput,questTwoText,questTwoButtonHelp)
})
falseButton.addEventListener('click', () => {
       alert('Error Button')
       location.reload()
})


let questTwoText = document.createElement('h1');
let questTwoInput = document.createElement('input');
let questTwoButton = document.createElement('button');
let questTwoButtonHelp = document.createElement('button');

questTwoText.id = "QuestTwoText"
questTwoInput.id = "QuestTwoInput"
questTwoButton.id = "QuestTwoButton"
questTwoButtonHelp.id = "QuestTwoButtonHelp"

questTwoInput.placeholder = "Ответ"
questTwoButton.innerHTML = "answer";
questTwoButtonHelp.innerHTML = "Подсказка по кнопке"

trueButton.addEventListener("click", () => {
       questTwoText.innerHTML = "Решите математическую задачу <br> x³ + y³ + z³ = k. K — каждое из чисел от 1 до 100. Найти x, y и z. <br>(из числа 42). P.S Что бы ответить надо найти еще кнопку =) "
       document.body.append(questTwoButton,questTwoInput,questTwoText,questTwoButtonHelp)
       questTwoText.style.width = "700px"
})

questTwoButtonHelp.addEventListener('click', () => {
       questTwoButtonHelp.innerHTML = "Кнопка где-то в верху"
})

questTwoButton.addEventListener('click', () => {
       if (questTwoInput.value === "42") {
              alert("Правильно,а решение выглядит так (-80538738812075974)³ + 80435758145817515³ + 12602123297335631³ = 42.")
              questTwoText.style.display = "none"
              questTwoButton.style.display = "none"
              questTwoInput.style.display = "none"
              questTwoButtonHelp.style.display = "none"
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

questTwoButton.addEventListener('click', () => {
       halfway.innerHTML = `И так ${userName} ты уже прошел пол пути. Дальше больше!!!(Нет)`
})

moveOnFour.addEventListener('click', () => {
       questTwoButton.style.display = "none"
       moveOnFour.style.display = "none"
       halfway.style.display = "none"
       document.body.append(mathText,mathButton)
})

const mathText = document.createElement("h1")
const mathButton = document.createElement("button")
mathText.id = "MathText"
mathButton.id = "MathButton"
mathButton.textContent = "GOOOO!!!"

moveOnFour.addEventListener('click',() => {
       mathText.innerHTML = "Щас будет несколько математический задач =)"
})

mathButton.addEventListener('click',() => {
       mathText.style.display = "none"
       mathButton.style.display = "none"
       document.body.append(mathTestOneText,mathTestOneInput,mathTestOneButton)
})

const mathTestOneText = document.createElement('h1')
const mathTestOneInput = document.createElement('input')
const mathTestOneButton = document.createElement('button')

mathTestOneText.id = "MathTestOneText"
mathTestOneInput.id = "MathTestOneInput"
mathTestOneButton.id = "MathTestOneButton"
mathTestOneButton.textContent = "Answer"

mathButton.addEventListener('click',() => {
       mathTestOneText.innerHTML = "Какое число получится, если перемножить все цифры на цифровой клавиатуре телефона?"
})

mathTestOneButton.addEventListener('click', () => {
       if (mathTestOneInput.value.toLowerCase() === "0") {
              alert("Правильно!!")
              mathTestOneText.style.display = "none"
              mathTestOneInput.style.display = "none"
              mathTestOneButton.style.display = "none"
              document.body.append(mathTestTwoText,mathTestTwoInput,mathTestTwoButton)
       } else {
              alert("Неправильно")
       }
})

const mathTestTwoText = document.createElement('h1')
const mathTestTwoInput = document.createElement('input')
const mathTestTwoButton = document.createElement('button')

mathTestTwoText.id = "MathTestTwoText"
mathTestTwoInput.id = "MathTestTwoInput"
mathTestTwoButton.id = "MathTestTwoButton"
mathTestTwoButton.textContent = "Answer"

mathTestOneButton.addEventListener('click', () => {
       MathTestTwoText.innerHTML = "Где можно прибавить 2 к 11 и получить 1?"
})

mathTestTwoButton.addEventListener('click', () => {
       if (mathTestTwoInput.value.toLowerCase() === "на часах") {
              alert('Это тоже верно!')
              mathTestTwoText.style.display = "none"
              mathTestTwoInput.style.display = "none"
              mathTestTwoButton.style.display = "none"
              document.body.append(mathTestThreeText,mathTestThreeInput,mathTestThreeButton)
       } else {
              alert('Не правильно')
       }
})

const mathTestThreeText = document.createElement('h1')
const mathTestThreeInput = document.createElement('input')
const mathTestThreeButton = document.createElement('button')

mathTestThreeText.id = "MathTestThreeText"
mathTestThreeInput.id = "MathTestThreeInput"
mathTestThreeButton.id = "MathTestThreeButton"
mathTestThreeButton.textContent = "Answer"

mathTestTwoButton.addEventListener('click', () => {
       mathTestThreeText.innerHTML = "Утка получила 9 долларов, паук — 36 долларов, пчела — 27 долларов. Основываясь на этой информации, сколько денег дадут кошке?"
})

mathTestThreeButton.addEventListener('click', () => {
       if (mathTestThreeInput.value.toLowerCase() === "18") {
              alert('Я думал ты не настолько умный')
              mathTestThreeText.style.display = "none"
              mathTestThreeInput.style.display = "none"
              mathTestThreeButton.style.display = "none"
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

mathTestThreeButton.addEventListener('click', () => {
       finalMathTest.innerHTML = "Остался последний вопрос"
})

finalMathTestBtn.addEventListener('click', () => {
       finalMathTest.style.display = "none"
       finalMathTestBtn.style.display = "none"
       document.body.append(mathTestFourText,mathTestFourInput,mathTestFourButton)
})


const mathTestFourText = document.createElement('h1')
const mathTestFourInput = document.createElement('input')
const mathTestFourButton = document.createElement('button')
mathTestFourText.id = "MathTestFourText"
mathTestFourInput.id = "MathTestFourInput"
mathTestFourButton.id = "MathTestFourButton"


mathTestFourButton.textContent = "Answer"

finalMathTestBtn.addEventListener('click', () => {
       mathTestFourText.innerHTML = "Сколько сторон у круга? {Здесь без стиля т.к это изюминка это го вопроса =) }"
})

mathTestFourButton.addEventListener('click', () => {
       if (mathTestFourInput.value.toLowerCase() === "2") {
              alert('Внутри и снаружи =)')
              mathTestFourButton.style.display = 'none'
              mathTestFourInput.style.display = 'none'
              mathTestFourText.style.display = 'none'
              document.body.append(finalText,resetBtn)
       }else {
              alert('Подумай еще')
       }
})

const finalText = document.createElement('h1')
const resetBtn = document.createElement('button')
finalText.id = "FinalText"
resetBtn.id = "ResetBtn"

resetBtn.textContent = "RESET"

mathTestFourButton.addEventListener('click', () => {
       finalText.innerHTML = `Поздравляем ${userName} это ФИНАЛ!!!( Т.к у автора закончились идеи =)) ) ,но вы можете ресетнуть нажав по кнопке RESET`
})

resetBtn.addEventListener('click', () => {
       location.reload()
})







