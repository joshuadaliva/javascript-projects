function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
    hours = hours.toString().padStart(2, '0');

    // Update the background based on the period
    if (period === 'AM') {
        document.body.style.backgroundImage = 'url("images/am.jpg")';
    } else {
        document.body.style.backgroundImage = 'url("images/pm.jpg")';
    }

    // Ensure the background covers the entire page
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Update the time display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('period').textContent = period;
}

setInterval(updateClock, 1000);
updateClock();
