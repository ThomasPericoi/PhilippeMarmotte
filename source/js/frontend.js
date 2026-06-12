/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Darkmode */

var btnDarkmode = document.getElementById("darkmode");
var darkmode = false;

function isNightTime() {
  var currentHour = new Date().getHours();
  var nightTime = false;

  (currentHour >= 20 || currentHour <= 6) && (nightTime = true);
  return nightTime;
}

isNightTime() && (darkmode = true);

function applyDarkmode() {
  if (darkmode) {
    document.body.classList.add("darkmode");
    btnDarkmode.innerHTML = "Allumer";
    console.log("On éteint les lumières...");
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#2b2b2b");
  } else {
    document.body.classList.remove("darkmode");
    btnDarkmode.innerHTML = "Éteindre";
    console.log("Et on allume les lumières !");
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#eeeeee");
  }
}

btnDarkmode.addEventListener("click", () => {
  darkmode = !darkmode;
  applyDarkmode();
  transformToBlob(btnDarkmode);
});

/* Philippe Marmotte Frontend */

var btnRandom = document.getElementById("btn-random");
var btnCopy = document.getElementById("btn-copy");
var content = document.getElementById("content");
var possibilities = document.getElementById("possibilities");
var title = document.getElementById("title");
var genders = document.getElementsByName("name-gender");
var btnGithub = document.getElementById("btn-github");

function changeContent() {
  document.body.classList.add("transition");
  setTimeout(() => {
    for (var i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        var checkedGender = genders[i].value;
      }
    }
    content.innerHTML = getRandomIdentity(checkedGender, title.checked);
    document.body.classList.remove("transition");
  }, 250);
}

btnRandom.addEventListener("click", () => {
  changeContent();
  transformToBlob(btnRandom);
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 || event.keyCode === 32) {
    changeContent();
    transformToBlob(btnRandom);
  }
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.innerHTML);
  transformToBlob(btnCopy);
});

btnGithub.addEventListener("click", () => {
  transformToBlob(btnGithub);
});

transformToBlob(btnDarkmode);
transformToBlob(btnRandom);
transformToBlob(btnCopy);
transformToBlob(btnGithub);

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  if (!isMobile()) {
    changeTitleOnBlur("On peut plus rien dire...");
  }
  applyDarkmode();
  printRandomAscii();

  possibilities.innerHTML =
    "Actuellement <u>" +
    beautifyNumber(getNamesPossibilities()) +
    "</u> combinaisons possibles.";
});
