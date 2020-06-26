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
});

/* Philippe Marmotte Frontend */

var btnRandom = document.getElementById("btn-random");
var btnCopy = document.getElementById("btn-copy");
var content = document.getElementById("content");
var counter = document.getElementById("counter");
var title = document.getElementById("title");
var genders = document.getElementsByName("name-gender");

btnRandom.addEventListener("click", () => {
  for (var i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      var checkedGender = genders[i].value;
    }
  }
  content.innerHTML = getRandomPerson(checkedGender, title.checked);
});

btnCopy.addEventListener("click", () => {
  copyToClipboard(content.innerHTML);
});

/* Init */

document.addEventListener("DOMContentLoaded", function () {
  printRandomAscii();
  applyDarkmode();

  counter.innerHTML =
    "Actuellement " + beautifyNumber(getNamesPossibilities()) + " combinaisons possibles.";
});
