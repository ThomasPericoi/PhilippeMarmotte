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
