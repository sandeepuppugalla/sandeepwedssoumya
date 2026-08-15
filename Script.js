const targetDate = new Date("September 4, 2026 10:35:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("countdown").innerHTML = `
        <div class="timer-box">
            <span>${days}</span>
            <small>Days</small>
        </div>

        <div class="timer-box">
            <span>${hours}</span>
            <small>Hours</small>
        </div>

        <div class="timer-box">
            <span>${minutes}</span>
            <small>Minutes</small>
        </div>

        <div class="timer-box">
            <span>${seconds}</span>
            <small>Seconds</small>
        </div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
