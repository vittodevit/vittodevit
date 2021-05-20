//this is to avoid spambot
var info = [
 "mailto:hi@vitto.dev",
 "hi@vitto.dev",
 "https://t.me/mrbackslash_it",
 "@mrbackslash_it"
];
document.getElementById("campomail").href = info[0];
document.getElementById("campomail").innerText = info[1];
document.getElementById("campotelegram").href = info[2];
document.getElementById("campotelegram").innerText = info[3];

var typed = new Typed('#testoscritto', {
    strings: ["un ragazzo di 15 anni.", "uno sviluppatore.", "un appassionato di informatica.", "un system administrator.", "assetato di conoscenza."],
    typeSpeed: 55,
    backSpeed: 30,
    loop: true
  });