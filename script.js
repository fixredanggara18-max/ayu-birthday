const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");

// Tombol Buka Kejutan
openBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    main.style.display = "block";

    // Confetti
    for(let i = 0; i < 120; i++){
        createConfetti();
    }

    // Hati berjatuhan
    setInterval(createHeart, 400);

});

// Membuat hati
function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (15 + Math.random()*25) + "px";
    heart.style.animation = "fall 6s linear forwards";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

// Membuat confetti
function createConfetti(){

    const c = document.createElement("div");

    c.style.position = "fixed";
    c.style.width = "8px";
    c.style.height = "8px";
    c.style.left = Math.random()*100 + "vw";
    c.style.top = "-20px";

    c.style.background =
    ["white","#ddd","#bbb","#999"][Math.floor(Math.random()*4)];

    c.style.animation = "confetti 4s linear forwards";
    c.style.pointerEvents = "none";

    document.body.appendChild(c);

    setTimeout(()=>{
        c.remove();
    },4000);

}

// Animasi
const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(-20px) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}

}

@keyframes confetti{

0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}

}

`;

document.head.appendChild(style);
