let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultMessage = document.querySelector('.result-message');
const choices = document.querySelectorAll('.choice');




choices.forEach(choice => {
  choice.addEventListener('click', () => {
      const userPick = choice.id;
      const generatedComputerMove = ComputerMove();
      const checkWinner = defineWinner(userPick, generatedComputerMove);
      const addScore = addScoreToWinner(checkWinner);
      resultMessage.innerHTML = `user:  ${userPick} <br> computer:  ${generatedComputerMove} `;
      const ifWinner = document.createElement('p');
      ifWinner.textContent = addScore;
      ifWinner.classList.add('winner');
      resultMessage.appendChild(ifWinner)
  })
})



function ComputerMove(){
  const choices = ['rock' , 'paper' , 'scissors'];
  const randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
};


function defineWinner(userPick, generatedComputerMove){
  if(userPick === generatedComputerMove){
    return 'draw';
  }
  if((userPick === 'rock' && generatedComputerMove === 'scissors') || 
      (userPick === 'paper' && generatedComputerMove === 'rock') ||
      (userPick === 'scissors' && generatedComputerMove === 'paper')) {

      return 'win';
  }
    return 'lose'
} 


function addScoreToWinner(checkWinner){
    if(checkWinner === 'win'){
        userScore++;
        userScoreSpan.textContent = userScore;
        return 'user win'
    }
    if(checkWinner === 'lose'){
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return 'computer win'
    }
    return 'draw'
}