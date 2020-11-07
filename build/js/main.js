/*____________________________________ USEFOOL FUNCTIONS ____________________________________*/

function getRandomIdFromArray(arrayName) {
  // Output
  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  // Output
  return arrayName[getRandomIdFromArray(arrayName)];
}

/*____________________________________ ASCIIS FUNCTIONS ____________________________________*/

function printAsciiById(asciiId) {
  // Output
  console.log(
    `%c${asciis[asciiId].art}`,
    `color: ${asciis[asciiId].color}; font-family: monospace;`
  );
}

function printAsciiByName(asciiName) {
  // Process
  selectedAscii = asciis.findIndex((ascii) => ascii.name === asciiName); // Select ascii according the name
  // Output
  printAsciiById(selectedAscii);
}

function printAsciiRandom(criteria = "all") {
  // Process
  var selectedAsciis = asciis.filter((ascii) => ascii.type === criteria); // Select the asciis matching the criteria
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis)); // If empty or nothing is matching, select them all
  randomAscii = getRandomValueFromArray(selectedAsciis);
  // Output
  printAsciiByName(randomAscii.name);
}

/*____________________________________ ASCIIS LIBRAIRY ____________________________________*/

/*____________________________________ ASCIIS LIBRAIRY ____________________________________*/

var asciis = [
  {
    type: "animal",
    name: "anteater",
    art: String.raw` 
       _.---._    /\\
    ./'       "--'\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "
    `,
    color: "LightSlateGray",
    height: 7,
    author: "Veronica Karlsson",
  },
  {
    type: "animal",
    name: "armadillo",
    art: String.raw` 
             _.-----__    
          ,:::://///,:::-. 
         /:''/////// \\:::;/|/
        /'   ||||||     :://''\
      .' ,   ||||||     ./(  e \
-===~__-'\__X_'''''\_____/~'-.__'0
           ~~        ~~       
    `,
    color: "RosyBrown",
    height: 7,
    author: "Seal do Mar",
  },
  {
    type: "animal",
    name: "bat",
    art: String.raw` 
  /\                 /\
 / \'._   (\_/)   _.'/ \
/_.''._'--('.')--'_.''._\
| \_ / ';=/ " \=;' \ _/ |
 \/ '\__|'\___/'|__/'  \/
         \(/|\)/
          " ' "
    `,
    color: "DimGray",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "beaver",
    art: String.raw` 
            ___
         .="   "=._.---.
       ."         c ' Y' p
      /   ,       '.  w_/
      |   '-.   /     /
_,..._|      )_-\ \_=.\
'-....-''------)))'=-'"''"
    `,
    color: "DarkGoldenrod",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "cat",
    art: String.raw` 
 )\   _,
 | "^" (
 (e  a )
=-\Y  -=
   T"^)   _
  /   (  ((
 /     )  ';,
(      ) )  \\
 \ Y  '  /  ))
  || ;  /   //
  )| ( (__,</
c{{i.}}=oo-^
    `,
    color: "DarkSlateGrey",
    height: 12,
    author: "",
  },
  {
    type: "animal",
    name: "crab",
    art: String.raw` 
   __       __    
  / <'     '> \
 (  / @   @ \  )
  \(_ _\_/_ _)/
(\ '-/     \-' /)
 "===\     /==="
  .==')___('==.
 ' .='     '=. '
    `,
    color: "Red",
    height: 8,
    author: "",
  },
  {
    type: "animal",
    name: "deer",
    art: String.raw` 
    (      )
    ))    ((
   //      \\
  | \\____// |
 \~/ ~    ~\/~~/
  (|    _/o  ~~
   /  /     ,|
  (~~~)__.-\ |
   ''~~    | |
    |      | |
    |        |
   /          \
  '\          /'
    '\_    _/'
       ~~~~
    `,
    color: "Tan",
    height: 15,
    author: "",
  },
  {
    type: "animal",
    name: "dog",
    art: String.raw` 
            /)-_-(\
             (o o)
     .-----__/\o/
    /  __      /
\__/\ /  \_\ |/
     \\     ||
     //     ||
     |\     |\
    `,
    color: "Tan",
    height: 8,
    author: "",
  },
  {
    type: "animal",
    name: "duck",
    art: String.raw` 
      ,~~.
     (  9 )-_,
(\___ )=='-'
 \ .   ) )
  \ '-' /
   '~j-'  
     "=:
    `,
    color: "DarkGray",
    height: 7,
    author: "",
  },
  {
    type: "animal",
    name: "elephant",
    art: String.raw` 
   ___      ___
  /   \____/   \
 /    / __ \    \
/    |  ..  |    \
\___/|      |\___/\
   | |_|  |_|      \
   | |/|__|\|       )\
   |   |__|         | \
   | @ |  | @ || @ |/  m
   |   |~~|   ||   |
   'ooo'  'ooo''ooo'
    `,
    color: "Silver",
    height: 11,
    author: "Hamilton Furtado",
  },
  {
    type: "animal",
    name: "fish",
    art: String.raw` 
      /'·.¸
     /¸...¸':·
 ¸.·'  ¸   '·.¸.·°)
: © ):´;      ¸  {
 °·.¸¸'·  ¸.·´\'·¸)
      \\´´\¸.·´
    `,
    color: "MediumTurquoise",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "flamingo",
    art: String.raw` 
         __
        /('o
  ,-,  //  \\
 (,,,) ||   V
(,,,,)\//
(,,,/w)-'
\,,/w)
 V/uu
/ |
| |
o o
\ |
 \|
    `,
    color: "Pink",
    height: 13,
    author: "",
  },
  {
    type: "animal",
    name: "fox",
    art: String.raw` 
 /\   /\
//\\_//\\     __/\
\_     _/    /   /
 / . . \    /^^^]
 \_\ /_/    [   ]
  / ° \_    [   /
  \     \_  /  /
   [ [ /  \/ _/
  _[ [ \  /_/
    `,
    color: "DarkOrange",
    height: 9,
    author: "",
  },
  {
    type: "animal",
    name: "frog",
    art: String.raw` 
       _   _
      (o)-(o)
   .-(   "   )-.
  /  /;'-=-';\  \
__\ _\ \___/ /_ /__
  /|  /|\ /|\  |\
    `,
    color: "SpringGreen",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "hippo",
    art: String.raw` 
     c~~p ,---------.
,---'oo  )           \
( O O                  )/
'=^='                 /
      \    ,     .   /
      \\  |-----'|  /
      ||__|    |_|__|
    `,
    color: "DarkGray",
    height: 7,
    author: "",
  },
  {
    type: "animal",
    name: "lion",
    art: String.raw` 
            o00000000o
           o0/\0000/\0o
          o00\c "" J/00o
o.       0000/ b  d \000
'00.     0000    _  |000
 '00     '0000(=_Y_=)00'
 //       ;0000'\7/000'
((       /  '0000000'
 \\    .'          |
  \\  /       \  | |
   \\/         ) | |
    \         /_ | |__
    (___________)))))))
    `,
    color: "Peru",
    height: 13,
    author: "Joan G. Stark",
  },
  {
    type: "animal",
    name: "marbles",
    art: String.raw` 
         __
        /  \
       / ..|\
      (_\  |_)
      /  \@' 
     /     \
_   /  '   |
\\/  \  | _\
 \   /_ || \\_
  \____)|_) \_)
    `,
    color: "Brown",
    height: 10,
    author: "",
  },
  {
    type: "animal",
    name: "marmot",
    art: String.raw` 
       (>\---/<)
       ,'     '.
      /  q   p  \
     (  >(_Y_)<  )
      >-' '-' '-<-.
     /  _.== ,=.,- \
    /,    )'  '(    )
   / '._.'      '--<
c /    \         |  |
  \      )       ;_/
   '._ _/_  ___.'-\\\
      '--\\\
    `,
    color: "DarkGoldenrod",
    height: 12,
    author: "hjw",
  },
  {
    type: "animal",
    name: "mouse",
    art: String.raw` 
(q\_/p)
 /. .\.-""""-.      __
=\_t_/=    /  '\   (
  )\ ))__ _\    |___)
 nn-nn'  'nn---'
    `,
    color: "Grey",
    height: 5,
    author: "",
  },
  {
    type: "animal",
    name: "parrot",
    art: String.raw` 
                          .
                          | \/|
  (\   _                  ) )|/|
      (/            _----. /.'.'
.-._________..      .' @ _\  .'
'.._______.   '.   /    (_| .')
  '._____.  /   '-/      | _.'
   '.______ (         ) ) \
     '..____ '._       )  )
        .' __.--\  , ,  // ((
        '.'     |  \/   (_.'(
                |   \ .'
                 \   (
                  \   '.
                   \ \ '.)
                    '-'-'
    `,
    color: "DodgerBlue",
    height: 16,
    author: "",
  },
  {
    type: "animal",
    name: "pig",
    art: String.raw` 
       9
  ,--.-'-,--.
  \  /-~-\  /
 / )' a a '( \
( (  ,---.  ) )
 \ '(_o_o_)' /
  \   '-'   /
   | |---| |
   [_]   [_]
    `,
    color: "Pink",
    height: 9,
    author: "",
  },
  {
    type: "animal",
    name: "pinguin",
    art: String.raw` 
   __
-=(o '.
   '.-.\
   /|  \\
   '|  ||
    _\_):,_
    `,
    color: "Black",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "teckel",
    art: String.raw` 
                        __
 ,                    ," e'--o
((                   (  | __,'
\\~----------------' \_;/
(                      /
 /) ._______________. )
(( (              (( (
'' '               ''-'
    `,
    color: "DarkGoldenrod",
    height: 8,
    author: "hjw",
  },
  {
    type: "animal",
    name: "turtle",
    art: String.raw` 
                __
     .,-;-;-,. /'_\
   _/_/_/_|_\_\) /
'-<_><_><_><_>=/\
  '/_/    /_/  \_\
   ""     ""    ""
    `,
    color: "LimeGreen",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "whale",
    art: String.raw` 
       .
      ":"
    ___:____     |"\/"|
  ,'        '.    \  /
  |  O        \___/  |
~^~^~^~^~^~^~^~^~^~^~^~^~
    `,
    color: "RoyalBlue",
    height: 6,
    author: "Riitta Rasimus",
  },
  {
    type: "character",
    name: "bender",
    art: String.raw` 
     ( )
      H
     _H_
  .-'-.-'-.
 /         \
|           |
|   .-------'._
|  / /  '.' '. \
|  \ \ @   @ / /
|   '---------'
|    _______|
|  .'-+-+-+|
|  '.-+-+-+|
|    """""" |
'-.__   __.-'
     """
    `,
    color: "Silver",
    height: 16,
    author: "Silver Saks",
  },
  {
    type: "character",
    name: "cookieMonster",
    art: String.raw` 
    (o)(o)
  w"      "w
 W  -====-  W
  "w      w"
 w"""""""""w
W            W
    `,
    color: "Blue",
    height: 6,
    author: "Randy Ransom",
  },
  {
    type: "character",
    name: "flintstones",
    art: String.raw` 
  \/________________ 
 /     _____________)
/     /     /   \ |
\/\/\/     (O) (O)|
  |           ------, 
  |  _       ______/ 
  | (_      /   \  \
  |        /  ___\_ \
  |        \      / /
__|_________\______/
\______________\./__\
    `,
    color: "DarkOrange",
    height: 11,
    author: "",
  },
  {
    type: "character",
    name: "garfield",
    art: String.raw` 
     .-.,     ,.-.
    /:::\\   //:::\
   |':':' '"' ':':'|
  /'. .-=-. .-=-. .'\
 /=- /     |     \ -=\
;   |      |      |   ;
|=-.|______|______|.-=|
|==  \  0 /_\ 0  /  ==|
|=   /'---( )---'\   =|
 \   \:   .'.   :/   /
  '\= '--'   '--' =/'
    '-=._     _.=-'
         '"""'
    `,
    color: "Orange",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    type: "character",
    name: "homer",
    art: String.raw` 
    ___
   //_\\_
 ."\\    ".
/          \
|           \_
|       ,--.-.)
 \     /  o \o\
 /\/\  \    /_/
  (_.   '--'__)
   |     .-'  \
   |  .-'.     )
   | (  _/--.-'
   |  '.___.'
         (
    `,
    color: "Gold",
    height: 14,
    author: "",
  },
  {
    type: "character",
    name: "kermit",
    art: String.raw` 
       .---.     .---.
      ( -o- )---( -o- )
      ;-...-'   '-...-;
     /                 \
    /                   \
   | /_               _\ |
   \ '.''"--.....--"''.' /
    \  '.   '._.'   .'  /
 _.-''.  '-.,___,.-'  .''-._
'--._  ''-._______.-''  _.--'
     /                 \
    /.-''\   .'.   /''-.\
          '.'   '.'
    `,
    color: "SpringGreen",
    height: 13,
    author: "Joan G. Stark",
  },
  {
    type: "character",
    name: "maryPoppins",
    art: String.raw` 
         _
      .-' '-.
     /       \
    |,-,-,-,-,|
   ___   |
  _)_(_  |
  (/ \)  |
  _\_/_  /)
 / \_/ \//
 |(   )\/
 ||)_( 
 |/   \
 n|   |
/ \   |
|_|___|
   \|/
  _/L\_
    `,
    color: "Black",
    height: 17,
    author: "",
  },
  {
    type: "character",
    name: "pinkPanther",
    art: String.raw` 
 .--.             .--.
( ('\\.---------.//') )
 '-.    __   __    .-'
  /    /__\ /__\    \
 |     \ 0/ \ 0/     |
  \     _/   \_     /
   '-.  /-"""-\  .-'
     /  '.___.'  \
     \     I     /
      ';--'''--;'
        '.___.'
          | |
    `,
    color: "Pink",
    height: 12,
    author: "",
  },
  {
    type: "character",
    name: "r2d2",
    art: String.raw`
    .---.
  .'_:___".
  |__ --==|
  [  ]  :[|
  |__| I=[|
  / / ____|
 |-/.____.'
/___\ /___\  
    `,
    color: "Blue",
    height: 8,
    author: "snd",
  },
  {
    type: "character",
    name: "santaClaus",
    art: String.raw`
   ,--.
  ()   \
   /    \
 _/______\_
(__________)
(/  @  @  \)
('._,()._,')
(  '-''-'  )
 \        /
  \,,,,,,/
    `,
    color: "Red",
    height: 10,
    author: 'B.D.S."Don"McConnell',
  },
  {
    type: "character",
    name: "sonic",
    art: String.raw`
          .,
.      _,'f----.._
|\ ,-'"/  |     ,'
|,_  ,--.      /
/,-. ,''.     (_
f  o|  o|__     "'-.
,-._.,--'_ '.   _.,-'
'"' ___.,'' j,-'
  '-.__.,--'
    `,
    color: "Blue",
    height: 9,
    author: "",
  },
  {
    type: "character",
    name: "spaceInvader",
    art: String.raw`
         __
       _|  |_
     _|      |_
    |  _    _  |
    | |_|  |_| |
 _  |  _    _  |  _
|_|_|_| |__| |_|_|_|
  |_|_        _|_|
    |_|      |_|
    `,
    color: "Chartreuse",
    height: 8,
    author: "",
  },
  {
    type: "character",
    name: "squidward",
    art: String.raw` 
     .--'''''''''--.
   '      .---.      '.
 /    .-----------.    \
/        .-----.        \
|       .-.   .-.       |
|      /___\ /___\      |
 \    | .-. | .-. |    /
  '-._| | | | | | |_.-'
      | '-' | '-' |
       \___/ \___/
    _.-'  /   \  '-._
  .' _.--|     |--._ '.
  ' _...-|     |-..._ '
         |     |
         '.___.'
    `,
    color: "Grey",
    height: 15,
    author: "LGB",
  },
  {
    type: "character",
    name: "tweetieBird",
    art: String.raw` 
    .-"-.
   /  - -\
   \  @ @/
    (_ <_)
    _)(
,_('_))\
 "-\)__/
  __|||__
 ((__|__))
    `,
    color: "Orange",
    height: 9,
    author: "",
  },
  {
    type: "character",
    name: "yosemiteSam",
    art: String.raw` 
        ___ 
    .-''   ''-.
  .'           '.
 /               \
|      __ __      |
'      /\_/\      '
 \  ___\O_O/___  /
  \/    ___    \/
  (    (___)    )
   \   /\_/\   /
    \  |._.|  /
     \ |   | /
      \/   \/
    `,
    color: "Red",
    height: 13,
    author: "",
  },
];

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
  applyDarkmode();
  printAsciiRandom();

  possibilities.innerHTML =
    "Actuellement <u>" +
    beautifyNumber(getNamesPossibilities()) +
    "</u> combinaisons possibles.";
});

