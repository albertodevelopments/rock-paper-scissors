import {
    resetScreen,
    paperTie,
    playerPaperWin,
    playerPaperLoss,
    rockTie,
    playerRockLoss,
    playerScissorsWin,
    scissorsTie,
    playerScissorsLoss,
    playerRockWin,
    addScore,
    substractScore,
} from '/src/modules/gameController.js'

import './scss/styles.scss'
import './css/spinner.css'

// Imágenes de los elementos
import './assets/img/bg-triangle.svg'
import './assets/img/icon-close.svg'
import './assets/img/icon-paper.svg'
import './assets/img/icon-rock.svg'
import './assets/img/icon-scissors.svg'
import './assets/img/rules-exit.png'

const paper = document.getElementById('main-paper-circle')
const rock = document.getElementById('main-rock-circle')
const scissors = document.getElementById('main-scissors-circle')

const mainSection = document.getElementById('main')
const loadingSection = document.getElementById('loading')
const playSection = document.getElementById('play')

const playAgain = document.getElementById('play-again')
const body = document.getElementById('body')
const rules = document.getElementById('rules')
const exitRules = document.getElementById('exit-rules')
const rulesFrame = document.getElementById('rules-frame')
const footer = document.getElementById('footer')

const pick = playerPick => {
    if (!mainSection.classList.contains('hide')) {
        mainSection.classList.add('hide')
    }
    if (mainSection.classList.contains('show-block')) {
        mainSection.classList.remove('show-block')
    }

    if (!loadingSection.classList.contains('show-block')) {
        loadingSection.classList.add('show-block')
    }
    if (loadingSection.classList.contains('hide')) {
        loadingSection.classList.remove('hide')
    }

    setTimeout(() => {
        resolvePick(playerPick)
    }, 1000)
}

/* Eventos */
const resolvePick = playerPick => {
    resetScreen()

    const randomPick = 2 * Math.random() + 1

    let housePickIndex = Math.floor(randomPick)

    if (!loadingSection.classList.contains('hide')) {
        loadingSection.classList.add('hide')
    }
    if (loadingSection.classList.contains('show-block')) {
        loadingSection.classList.remove('show-block')
    }

    if (!playSection.classList.contains('show-block')) {
        playSection.classList.add('show-block')
    }
    if (playSection.classList.contains('hide')) {
        playSection.classList.remove('hide')
    }

    /*  La casa hace su jugada:
        Index = 0 -> Papel
        Index = 1 -> Piedra
        Index = 2 -> Tijeras
    */
    let housePick
    switch (housePickIndex) {
        case 1:
            housePick = 'paper'
            break
        case 2:
            housePick = 'rock'
            break
        case 3:
            housePick = 'scissors'
            break
    }

    switch (playerPick) {
        case 'paper':
            if (housePick === 'paper') {
                paperTie()
            } else if (housePick === 'rock') {
                playerPaperWin()
                addScore()
            } else {
                playerPaperLoss()
                substractScore()
            }
            break
        case 'rock':
            if (housePick === 'paper') {
                playerRockLoss()
                substractScore()
            } else if (housePick === 'rock') {
                rockTie()
            } else {
                playerRockWin()
                addScore()
            }
            break
        case 'scissors':
            if (housePick === 'paper') {
                playerScissorsWin()
                addScore()
            } else if (housePick === 'rock') {
                playerScissorsLoss()
                substractScore()
            } else {
                scissorsTie()
            }
            break
    }
}

paper.addEventListener('click', () => {
    pick('paper')
})

rock.addEventListener('click', () => {
    pick('rock')
})

scissors.addEventListener('click', () => {
    pick('scissors')
})

playAgain.addEventListener('click', () => {
    if (!playSection.classList.contains('hide')) {
        playSection.classList.add('hide')
    }
    if (playSection.classList.contains('show-block')) {
        playSection.classList.remove('show-block')
    }

    if (!mainSection.classList.contains('show-block')) {
        mainSection.classList.add('show-block')
    }
    if (mainSection.classList.contains('hide')) {
        mainSection.classList.remove('hide')
    }
})

rules.addEventListener('click', () => {
    if (!body.classList.contains('hide')) {
        body.classList.add('hide')
    }
    if (body.classList.contains('show-block')) {
        body.classList.remove('show-block')
    }

    if (!footer.classList.contains('hide')) {
        footer.classList.add('hide')
    }
    if (footer.classList.contains('show-flex')) {
        footer.classList.remove('show-flex')
    }

    if (!rulesFrame.classList.contains('show-block')) {
        rulesFrame.classList.add('show-block')
    }
    if (rulesFrame.classList.contains('hide')) {
        rulesFrame.classList.remove('hide')
    }
})

exitRules.addEventListener('click', () => {
    if (!rulesFrame.classList.contains('hide')) {
        rulesFrame.classList.add('hide')
    }
    if (rulesFrame.classList.contains('show-block')) {
        rulesFrame.classList.remove('show-block')
    }

    if (!body.classList.contains('show-block')) {
        body.classList.add('show-block')
    }
    if (body.classList.contains('hide')) {
        body.classList.remove('hide')
    }

    if (!footer.classList.contains('show-flex')) {
        footer.classList.add('show-flex')
    }
    if (footer.classList.contains('hide')) {
        footer.classList.remove('hide')
    }
})
