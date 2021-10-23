const dino = document.querySelector("#dino")
const backgroud = document.querySelector("#backgroud")
let position = 0;
let isJuping = false;

// Função responsável por tratar o click
const handerClick = (event) => {
    
    if(event.keyCode === 32){
        if(isJuping) return;
        jumping()
    }
    
}
// Move cacto
const moveCacto = (element,positions) => {

    let positionObject = positions;

    let leftMove = setInterval(() => {
        
        if(positionObject > -60){
            positionObject -= 10
            element.style.left = positionObject + "px"
        }else if(positionObject < 55 && position < 39){
            
            clearInterval(leftMove)
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }
        else{
            clearInterval(leftMove)
            backgroud.removeChild(element)
        }

    },30) 
}


// Gerador de cactos

const cactos = () => {
    
    const cacto = document.createElement('div')
    let cactusPosition = 1200

    cacto.classList.add('cacto')
    cacto.style.left = cactusPosition + "px"

    backgroud.appendChild(cacto)

    moveCacto(cacto, cactusPosition)
}

// Gera cactus aleatórios

const randomCactus = () => {
    
    const timeInterval = Math.random() * 5000

    cactos()

    setTimeout(randomCactus, timeInterval)
}

// Função descer

const down = () => {

    let dinoDown = setInterval(() => {
        if(position > 0){
            position -= 20;
            dino.style.bottom = position
        }else{
            clearInterval(dinoDown)
            isJuping = false;
        }
    }, 20)
}

// Função para fazer o dino pular

const jumping = () => {
    isJuping = true;
    let upinterval = setInterval(() => {
        
        if(position >= 150){
            //limpando o intervalo
            clearInterval(upinterval)
            down()
        }else{
            position += 20
            dino.style.bottom = position + "px"
        }
    }, 20)
}
// Chama o cactos
randomCactus()
//Interceptando pressionamento de tecla

document.addEventListener('keyup', handerClick)