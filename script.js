function openInvite(){

    const flap =
    document.querySelector(
        ".envelope-flap"
    );

    const card =
    document.querySelector(
        ".invitation-card"
    );

    flap.style.transform =
    "rotateX(180deg)";

    card.style.transform =
    "translateY(-120px)";

    setTimeout(()=>{

        document
        .getElementById("loader")
        .style.display="none";

    },1200);
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

const hero = document.querySelector(".hero");

const backgrounds = [
    "assets/bg1.jpg",
    "assets/bg2.jpg",
    "assets/bg3.jpg"
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= backgrounds.length){
        current = 0;
    }

    hero.style.backgroundImage =
    `
    linear-gradient(
        rgba(0,0,0,.45),
        rgba(0,0,0,.45)
    ),
    url('${backgrounds[current]}')
    `;

}, 5000);
