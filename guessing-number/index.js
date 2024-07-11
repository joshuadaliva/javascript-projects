const submit = document.getElementById('submit')
const lives = 5



while(lives > 0){
	submit.addEventListener('click', (e) => {
	e.preventDefault()
	const userInput = Number(document.getElementById('userInput').value)
	const generateRandomNumber = Math.floor(Math.random() * (100 - 50 + 1) + 50)
	alert(generateRandomNumber)
})
}
