const submit = document.getElementById('submit')
const container = document.getElementById('container')
const displayLives = document.getElementById('lives')
const userInput = document.getElementById('userInput')
const resetButton = document.getElementById('reset') // Added reset button
let lives = 5

// Function to render the result on the page
const renderResult = (generated, result, lives) => {
    container.innerHTML = ''
    const generatedNumber = document.createElement('h1')
    generatedNumber.textContent = generated
    container.appendChild(generatedNumber)
    const gameResult = document.createElement('p')
    gameResult.textContent = result
    container.appendChild(gameResult)
    displayLives.textContent = `Lives: ${lives}`
}

// Function to check if lives are depleted
const checkLives = () => {
    if (lives <= 0) {
        container.innerHTML = `<h1>No more lives</h1>`
        submit.disabled = true
    }
}

// Function to reset the game
const resetGame = () => {
    lives = 5
    displayLives.textContent = `Lives: ${lives}`
    submit.disabled = false
    userInput.value = ''
    container.innerHTML = ''
}

// Event listener for submit button
submit.addEventListener('click', (e) => {
    e.preventDefault()
    const generateRandomNumber = Math.floor(Math.random() * 10) + 1
    const userGuess = Number(userInput.value)

    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        renderResult(generateRandomNumber, "Please enter a number between 1 and 10", lives)
        userInput.value = ''
        return
    }

    // Check if the guess is correct
    if (userGuess === generateRandomNumber) {
        lives++
        renderResult(generateRandomNumber, "Correct", lives)
        confetti({
		  particleCount: 100,
		  spread: 70,
		  origin: { y: 0.6 },
		});
    } else {
        lives--
        renderResult(generateRandomNumber, "Wrong", lives)
        checkLives()
    }

    // Clear the input field
    userInput.value = ''
})

// Event listener for reset button
resetButton.addEventListener('click', resetGame)
