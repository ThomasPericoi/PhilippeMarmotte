/*____________________________________ GATHER EVERYTHING ____________________________________*/

/* Philippe Marmotte Frontend */

var btnTheme = document.getElementById("btn-theme");
var btnGenerate = document.getElementById("btn-generate");
var btnCopy = document.getElementById("btn-copy");
var btnGithub = document.getElementById("btn-github");
var generatedIdentity = document.getElementById("generated-identity");
var possibilities = document.getElementById("possibilities");
var copyStatus = document.getElementById("copy-status");
var titleInput = document.getElementById("title");
var genders = document.getElementsByName("name-gender");
var themeColor = document.querySelector("meta[name=theme-color]");
var copyButtonLabel = btnCopy.innerText;
var darkmode = false;
var blobButtons = [btnTheme, btnGenerate, btnCopy, btnGithub];

/* Helpers */

function changeTitleOnBlur(string) {
  var originalTitle = document.title;

  window.addEventListener("focus", function () {
    document.title = originalTitle;
  });

  window.addEventListener("blur", function () {
    document.title = string;
    setTimeout(function () {
      document.title = originalTitle;
    }, 2000);
  });
}

function isMobile() {
  if (
    navigator.userAgentData &&
    typeof navigator.userAgentData.mobile === "boolean"
  ) {
    return navigator.userAgentData.mobile;
  }

  if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }

  return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent || "");
}

function isNightTime() {
  var currentHour = new Date().getHours();

  return currentHour >= 20 || currentHour <= 6;
}

function getCheckedGender() {
  for (var i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      return genders[i].value;
    }
  }

  return "all";
}

function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBlobRadius() {
  var percentage1 = getRandomIntBetween(25, 75);
  var percentage2 = getRandomIntBetween(25, 75);
  var percentage3 = getRandomIntBetween(25, 75);
  var percentage4 = getRandomIntBetween(25, 75);

  return (
    percentage1 +
    "% " +
    (100 - percentage1) +
    "% " +
    (100 - percentage2) +
    "% " +
    percentage2 +
    "% / " +
    percentage3 +
    "% " +
    percentage4 +
    "% " +
    (100 - percentage4) +
    "% " +
    (100 - percentage3) +
    "%"
  );
}

function transformToBlob(element) {
  if (!element || !element.style) {
    return;
  }

  element.style.borderRadius = getRandomBlobRadius();
}

function transformButtonsToBlob() {
  blobButtons.forEach(transformToBlob);
}

function setCopyStatus(message) {
  copyStatus.innerText = message;

  setTimeout(function () {
    copyStatus.innerText = "";
  }, 1800);
}

async function copyGeneratedIdentity() {
  if (!navigator.clipboard || !window.isSecureContext) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(generatedIdentity.innerText);
    return true;
  } catch {
    return false;
  }
}

function setCopyFeedback() {
  btnCopy.innerText = "Copié !";
  btnCopy.setAttribute("aria-label", "Identité copiée");
  setCopyStatus("L'identité générée a été copiée.");

  setTimeout(function () {
    btnCopy.innerText = copyButtonLabel;
    btnCopy.setAttribute("aria-label", "Copier l'identité générée");
  }, 1400);
}

/* Theme */

function applyTheme() {
  document.body.classList.toggle("darkmode", darkmode);
  btnTheme.innerText = darkmode ? "Allumer" : "Éteindre";
  btnTheme.setAttribute("aria-pressed", String(darkmode));

  if (themeColor) {
    themeColor.setAttribute("content", darkmode ? "#2b2b2b" : "#f9f9f9");
  }
}

function toggleTheme() {
  darkmode = !darkmode;
  applyTheme();
  transformToBlob(btnTheme);
}

/* Process */

function generateIdentity() {
  document.body.classList.add("transition");

  setTimeout(function () {
    generatedIdentity.innerText = PhilippeMarmotte.generateIdentity(
      getCheckedGender(),
      titleInput.checked,
    );
    document.body.classList.remove("transition");
  }, 250);
}

function renderPossibilities() {
  possibilities.innerHTML =
    "Actuellement <b>" +
    PhilippeMarmotte.formatNumber(PhilippeMarmotte.getNamesPossibilities()) +
    "</b> combinaisons possibles.";
}

function bindEvents() {
  btnTheme.addEventListener("click", toggleTheme);
  btnGenerate.addEventListener("click", function () {
    generateIdentity();
    transformToBlob(btnGenerate);
  });
  btnGithub.addEventListener("click", function () {
    transformToBlob(btnGithub);
    btnGithub.blur();
  });

  document.addEventListener("keydown", function (event) {
    var activeElement = document.activeElement;
    var isTyping =
      activeElement &&
      ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(
        activeElement.tagName,
      );

    if (isTyping) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      generateIdentity();
      transformToBlob(btnGenerate);
    }
  });

  btnCopy.addEventListener("click", function () {
    transformToBlob(btnCopy);
    copyGeneratedIdentity().then(function (copied) {
      if (copied) {
        setCopyFeedback();
        return;
      }

      setCopyStatus("La copie de l'identité a échoué.");
    });
  });
}

function init() {
  darkmode = isNightTime();
  applyTheme();
  transformButtonsToBlob();
  bindEvents();
  renderPossibilities();
  AsciiPrinter.printRandom();

  if (!isMobile()) {
    changeTitleOnBlur("On peut plus rien dire...");
  }
}

/* Init */

document.addEventListener("DOMContentLoaded", init);