/*____________________________________ USEFOOL FUNCTIONS ____________________________________*/

/* Functions about random */

function getRandomIntBetween(min, max) {
  // Output
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomIdFromArray(arrayName) {
  // Output
  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  // Output
  return arrayName[getRandomIdFromArray(arrayName)];
}

function probability(probability, on = 100) {
  // Var(s)
  happened = false;
  // Process
  getRandomIntBetween(0, on) <= probability
    ? (happened = true)
    : (happened = false);
  // Output
  return happened;
}

function getRandomColor() {
  // Var(s)
  var hexLetters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  var randomColor = "#";
  // Process
  for (var i = 0; i < 6; i++) {
    randomColor += getRandomValueFromArray(hexLetters);
  }
  // Output
  return randomColor;
}

/* Functions about formats */

function isConsonant(x) {
  // Output
  return (
    [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "z",
    ].indexOf(x.toLowerCase()) !== -1
  );
}

function isVowel(x) {
  // Output
  return ["a", "e", "i", "o", "u", "y"].indexOf(x.toLowerCase()) !== -1;
}

function beautifyNumber(x) {
  // Output
  return x.toString().replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

function countCharacter(string, character) {
  // Output
  return string.split(character).length - 1;
}

/* Functions about styles */

function isLight(color) {
  // Var(s)
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  // Process
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // Output
  return brightness > 155;
}

function changeElementBgColor(element, color) {
  // Output
  element.style.backgroundColor = color;
}

function transformToBlob(element) {
  // Var(s)
  function randomRadius() {
    var percentage1 = getRandomIntBetween(25, 75);
    var percentage1bis = 100 - percentage1;
    var percentage2 = getRandomIntBetween(25, 75);
    var percentage2bis = 100 - percentage2;
    var percentage3 = getRandomIntBetween(25, 75);
    var percentage3bis = 100 - percentage3;
    var percentage4 = getRandomIntBetween(25, 75);
    var percentage4bis = 100 - percentage4;
    return `${percentage1}% ${percentage1bis}% ${percentage2bis}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage4bis}% ${percentage3bis}%`;
  }
  // Output
  element.style.borderRadius = randomRadius();
}

/* Functions about clipboard */

function copyToClipboard(value) {
  // Var(s)
  var temporaryInput = document.createElement("input");
  // Process
  temporaryInput.setAttribute("value", value);
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  // Output
  document.execCommand("copy");
  console.log('%c"' + value + '" a été copié avec succès !', "color: green");
  // Cleaning
  document.body.removeChild(temporaryInput);
}

/* Functions about Google and searching */

function searchOnGoogle(query) {
  window.open("https://google.com/search?q=" + query, "newTab");
}

function searchOnGoogleImage(query) {
  window.open("https://google.com/search?q=" + query + "&tbm=isch", "newTab");
}

function openUrl(query) {
  window.open(query, "newTab");
}

/*____________________________________ PHILIPPE MARMOTTE LIBRARY ____________________________________*/

var firstNames = [
  {
    value: "Aaron",
    gender: "M",
  },
  {
    value: "Abdel",
    gender: "M",
  },
  {
    value: "Abderrahmane",
    gender: "M",
  },
  {
    value: "Abdoul",
    gender: "M",
  },
  {
    value: "Abdoulaye",
    gender: "M",
  },
  {
    value: "Abdoulaziz",
    gender: "M",
  },
  {
    value: "Abel",
    gender: "M",
  },
  {
    value: "Abigail",
    gender: "F",
  },
  {
    value: "Abraham",
    gender: "M",
  },
  {
    value: "Achille",
    gender: "M",
  },
  {
    value: "Adam",
    gender: "M",
  },
  {
    value: "Adil",
    gender: "M",
  },
  {
    value: "Adolf",
    gender: "M",
  },
  {
    value: "Adrian",
    gender: "M",
  },
  {
    value: "Adriana",
    gender: "F",
  },
  {
    value: "Adrien",
    gender: "M",
  },
  {
    value: "Adrienne",
    gender: "F",
  },
  {
    value: "Adèle",
    gender: "F",
  },
  {
    value: "Adélaïde",
    gender: "F",
  },
  {
    value: "Agniès",
    gender: "F",
  },
  {
    value: "Aiden",
    gender: "M",
  },
  {
    value: "Aimé",
    gender: "M",
  },
  {
    value: "Akim",
    gender: "M",
  },
  {
    value: "Akira",
    gender: "M",
  },
  {
    value: "Aladdin",
    gender: "M",
  },
  {
    value: "Alain",
    gender: "M",
  },
  {
    value: "Alan",
    gender: "M",
  },
  {
    value: "Alban",
    gender: "M",
  },
  {
    value: "Albane",
    gender: "F",
  },
  {
    value: "Albert",
    gender: "M",
  },
  {
    value: "Alberto",
    gender: "M",
  },
  {
    value: "Albus",
    gender: "M",
  },
  {
    value: "Alejandro",
    gender: "M",
  },
  {
    value: "Alex",
    gender: "M",
  },
  {
    value: "Alexa",
    gender: "F",
  },
  {
    value: "Alexandra",
    gender: "F",
  },
  {
    value: "Alexandre",
    gender: "M",
  },
  {
    value: "Alf",
    gender: "M",
  },
  {
    value: "Alfie",
    gender: "M",
  },
  {
    value: "Alfonzo",
    gender: "M",
  },
  {
    value: "Alfred",
    gender: "M",
  },
  {
    value: "Alfredo",
    gender: "M",
  },
  {
    value: "Ali",
    gender: "M",
  },
  {
    value: "Aliaune",
    gender: "M",
  },
  {
    value: "Alice",
    gender: "F",
  },
  {
    value: "Alicia",
    gender: "F",
  },
  {
    value: "Alix",
    gender: "F",
  },
  {
    value: "Alix",
    gender: "M",
  },
  {
    value: "Allison",
    gender: "F",
  },
  {
    value: "Alonzo",
    gender: "M",
  },
  {
    value: "Alou",
    gender: "M",
  },
  {
    value: "Alpha",
    gender: "M",
  },
  {
    value: "Alphonse",
    gender: "M",
  },
  {
    value: "Altaïr",
    gender: "M",
  },
  {
    value: "Alvin",
    gender: "M",
  },
  {
    value: "Amadeus",
    gender: "M",
  },
  {
    value: "Amadou",
    gender: "M",
  },
  {
    value: "Amanda",
    gender: "F",
  },
  {
    value: "Amandine",
    gender: "F",
  },
  {
    value: "Amandio",
    gender: "M",
  },
  {
    value: "Amaury",
    gender: "M",
  },
  {
    value: "Amber",
    gender: "F",
  },
  {
    value: "Ambre",
    gender: "M",
  },
  {
    value: "Ambroise",
    gender: "M",
  },
  {
    value: "Amerigo",
    gender: "M",
  },
  {
    value: "Amina",
    gender: "F",
  },
  {
    value: "Amine",
    gender: "M",
  },
  {
    value: "Amy",
    gender: "F",
  },
  {
    value: "Anakin",
    gender: "M",
  },
  {
    value: "Anastasia",
    gender: "F",
  },
  {
    value: "Anatole",
    gender: "M",
  },
  {
    value: "Andrew",
    gender: "M",
  },
  {
    value: "André",
    gender: "M",
  },
  {
    value: "Andrée",
    gender: "F",
  },
  {
    value: "Andrzej",
    gender: "M",
  },
  {
    value: "Andy",
    gender: "M",
  },
  {
    value: "Ange",
    gender: "M",
  },
  {
    value: "Angela",
    gender: "F",
  },
  {
    value: "Angelina",
    gender: "F",
  },
  {
    value: "Angelo",
    gender: "M",
  },
  {
    value: "Angus",
    gender: "M",
  },
  {
    value: "Angèle",
    gender: "F",
  },
  {
    value: "Anil",
    gender: "M",
  },
  {
    value: "Anna",
    gender: "F",
  },
  {
    value: "Annabeth",
    gender: "F",
  },
  {
    value: "Anne",
    gender: "F",
  },
  {
    value: "Annie",
    gender: "F",
  },
  {
    value: "Anthonin",
    gender: "M",
  },
  {
    value: "Anthony",
    gender: "M",
  },
  {
    value: "Antoine",
    gender: "M",
  },
  {
    value: "Antoinette",
    gender: "F",
  },
  {
    value: "Anton",
    gender: "M",
  },
  {
    value: "Antonio",
    gender: "M",
  },
  {
    value: "Anubis",
    gender: "M",
  },
  {
    value: "Apollinaire",
    gender: "M",
  },
  {
    value: "Apolline",
    gender: "F",
  },
  {
    value: "Apollo",
    gender: "M",
  },
  {
    value: "Apollon",
    gender: "M",
  },
  {
    value: "April",
    gender: "F",
  },
  {
    value: "Apu",
    gender: "M",
  },
  {
    value: "Aragorn",
    gender: "M",
  },
  {
    value: "Aramis",
    gender: "M",
  },
  {
    value: "Archibald",
    gender: "M",
  },
  {
    value: "Archimède",
    gender: "M",
  },
  {
    value: "Ariane",
    gender: "F",
  },
  {
    value: "Ariel",
    gender: "F",
  },
  {
    value: "Aristote",
    gender: "M",
  },
  {
    value: "Armand",
    gender: "M",
  },
  {
    value: "Arno",
    gender: "M",
  },
  {
    value: "Arnold",
    gender: "M",
  },
  {
    value: "Arthur",
    gender: "M",
  },
  {
    value: "Arturo",
    gender: "M",
  },
  {
    value: "Artus",
    gender: "M",
  },
  {
    value: "Artémis",
    gender: "F",
  },
  {
    value: "Ashitaka",
    gender: "M",
  },
  {
    value: "Astérix",
    gender: "M",
  },
  {
    value: "Attila",
    gender: "M",
  },
  {
    value: "Audrey",
    gender: "F",
  },
  {
    value: "Auguste",
    gender: "M",
  },
  {
    value: "Augustine",
    gender: "F",
  },
  {
    value: "Augustus",
    gender: "M",
  },
  {
    value: "Aurélie",
    gender: "F",
  },
  {
    value: "Aurélien",
    gender: "M",
  },
  {
    value: "Avril",
    gender: "F",
  },
  {
    value: "Axel",
    gender: "M",
  },
  {
    value: "Axelle",
    gender: "F",
  },
  {
    value: "Aymeric",
    gender: "M",
  },
  {
    value: "Azrael",
    gender: "M",
  },
  {
    value: "Babar",
    gender: "M",
  },
  {
    value: "Baby",
    gender: "M",
  },
  {
    value: "Bachir",
    gender: "M",
  },
  {
    value: "Bakary",
    gender: "M",
  },
  {
    value: "Balthasar",
    gender: "M",
  },
  {
    value: "Baptiste",
    gender: "M",
  },
  {
    value: "Barbie",
    gender: "F",
  },
  {
    value: "Barnabas",
    gender: "M",
  },
  {
    value: "Barnabé",
    gender: "M",
  },
  {
    value: "Barney",
    gender: "M",
  },
  {
    value: "Barry",
    gender: "M",
  },
  {
    value: "Bart",
    gender: "M",
  },
  {
    value: "Barty",
    gender: "M",
  },
  {
    value: "Basil",
    gender: "M",
  },
  {
    value: "Batista",
    gender: "M",
  },
  {
    value: "Bayek",
    gender: "M",
  },
  {
    value: "Baxter",
    gender: "M",
  },
  {
    value: "Baz",
    gender: "M",
  },
  {
    value: "Beau",
    gender: "M",
  },
  {
    value: "Becca",
    gender: "F",
  },
  {
    value: "Beck",
    gender: "M",
  },
  {
    value: "Bella",
    gender: "F",
  },
  {
    value: "Bellatrix",
    gender: "F",
  },
  {
    value: "Belle",
    gender: "F",
  },
  {
    value: "Belzébuth",
    gender: "F",
  },
  {
    value: "Ben",
    gender: "M",
  },
  {
    value: "Benjamin",
    gender: "M",
  },
  {
    value: "Benny",
    gender: "M",
  },
  {
    value: "Benoît",
    gender: "M",
  },
  {
    value: "Bernadette",
    gender: "F",
  },
  {
    value: "Bernard",
    gender: "M",
  },
  {
    value: "Bernardo",
    gender: "M",
  },
  {
    value: "Bernie",
    gender: "M",
  },
  {
    value: "Bertha",
    gender: "F",
  },
  {
    value: "Berthe",
    gender: "F",
  },
  {
    value: "Bertille",
    gender: "F",
  },
  {
    value: "Bertrade",
    gender: "F",
  },
  {
    value: "Bertrand",
    gender: "M",
  },
  {
    value: "Beth",
    gender: "F",
  },
  {
    value: "Bethy",
    gender: "F",
  },
  {
    value: "Bianca",
    gender: "F",
  },
  {
    value: "Bilal",
    gender: "M",
  },
  {
    value: "Bilbon",
    gender: "M",
  },
  {
    value: "Biljana",
    gender: "M",
  },
  {
    value: "Bill",
    gender: "M",
  },
  {
    value: "Billie",
    gender: "F",
  },
  {
    value: "Billy",
    gender: "M",
  },
  {
    value: "Björn",
    gender: "M",
  },
  {
    value: "Blair",
    gender: "M",
  },
  {
    value: "Blaise",
    gender: "M",
  },
  {
    value: "Blanche",
    gender: "F",
  },
  {
    value: "Blanka",
    gender: "M",
  },
  {
    value: "Bob",
    gender: "M",
  },
  {
    value: "Bobby",
    gender: "M",
  },
  {
    value: "Boris",
    gender: "M",
  },
  {
    value: "Boromir",
    gender: "M",
  },
  {
    value: "Boubacar",
    gender: "M",
  },
  {
    value: "Bouddha",
    gender: "M",
  },
  {
    value: "Brad",
    gender: "M",
  },
  {
    value: "Bradley",
    gender: "M",
  },
  {
    value: "Brahim",
    gender: "M",
  },
  {
    value: "Bran",
    gender: "M",
  },
  {
    value: "Brenda",
    gender: "F",
  },
  {
    value: "Brendan",
    gender: "M",
  },
  {
    value: "Brandon",
    gender: "M",
  },
  {
    value: "Bridget",
    gender: "F",
  },
  {
    value: "Brigitte",
    gender: "F",
  },
  {
    value: "Bruce",
    gender: "M",
  },
  {
    value: "Brunehilde",
    gender: "F",
  },
  {
    value: "Bruno",
    gender: "M",
  },
  {
    value: "Brutus",
    gender: "M",
  },
  {
    value: "Bubba",
    gender: "M",
  },
  {
    value: "Bulma",
    gender: "F",
  },
  {
    value: "Buzz",
    gender: "M",
  },
  {
    value: "Béatrice",
    gender: "F",
  },
  {
    value: "Bécassine",
    gender: "F",
  },
  {
    value: "Bénédicte",
    gender: "F",
  },
  {
    value: "Bénédictin",
    gender: "M",
  },
  {
    value: "Caleb",
    gender: "M",
  },
  {
    value: "Calvin",
    gender: "M",
  },
  {
    value: "Cameron",
    gender: "F",
  },
  {
    value: "Camille",
    gender: "F",
  },
  {
    value: "Camille",
    gender: "M",
  },
  {
    value: "Candyce",
    gender: "F",
  },
  {
    value: "Capucine",
    gender: "F",
  },
  {
    value: "Cara",
    gender: "F",
  },
  {
    value: "Carl",
    gender: "M",
  },
  {
    value: "Carla",
    gender: "F",
  },
  {
    value: "Carlos",
    gender: "M",
  },
  {
    value: "Carole",
    gender: "F",
  },
  {
    value: "Caroline",
    gender: "F",
  },
  {
    value: "Carrie",
    gender: "F",
  },
  {
    value: "Casper",
    gender: "M",
  },
  {
    value: "Cassandra",
    gender: "F",
  },
  {
    value: "Cassius",
    gender: "M",
  },
  {
    value: "Catelyn",
    gender: "F",
  },
  {
    value: "Catherine",
    gender: "F",
  },
  {
    value: "Cathy",
    gender: "F",
  },
  {
    value: "Caïn",
    gender: "M",
  },
  {
    value: "Cendrillon",
    gender: "F",
  },
  {
    value: "Cerseï",
    gender: "F",
  },
  {
    value: "Cerys",
    gender: "F",
  },
  {
    value: "Cesare",
    gender: "M",
  },
  {
    value: "Chandler",
    gender: "M",
  },
  {
    value: "Charles",
    gender: "M",
  },
  {
    value: "Charlie",
    gender: "M",
  },
  {
    value: "Charline",
    gender: "F",
  },
  {
    value: "Charlize",
    gender: "F",
  },
  {
    value: "Charlotte",
    gender: "F",
  },
  {
    value: "Chewbacca",
    gender: "M",
  },
  {
    value: "Cheyenne",
    gender: "F",
  },
  {
    value: "Chihiro",
    gender: "F",
  },
  {
    value: "Chimène",
    gender: "F",
  },
  {
    value: "Chloé",
    gender: "F",
  },
  {
    value: "Chris",
    gender: "M",
  },
  {
    value: "Christian",
    gender: "M",
  },
  {
    value: "Christiane",
    gender: "F",
  },
  {
    value: "Christie",
    gender: "F",
  },
  {
    value: "Christina",
    gender: "F",
  },
  {
    value: "Christine",
    gender: "F",
  },
  {
    value: "Christophe",
    gender: "M",
  },
  {
    value: "Christopher",
    gender: "M",
  },
  {
    value: "Chrystelle",
    gender: "F",
  },
  {
    value: "Chuck",
    gender: "M",
  },
  {
    value: "Chucky",
    gender: "M",
  },
  {
    value: "Ciel",
    gender: "F",
  },
  {
    value: "Cindy",
    gender: "F",
  },
  {
    value: "Ciri",
    gender: "F",
  },
  {
    value: "Claire",
    gender: "F",
  },
  {
    value: "Clara",
    gender: "F",
  },
  {
    value: "Clarence",
    gender: "F",
  },
  {
    value: "Clarisse",
    gender: "F",
  },
  {
    value: "Clark",
    gender: "M",
  },
  {
    value: "Claude",
    gender: "F",
  },
  {
    value: "Claude",
    gender: "M",
  },
  {
    value: "Claudia",
    gender: "F",
  },
  {
    value: "Claudie",
    gender: "F",
  },
  {
    value: "Cleon",
    gender: "M",
  },
  {
    value: "Cliff",
    gender: "M",
  },
  {
    value: "Clifford",
    gender: "M",
  },
  {
    value: "Clint",
    gender: "M",
  },
  {
    value: "Clotaire",
    gender: "M",
  },
  {
    value: "Clothilde",
    gender: "F",
  },
  {
    value: "Clovis",
    gender: "M",
  },
  {
    value: "Clémence",
    gender: "F",
  },
  {
    value: "Clément",
    gender: "M",
  },
  {
    value: "Clémentine",
    gender: "F",
  },
  {
    value: "Coco",
    gender: "F",
  },
  {
    value: "Cody",
    gender: "M",
  },
  {
    value: "Colin",
    gender: "M",
  },
  {
    value: "Coline",
    gender: "F",
  },
  {
    value: "Colorado",
    gender: "M",
  },
  {
    value: "Commode",
    gender: "M",
  },
  {
    value: "Conan",
    gender: "M",
  },
  {
    value: "Confucius",
    gender: "M",
  },
  {
    value: "Connor",
    gender: "M",
  },
  {
    value: "Conrad",
    gender: "M",
  },
  {
    value: "Constance",
    gender: "F",
  },
  {
    value: "Constantin",
    gender: "M",
  },
  {
    value: "Constantine",
    gender: "F",
  },
  {
    value: "Corail",
    gender: "F",
  },
  {
    value: "Coralie",
    gender: "F",
  },
  {
    value: "Corentin",
    gender: "M",
  },
  {
    value: "Cornélius",
    gender: "M",
  },
  {
    value: "Cosette",
    gender: "F",
  },
  {
    value: "Costin",
    gender: "M",
  },
  {
    value: "Courtney",
    gender: "F",
  },
  {
    value: "Crash",
    gender: "M",
  },
  {
    value: "Cristóbal",
    gender: "M",
  },
  {
    value: "Curtis",
    gender: "M",
  },
  {
    value: "Cynthia",
    gender: "F",
  },
  {
    value: "Cyprien",
    gender: "M",
  },
  {
    value: "Cyrielle",
    gender: "F",
  },
  {
    value: "Cyril",
    gender: "M",
  },
  {
    value: "Cyrus",
    gender: "M",
  },
  {
    value: "Cécile",
    gender: "F",
  },
  {
    value: "Cécilia",
    gender: "F",
  },
  {
    value: "Cédric",
    gender: "M",
  },
  {
    value: "Céleste",
    gender: "M",
  },
  {
    value: "Célestin",
    gender: "M",
  },
  {
    value: "Célestine",
    gender: "F",
  },
  {
    value: "César",
    gender: "M",
  },
  {
    value: "Côme",
    gender: "M",
  },
  {
    value: "Dado",
    gender: "F",
  },
  {
    value: "Daenerys",
    gender: "F",
  },
  {
    value: "Daisy",
    gender: "F",
  },
  {
    value: "Dakota",
    gender: "F",
  },
  {
    value: "Dan",
    gender: "M",
  },
  {
    value: "Danièle",
    gender: "F",
  },
  {
    value: "Danny",
    gender: "M",
  },
  {
    value: "Daphnée",
    gender: "F",
  },
  {
    value: "Darren",
    gender: "M",
  },
  {
    value: "Daryl",
    gender: "M",
  },
  {
    value: "Dash",
    gender: "M",
  },
  {
    value: "Dave",
    gender: "M",
  },
  {
    value: "David",
    gender: "M",
  },
  {
    value: "Davis",
    gender: "M",
  },
  {
    value: "Davy",
    gender: "M",
  },
  {
    value: "Deborah",
    gender: "F",
  },
  {
    value: "Delilah",
    gender: "F",
  },
  {
    value: "Delphine",
    gender: "F",
  },
  {
    value: "Denis",
    gender: "M",
  },
  {
    value: "Denver",
    gender: "M",
  },
  {
    value: "Denzel",
    gender: "M",
  },
  {
    value: "Derek",
    gender: "M",
  },
  {
    value: "Derrick",
    gender: "M",
  },
  {
    value: "Desmond",
    gender: "M",
  },
  {
    value: "Dhalsim",
    gender: "M",
  },
  {
    value: "Diana",
    gender: "F",
  },
  {
    value: "Diane",
    gender: "F",
  },
  {
    value: "Dick",
    gender: "M",
  },
  {
    value: "Dickie",
    gender: "M",
  },
  {
    value: "Didier",
    gender: "M",
  },
  {
    value: "Diego",
    gender: "M",
  },
  {
    value: "Dimitri",
    gender: "M",
  },
  {
    value: "Dino",
    gender: "M",
  },
  {
    value: "Django",
    gender: "M",
  },
  {
    value: "Djibril",
    gender: "M",
  },
  {
    value: "Dobby",
    gender: "M",
  },
  {
    value: "Dolly",
    gender: "F",
  },
  {
    value: "Dominique",
    gender: "F",
  },
  {
    value: "Dominique",
    gender: "M",
  },
  {
    value: "Donata",
    gender: "F",
  },
  {
    value: "Donato",
    gender: "M",
  },
  {
    value: "Donna",
    gender: "F",
  },
  {
    value: "Donnie",
    gender: "M",
  },
  {
    value: "Dora",
    gender: "F",
  },
  {
    value: "Doug",
    gender: "M",
  },
  {
    value: "Douglas",
    gender: "M",
  },
  {
    value: "Dove",
    gender: "F",
  },
  {
    value: "Dove",
    gender: "M",
  },
  {
    value: "Drago",
    gender: "M",
  },
  {
    value: "Drake",
    gender: "M",
  },
  {
    value: "Ducobu",
    gender: "M",
  },
  {
    value: "Dudley",
    gender: "M",
  },
  {
    value: "Désiré",
    gender: "M",
  },
  {
    value: "Désirée",
    gender: "F",
  },
  {
    value: "D'Artagnan",
    gender: "M",
  },
  {
    value: "Ed",
    gender: "M",
  },
  {
    value: "Eddy",
    gender: "M",
  },
  {
    value: "Eden",
    gender: "M",
  },
  {
    value: "Edgar",
    gender: "M",
  },
  {
    value: "Edmond",
    gender: "M",
  },
  {
    value: "Edna",
    gender: "F",
  },
  {
    value: "Edouard",
    gender: "M",
  },
  {
    value: "Edouardo",
    gender: "M",
  },
  {
    value: "Eli",
    gender: "M",
  },
  {
    value: "Elias",
    gender: "M",
  },
  {
    value: "Elie",
    gender: "F",
  },
  {
    value: "Elisa",
    gender: "F",
  },
  {
    value: "Elizabeth",
    gender: "F",
  },
  {
    value: "Ellena",
    gender: "F",
  },
  {
    value: "Elliott",
    gender: "M",
  },
  {
    value: "Elmo",
    gender: "M",
  },
  {
    value: "Elon",
    gender: "M",
  },
  {
    value: "Elrond",
    gender: "M",
  },
  {
    value: "Elsa",
    gender: "F",
  },
  {
    value: "Emilia",
    gender: "F",
  },
  {
    value: "Emilio",
    gender: "M",
  },
  {
    value: "Emma",
    gender: "F",
  },
  {
    value: "Emmanuel",
    gender: "M",
  },
  {
    value: "Emmanuelle",
    gender: "F",
  },
  {
    value: "Ennio",
    gender: "M",
  },
  {
    value: "Enora",
    gender: "F",
  },
  {
    value: "Enzo",
    gender: "M",
  },
  {
    value: "Eredin",
    gender: "M",
  },
  {
    value: "Erica",
    gender: "F",
  },
  {
    value: "Erkan",
    gender: "M",
  },
  {
    value: "Ernest",
    gender: "M",
  },
  {
    value: "Ernesto",
    gender: "M",
  },
  {
    value: "Erwan",
    gender: "M",
  },
  {
    value: "Esteban",
    gender: "M",
  },
  {
    value: "Estelle",
    gender: "F",
  },
  {
    value: "Ethan",
    gender: "M",
  },
  {
    value: "Eude",
    gender: "M",
  },
  {
    value: "Eugène",
    gender: "M",
  },
  {
    value: "Eustache",
    gender: "M",
  },
  {
    value: "Eva",
    gender: "F",
  },
  {
    value: "Ezio",
    gender: "M",
  },
  {
    value: "Ève",
    gender: "F",
  },
  {
    value: "Ézéchiel",
    gender: "M",
  },
  {
    value: "Fabien",
    gender: "M",
  },
  {
    value: "Fabienne",
    gender: "F",
  },
  {
    value: "Fabio",
    gender: "M",
  },
  {
    value: "Fabrice",
    gender: "M",
  },
  {
    value: "Fadela",
    gender: "F",
  },
  {
    value: "Fanny",
    gender: "F",
  },
  {
    value: "Farid",
    gender: "M",
  },
  {
    value: "Fatima",
    gender: "F",
  },
  {
    value: "Fatoumata",
    gender: "F",
  },
  {
    value: "Fatoumata",
    gender: "F",
  },
  {
    value: "Faustine",
    gender: "F",
  },
  {
    value: "Felicity",
    gender: "F",
  },
  {
    value: "Ferdinand",
    gender: "M",
  },
  {
    value: "Fernand",
    gender: "M",
  },
  {
    value: "Fernande",
    gender: "F",
  },
  {
    value: "Fernando",
    gender: "M",
  },
  {
    value: "Figaro",
    gender: "M",
  },
  {
    value: "Filipa",
    gender: "F",
  },
  {
    value: "Fiona",
    gender: "F",
  },
  {
    value: "Flavie",
    gender: "F",
  },
  {
    value: "Flavien",
    gender: "M",
  },
  {
    value: "Fleur",
    gender: "F",
  },
  {
    value: "Florence",
    gender: "F",
  },
  {
    value: "Florent",
    gender: "M",
  },
  {
    value: "Floria",
    gender: "F",
  },
  {
    value: "Florian",
    gender: "M",
  },
  {
    value: "Florianne",
    gender: "F",
  },
  {
    value: "Florida",
    gender: "F",
  },
  {
    value: "Florine",
    gender: "F",
  },
  {
    value: "Flynn",
    gender: "M",
  },
  {
    value: "Fouad",
    gender: "M",
  },
  {
    value: "France",
    gender: "F",
  },
  {
    value: "Francesco",
    gender: "M",
  },
  {
    value: "Francis",
    gender: "M",
  },
  {
    value: "Franco",
    gender: "M",
  },
  {
    value: "Frank",
    gender: "M",
  },
  {
    value: "Franklin",
    gender: "M",
  },
  {
    value: "Franky",
    gender: "M",
  },
  {
    value: "Franz",
    gender: "M",
  },
  {
    value: "François",
    gender: "M",
  },
  {
    value: "Françoise",
    gender: "F",
  },
  {
    value: "Fred",
    gender: "M",
  },
  {
    value: "Freddy",
    gender: "M",
  },
  {
    value: "Friederich",
    gender: "M",
  },
  {
    value: "Frodon",
    gender: "M",
  },
  {
    value: "Frédéric",
    gender: "M",
  },
  {
    value: "Frédérique",
    gender: "F",
  },
  {
    value: "Félix",
    gender: "M",
  },
  {
    value: "Gabe",
    gender: "M",
  },
  {
    value: "Gabin",
    gender: "M",
  },
  {
    value: "Gabriel",
    gender: "M",
  },
  {
    value: "Gabriela",
    gender: "F",
  },
  {
    value: "Gabrielle",
    gender: "F",
  },
  {
    value: "Gaby",
    gender: "M",
  },
  {
    value: "Galadriel",
    gender: "F",
  },
  {
    value: "Gandalf",
    gender: "M",
  },
  {
    value: "Ganesh",
    gender: "M",
  },
  {
    value: "Gaspard",
    gender: "M",
  },
  {
    value: "Gaston",
    gender: "M",
  },
  {
    value: "Gauthier",
    gender: "M",
  },
  {
    value: "Gauvain",
    gender: "M",
  },
  {
    value: "Gavroche",
    gender: "M",
  },
  {
    value: "Gaëlle",
    gender: "F",
  },
  {
    value: "Gemini",
    gender: "M",
  },
  {
    value: "Genghis",
    gender: "M",
  },
  {
    value: "Genki",
    gender: "M",
  },
  {
    value: "Geoffroy",
    gender: "M",
  },
  {
    value: "Georges",
    gender: "M",
  },
  {
    value: "Georgie",
    gender: "F",
  },
  {
    value: "Georgie",
    gender: "M",
  },
  {
    value: "Gerald",
    gender: "M",
  },
  {
    value: "Geralt",
    gender: "M",
  },
  {
    value: "Germain",
    gender: "M",
  },
  {
    value: "Germaine",
    gender: "F",
  },
  {
    value: "Ghandi",
    gender: "M",
  },
  {
    value: "Gilbert",
    gender: "M",
  },
  {
    value: "Gilles",
    gender: "M",
  },
  {
    value: "Gimli",
    gender: "M",
  },
  {
    value: "Gina",
    gender: "F",
  },
  {
    value: "Ginette",
    gender: "F",
  },
  {
    value: "Gino",
    gender: "M",
  },
  {
    value: "Giorgio",
    gender: "M",
  },
  {
    value: "Giovani",
    gender: "M",
  },
  {
    value: "Giuseppe",
    gender: "M",
  },
  {
    value: "Glenn",
    gender: "M",
  },
  {
    value: "Gloria",
    gender: "F",
  },
  {
    value: "Godefroy",
    gender: "M",
  },
  {
    value: "Goku",
    gender: "M",
  },
  {
    value: "Goliath",
    gender: "M",
  },
  {
    value: "Gollum",
    gender: "M",
  },
  {
    value: "Gontran",
    gender: "M",
  },
  {
    value: "Gonzague",
    gender: "M",
  },
  {
    value: "Gordon",
    gender: "M",
  },
  {
    value: "Grace",
    gender: "F",
  },
  {
    value: "Graham",
    gender: "M",
  },
  {
    value: "Greg",
    gender: "M",
  },
  {
    value: "Gregory",
    gender: "M",
  },
  {
    value: "Greta",
    gender: "F",
  },
  {
    value: "Grima",
    gender: "M",
  },
  {
    value: "Grishka",
    gender: "M",
  },
  {
    value: "Grover",
    gender: "M",
  },
  {
    value: "Grégoire",
    gender: "M",
  },
  {
    value: "Guenièvre",
    gender: "F",
  },
  {
    value: "Guile",
    gender: "M",
  },
  {
    value: "Guillaume",
    gender: "M",
  },
  {
    value: "Guillaumette",
    gender: "F",
  },
  {
    value: "Guillermo",
    gender: "M",
  },
  {
    value: "Gunther",
    gender: "M",
  },
  {
    value: "Gustave",
    gender: "M",
  },
  {
    value: "Guy",
    gender: "M",
  },
  {
    value: "Gwen",
    gender: "F",
  },
  {
    value: "Gwen",
    gender: "M",
  },
  {
    value: "Gwenaël",
    gender: "M",
  },
  {
    value: "Gwenaëlle",
    gender: "F",
  },
  {
    value: "Gwendolyne",
    gender: "F",
  },
  {
    value: "Gwyneth",
    gender: "F",
  },
  {
    value: "Géraldine",
    gender: "F",
  },
  {
    value: "Géronte",
    gender: "M",
  },
  {
    value: "Habib",
    gender: "M",
  },
  {
    value: "Hadès",
    gender: "M",
  },
  {
    value: "Hagen",
    gender: "M",
  },
  {
    value: "Hagrid",
    gender: "M",
  },
  {
    value: "Hakan",
    gender: "M",
  },
  {
    value: "Hakim",
    gender: "M",
  },
  {
    value: "Haku",
    gender: "M",
  },
  {
    value: "Haley",
    gender: "F",
  },
  {
    value: "Hannibal",
    gender: "M",
  },
  {
    value: "Han",
    gender: "M",
  },
  {
    value: "Hans",
    gender: "M",
  },
  {
    value: "Hanzo",
    gender: "M",
  },
  {
    value: "Harley",
    gender: "F",
  },
  {
    value: "Harold",
    gender: "M",
  },
  {
    value: "Harry",
    gender: "M",
  },
  {
    value: "Harvey",
    gender: "M",
  },
  {
    value: "Hayao",
    gender: "M",
  },
  {
    value: "Haïssam",
    gender: "M",
  },
  {
    value: "Heath",
    gender: "M",
  },
  {
    value: "Hector",
    gender: "M",
  },
  {
    value: "Henri",
    gender: "M",
  },
  {
    value: "Henriette",
    gender: "F",
  },
  {
    value: "Henrik",
    gender: "M",
  },
  {
    value: "Herb",
    gender: "M",
  },
  {
    value: "Herbert",
    gender: "M",
  },
  {
    value: "Hercules",
    gender: "M",
  },
  {
    value: "Hershell",
    gender: "M",
  },
  {
    value: "Hermione",
    gender: "F",
  },
  {
    value: "Hervé",
    gender: "M",
  },
  {
    value: "Hideo",
    gender: "M",
  },
  {
    value: "Hilda",
    gender: "F",
  },
  {
    value: "Hippolyte",
    gender: "M",
  },
  {
    value: "Hjalmar",
    gender: "M",
  },
  {
    value: "Homer",
    gender: "M",
  },
  {
    value: "Honda",
    gender: "M",
  },
  {
    value: "Honoré",
    gender: "M",
  },
  {
    value: "Horace",
    gender: "M",
  },
  {
    value: "Horacio",
    gender: "M",
  },
  {
    value: "Hosea",
    gender: "M",
  },
  {
    value: "Hugo",
    gender: "M",
  },
  {
    value: "Hugues",
    gender: "M",
  },
  {
    value: "Huguette",
    gender: "F",
  },
  {
    value: "Hunter",
    gender: "M",
  },
  {
    value: "Huxley",
    gender: "M",
  },
  {
    value: "Ian",
    gender: "M",
  },
  {
    value: "Ibrahim",
    gender: "M",
  },
  {
    value: "Icare",
    gender: "M",
  },
  {
    value: "Ichabod",
    gender: "M",
  },
  {
    value: "Ichigo",
    gender: "M",
  },
  {
    value: "Ilona",
    gender: "F",
  },
  {
    value: "Imogène",
    gender: "F",
  },
  {
    value: "Ingrid",
    gender: "F",
  },
  {
    value: "Irma",
    gender: "F",
  },
  {
    value: "Isaac",
    gender: "M",
  },
  {
    value: "Isabeau",
    gender: "M",
  },
  {
    value: "Isabelle",
    gender: "F",
  },
  {
    value: "Isham",
    gender: "M",
  },
  {
    value: "Isildur",
    gender: "M",
  },
  {
    value: "Ismaël",
    gender: "M",
  },
  {
    value: "Israël",
    gender: "M",
  },
  {
    value: "Ivan",
    gender: "M",
  },
  {
    value: "Jack",
    gender: "M",
  },
  {
    value: "Jackson",
    gender: "M",
  },
  {
    value: "Jacky",
    gender: "M",
  },
  {
    value: "Jacob",
    gender: "M",
  },
  {
    value: "Jacqueline",
    gender: "F",
  },
  {
    value: "Jacques",
    gender: "M",
  },
  {
    value: "Jacquie",
    gender: "F",
  },
  {
    value: "Jacquouille",
    gender: "M",
  },
  {
    value: "Jade",
    gender: "F",
  },
  {
    value: "Jaffar",
    gender: "M",
  },
  {
    value: "Jaina",
    gender: "F",
  },
  {
    value: "Jake",
    gender: "M",
  },
  {
    value: "Jamel",
    gender: "M",
  },
  {
    value: "James",
    gender: "M",
  },
  {
    value: "Jamy",
    gender: "M",
  },
  {
    value: "Jane",
    gender: "F",
  },
  {
    value: "Janet",
    gender: "F",
  },
  {
    value: "Janice",
    gender: "F",
  },
  {
    value: "Jar Jar",
    gender: "M",
  },
  {
    value: "Jasmine",
    gender: "F",
  },
  {
    value: "Jaskier",
    gender: "M",
  },
  {
    value: "Javier",
    gender: "M",
  },
  {
    value: "Jaya",
    gender: "F",
  },
  {
    value: "Jean",
    gender: "M",
  },
  {
    value: "Jeanne",
    gender: "F",
  },
  {
    value: "Jeannette",
    gender: "F",
  },
  {
    value: "Jeannot",
    gender: "M",
  },
  {
    value: "Jeff",
    gender: "M",
  },
  {
    value: "Jennifer",
    gender: "F",
  },
  {
    value: "Jerry",
    gender: "M",
  },
  {
    value: "Jessica",
    gender: "F",
  },
  {
    value: "Jessie",
    gender: "F",
  },
  {
    value: "Jessie",
    gender: "M",
  },
  {
    value: "Jim",
    gender: "M",
  },
  {
    value: "Jimmy",
    gender: "M",
  },
  {
    value: "Joe",
    gender: "M",
  },
  {
    value: "Johanne",
    gender: "F",
  },
  {
    value: "John",
    gender: "M",
  },
  {
    value: "Johnny",
    gender: "M",
  },
  {
    value: "Jonas",
    gender: "M",
  },
  {
    value: "Jonathan",
    gender: "M",
  },
  {
    value: "Jordan",
    gender: "M",
  },
  {
    value: "Jordi",
    gender: "M",
  },
  {
    value: "Joseph",
    gender: "M",
  },
  {
    value: "Joshua",
    gender: "M",
  },
  {
    value: "Josiane",
    gender: "F",
  },
  {
    value: "Josie",
    gender: "F",
  },
  {
    value: "José",
    gender: "M",
  },
  {
    value: "Joséphine",
    gender: "F",
  },
  {
    value: "Joël",
    gender: "M",
  },
  {
    value: "Joëlle",
    gender: "F",
  },
  {
    value: "Juan",
    gender: "M",
  },
  {
    value: "Judas",
    gender: "M",
  },
  {
    value: "Jude",
    gender: "M",
  },
  {
    value: "Judith",
    gender: "F",
  },
  {
    value: "Jules",
    gender: "M",
  },
  {
    value: "Julia",
    gender: "F",
  },
  {
    value: "Julian",
    gender: "M",
  },
  {
    value: "Julie",
    gender: "F",
  },
  {
    value: "Julien",
    gender: "M",
  },
  {
    value: "Juliette",
    gender: "F",
  },
  {
    value: "Julio",
    gender: "M",
  },
  {
    value: "Julius",
    gender: "M",
  },
  {
    value: "Juno",
    gender: "F",
  },
  {
    value: "Juste",
    gender: "M",
  },
  {
    value: "Justin",
    gender: "M",
  },
  {
    value: "Justine",
    gender: "F",
  },
  {
    value: "Justinien",
    gender: "M",
  },
  {
    value: "Jérôme",
    gender: "M",
  },
  {
    value: "Kad",
    gender: "M",
  },
  {
    value: "Kader",
    gender: "M",
  },
  {
    value: "Kaori",
    gender: "F",
  },
  {
    value: "Karen",
    gender: "F",
  },
  {
    value: "Karim",
    gender: "M",
  },
  {
    value: "Karl",
    gender: "M",
  },
  {
    value: "Kate",
    gender: "F",
  },
  {
    value: "Katie",
    gender: "F",
  },
  {
    value: "Keira",
    gender: "F",
  },
  {
    value: "Ken",
    gender: "M",
  },
  {
    value: "Kendrick",
    gender: "M",
  },
  {
    value: "Kent",
    gender: "M",
  },
  {
    value: "Kevin",
    gender: "M",
  },
  {
    value: "Khaled",
    gender: "M",
  },
  {
    value: "Kid",
    gender: "M",
  },
  {
    value: "Kiki",
    gender: "F",
  },
  {
    value: "Killian",
    gender: "M",
  },
  {
    value: "Kim",
    gender: "F",
  },
  {
    value: "Kirikou",
    gender: "M",
  },
  {
    value: "Kirk",
    gender: "M",
  },
  {
    value: "Kirsten",
    gender: "F",
  },
  {
    value: "Klaus",
    gender: "M",
  },
  {
    value: "Kobe",
    gender: "M",
  },
  {
    value: "Kratos",
    gender: "M",
  },
  {
    value: "Kurt",
    gender: "M",
  },
  {
    value: "Kyan",
    gender: "M",
  },
  {
    value: "Kyle",
    gender: "M",
  },
  {
    value: "Kylie",
    gender: "F",
  },
  {
    value: "Lambert",
    gender: "M",
  },
  {
    value: "Lance",
    gender: "M",
  },
  {
    value: "Lancelot",
    gender: "M",
  },
  {
    value: "Lara",
    gender: "F",
  },
  {
    value: "Laura",
    gender: "F",
  },
  {
    value: "Laurence",
    gender: "F",
  },
  {
    value: "Laurent",
    gender: "M",
  },
  {
    value: "Lawrence",
    gender: "M",
  },
  {
    value: "Lazare",
    gender: "M",
  },
  {
    value: "Leah",
    gender: "F",
  },
  {
    value: "Legolas",
    gender: "M",
  },
  {
    value: "Lenny",
    gender: "M",
  },
  {
    value: "Leonardo",
    gender: "M",
  },
  {
    value: "Leslie",
    gender: "F",
  },
  {
    value: "Letho",
    gender: "M",
  },
  {
    value: "Lewis",
    gender: "F",
  },
  {
    value: "Lewis",
    gender: "M",
  },
  {
    value: "Li",
    gender: "F",
  },
  {
    value: "Lili-Rose",
    gender: "F",
  },
  {
    value: "Liliane",
    gender: "F",
  },
  {
    value: "Lilly",
    gender: "F",
  },
  {
    value: "Lilo",
    gender: "M",
  },
  {
    value: "Linus",
    gender: "M",
  },
  {
    value: "Lionel",
    gender: "M",
  },
  {
    value: "Lisa",
    gender: "F",
  },
  {
    value: "Lisandra",
    gender: "F",
  },
  {
    value: "Lise",
    gender: "F",
  },
  {
    value: "Liselotte",
    gender: "F",
  },
  {
    value: "Liu",
    gender: "M",
  },
  {
    value: "Loki",
    gender: "M",
  },
  {
    value: "Lola",
    gender: "F",
  },
  {
    value: "Lorek",
    gender: "M",
  },
  {
    value: "Lothar",
    gender: "M",
  },
  {
    value: "Louis",
    gender: "M",
  },
  {
    value: "Louisa",
    gender: "F",
  },
  {
    value: "Louise",
    gender: "F",
  },
  {
    value: "Louisette",
    gender: "F",
  },
  {
    value: "Loïc",
    gender: "M",
  },
  {
    value: "Loïs",
    gender: "F",
  },
  {
    value: "Luc",
    gender: "M",
  },
  {
    value: "Lucas",
    gender: "M",
  },
  {
    value: "Lucenzo",
    gender: "M",
  },
  {
    value: "Lucie",
    gender: "F",
  },
  {
    value: "Lucifer",
    gender: "M",
  },
  {
    value: "Lucien",
    gender: "M",
  },
  {
    value: "Lucius",
    gender: "M",
  },
  {
    value: "Ludovic",
    gender: "M",
  },
  {
    value: "Ludwig",
    gender: "M",
  },
  {
    value: "Luis",
    gender: "M",
  },
  {
    value: "Luna",
    gender: "F",
  },
  {
    value: "Lysandre",
    gender: "M",
  },
  {
    value: "László",
    gender: "M",
  },
  {
    value: "Léa",
    gender: "F",
  },
  {
    value: "Léna",
    gender: "F",
  },
  {
    value: "Léo",
    gender: "M",
  },
  {
    value: "Léonard",
    gender: "M",
  },
  {
    value: "Léopold",
    gender: "M",
  },
  {
    value: "Lúcio",
    gender: "M",
  },
  {
    value: "Madeleine",
    gender: "F",
  },
  {
    value: "Madelon",
    gender: "F",
  },
  {
    value: "Madonna",
    gender: "F",
  },
  {
    value: "Maggie",
    gender: "F",
  },
  {
    value: "Malik",
    gender: "M",
  },
  {
    value: "Manon",
    gender: "F",
  },
  {
    value: "Manu",
    gender: "M",
  },
  {
    value: "Manuel",
    gender: "M",
  },
  {
    value: "Mao",
    gender: "M",
  },
  {
    value: "Marc",
    gender: "M",
  },
  {
    value: "Marcel",
    gender: "M",
  },
  {
    value: "Marcelino",
    gender: "M",
  },
  {
    value: "Marco",
    gender: "M",
  },
  {
    value: "Marcus",
    gender: "M",
  },
  {
    value: "Margaret",
    gender: "F",
  },
  {
    value: "Marge",
    gender: "F",
  },
  {
    value: "Margot",
    gender: "F",
  },
  {
    value: "Marguerite",
    gender: "F",
  },
  {
    value: "Maria",
    gender: "F",
  },
  {
    value: "Marianne",
    gender: "F",
  },
  {
    value: "Marie",
    gender: "F",
  },
  {
    value: "Mariette",
    gender: "F",
  },
  {
    value: "Marin",
    gender: "M",
  },
  {
    value: "Marine",
    gender: "F",
  },
  {
    value: "Mario",
    gender: "M",
  },
  {
    value: "Marion",
    gender: "F",
  },
  {
    value: "Marjorie",
    gender: "F",
  },
  {
    value: "Markos",
    gender: "M",
  },
  {
    value: "Marky",
    gender: "M",
  },
  {
    value: "Marlon",
    gender: "M",
  },
  {
    value: "Marnix",
    gender: "M",
  },
  {
    value: "Martha",
    gender: "F",
  },
  {
    value: "Martin",
    gender: "M",
  },
  {
    value: "Martine",
    gender: "F",
  },
  {
    value: "Marty",
    gender: "M",
  },
  {
    value: "Marwan",
    gender: "M",
  },
  {
    value: "Marylin",
    gender: "F",
  },
  {
    value: "Marzia",
    gender: "F",
  },
  {
    value: "Mathias",
    gender: "M",
  },
  {
    value: "Mathilda",
    gender: "F",
  },
  {
    value: "Mathilde",
    gender: "F",
  },
  {
    value: "Matt",
    gender: "M",
  },
  {
    value: "Mathéo",
    gender: "M",
  },
  {
    value: "Maurice",
    gender: "M",
  },
  {
    value: "Max",
    gender: "M",
  },
  {
    value: "Maxence",
    gender: "M",
  },
  {
    value: "Maxime",
    gender: "M",
  },
  {
    value: "Maximilien",
    gender: "M",
  },
  {
    value: "Maxine",
    gender: "F",
  },
  {
    value: "Maya",
    gender: "F",
  },
  {
    value: "Maé",
    gender: "F",
  },
  {
    value: "Maël",
    gender: "M",
  },
  {
    value: "Maëlle",
    gender: "F",
  },
  {
    value: "Maïté",
    gender: "F",
  },
  {
    value: "Meg",
    gender: "F",
  },
  {
    value: "Megan",
    gender: "F",
  },
  {
    value: "Mehdi",
    gender: "M",
  },
  {
    value: "Mei",
    gender: "F",
  },
  {
    value: "Melchior",
    gender: "M",
  },
  {
    value: "Melec",
    gender: "M",
  },
  {
    value: "Mercedes",
    gender: "F",
  },
  {
    value: "Mercutio",
    gender: "M",
  },
  {
    value: "Merle",
    gender: "M",
  },
  {
    value: "Meryl",
    gender: "F",
  },
  {
    value: "Michael",
    gender: "M",
  },
  {
    value: "Michel",
    gender: "M",
  },
  {
    value: "Michelangelo",
    gender: "M",
  },
  {
    value: "Michelle",
    gender: "F",
  },
  {
    value: "Mick",
    gender: "M",
  },
  {
    value: "Mickaël",
    gender: "M",
  },
  {
    value: "Mickey",
    gender: "M",
  },
  {
    value: "Milou",
    gender: "M",
  },
  {
    value: "Mimi",
    gender: "F",
  },
  {
    value: "Mimoune",
    gender: "M",
  },
  {
    value: "Minerva",
    gender: "F",
  },
  {
    value: "Miyamoto",
    gender: "M",
  },
  {
    value: "Mohammed",
    gender: "M",
  },
  {
    value: "Moira",
    gender: "F",
  },
  {
    value: "Mokhtar",
    gender: "M",
  },
  {
    value: "Mona",
    gender: "F",
  },
  {
    value: "Monica",
    gender: "F",
  },
  {
    value: "Monique",
    gender: "F",
  },
  {
    value: "Morris",
    gender: "M",
  },
  {
    value: "Morticia",
    gender: "F",
  },
  {
    value: "Morty",
    gender: "M",
  },
  {
    value: "Mouloud",
    gender: "F",
  },
  {
    value: "Moussa",
    gender: "M",
  },
  {
    value: "Mowgli",
    gender: "M",
  },
  {
    value: "Mufasa",
    gender: "M",
  },
  {
    value: "Mulan",
    gender: "F",
  },
  {
    value: "Murphy",
    gender: "M",
  },
  {
    value: "Mushu",
    gender: "M",
  },
  {
    value: "Mustafa",
    gender: "M",
  },
  {
    value: "Myriam",
    gender: "F",
  },
  {
    value: "Médusa",
    gender: "F",
  },
  {
    value: "Mégane",
    gender: "F",
  },
  {
    value: "Mélodie",
    gender: "F",
  },
  {
    value: "Mérovée",
    gender: "M",
  },
  {
    value: "Nabil",
    gender: "M",
  },
  {
    value: "Nadya",
    gender: "F",
  },
  {
    value: "Nancy",
    gender: "F",
  },
  {
    value: "Naomi",
    gender: "F",
  },
  {
    value: "Narcisse",
    gender: "M",
  },
  {
    value: "Naruto",
    gender: "M",
  },
  {
    value: "Natalya",
    gender: "F",
  },
  {
    value: "Nathalie",
    gender: "F",
  },
  {
    value: "Nathan",
    gender: "M",
  },
  {
    value: "Nathanaël",
    gender: "M",
  },
  {
    value: "Ned",
    gender: "M",
  },
  {
    value: "Nelson",
    gender: "M",
  },
  {
    value: "Neo",
    gender: "M",
  },
  {
    value: "Nestor",
    gender: "M",
  },
  {
    value: "Nevill",
    gender: "M",
  },
  {
    value: "Ngolo",
    gender: "M",
  },
  {
    value: "Niccolò",
    gender: "M",
  },
  {
    value: "Nick",
    gender: "M",
  },
  {
    value: "Nico",
    gender: "M",
  },
  {
    value: "Nicolas",
    gender: "M",
  },
  {
    value: "Nicole",
    gender: "F",
  },
  {
    value: "Night",
    gender: "M",
  },
  {
    value: "Nikos",
    gender: "M",
  },
  {
    value: "Nina",
    gender: "F",
  },
  {
    value: "Noah",
    gender: "M",
  },
  {
    value: "Nora",
    gender: "F",
  },
  {
    value: "Norbert",
    gender: "M",
  },
  {
    value: "Norman",
    gender: "M",
  },
  {
    value: "Noémie",
    gender: "F",
  },
  {
    value: "Noël",
    gender: "M",
  },
  {
    value: "Néron",
    gender: "M",
  },
  {
    value: "Obi-Wan",
    gender: "M",
  },
  {
    value: "Obélix",
    gender: "M",
  },
  {
    value: "Octave",
    gender: "M",
  },
  {
    value: "Octavius",
    gender: "M",
  },
  {
    value: "Océane",
    gender: "F",
  },
  {
    value: "Odette",
    gender: "F",
  },
  {
    value: "Odile",
    gender: "F",
  },
  {
    value: "Oggy",
    gender: "M",
  },
  {
    value: "Olaf",
    gender: "M",
  },
  {
    value: "Oleg",
    gender: "M",
  },
  {
    value: "Olga",
    gender: "F",
  },
  {
    value: "Olive",
    gender: "M",
  },
  {
    value: "Olivia",
    gender: "F",
  },
  {
    value: "Olivier",
    gender: "M",
  },
  {
    value: "Omar",
    gender: "M",
  },
  {
    value: "Ondine",
    gender: "F",
  },
  {
    value: "Oprah",
    gender: "F",
  },
  {
    value: "Oriane",
    gender: "F",
  },
  {
    value: "Orlando",
    gender: "M",
  },
  {
    value: "Orson",
    gender: "M",
  },
  {
    value: "Orville",
    gender: "M",
  },
  {
    value: "Oscar",
    gender: "M",
  },
  {
    value: "Oswald",
    gender: "M",
  },
  {
    value: "Otto",
    gender: "M",
  },
  {
    value: "Oussama",
    gender: "M",
  },
  {
    value: "Owen",
    gender: "M",
  },
  {
    value: "Pablo",
    gender: "M",
  },
  {
    value: "Padmé",
    gender: "F",
  },
  {
    value: "Pam",
    gender: "F",
  },
  {
    value: "Pamela",
    gender: "F",
  },
  {
    value: "Panoramix",
    gender: "M",
  },
  {
    value: "Paolo",
    gender: "M",
  },
  {
    value: "Paris",
    gender: "M",
  },
  {
    value: "Pascal",
    gender: "M",
  },
  {
    value: "Pascale",
    gender: "F",
  },
  {
    value: "Pashta",
    gender: "F",
  },
  {
    value: "Pat",
    gender: "M",
  },
  {
    value: "Patrice",
    gender: "M",
  },
  {
    value: "Patricia",
    gender: "F",
  },
  {
    value: "Patrick",
    gender: "M",
  },
  {
    value: "Patty",
    gender: "F",
  },
  {
    value: "Paul",
    gender: "M",
  },
  {
    value: "Paulina",
    gender: "F",
  },
  {
    value: "Pavel",
    gender: "M",
  },
  {
    value: "Peggy",
    gender: "F",
  },
  {
    value: "Penny",
    gender: "F",
  },
  {
    value: "Pepito",
    gender: "M",
  },
  {
    value: "Perceval",
    gender: "M",
  },
  {
    value: "Perle",
    gender: "F",
  },
  {
    value: "Persée",
    gender: "M",
  },
  {
    value: "Pete",
    gender: "M",
  },
  {
    value: "Peter",
    gender: "M",
  },
  {
    value: "Petra",
    gender: "F",
  },
  {
    value: "Phil",
    gender: "M",
  },
  {
    value: "Philibert",
    gender: "M",
  },
  {
    value: "Philippe",
    gender: "M",
  },
  {
    value: "Philémon",
    gender: "M",
  },
  {
    value: "Phineas",
    gender: "M",
  },
  {
    value: "Phoebe",
    gender: "F",
  },
  {
    value: "Phoenix",
    gender: "M",
  },
  {
    value: "Pim",
    gender: "M",
  },
  {
    value: "Pierce",
    gender: "M",
  },
  {
    value: "Pierre",
    gender: "M",
  },
  {
    value: "Pierrick",
    gender: "M",
  },
  {
    value: "Pierrot",
    gender: "M",
  },
  {
    value: "Piotr",
    gender: "M",
  },
  {
    value: "Pippin",
    gender: "M",
  },
  {
    value: "Plume",
    gender: "F",
  },
  {
    value: "Pluto",
    gender: "M",
  },
  {
    value: "Po",
    gender: "M",
  },
  {
    value: "Podrick",
    gender: "M",
  },
  {
    value: "Pollux",
    gender: "M",
  },
  {
    value: "Pomme",
    gender: "F",
  },
  {
    value: "Ponce",
    gender: "M",
  },
  {
    value: "Pontius",
    gender: "M",
  },
  {
    value: "Proximo",
    gender: "M",
  },
  {
    value: "Pugsley",
    gender: "M",
  },
  {
    value: "Pâris",
    gender: "M",
  },
  {
    value: "Pénéloppe",
    gender: "F",
  },
  {
    value: "Pépin",
    gender: "M",
  },
  {
    value: "Quentin",
    gender: "M",
  },
  {
    value: "Quincy",
    gender: "F",
  },
  {
    value: "Raagul",
    gender: "F",
  },
  {
    value: "Rachel",
    gender: "F",
  },
  {
    value: "Rachid",
    gender: "M",
  },
  {
    value: "Rachida",
    gender: "F",
  },
  {
    value: "Radagast",
    gender: "M",
  },
  {
    value: "Raffaello",
    gender: "M",
  },
  {
    value: "Ragnar",
    gender: "M",
  },
  {
    value: "Ralph",
    gender: "M",
  },
  {
    value: "Ramon",
    gender: "M",
  },
  {
    value: "Ramsès",
    gender: "M",
  },
  {
    value: "Rania",
    gender: "F",
  },
  {
    value: "Raoul",
    gender: "M",
  },
  {
    value: "Raphaël",
    gender: "M",
  },
  {
    value: "Raymond",
    gender: "M",
  },
  {
    value: "Raymonde",
    gender: "F",
  },
  {
    value: "Rebecca",
    gender: "F",
  },
  {
    value: "Reese",
    gender: "F",
  },
  {
    value: "Reggie",
    gender: "M",
  },
  {
    value: "Regina",
    gender: "F",
  },
  {
    value: "Reginald",
    gender: "M",
  },
  {
    value: "Remus",
    gender: "M",
  },
  {
    value: "Renand",
    gender: "M",
  },
  {
    value: "Renaud",
    gender: "M",
  },
  {
    value: "Rhonda",
    gender: "F",
  },
  {
    value: "Richard",
    gender: "M",
  },
  {
    value: "Richie",
    gender: "M",
  },
  {
    value: "Rick",
    gender: "M",
  },
  {
    value: "Ricky",
    gender: "M",
  },
  {
    value: "Rico",
    gender: "M",
  },
  {
    value: "Riley",
    gender: "F",
  },
  {
    value: "Ringo",
    gender: "M",
  },
  {
    value: "Robert",
    gender: "M",
  },
  {
    value: "Roberta",
    gender: "F",
  },
  {
    value: "Roberto",
    gender: "M",
  },
  {
    value: "Robb",
    gender: "M",
  },
  {
    value: "Robbie",
    gender: "M",
  },
  {
    value: "Robin",
    gender: "M",
  },
  {
    value: "Robinson",
    gender: "M",
  },
  {
    value: "Rocco",
    gender: "M",
  },
  {
    value: "Rock",
    gender: "M",
  },
  {
    value: "Rocky",
    gender: "M",
  },
  {
    value: "Rod",
    gender: "M",
  },
  {
    value: "Rodrick",
    gender: "M",
  },
  {
    value: "Rodrigo",
    gender: "M",
  },
  {
    value: "Rodrigue",
    gender: "M",
  },
  {
    value: "Roger",
    gender: "M",
  },
  {
    value: "Roland",
    gender: "M",
  },
  {
    value: "Romain",
    gender: "M",
  },
  {
    value: "Romane",
    gender: "F",
  },
  {
    value: "Romuald",
    gender: "M",
  },
  {
    value: "Romulus",
    gender: "M",
  },
  {
    value: "Romy",
    gender: "F",
  },
  {
    value: "Roméo",
    gender: "M",
  },
  {
    value: "Ron",
    gender: "M",
  },
  {
    value: "Ronald",
    gender: "M",
  },
  {
    value: "Ronny",
    gender: "M",
  },
  {
    value: "Rookie",
    gender: "M",
  },
  {
    value: "Rory",
    gender: "M",
  },
  {
    value: "Rosa",
    gender: "F",
  },
  {
    value: "Rose",
    gender: "F",
  },
  {
    value: "Rosie",
    gender: "F",
  },
  {
    value: "Ross",
    gender: "M",
  },
  {
    value: "Rox",
    gender: "M",
  },
  {
    value: "Roxanne",
    gender: "F",
  },
  {
    value: "Roy",
    gender: "M",
  },
  {
    value: "Ruben",
    gender: "M",
  },
  {
    value: "Rubeus",
    gender: "M",
  },
  {
    value: "Rudolf",
    gender: "M",
  },
  {
    value: "Rufus",
    gender: "M",
  },
  {
    value: "Rupert",
    gender: "M",
  },
  {
    value: "Russell",
    gender: "M",
  },
  {
    value: "Ryan",
    gender: "M",
  },
  {
    value: "Ryu",
    gender: "M",
  },
  {
    value: "Régis",
    gender: "M",
  },
  {
    value: "Rémi",
    gender: "M",
  },
  {
    value: "Sabine",
    gender: "F",
  },
  {
    value: "Sabrina",
    gender: "F",
  },
  {
    value: "Salim",
    gender: "M",
  },
  {
    value: "Salomon",
    gender: "M",
  },
  {
    value: "Salomé",
    gender: "F",
  },
  {
    value: "Salvador",
    gender: "M",
  },
  {
    value: "Sally",
    gender: "F",
  },
  {
    value: "Sam",
    gender: "F",
  },
  {
    value: "Samantha",
    gender: "F",
  },
  {
    value: "Sandra",
    gender: "F",
  },
  {
    value: "Sandrine",
    gender: "F",
  },
  {
    value: "Sandro",
    gender: "M",
  },
  {
    value: "Sansa",
    gender: "F",
  },
  {
    value: "Saphira",
    gender: "L",
  },
  {
    value: "Saruman",
    gender: "M",
  },
  {
    value: "Sarah",
    gender: "F",
  },
  {
    value: "Sasha",
    gender: "F",
  },
  {
    value: "Sasaki",
    gender: "M",
  },
  {
    value: "Sasuke",
    gender: "M",
  },
  {
    value: "Saul",
    gender: "M",
  },
  {
    value: "Sauron",
    gender: "M",
  },
  {
    value: "Savannah",
    gender: "F",
  },
  {
    value: "Scapin",
    gender: "M",
  },
  {
    value: "Scarlett",
    gender: "F",
  },
  {
    value: "Scott",
    gender: "M",
  },
  {
    value: "Seamus",
    gender: "M",
  },
  {
    value: "Sean",
    gender: "M",
  },
  {
    value: "Sebastian",
    gender: "M",
  },
  {
    value: "Sekiro",
    gender: "M",
  },
  {
    value: "Selma",
    gender: "F",
  },
  {
    value: "Septimus",
    gender: "M",
  },
  {
    value: "Serge",
    gender: "M",
  },
  {
    value: "Sergio",
    gender: "M",
  },
  {
    value: "Seth",
    gender: "M",
  },
  {
    value: "Severus",
    gender: "M",
  },
  {
    value: "Seymour",
    gender: "M",
  },
  {
    value: "Shaggy",
    gender: "M",
  },
  {
    value: "Shane",
    gender: "M",
  },
  {
    value: "Shani",
    gender: "F",
  },
  {
    value: "Sharon",
    gender: "F",
  },
  {
    value: "Shaun",
    gender: "M",
  },
  {
    value: "Shauna",
    gender: "F",
  },
  {
    value: "Shelly",
    gender: "F",
  },
  {
    value: "Sherilyn",
    gender: "F",
  },
  {
    value: "Sherley",
    gender: "F",
  },
  {
    value: "Shlomo",
    gender: "M",
  },
  {
    value: "Shrek",
    gender: "M",
  },
  {
    value: "Sibylle",
    gender: "F",
  },
  {
    value: "Siegfried",
    gender: "M",
  },
  {
    value: "Sigismund",
    gender: "M",
  },
  {
    value: "Sigourney",
    gender: "F",
  },
  {
    value: "Silvester",
    gender: "M",
  },
  {
    value: "Silvestre",
    gender: "M",
  },
  {
    value: "Simba",
    gender: "M",
  },
  {
    value: "Simon",
    gender: "M",
  },
  {
    value: "Simonne",
    gender: "F",
  },
  {
    value: "Sirius",
    gender: "M",
  },
  {
    value: "Sky",
    gender: "F",
  },
  {
    value: "Skyler",
    gender: "F",
  },
  {
    value: "Snake",
    gender: "M",
  },
  {
    value: "Sofia",
    gender: "F",
  },
  {
    value: "Sofiane",
    gender: "M",
  },
  {
    value: "Solène",
    gender: "F",
  },
  {
    value: "Sophie",
    gender: "F",
  },
  {
    value: "Spike",
    gender: "M",
  },
  {
    value: "Spirou",
    gender: "M",
  },
  {
    value: "Stacy",
    gender: "F",
  },
  {
    value: "Stan",
    gender: "M",
  },
  {
    value: "Stanislas",
    gender: "M",
  },
  {
    value: "Stanley",
    gender: "M",
  },
  {
    value: "Stephen",
    gender: "M",
  },
  {
    value: "Steve",
    gender: "M",
  },
  {
    value: "Steven",
    gender: "M",
  },
  {
    value: "Stevie",
    gender: "M",
  },
  {
    value: "Stuart",
    gender: "M",
  },
  {
    value: "Stéphanie",
    gender: "F",
  },
  {
    value: "Suzanne",
    gender: "F",
  },
  {
    value: "Suzette",
    gender: "F",
  },
  {
    value: "Suzie",
    gender: "F",
  },
  {
    value: "Sven",
    gender: "M",
  },
  {
    value: "Sylvain",
    gender: "M",
  },
  {
    value: "Sylvia",
    gender: "F",
  },
  {
    value: "Sylviane",
    gender: "F",
  },
  {
    value: "Sylvie",
    gender: "F",
  },
  {
    value: "Sylvio",
    gender: "M",
  },
  {
    value: "Sébastien",
    gender: "M",
  },
  {
    value: "Séléna",
    gender: "F",
  },
  {
    value: "Sévère",
    gender: "M",
  },
  {
    value: "Tahiti",
    gender: "M",
  },
  {
    value: "Takeshi",
    gender: "M",
  },
  {
    value: "Tamara",
    gender: "F",
  },
  {
    value: "Tancrède",
    gender: "M",
  },
  {
    value: "Tanguy",
    gender: "M",
  },
  {
    value: "Tanya",
    gender: "F",
  },
  {
    value: "Tarik",
    gender: "M",
  },
  {
    value: "Tarkan",
    gender: "M",
  },
  {
    value: "Tartuffe",
    gender: "M",
  },
  {
    value: "Tarzan",
    gender: "M",
  },
  {
    value: "Ted",
    gender: "M",
  },
  {
    value: "Teddy",
    gender: "M",
  },
  {
    value: "Terence",
    gender: "M",
  },
  {
    value: "Terry",
    gender: "M",
  },
  {
    value: "Thalia",
    gender: "F",
  },
  {
    value: "Thanos",
    gender: "M",
  },
  {
    value: "Thaïs",
    gender: "F",
  },
  {
    value: "Theresa",
    gender: "F",
  },
  {
    value: "Thibault",
    gender: "M",
  },
  {
    value: "Thierry",
    gender: "M",
  },
  {
    value: "Thomas",
    gender: "M",
  },
  {
    value: "Thorgal",
    gender: "M",
  },
  {
    value: "Thuy",
    gender: "F",
  },
  {
    value: "Théo",
    gender: "M",
  },
  {
    value: "Théobald",
    gender: "M",
  },
  {
    value: "Théodore",
    gender: "M",
  },
  {
    value: "Théophile",
    gender: "M",
  },
  {
    value: "Thérèse",
    gender: "F",
  },
  {
    value: "Thésée",
    gender: "M",
  },
  {
    value: "Tiger",
    gender: "M",
  },
  {
    value: "Tilda",
    gender: "F",
  },
  {
    value: "Tim",
    gender: "M",
  },
  {
    value: "Timothy",
    gender: "M",
  },
  {
    value: "Timothé",
    gender: "M",
  },
  {
    value: "Tintin",
    gender: "M",
  },
  {
    value: "Titeuf",
    gender: "M",
  },
  {
    value: "Titus",
    gender: "M",
  },
  {
    value: "Tobby",
    gender: "M",
  },
  {
    value: "Todd",
    gender: "M",
  },
  {
    value: "Tom",
    gender: "M",
  },
  {
    value: "Tommen",
    gender: "M",
  },
  {
    value: "Tommy",
    gender: "M",
  },
  {
    value: "Tony",
    gender: "M",
  },
  {
    value: "Torbjörn",
    gender: "M",
  },
  {
    value: "Toulouse",
    gender: "M",
  },
  {
    value: "Tracey",
    gender: "F",
  },
  {
    value: "Travis",
    gender: "M",
  },
  {
    value: "Trevor",
    gender: "M",
  },
  {
    value: "Triss",
    gender: "F",
  },
  {
    value: "Tristan",
    gender: "M",
  },
  {
    value: "Troy",
    gender: "M",
  },
  {
    value: "Tryphon",
    gender: "M",
  },
  {
    value: "Trésor",
    gender: "M",
  },
  {
    value: "Tybalt",
    gender: "M",
  },
  {
    value: "Tyron",
    gender: "M",
  },
  {
    value: "Ulfric",
    gender: "M",
  },
  {
    value: "Ulrich",
    gender: "M",
  },
  {
    value: "Ulysse",
    gender: "M",
  },
  {
    value: "Uma",
    gender: "F",
  },
  {
    value: "Urbain",
    gender: "M",
  },
  {
    value: "Ursula",
    gender: "F",
  },
  {
    value: "Ursule",
    gender: "F",
  },
  {
    value: "Usul",
    gender: "M",
  },
  {
    value: "Uther",
    gender: "M",
  },
  {
    value: "Valentin",
    gender: "M",
  },
  {
    value: "Valentina",
    gender: "F",
  },
  {
    value: "Valentine",
    gender: "F",
  },
  {
    value: "Valérie",
    gender: "F",
  },
  {
    value: "Vasco",
    gender: "M",
  },
  {
    value: "Vega",
    gender: "M",
  },
  {
    value: "Vegeta",
    gender: "M",
  },
  {
    value: "Vera",
    gender: "F",
  },
  {
    value: "Vicky",
    gender: "F",
  },
  {
    value: "Victoire",
    gender: "F",
  },
  {
    value: "Victor",
    gender: "M",
  },
  {
    value: "Victoria",
    gender: "F",
  },
  {
    value: "Viggo",
    gender: "M",
  },
  {
    value: "Vincent",
    gender: "M",
  },
  {
    value: "Vincenzo",
    gender: "M",
  },
  {
    value: "Vinicius",
    gender: "M",
  },
  {
    value: "Violaine",
    gender: "F",
  },
  {
    value: "Violette",
    gender: "F",
  },
  {
    value: "Vivianne",
    gender: "F",
  },
  {
    value: "Vivien",
    gender: "M",
  },
  {
    value: "Vivienne",
    gender: "F",
  },
  {
    value: "Vlad",
    gender: "M",
  },
  {
    value: "Vladimir",
    gender: "M",
  },
  {
    value: "Voldemort",
    gender: "M",
  },
  {
    value: "Vésémir",
    gender: "M",
  },
  {
    value: "Wade",
    gender: "M",
  },
  {
    value: "Waldo",
    gender: "M",
  },
  {
    value: "Wallace",
    gender: "M",
  },
  {
    value: "Walt",
    gender: "M",
  },
  {
    value: "Walter",
    gender: "M",
  },
  {
    value: "Waluigi",
    gender: "M",
  },
  {
    value: "Wanda",
    gender: "F",
  },
  {
    value: "Wario",
    gender: "M",
  },
  {
    value: "Wayne",
    gender: "M",
  },
  {
    value: "Whitney",
    gender: "F",
  },
  {
    value: "Wilbur",
    gender: "M",
  },
  {
    value: "Will",
    gender: "M",
  },
  {
    value: "Willem",
    gender: "M",
  },
  {
    value: "William",
    gender: "M",
  },
  {
    value: "Willis",
    gender: "M",
  },
  {
    value: "Willy",
    gender: "M",
  },
  {
    value: "Winnie",
    gender: "F",
  },
  {
    value: "Winnifred",
    gender: "M",
  },
  {
    value: "Winston",
    gender: "M",
  },
  {
    value: "Woody",
    gender: "M",
  },
  {
    value: "Xander",
    gender: "M",
  },
  {
    value: "Xaverine",
    gender: "F",
  },
  {
    value: "Xavier",
    gender: "M",
  },
  {
    value: "Xenia",
    gender: "F",
  },
  {
    value: "Yann",
    gender: "M",
  },
  {
    value: "Yannick",
    gender: "M",
  },
  {
    value: "Yarpen",
    gender: "M",
  },
  {
    value: "Yasmina",
    gender: "F",
  },
  {
    value: "Yasmine",
    gender: "F",
  },
  {
    value: "Yennefer",
    gender: "F",
  },
  {
    value: "Yoda",
    gender: "M",
  },
  {
    value: "Yohan",
    gender: "M",
  },
  {
    value: "Yoko",
    gender: "F",
  },
  {
    value: "Yolanda",
    gender: "F",
  },
  {
    value: "Yoshi",
    gender: "M",
  },
  {
    value: "Youri",
    gender: "M",
  },
  {
    value: "Yseult",
    gender: "F",
  },
  {
    value: "Ysée",
    gender: "F",
  },
  {
    value: "Yubaba",
    gender: "F",
  },
  {
    value: "Yusuf",
    gender: "M",
  },
  {
    value: "Yvan",
    gender: "M",
  },
  {
    value: "Yves",
    gender: "M",
  },
  {
    value: "Yvette",
    gender: "F",
  },
  {
    value: "Yvick",
    gender: "M",
  },
  {
    value: "Zacharie",
    gender: "M",
  },
  {
    value: "Zack",
    gender: "M",
  },
  {
    value: "Zangief",
    gender: "M",
  },
  {
    value: "Zayne",
    gender: "M",
  },
  {
    value: "Zigfrid",
    gender: "M",
  },
  {
    value: "Zinédine",
    gender: "M",
  },
  {
    value: "Zlatan",
    gender: "M",
  },
  {
    value: "Zoltan",
    gender: "M",
  },
  {
    value: "Zoé",
    gender: "F",
  },
  {
    value: "Ève",
    gender: "F",
  },
  {
    value: "Élise",
    gender: "F",
  },
  {
    value: "Éléa",
    gender: "F",
  },
  {
    value: "Émile",
    gender: "M",
  },
  {
    value: "Émilie",
    gender: "F",
  },
  {
    value: "Émilien",
    gender: "M",
  },
  {
    value: "Éric",
    gender: "M",
  },
  {
    value: "Étienne",
    gender: "M",
  },
];

var lastNames = [
  "4G",
  "8.6",
  "360 NoScope",
  "1664",
  "2000",
  "Acide",
  "Action",
  "Ado",
  "AK-47",
  "Allopass",
  "Ambiance",
  "Android",
  "Anonyme",
  "Antifa",
  "Anus",
  "Arobase",
  "Attack",
  "Autogrill",
  "Azerty",
  "Babouche",
  "Backend",
  "Backup",
  "Bad",
  "Bagarre",
  "Baleine",
  "Ballon",
  "Bambou",
  "Banane",
  "Bancal",
  "Bangkok",
  "Banjo",
  "Barbac",
  "Barbecue",
  "Baston",
  "Bastos",
  "Bazooka",
  "Beignet",
  "Belette",
  "Benchmark",
  "Best-of",
  "Betterave",
  "Biceps",
  "Bidoche",
  "Bidoune",
  "Binocle",
  "Binouze",
  "Biscuit",
  "Bison",
  "Bisous",
  "Bitcoin",
  "Bite",
  "Blaireau",
  "Blog",
  "Bluetooth",
  "Bobard",
  "Bombe",
  "Bonsoir",
  "Bootstrap",
  "Bouc",
  "Boudin",
  "Bouilli",
  "Bouillon",
  "Boule",
  "Boulette",
  "Boulgour",
  "Boum",
  "Bourrique",
  "Bouse",
  "Bousier",
  "Branlette",
  "Bretagne",
  "Bretzel",
  "Brioche",
  "Brochette",
  "Brushing",
  "Bulot",
  "Burger",
  "Business",
  "Buzz",
  "Bzez",
  "Bébé",
  "Bécane",
  "Cabillaud",
  "Cabriolet",
  "Caca",
  "Cafard",
  "Café",
  "Caillou",
  "Cameroun",
  "Canard",
  "Cancer",
  "Caniche",
  "Canon",
  "Canyon",
  "Carapuce",
  "Carcasse",
  "Carotte",
  "Cartoon",
  "Casquette",
  "Casse-croûte",
  "Castagne",
  "Castagnette",
  "Casting",
  "Castor",
  "CD-Rom",
  "Censure",
  "Centime",
  "Chacal",
  "Challenge",
  "Chaman",
  "Chameau",
  "Champi",
  "Chatbot",
  "Chaussette",
  "Cheddar",
  "Cheetos",
  "Chenille",
  "Cheval",
  "Chewbacca",
  "Chibre",
  "Chicha",
  "Chien",
  "Chinois",
  "Chipolata",
  "Chips",
  "Choco",
  "Chocogrenouille",
  "Chou-fleur",
  "Choucroute",
  "Chouquette",
  "Chrono",
  "Chèvrefeuille",
  "Chômage",
  "Ciboulette",
  "Cigogne",
  "Citron",
  "Citrouille",
  "Claquette",
  "Claqué",
  "Clébard",
  "Coaching",
  "Coccyx",
  "Cochon",
  "Cocktail",
  "Coco",
  "Cocooning",
  "Coding",
  "Coiffure",
  "Coin-coin",
  "Colosse",
  "Commodore",
  "Connect",
  "Cookie",
  "Cool",
  "Coquillette",
  "Coquin",
  "Corniche",
  "Cosplay",
  "Costume",
  "Couenne",
  "Couille",
  "Coulis",
  "Coulommiers",
  "Courgette",
  "Courriel",
  "Couscous",
  "Coussinet",
  "Cracotte",
  "Crafting",
  "Crapaud",
  "Crapule",
  "Cratère",
  "Crayon",
  "Crevette",
  "Crime",
  "Criquet",
  "CRM",
  "Croche-pattes",
  "CrocMcDo",
  "Croissant",
  "Croquette",
  "Crotte",
  "Crotte-de-nez",
  "Crottin",
  "Croupion",
  "Croustibat",
  "Croûton",
  "Crypto",
  "CSS",
  "Cuisine",
  "Cuistot",
  "Cul",
  "Cul-rouge",
  "Culotte",
  "Curry",
  "Cyborg",
  "Dancefloor",
  "Dancing",
  "Deluxe",
  "Dentifrice",
  "Dev",
  "Diabète",
  "Dialogue",
  "Dinde",
  "Dindon",
  "Dingo",
  "Disco",
  "Djembé",
  "Dodo",
  "Dofus",
  "Doggy",
  "Dollar",
  "Donut",
  "Dorade",
  "Doudoune",
  "Dracaufeu",
  "Drift",
  "Drogue",
  "Droïde",
  "Duchesse",
  "Dumbledore",
  "Débrouille",
  "Délice",
  "Délire",
  "Dépouille",
  "Déprime",
  "Détox",
  "Dézingue",
  "Ectasy",
  "Electronique",
  "Email",
  "Emoji",
  "Endive",
  "Ethernet",
  "Extra",
  "Facial",
  "Faisan",
  "Fakir",
  "Falafel",
  "Falzar",
  "Famas",
  "Fanta",
  "Fantasy",
  "FAQ",
  "Farci",
  "Farine",
  "Femelle",
  "Fennec",
  "Fessard",
  "Fesse",
  "Festin",
  "Filou",
  "Fion",
  "Flacon",
  "Flingue",
  "Flouz",
  "Fléchette",
  "Foot",
  "Forever",
  "Foudre",
  "Fouetté",
  "Fouine",
  "Foune",
  "Fourmi",
  "Foutre",
  "Fracas",
  "Frag",
  "Fragmovie",
  "Framework",
  "Frigide",
  "Frigo",
  "Frimousse",
  "Fripouille",
  "Frisson",
  "Frite",
  "Friture",
  "Frometon",
  "Frontend",
  "Frotti",
  "Furet",
  "Fusion",
  "Futur",
  "Gag",
  "Gamelle",
  "Gamer",
  "Gametag",
  "Gaming",
  "Gang",
  "Ganja",
  "Garage",
  "Gaufrette",
  "Gazelle",
  "Gazoil",
  "Gazon",
  "Geek",
  "Gerbe",
  "Germignon",
  "Ghetto",
  "Gigabyte",
  "Gitan",
  "Givre",
  "Glouglou",
  "Gluten",
  "Gobelin",
  "Gode",
  "Godzilla",
  "Goret",
  "Gorille",
  "Gospel",
  "Gouda",
  "Gourdasse",
  "Grenadine",
  "Grenouille",
  "Gros",
  "Gruyère",
  "Gucci",
  "Guenon",
  "Gun",
  "Guépard",
  "Gâteau",
  "Hack",
  "Hacking",
  "Hamster",
  "Harissa",
  "HDMI",
  "Houmous",
  "HTML",
  "Iench",
  "Iguane",
  "Inox",
  "iOS",
  "Jaguar",
  "Jambon",
  "Javascript",
  "Jazz",
  "Jedi",
  "Joystick",
  "Judo",
  "Juif",
  "Kalash",
  "Karaoké",
  "Kardashian",
  "Karting",
  "Kawaï",
  "Kebab",
  "Ketchup",
  "Keyboard",
  "Killstreak",
  "King",
  "Kiwi",
  "Knacky",
  "Kékette",
  "L'Éponge",
  "Labrador",
  "Landing-Page",
  "Langouste",
  "Lapinou",
  "Lardon",
  "Lasagne",
  "Laser",
  "Levrette",
  "Lidl",
  "Limousine",
  "Lingette",
  "Linux",
  "Lipdub",
  "Live",
  "LOL",
  "Loukoum",
  "Loustic",
  "Lube",
  "Lumière",
  "Lunchbox",
  "Luxure",
  "Lévrier",
  "Lézard",
  "M-16",
  "Macaque",
  "Magicobus",
  "Magie",
  "Magnoc",
  "Magnum",
  "Malaise",
  "Malware",
  "Mamelle",
  "Mamie",
  "Manga",
  "Manif",
  "Marketing",
  "Marmotte",
  "Maroc",
  "Maroilles",
  "Massacre",
  "Matos",
  "Matraque",
  "Maubeuge",
  "Mayo",
  "Mazout",
  "MDR",
  "Meme",
  "Mensonge",
  "Merguez",
  "Meringue",
  "Mewtwo",
  "Miam",
  "Miaou",
  "Micro-onde",
  "Microbe",
  "Minecraft",
  "Mix",
  "MMA",
  "MMORPG",
  "Moche",
  "Mojito",
  "Morue",
  "Morve",
  "Mouche",
  "Moula",
  "Mousse",
  "Moustique",
  "Moutarde",
  "Muscade",
  "Muscle",
  "Méduse",
  "Nachos",
  "Narine",
  "Nazi",
  "Nekfeu",
  "Network",
  "Newsletter",
  "Nibard",
  "Nichon",
  "Nightclub",
  "Niglo",
  "Nitro",
  "Nocturne",
  "Nombril",
  "Noobie",
  "Nouille",
  "Nounours",
  "Nucléaire",
  "Nuggets",
  "Nuisible",
  "Nécro",
  "Orteil",
  "OS",
  "Ouistiti",
  "Padawan",
  "Panard",
  "Paquerette",
  "Parapluie",
  "Passif",
  "Password",
  "Pastis",
  "Patate",
  "PDF",
  "Peste",
  "Pesticide",
  "PHP",
  "Pigeon",
  "Pinard",
  "Pincette",
  "Ping-Pong",
  "Pipi",
  "Pisse",
  "Pistachos",
  "Pistou",
  "Pizza",
  "PizzaPlanet",
  "Placenta",
  "Planète",
  "Plastique",
  "Platane",
  "PNG",
  "Podcast",
  "Poil",
  "Poireau",
  "Poiscaille",
  "Pois-chiche",
  "Poisson",
  "Poivron",
  "Poker",
  "Pokémon",
  "Pop",
  "Porn",
  "Porno",
  "Porte",
  "Portos",
  "Post-it",
  "Poster",
  "Postiche",
  "Potache",
  "Poubelle",
  "Poulet",
  "Poulpe",
  "Pourri",
  "Poutine",
  "PQ",
  "Pratique",
  "Predator",
  "Pro",
  "Prod",
  "Production",
  "Promo",
  "Prostate",
  "Prout",
  "Préfixe",
  "Prépuce",
  "PSN",
  "Putaclic",
  "Putois",
  "Pyrex",
  "Python",
  "Pâté",
  "Péché",
  "Pépin",
  "Périph'",
  "Pétard",
  "Pétasse",
  "Pétoche",
  "Pétou",
  "Queer",
  "Quiche",
  "Quickscope",
  "Racing",
  "Raciste",
  "Raclette",
  "Raclée",
  "Rage",
  "Ragnagna",
  "Ramadan",
  "Raquette",
  "Rasoir",
  "Ratal",
  "Raton",
  "Ravioli",
  "Reblochon",
  "Rectal",
  "Reptile",
  "Retard",
  "Ricochet",
  "Rigolo",
  "Rillette",
  "Risotto",
  "Rock",
  "Rognon",
  "Rongeur",
  "Roquefort",
  "Rosbif",
  "Roubignol",
  "Roulette",
  "Roupette",
  "RPG",
  "Réac'",
  "République",
  "Réseau",
  "Saindoux",
  "Samuraï",
  "Sandwich",
  "Sardine",
  "Saubriquet",
  "Saucisse",
  "Saucisson",
  "Saumon",
  "Saxo",
  "Scooter",
  "Scotch",
  "Screenshot",
  "Sebum",
  "Selfie",
  "Semoule",
  "Senpaï",
  "SEO",
  "Sex",
  "Sexy",
  "Shoah",
  "Shop",
  "Shopping",
  "Shot",
  "Shotgun",
  "Shrek",
  "Skywalker",
  "Slibard",
  "Slibouze",
  "Slip",
  "Smegma",
  "Smiley",
  "SMS",
  "Snicker",
  "Social",
  "Soda",
  "Souffrance",
  "Souillon",
  "Soupçon",
  "Sourcil",
  "Soutif'",
  "Spaghetti",
  "SPAS-12",
  "Spatial",
  "Sphincter",
  "Sport",
  "Steak",
  "Stratégie",
  "Streaming",
  "Striptease",
  "Studio",
  "Stupide",
  "Stupéfiant",
  "Style",
  "Suicide",
  "Summer",
  "Suppo",
  "Surf",
  "Surimi",
  "Survivor",
  "Swag",
  "Système",
  "T-rex",
  "Taboulé",
  "Tajine",
  "Tam-tam",
  "Tambouille",
  "Tambour",
  "Tank",
  "Tapenade",
  "Tapir",
  "Tarin",
  "Tartare",
  "Tatami",
  "Tatooïne",
  "Taupe",
  "Team",
  "Teckel",
  "Tempo",
  "Terreur",
  "Terrine",
  "Testiboule",
  "Testicule",
  "Teub",
  "Texas",
  "Tigrou",
  "Toast",
  "Toilette",
  "Tolérance",
  "Torpille",
  "Totoro",
  "Touareg",
  "Toucan",
  "Touchdown",
  "Toupie",
  "Tourisme",
  "Traffic",
  "Transpi",
  "Tricard",
  "Triceps",
  "Trickshot",
  "Trique",
  "Triton",
  "Trolling",
  "Tropique",
  "Trou-de-balle",
  "Truie",
  "Tuning",
  "Turbo",
  "Twitter",
  "Twix",
  "Téléthon",
  "Tétine",
  "Tété",
  "Update",
  "USP-45",
  "Vador",
  "Varan",
  "Varech",
  "Vasectomie",
  "Venin",
  "Verge",
  "Verrue",
  "Viandox",
  "Victime",
  "Vignette",
  "Viking",
  "Vintage",
  "Violence",
  "Virus",
  "Viscère",
  "Vlog",
  "Vodka",
  "Vomi",
  "VPN",
  "Vulve",
  "Wapiti",
  "WC",
  "Web",
  "Webinar",
  "Webmastering",
  "Weed",
  "Whisky",
  "Widget",
  "Wifi",
  "Wiki",
  "Woof",
  "Wordpress",
  "Xanax",
  "Xbox",
  "Yaourt",
  "Youtube",
  "Yoyo",
  "Zanzibar",
  "Zgueg",
  "Zigzag",
  "Zinzin",
  "Zizi",
  "Zob",
  "Zombie",
  "Zoom",
  "Zouk",
  "Zoulette",
  "Zoulou",
  "Zézette",
];

var titles = [
  {
    value: "Agent",
    gender: "F",
  },
  {
    value: "Agent",
    gender: "M",
  },
  {
    value: "Amiral",
    gender: "M",
  },
  {
    value: "Baron",
    gender: "M",
  },
  {
    value: "Baronne",
    gender: "F",
  },
  {
    value: "Capitaine",
    gender: "M",
  },
  {
    value: "Captain",
    gender: "M",
  },
  {
    value: "Chef",
    gender: "M",
  },
  {
    value: "Cheffe",
    gender: "F",
  },
  {
    value: "Commandant",
    gender: "M",
  },
  {
    value: "Comte",
    gender: "M",
  },
  {
    value: "Comtesse",
    gender: "F",
  },
  {
    value: "Dame",
    gender: "F",
  },
  {
    value: "DJ",
    gender: "F",
  },
  {
    value: "DJ",
    gender: "M",
  },
  {
    value: "Docteur",
    gender: "F",
  },
  {
    value: "Docteur",
    gender: "M",
  },
  {
    value: "Don",
    gender: "M",
  },
  {
    value: "Duc",
    gender: "M",
  },
  {
    value: "Duchesse",
    gender: "F",
  },
  {
    value: "Empereur",
    gender: "M",
  },
  {
    value: "Frère",
    gender: "M",
  },
  {
    value: "Général",
    gender: "M",
  },
  {
    value: "Impératrice",
    gender: "F",
  },
  {
    value: "Inspecteur",
    gender: "M",
  },
  {
    value: "Madame",
    gender: "F",
  },
  {
    value: "Mademoiselle",
    gender: "F",
  },
  {
    value: "Mamie",
    gender: "F",
  },
  {
    value: "Marquis",
    gender: "M",
  },
  {
    value: "Marquise",
    gender: "F",
  },
  {
    value: "Messire",
    gender: "M",
  },
  {
    value: "Miss",
    gender: "F",
  },
  {
    value: "Mister",
    gender: "M",
  },
  {
    value: "Monseigneur",
    gender: "M",
  },
  {
    value: "Monsieur",
    gender: "M",
  },
  {
    value: "Mémé",
    gender: "M",
  },
  {
    value: "Lord",
    gender: "M",
  },
  {
    value: "Maréchal",
    gender: "M",
  },
  {
    value: "Maître",
    gender: "M",
  },
  {
    value: "Pape",
    gender: "M",
  },
  {
    value: "Papi",
    gender: "M",
  },
  {
    value: "Princesse",
    gender: "F",
  },
  {
    value: "Professeur",
    gender: "F",
  },
  {
    value: "Professeur",
    gender: "M",
  },
  {
    value: "Président",
    gender: "M",
  },
  {
    value: "Présidente",
    gender: "F",
  },
  {
    value: "Pépé",
    gender: "M",
  },
  {
    value: "Père",
    gender: "M",
  },
  {
    value: "Reine",
    gender: "F",
  },
  {
    value: "Roi",
    gender: "M",
  },
  {
    value: "Révérend",
    gender: "M",
  },
  {
    value: "Sa Majesté",
    gender: "F",
  },
  {
    value: "Sa Majesté",
    gender: "M",
  },
  {
    value: "Sa Sainteté",
    gender: "M",
  },
  {
    value: "Saint",
    gender: "M",
  },
  {
    value: "Sainte",
    gender: "F",
  },
  {
    value: "Seigneur",
    gender: "M",
  },
  {
    value: "Ser",
    gender: "M",
  },
  {
    value: "Sergent",
    gender: "M",
  },
  {
    value: "Soeur",
    gender: "F",
  },
  {
    value: "Soldat",
    gender: "F",
  },
  {
    value: "Soldat",
    gender: "M",
  },
  {
    value: "Son Altesse",
    gender: "F",
  },
  {
    value: "Son Altesse",
    gender: "M",
  },
  {
    value: "Son Excellence",
    gender: "F",
  },
  {
    value: "Son Excellence",
    gender: "M",
  },
  {
    value: "Sultan",
    gender: "M",
  },
  {
    value: "Tata",
    gender: "F",
  },
  {
    value: "Tatie",
    gender: "F",
  },
  {
    value: "Tonton",
    gender: "M",
  },
  {
    value: "Vizir",
    gender: "M",
  },
  {
    value: "Émir",
    gender: "M",
  },
];

var firstNamePrefixes = [
  {
    value: "Abdel",
    gender: "M",
  },
  {
    value: "Anne",
    gender: "F",
  },
  {
    value: "François",
    gender: "M",
  },
  {
    value: "Jean",
    gender: "M",
  },
  {
    value: "Juan",
    gender: "M",
  },
  {
    value: "Louis",
    gender: "M",
  },
  {
    value: "Marc",
    gender: "M",
  },
  {
    value: "Marie",
    gender: "F",
  },
  {
    value: "Pierre",
    gender: "M",
  },
];

var lastNamePrefixes = [
  "Al ",
  "ben ",
  "Black ",
  "Cyber-",
  "Dark ",
  "de ",
  "del ",
  "Di ",
  "e",
  "Hyper ",
  "Master ",
  "Maxi ",
  "Mc",
  "Mini ",
  "Méga ",
  "O'",
  "Space ",
  "Super-",
  "van ",
  "van der ",
  "von ",
];

var lastNameSuffixes = [
  "-chan",
  " Jr.",
  "ovitch",
  "poulos",
  "-sama",
  "-sensei",
  "son",
  " Sr.",
];

/*__________________________________ PHILIPPE MARMOTTE FUNCTIONS ____________________________________*/

function getRandomFirstName(gender = "all") {
  // Var(s)
  var prefix = "";
  // Process - First Name
  var selectedFirstNames = firstNames.filter((name) => name.gender === gender); // Select the names matching the gender
  selectedFirstNames.length < 1 &&
    (selectedFirstNames = Object.values(firstNames)); // If empty or nothing is matching, select them all
  var firstName = getRandomValueFromArray(selectedFirstNames);
  // Process - Prefix
  if (probability(10)) {
    var selectedPrefixes = firstNamePrefixes.filter(
      (name) => name.gender === firstName.gender
    ); // Select the prefixes matching the selected name gender
    var prefix = getRandomValueFromArray(selectedPrefixes).value + "-";
  }
  // Output
  return `${prefix}${firstName.value}`;
}

function getRandomLastName() {
  // Var(s)
  var prefix = "";
  var lastName = "";
  var secondName = "";
  var suffix = "";
  // Process
  probability(10) && (prefix = getRandomValueFromArray(lastNamePrefixes));
  probability(0)
    ? (lastName = getRandomFirstName("male"))
    : (lastName = getRandomValueFromArray(lastNames));
  probability(10) && (secondName = "-" + getRandomValueFromArray(lastNames));
  probability(7) && (suffix = getRandomValueFromArray(lastNameSuffixes));
  // Output
  return `${prefix}${lastName}${secondName}${suffix}`;
}

function getRandomTitle(gender = "all") {
  // Process
  var selectedTitles = titles.filter((name) => name.gender === gender); // Select the titles matching the gender
  selectedTitles.length < 1 && (selectedTitles = Object.values(titles)); // If empty or nothing is matching, select them all
  var title = getRandomValueFromArray(selectedTitles);
  // Output
  return `${title.value}`;
}

function getRandomIdentity(gender = "all", title = false) {
  // Process
  gender === "F" ||
    gender === "M" ||
    (probability(50) ? (gender = "M") : (gender = "F")); // If no valid gender is asked, go for or male or female
  // Output
  return `${
    title ? getRandomTitle(gender) : getRandomFirstName(gender)
  } ${getRandomLastName()}`;
}

function getNamesPossibilities() {
  var possibilities = 0;
  // Process
  possibilities =
    firstNames.length *
    lastNames.length ** 2 *
    titles.length *
    firstNamePrefixes.length *
    lastNamePrefixes.length *
    lastNameSuffixes.length;
  // Output
  return possibilities;
}
