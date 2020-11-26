import './scss/styles.scss'
import './css/spinner.css'

const pick = choice => {
    const mainSection = document.getElementById('main')
    const playSection = document.getElementById('play')

    // Hide main page and show play section
    if (!mainSection.classList.contains('hide-section')) {
        mainSection.classList.add('hide-section')
    }
    if (mainSection.classList.contains('show-section')) {
        mainSection.classList.remove('show-section')
    }

    if (!playSection.classList.contains('show-section')) {
        playSection.classList.add('show-section')
    }
    if (playSection.classList.contains('hide-section')) {
        playSection.classList.remove('hide-section')
    }

    /*  La casa hace su jugada:
        Index = 0 -> Papel
        Index = 1 -> Piedra
        Index = 2 -> Tijeras
    */
    const randomPick = 3 * Math.random() + 1
    const housePickIndex = Math.floor(randomPick)

    switch (choice) {
        case 'paper':
            if (housePickIndex === 0) {
            } else if (housePickIndex === 1) {
            } else {
            }
            break
    }
}

/* Eventos */
const paper = document.getElementById('main__paper__circle')

paper.addEventListener('click', () => {
    pick('paper')
})
