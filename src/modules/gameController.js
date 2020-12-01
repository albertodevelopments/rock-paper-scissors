const paperPlayer = document.getElementById('pick-paper-player')
const paperHouse = document.getElementById('pick-paper-house')
const rockPlayer = document.getElementById('pick-rock-player')
const rockHouse = document.getElementById('pick-rock-house')
const scissorsPlayer = document.getElementById('pick-scissors-player')
const scissorsHouse = document.getElementById('pick-scissors-house')

const score = document.getElementById('score')
let scoreValue = parseInt(score.textContent)

export const resetScreen = () => {
    // Ocultamos los círculos del papel
    if (!paperPlayer.classList.contains('hide')) {
        paperPlayer.classList.add('hide')
    }

    if (paperPlayer.classList.contains('show-flex')) {
        paperPlayer.classList.remove('show-flex')
    }

    if (paperPlayer.classList.contains('win-circle')) {
        paperPlayer.classList.remove('win-circle')
    }

    // Ocultamos los círculos de la piedra
    if (!rockPlayer.classList.contains('hide')) {
        rockPlayer.classList.add('hide')
    }

    if (rockPlayer.classList.contains('show-flex')) {
        rockPlayer.classList.remove('show-flex')
    }

    if (rockPlayer.classList.contains('win-circle')) {
        rockPlayer.classList.remove('win-circle')
    }

    // Ocultamos los círculos de las tijeras
    if (!scissorsPlayer.classList.contains('hide')) {
        scissorsPlayer.classList.add('hide')
    }

    if (scissorsPlayer.classList.contains('show-flex')) {
        scissorsPlayer.classList.remove('show-flex')
    }

    if (scissorsPlayer.classList.contains('win-circle')) {
        scissorsPlayer.classList.remove('win-circle')
    }

    // Ocultamos los círculos del papel de la casa
    if (!paperHouse.classList.contains('hide')) {
        paperHouse.classList.add('hide')
    }

    if (paperHouse.classList.contains('show-flex')) {
        paperHouse.classList.remove('show-flex')
    }

    if (paperHouse.classList.contains('win-circle')) {
        paperHouse.classList.remove('win-circle')
    }

    // Ocultamos los círculos de la piedra de la casa
    if (!rockHouse.classList.contains('hide')) {
        rockHouse.classList.add('hide')
    }

    if (rockHouse.classList.contains('show-flex')) {
        rockHouse.classList.remove('show-flex')
    }

    if (rockHouse.classList.contains('win-circle')) {
        rockHouse.classList.remove('win-circle')
    }

    // Ocultamos los círculos de las tijeras de la casa
    if (!scissorsHouse.classList.contains('hide')) {
        scissorsHouse.classList.add('hide')
    }

    if (scissorsHouse.classList.contains('show-flex')) {
        scissorsHouse.classList.remove('show-flex')
    }

    if (scissorsHouse.classList.contains('win-circle')) {
        scissorsHouse.classList.remove('win-circle')
    }
}

