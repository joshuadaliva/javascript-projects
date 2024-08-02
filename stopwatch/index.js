let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;


const timeDisplay =  document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
	if(!isRunning){
		timer = setInterval(startTime, 10);
		isRunning = true;
	}
});

function startTime(){
	seconds++;
	if(seconds == 60){
		seconds = 0;
		minutes++;
	};
	if(minutes === 60){
		minutes = 0;
		hours++
	};

	const formatHour = hours.toString().padStart(2,'0');
	const formatMinutes = minutes.toString().padStart(2,'0');
	const formatSeconds = seconds.toString().padStart(2,'0');

	timeDisplay.textContent = `${formatHour}:${formatMinutes}:${formatSeconds}`
};


resetBtn.addEventListener('click', () => {
	clearInterval(timer)
	isRunning = false;
	hours = 0;
	minutes = 0;
	seconds = 0;
	timeDisplay.textContent = `00:00:00`
})


stopBtn.addEventListener('click', () => {
	clearInterval(timer)
	isRunning = false;
})














