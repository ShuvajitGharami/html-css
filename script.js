function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '*'; // Snowflake symbol
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Random size

    document.querySelector('.snowfall').appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Generate snowflakes continuously
setInterval(createSnowflake, 100);

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `Date: ${day}-${month}-${year}`;
}
setInterval(updateClock, 1000);
updateClock();
