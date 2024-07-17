
//get the elements 
const generatePassword = document.getElementById('generatePassword')
const renderResult = document.getElementById('renderResult')
const lengthOfChar = document.getElementById('lengthOfChar')
const ifLowercase = document.getElementById('ifLowercase')
const ifUppercase = document.getElementById('ifUppercase')
const ifNumbers =  document.getElementById('ifNumbers')
const ifSymbols = document.getElementById('ifSymbols')

//all possible characters
const allLowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
const allUpperCaseChar = allLowerCaseChar.toUpperCase()
const allNumbers = '0123456789'
const allSymbols = "!@#$%^&*()_-+="



//function to add character depending on the user
const getAcceptedChar = () => {
	let acceptedCharacters = ''
	acceptedCharacters += ifLowercase.checked ? allLowerCaseChar : ''
    acceptedCharacters += ifUppercase.checked ? allUpperCaseChar : ''
    acceptedCharacters += ifNumbers.checked ? allNumbers : ''
    acceptedCharacters += ifSymbols.checked ? allSymbols : ''
    return acceptedCharacters
}





//button to generate the password
generatePassword.addEventListener('click', (e) =>{
	e.preventDefault()
	
	let userPassword = ''

	if (!lengthOfChar.checkValidity()) {
        // If not valid, report validity to show the default browser validation message
        lengthOfChar.reportValidity(); 
        return;
    }


    const generatedCharacters = getAcceptedChar()

    if (generatedCharacters === '') {
    	return alert('unable to generated password the user must select atleast one option')
    }

    for(let i = 0; i < parseInt(lengthOfChar.value); i++){
    	const chooseRandomChar = Math.floor(Math.random() * generatedCharacters.length) 
    	userPassword += generatedCharacters[chooseRandomChar]
    }
    
    const renderPass = () =>{
    	renderResult.innerHTML = ''
    	const result = document.createElement('p')
    	result.innerHTML = userPassword
    	renderResult.appendChild(result)
    }
    
    renderPass()

})