/* ------------------------------------------------------- */
/* ------------------------ TIE -------------------------- */
/* ------------------------------------------------------- */
export const paperTie = () => {
    if (!paperPlayer.classList.contains('show-flex')) {
        paperPlayer.classList.add('show-flex')
    }

    if (paperPlayer.classList.contains('hide')) {
        paperPlayer.classList.remove('hide')
    }

    if (!paperHouse.classList.contains('show-flex')) {
        paperHouse.classList.add('show-flex')
    }
    if (paperHouse.classList.contains('hide')) {
        paperHouse.classList.remove('hide')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'Game tied'
}

export const rockTie = () => {
    if (!rockPlayer.classList.contains('show-flex')) {
        rockPlayer.classList.add('show-flex')
    }
    if (rockPlayer.classList.contains('hide')) {
        rockPlayer.classList.remove('hide')
    }

    if (!rockHouse.classList.contains('show-flex')) {
        rockHouse.classList.add('show-flex')
    }
    if (rockHouse.classList.contains('hide')) {
        rockHouse.classList.remove('hide')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'Game tied'
}

export const scissorsTie = () => {
    if (!scissorsPlayer.classList.contains('show-flex')) {
        scissorsPlayer.classList.add('show-flex')
    }
    if (scissorsPlayer.classList.contains('hide')) {
        scissorsPlayer.classList.remove('hide')
    }

    if (!scissorsHouse.classList.contains('show-flex')) {
        scissorsHouse.classList.add('show-flex')
    }
    if (scissorsHouse.classList.contains('hide')) {
        scissorsHouse.classList.remove('hide')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'Game tied'
}

/* ------------------------------------------------------- */
/* -------------------- PLAYER WINS ---------------------- */
/* ------------------------------------------------------- */
export const playerPaperWin = () => {
    if (!paperPlayer.classList.contains('show-flex')) {
        paperPlayer.classList.add('show-flex')
    }
    if (paperPlayer.classList.contains('hide')) {
        paperPlayer.classList.remove('hide')
    }

    if (!rockHouse.classList.contains('show-flex')) {
        rockHouse.classList.add('show-flex')
    }
    if (rockHouse.classList.contains('hide')) {
        rockHouse.classList.remove('hide')
    }

    if (!paperPlayer.classList.contains('win-circle')) {
        paperPlayer.classList.add('win-circle')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'You Win'
}

export const playerRockWin = () => {
    const rockPlayer = document.getElementById('pick-rock-player')
    const scissorsHouse = document.getElementById('pick-scissors-house')

    if (!rockPlayer.classList.contains('show-flex')) {
        rockPlayer.classList.add('show-flex')
    }
    if (rockPlayer.classList.contains('hide')) {
        rockPlayer.classList.remove('hide')
    }

    if (!scissorsHouse.classList.contains('show-flex')) {
        scissorsHouse.classList.add('show-flex')
    }
    if (scissorsHouse.classList.contains('hide')) {
        scissorsHouse.classList.remove('hide')
    }

    if (!rockPlayer.classList.contains('win-circle')) {
        rockPlayer.classList.add('win-circle')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'You Win'
}

export const playerScissorsWin = () => {
    const scissorsPlayer = document.getElementById('pick-scissors-player')
    const paperHouse = document.getElementById('pick-paper-house')

    if (!scissorsPlayer.classList.contains('show-flex')) {
        scissorsPlayer.classList.add('show-flex')
    }
    if (scissorsPlayer.classList.contains('hide')) {
        scissorsPlayer.classList.remove('hide')
    }

    if (!paperHouse.classList.contains('show-flex')) {
        paperHouse.classList.add('show-flex')
    }
    if (paperHouse.classList.contains('hide')) {
        paperHouse.classList.remove('hide')
    }

    if (!scissorsPlayer.classList.contains('win-circle')) {
        scissorsPlayer.classList.add('win-circle')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'You Win'
}

/* ------------------------------------------------------- */
/* -------------------- PLAYER LOSES --------------------- */
/* ------------------------------------------------------- */
export const playerPaperLoss = () => {
    const paperPlayer = document.getElementById('pick-paper-player')
    const scissorsHouse = document.getElementById('pick-scissors-house')

    if (!paperPlayer.classList.contains('show-flex')) {
        paperPlayer.classList.add('show-flex')
    }
    if (paperPlayer.classList.contains('hide')) {
        paperPlayer.classList.remove('hide')
    }

    if (!scissorsHouse.classList.contains('show-flex')) {
        scissorsHouse.classList.add('show-flex')
    }
    if (scissorsHouse.classList.contains('hide')) {
        scissorsHouse.classList.remove('hide')
    }

    if (!scissorsHouse.classList.contains('win-circle')) {
        scissorsHouse.classList.add('win-circle')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'The House Wins'
}

export const playerRockLoss = () => {
    const rockPlayer = document.getElementById('pick-rock-player')
    const paperHouse = document.getElementById('pick-paper-house')

    if (!rockPlayer.classList.contains('show-flex')) {
        rockPlayer.classList.add('show-flex')
    }
    if (rockPlayer.classList.contains('hide')) {
        rockPlayer.classList.remove('hide')
    }

    if (!paperHouse.classList.contains('show-flex')) {
        paperHouse.classList.add('show-flex')
    }
    if (paperHouse.classList.contains('hide')) {
        paperHouse.classList.remove('hide')
    }

    if (!paperHouse.classList.contains('win-circle')) {
        paperHouse.classList.add('win-circle')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'The House Wins'
}

export const playerScissorsLoss = () => {
    const scissorsPlayer = document.getElementById('pick-scissors-player')
    const rockHouse = document.getElementById('pick-rock-house')

    if (!scissorsPlayer.classList.contains('show-flex')) {
        scissorsPlayer.classList.add('show-flex')
    }
    if (scissorsPlayer.classList.contains('hide')) {
        scissorsPlayer.classList.remove('hide')
    }

    if (!rockHouse.classList.contains('show-flex')) {
        rockHouse.classList.add('show-flex')
    }
    if (rockHouse.classList.contains('hide')) {
        rockHouse.classList.remove('hide')
    }

    if (!rockHouse.classList.contains('win-circle')) {
        rockHouse.classList.add('win-circle')
    }

    const resultMessage = document.getElementById('result-msg')
    resultMessage.textContent = 'The House Wins'
}

export const addScore = () => {
    scoreValue++
    score.textContent = scoreValue.toString()
}

export const substractScore = () => {
    if (scoreValue > 0) scoreValue--
    score.textContent = scoreValue.toString()
}
