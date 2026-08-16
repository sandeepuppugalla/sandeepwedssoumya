function openInvite() {
    document.getElementById("loader").style.display = "none";
}

const weddingDate =
new Date("September 4, 2026 10:35:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days =
    Math.floor(distance / (1000*60*60*24));

    const hours =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );

    document.getElementById("countdown").innerHTML =
    `
    <div class="time-box">
        <span>${days}</span>
        <small>Days</small>
    </div>

    <div class="time-box">
        <span>${hours}</span>
        <small>Hours</small>
    </div>

    <div class="time-box">
        <span>${minutes}</span>
        <small>Minutes</small>
    </div>

    <div class="time-box">
        <span>${seconds}</span>
        <small>Seconds</small>
    </div>
    `;
}

updateCountdown();

setInterval(updateCountdown,1000);
