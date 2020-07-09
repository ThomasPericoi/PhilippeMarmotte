/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Darkmode */

var btnDarkmode = document.getElementById("darkmode");
var darkmode = false;

function applyDarkmode() {
  if (darkmode) {
    document.body.classList.add("darkmode");
    btnDarkmode.innerHTML = "Allumer";
    console.log("On éteint les lumières...");
  } else {
    document.body.classList.remove("darkmode");
    btnDarkmode.innerHTML = "Éteindre";
    console.log("Et on allume les lumières !");
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

btnRandom.addEventListener("click", () => {
  for (var i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      var checkedGender = genders[i].value;
    }
  }
  content.innerHTML = getRandomIdentity(checkedGender, title.checked);
  transformToBlob(btnRandom);
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
  applyDarkmode();
  printAsciiRandom();

  possibilities.innerHTML =
    "Actuellement <u>" +
    beautifyNumber(getNamesPossibilities()) +
    "</u> combinaisons possibles.";
});
