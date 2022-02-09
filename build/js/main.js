/*____________________________________ USEFOOL FUNCTIONS (really light) ____________________________________*/

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
    name: "einstein",
    art: String.raw` 
      -''--.
      _'>   '\.-'/
  _.'     _     '._
.'   _.='   '=._   '.
>_   / /_\ /_\ \   _<
  / (  \o/\\o/  ) \
  >._\ .-,_)-. /_.<
      /__/ \__\ 
        '---'
    `,
    color: "Silver",
    height: 9,
    author: "jgs",
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
  {
    type: "logo",
    name: "apple",
    art: String.raw` 
        .:'
    __ :'__
 .' __'-'__ '.
:__________.-'
:_________:
 :_________'-;
  '.__.-.__.'
    `,
    color: "Silver",
    height: 7,
    author: "jgs",
  },
  {
    type: "item",
    name: "floppyDisk",
    art: String.raw` 
 _________________
| | ___________ |o|
| | ___________ | |
| | ___________ | |
| | ___________ | |
| |_____________| |
|     _______     |
|    |       |   ||
|    |       |   V|
|____|_______|____|
    `,
    color: "DarkSlateGrey",
    height: 10,
    author: "Robert Craggs",
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
  if (!isMobile()) {
    changeTitleOnBlur("On peut plus rien dire...");
  }
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
  console.log(
    '%c"' + value + '" successfully copied to clipboard!',
    "color: green"
  );
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

/* Functions about page title */

function changeTitleOnBlur(string) {
  var originalTitle = document.title;

  window.onfocus = function () {
    document.title = originalTitle;
  };

  window.onblur = function () {
    document.title = string;
  };
}

/* Functions about responsive */

function isMobile() {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
/*____________________________________ PHILIPPE MARMOTTE LIBRARY ____________________________________*/

var firstNames = [
  {
    value: "Aaron",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Abdel",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Abderrahmane",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Abdoul",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Abdoulaye",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Abdoulaziz",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Abel",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Abigail",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Abraham",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Achille",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Adam",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Adil",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Adolf",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Adrian",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Adriana",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Adrien",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Adrienne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Adèle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Adélaïde",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Agniès",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Aiden",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Aimé",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Akim",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Akira",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Aladdin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Alain",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Alan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Alban",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Albane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Albert",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Alberto",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Albus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Alejandro",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Alex",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Alexa",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Alexandra",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Alexandre",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Alf",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Alfie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Alfonzo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Alfred",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Alfredo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ali",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Aliaune",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Alice",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Alicia",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Alix",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Alix",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Allison",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Alonzo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Alou",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Alpha",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Alphonse",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Altaïr",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Alvin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Amadeus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Amadou",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Amanda",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Amandine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Amandio",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Amaury",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Amber",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ambre",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ambroise",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Amerigo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Amina",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Amine",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Amy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Anakin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Anastasia",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Anatole",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Andrew",
    gender: "M",
    rarity: "C",
  },
  {
    value: "André",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Andrée",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Andrzej",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Andy",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Ange",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Angela",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Angelina",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Angelo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Angus",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Angèle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Anil",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Anna",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Annabeth",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Anne",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Annie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Anthonin",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Anthony",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Antoine",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Antoinette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Anton",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Antonio",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Anubis",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Apollinaire",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Apolline",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Apollo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Apollon",
    gender: "M",
    rarity: "L",
  },
  {
    value: "April",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Apu",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Aragorn",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Aramis",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Archibald",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Archimède",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ariane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ariel",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Aristote",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Armand",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Arno",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Arnold",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Arthur",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Arturo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Artus",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Artémis",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Ashitaka",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Assan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Astérix",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Attila",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Audrey",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Auguste",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Augustine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Augustus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Aurélie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Aurélien",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Avril",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Axel",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Axelle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Aymeric",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Azrael",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Babar",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Baby",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Bachir",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bakary",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Balthasar",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Baptiste",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Barbie",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Barbora",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Barnabas",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Barnabé",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Barney",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Barry",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bart",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Barty",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Basil",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Batista",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Bayek",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Baxter",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Baz",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Beau",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Becca",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Beck",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bella",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Bellatrix",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Belle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Belzébuth",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Ben",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Benjamin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Benny",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Benoît",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Bernadette",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Bernard",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Bernardo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bernie",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bertha",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Berthe",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Bertille",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Bertrade",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Bertrand",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Beth",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Bethy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Bianca",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Bilal",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bilbon",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Biljana",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Bill",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Billie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Billy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Björn",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Blair",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Blaise",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Blanche",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Blanka",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Bob",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Bobby",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Boris",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Boromir",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Boubacar",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Bouddha",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Brad",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bradley",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Brahim",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Bran",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Brenda",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Brendan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Brandon",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Bridget",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Brigitte",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Bruce",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Brunehilde",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Bruno",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Brutus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Bubba",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Bulma",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Buzz",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Béatrice",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Bécassine",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Bénédicte",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Bénédictin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Caleb",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Calvin",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Cameron",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Camille",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Camille",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Candyce",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Capucine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Cara",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Carl",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Carla",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Carlos",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Carole",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Caroline",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Carrie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Casper",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Cassandra",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Cassius",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Catelyn",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Catherine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Cathy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Caïn",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Cendrillon",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Cerseï",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Cerys",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Cesare",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Chadwick",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Chandler",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Charles",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Charlie",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Charline",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Charlize",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Charlotte",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Chewbacca",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Cheyenne",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Chihiro",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Chimène",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Chloé",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Chris",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Christian",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Christiane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Christie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Christina",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Christine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Christophe",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Christopher",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Chrystelle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Chuck",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Chucky",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ciel",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Cindy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ciri",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Claire",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Clara",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Clarence",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Clarisse",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Clark",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Claude",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Claude",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Claudia",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Claudie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Cleon",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Cletus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Cliff",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Clifford",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Clint",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Clotaire",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Clothilde",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Clovis",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Clémence",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Clément",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Clémentine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Cléopâtre",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Coco",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Cody",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Colin",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Coline",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Colorado",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Commode",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Conan",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Confucius",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Connor",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Conrad",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Constance",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Constantin",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Constantine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Corail",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Coralie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Corentin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Cornélius",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Cosette",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Costin",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Courtney",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Crash",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Cristóbal",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Curtis",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Cynthia",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Cyprien",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Cyrielle",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Cyril",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Cyrus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Cécile",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Cécilia",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Cédric",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Céleste",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Célestin",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Célestine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "César",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Côme",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Dado",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Daenerys",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Daisy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Dakota",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Dan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Danièle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Danny",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Daphnée",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Darren",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Daryl",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Dash",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Dave",
    gender: "M",
    rarity: "U",
  },
  {
    value: "David",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Davy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Deborah",
    gender: "F",

  },
  {
    value: "Delilah",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Delphine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Denis",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Denver",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Denzel",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Derek",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Derrick",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Desmond",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Dhalsim",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Diana",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Diane",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Dick",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Dickie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Didier",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Diego",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Dimitri",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Dino",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Django",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Djibril",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Dobby",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Dolly",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Dominique",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Dominique",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Donata",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Donato",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Donna",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Donnie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Dora",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Doug",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Douglas",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Dove",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Dove",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Drago",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Drake",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ducobu",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Dudley",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Désiré",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Désirée",
    gender: "F",
    rarity: "R",
  },
  {
    value: "D'Artagnan",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ed",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Eddy",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Eden",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Edgar",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Edmond",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Edna",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Edouard",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Edouardo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Eli",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Elias",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Elie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Elisa",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Elizabeth",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ellena",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Elliott",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Elmo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Elon",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Elrond",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Elsa",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Emilia",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Emilio",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Emma",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Emmanuel",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Emmanuelle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Ennio",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Enola",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Enora",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Enzo",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Eredin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Erica",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Erkan",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ernest",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ernesto",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Erwan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Esteban",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Estelle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Ethan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Eude",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Eugène",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Eustache",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Eva",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Ezio",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ève",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Ézéchiel",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Fabien",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Fabienne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Fabio",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Fabrice",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Fadela",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Fanny",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Farid",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Fatima",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Fatoumata",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Faustine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Felicity",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Ferdinand",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Fernand",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Fernande",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Fernando",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Figaro",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Filipa",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Fiona",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Flavie",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Flavien",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Fleur",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Florence",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Florent",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Floria",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Florian",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Florianne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Florida",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Florine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Flynn",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Fouad",
    gender: "M",
    rarity: "R",
  },
  {
    value: "France",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Francesco",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Francis",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Franco",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Frank",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Franklin",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Franky",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Franz",
    gender: "M",
    rarity: "U",
  },
  {
    value: "François",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Françoise",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Fred",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Freddy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Friederich",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Frodon",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Frédéric",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Frédérique",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Félix",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gabe",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gabin",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Gabriel",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Gabriella",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Gabrielle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Gaby",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Galadriel",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Gandalf",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ganesh",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Gaspard",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gaston",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gauthier",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gauvain",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Gavroche",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Gaëlle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Gemini",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Genghis",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Genki",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Geoffroy",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Georges",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Georgie",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Georgie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Gerald",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Geralt",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Germain",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Germaine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ghandi",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Gilbert",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gilles",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gimli",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Gina",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Ginette",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Gino",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Giorgio",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Giovanni",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Giuseppe",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Glenn",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gloria",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Godefroy",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Goku",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Goliath",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Gollum",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Gontran",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Gonzague",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gordon",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Grace",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Graham",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Greg",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Gregory",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Greta",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Grima",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Grishka",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Grover",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Grégoire",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Guenièvre",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Guile",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Guillaume",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Guillaumette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Guillermo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Günther",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Gustave",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Guy",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Gwen",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Gwenaël",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Gwenaëlle",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Gwendolyne",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Gwyneth",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Géraldine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Géronte",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Habib",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hadès",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Hagen",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hagrid",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Hakan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Hakim",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Haku",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Haley",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Hannibal",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Han",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hans",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Hanzo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Harley",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Harold",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Harry",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Harvey",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Hayao",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Haïssam",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Heath",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hector",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Henri",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Henriette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Henrik",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Herb",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Herbert",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hercules",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hershell",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hermione",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Hervé",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Hideo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hilda",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Hippolyte",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Hjalmar",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Homer",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Honda",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Honoré",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Horace",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Horacio",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Hosea",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Hugo",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Hugues",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Huguette",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Hunter",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Huxley",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ian",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Ibrahim",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Icare",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ichabod",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ichigo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ignace",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ignazio",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ilona",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Imogène",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Ingrid",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Irma",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Isaac",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Isabeau",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Isabelle",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Isham",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Isildur",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ismaël",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Israël",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ivan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ivar",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Jack",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jackson",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Jacky",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jacob",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jacqueline",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Jacques",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jacquie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jacquouille",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Jade",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jaffar",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Jaina",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Jake",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jamel",
    gender: "M",
    rarity: "U",
  },
  {
    value: "James",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jamy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Janet",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Janice",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Jar Jar",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Jasmine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jaskier",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Javier",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jaya",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Jean",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jeanne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jeannette",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jeannot",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Jeff",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jennifer",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jerry",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jessica",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Jessie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jessie",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jim",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jimmy",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Joe",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Johanne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "John",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Johnny",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jonas",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jonathan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Jordan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Jordi",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Joseph",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Joshua",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Josiane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Josie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "José",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Joséphine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Joël",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Joëlle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Juan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Judas",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Jude",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Judith",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Jules",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Julia",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Julian",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Julie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Julien",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Juliette",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Julio",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Julius",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Juno",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Juste",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Justin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Justine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Justinien",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Jérôme",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Kad",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kader",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kaori",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Karen",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Karim",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Karl",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kate",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Katie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Keira",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ken",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Kendrick",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kent",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kevin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Khaled",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kid",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Kiki",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Killian",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kim",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Kirikou",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Kirk",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Kirsten",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Klaus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Kobe",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Kratos",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Kurt",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kyan",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Kyle",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Kylie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Lambert",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Lance",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Lancelot",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Lara",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Laura",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Laurence",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Laurent",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Lawrence",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Lazare",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Leah",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Legolas",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Lenny",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Leonardo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Leslie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Letho",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Lewis",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Li",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Lili-Rose",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Liliane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Lilly",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Lilo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Linus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Lionel",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Lisa",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Lisandra",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Lise",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Liselotte",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Liu",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Loki",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Lola",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Lorek",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Lothar",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Louis",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Louisa",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Louise",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Louisette",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Loïc",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Loïs",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Luc",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Lucas",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Lucenzo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Lucie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Lucifer",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Lucien",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Lucius",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ludovic",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Ludwig",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Luis",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Luna",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Lysandre",
    gender: "M",
    rarity: "R",
  },
  {
    value: "László",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Léa",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Léna",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Léo",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Léonard",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Léopold",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Lúcio",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Luke",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Madeleine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Madelon",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Madonna",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Maggie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Malik",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Manon",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Manu",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Manuel",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Mao",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Marc",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Marcel",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Marcelino",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Marco",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Marcus",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Margaret",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Marge",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Margot",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Marguerite",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Maria",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Marianne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Marie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Mariette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Marin",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Marine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Mario",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Marion",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Marjorie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Markos",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Marky",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Marlon",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Marnix",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Martha",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Martin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Martine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Marty",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Marwa",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Marwan",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Marylin",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Marzia",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Mathias",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Mathilda",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Mathilde",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Matt",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Mathéo",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Maurice",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Max",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Maxence",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Maxime",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Maximilien",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Maxine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Maya",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Maé",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Maël",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Maëlle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Maïté",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Meg",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Megan",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Mehdi",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Mei",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Melchior",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Melec",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Mercedes",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Mercutio",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Merle",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Meryl",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Michael",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Michel",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Michelangelo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Michelle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Mick",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Mickaël",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Mickey",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Milou",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Mimi",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Mimoune",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Minerva",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Miyamoto",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Mohammed",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Moira",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Mokhtar",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Mona",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Monica",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Monique",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Morris",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Morticia",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Morty",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Mouloud",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Moussa",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Mowgli",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Mufasa",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Mulan",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Murphy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Mushu",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Mustafa",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Myriam",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Médusa",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Mégane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Mélanie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Mélodie",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Mérovée",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Nabil",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Nadya",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Nancy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Naomi",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Narcisse",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Naruto",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Natalya",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Nathalie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Nathan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Nathanaël",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ned",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Nelson",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Neo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Nestor",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Nevill",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ngolo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Niccolò",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Nick",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Nico",
    gender: "M",
    rarity: "",
  },
  {
    value: "Nicolas",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Nicole",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Night",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Nikos",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Nina",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Noah",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Nora",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Norbert",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Norman",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Noémie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Noël",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Néron",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Obi-Wan",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Obélix",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Octave",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Octavius",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Océane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Odette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Odile",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Oggy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Olaf",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Oleg",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Olga",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Olive",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Olivia",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Olivier",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Omar",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Ondine",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Oprah",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Oriane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Orlando",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Orson",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Orville",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Oscar",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Oswald",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Otto",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Oussama",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Owen",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Pablo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Padmé",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Pam",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Pamela",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Panoramix",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Paolo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Paris",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Pascal",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Pascale",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Pashta",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Pat",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Patrice",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Patricia",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Patrick",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Patty",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Paul",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Paulina",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Pavel",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Peggy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Penny",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Pepito",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Perceval",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Perle",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Persée",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Pete",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Peter",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Petra",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Petri",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Phil",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Philibert",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Philippe",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Philémon",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Phineas",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Phoebe",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Phoenix",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Pim",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Pierce",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Pierre",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Pierrick",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Pierrot",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Piotr",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Pippin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Plume",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Pluto",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Po",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Podrick",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Pollux",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Pomme",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Ponce",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Pontius",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Proximo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Pugsley",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Pâris",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Pénéloppe",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Pépin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Quentin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Quincy",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Raagul",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Rachel",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Rachid",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Rachida",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Radagast",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Raffaello",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ragnar",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ralph",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ramon",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ramsès",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Rania",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Raoul",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Raphaël",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Raymond",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Raymonde",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Rebecca",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Reese",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Reggie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Regina",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Reginald",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Remus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Renand",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Renaud",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rhonda",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Richard",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Richie",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rick",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Ricky",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rico",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rigobert",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Riley",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ringo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Robert",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Roberta",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Roberto",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Robb",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Robbie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Robin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Robinson",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rocco",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rock",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rocky",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Rod",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rodrick",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rodrigo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rodrigue",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Roger",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Roland",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Romain",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Romane",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Romuald",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Romulus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Romy",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Roméo",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ron",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ronald",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ronny",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rookie",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Rory",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Rosa",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Rose",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Rosie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ross",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rox",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Roxanne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Roy",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ruben",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Rubeus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Rudolf",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rufus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Rupert",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Russell",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ryan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Ryu",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Régis",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Rémi",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Sabine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sabrina",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Salim",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Salomon",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Salomé",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Salvador",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Sally",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sam",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Samantha",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sandra",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Sandrine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Sandro",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Sansa",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Saphira",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Saruman",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Sarah",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Sasha",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Sasaki",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Sasuke",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Saul",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Sauron",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Savannah",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Scapin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Scarlett",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Scott",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Seamus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Sean",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Sebastian",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Sekiro",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Selma",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Septimus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Serge",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Sergio",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Seth",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Severus",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Seymour",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Shaggy",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Shane",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Shani",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Sharon",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Shaun",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Shauna",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Shelly",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Sherilyn",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Sherley",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Shlomo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Shrek",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Sibylle",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Siegfried",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Sienna",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sigismund",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Sigmund",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Sigourney",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Silvester",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Silvestre",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Simba",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Simon",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Simonne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sirius",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Sky",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Skyler",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Snake",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Sofia",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sofiane",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Solène",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sophie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Spike",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Spirou",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Stacy",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Stan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Stanislas",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Stanley",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Stephen",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Steve",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Steven",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Stevie",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Stuart",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Stéphanie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Suri",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Suzanne",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Suzette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Suzie",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Sven",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Sylvain",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Sylvia",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Sylviane",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Sylvie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Sylvio",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Sébastien",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Séléna",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Sévère",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tahiti",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Takeshi",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tamara",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Tancrède",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tanguy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Tanya",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Tarik",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Tarkan",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Tartuffe",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tarzan",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ted",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Teddy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Terence",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Terry",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Thalia",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Thanos",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Thaïs",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Theresa",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Thibault",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Thierry",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Thomas",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Thorgal",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Thuy",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Théo",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Théobald",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Théodore",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Théophile",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Thérèse",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Thésée",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tiger",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Tilda",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Tim",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Timothy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Timothé",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Tintin",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Titeuf",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Titus",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Tobby",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Todd",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Tom",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Tommen",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tommy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Tony",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Torbjörn",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Toulouse",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tracey",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Travis",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Trevor",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Triss",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Tristan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Troy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Tryphon",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Trésor",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tybalt",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Tyron",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ulfric",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Ulrich",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Ulysse",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Uma",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Urbain",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Ursula",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Ursule",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Usul",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Uther",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Valentin",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Valentina",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Valentine",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Valérie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Valérie",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Vasco",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Vega",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Vegeta",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Vera",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Vicky",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Victoire",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Victor",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Victoria",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Viggo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Vincent",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Vincenzo",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Vinicius",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Violaine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Violette",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Vivianne",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Vivien",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Vivienne",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Vlad",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Vladimir",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Voldemort",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Vésémir",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Wade",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Waldo",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Wallace",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Walt",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Walter",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Waluigi",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Wanda",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Wario",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Wayne",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Whitney",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Wilbur",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Will",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Willem",
    gender: "M",
    rarity: "R",
  },
  {
    value: "William",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Willis",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Willy",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Winnie",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Winnifred",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Winston",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Woody",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Xander",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Xaverine",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Xavier",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Xenia",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Yann",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Yannick",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Yarpen",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Yasmina",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Yasmine",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Yennefer",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Yoda",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Yohan",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Yoko",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Yolanda",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Yoshi",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Youri",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Yseult",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Ysée",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Yubaba",
    gender: "F",
    rarity: "L",
  },
  {
    value: "Yusuf",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Yvan",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Yves",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Yvette",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Yvick",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zacharie",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Zack",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Zangief",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zayne",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zigfrid",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zinédine",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zlatan",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zoltan",
    gender: "M",
    rarity: "L",
  },
  {
    value: "Zoé",
    gender: "F",
    rarity: "U",
  },
  {
    value: "Ève",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Élise",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Éléa",
    gender: "F",
    rarity: "R",
  },
  {
    value: "Émile",
    gender: "M",
    rarity: "U",
  },
  {
    value: "Émilie",
    gender: "F",
    rarity: "C",
  },
  {
    value: "Émilien",
    gender: "M",
    rarity: "R",
  },
  {
    value: "Éric",
    gender: "M",
    rarity: "C",
  },
  {
    value: "Étienne",
    gender: "M",
    rarity: "C",
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
  "Fenouil",
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
  "Lombric",
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
  "Pastille",
  "Pastis",
  "Patate",
  "PDF",
  "Peperoni",
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
  "Quadriceps",
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
    value: "Sénateur",
    gender: "M",
  },
  {
    value: "Sénatrice",
    gender: "F",
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
  "Crousti-",
  "Crypto-",
  "Cyber-",
  "Dark ",
  "de ",
  "del ",
  "Di ",
  "e",
  "Electro-",
  "Fitz",
  "Giga ",
  "i",
  "ibn ",
  "Hyper ",
  "Master ",
  "Mac ",
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
  var rarity = "";
  var prefix = "";
  // Process - Rarity
  if (probability(7)) {
    rarity = "L"
  }
  else if (probability(15)) {
    rarity = "R"
  }
  else if (probability(30)) {
    rarity = "U"
  }
  else {
    rarity = "C"
  }
  // Process - First Name
  var selectedFirstNames = firstNames.filter((name) => name.gender === gender && name.rarity === rarity); // Select the names matching the gender and rarity
  selectedFirstNames.length < 1 &&
    (selectedFirstNames = Object.values(firstNames)); // If empty or nothing is matching, select them all
  var firstName = getRandomValueFromArray(selectedFirstNames);
  // Process - Prefix
  if (probability(7)) {
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
  probability(7) && (secondName = "-" + getRandomValueFromArray(lastNames));
  probability(10) && (suffix = getRandomValueFromArray(lastNameSuffixes));
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
  return `${title ? getRandomTitle(gender) : getRandomFirstName(gender)
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
