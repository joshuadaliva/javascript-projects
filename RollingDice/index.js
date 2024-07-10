const submit = document.getElementById('submit')
const container = document.getElementById('container')
const minNumber = 1
const maxNumber = 6


const checkIfEqual = (generatedNumber, userInput) => {
	if (generatedNumber === userInput) {
		const successMsg = document.createElement('p')
		successMsg.style.color = 'green'
		successMsg.textContent = 'The same number'
		container.appendChild(successMsg)
	}
	else{
		const notSuccess = document.createElement('p')
		notSuccess.textContent = 'Try again'
		notSuccess.style.color = 'red'
		container.appendChild(notSuccess)
	}
}

submit.addEventListener('click', () => {
	container.innerHTML = ''
	const getUserInput = Number(document.getElementById('userInput').value)
	const generateRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	const renderImage = document.createElement('img')
	renderImage.src = `dice/Dice-${generateRandomNumber}.png`
	renderImage.width = 100
	renderImage.height = 100
	container.appendChild(renderImage)
	checkIfEqual(generateRandomNumber, getUserInput)
})