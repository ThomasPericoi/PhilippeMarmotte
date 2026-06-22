(function (global) {
  var PHILIPPE_MARMOTTE_VERSION = "1.1.0";
  var GENDERS = ["all", "M", "F"];
  var RARITIES = [
    { value: "L", weight: 7 },
    { value: "R", weight: 15 },
    { value: "U", weight: 30 },
    { value: "C", weight: 48 },
  ];

  /*____________________________________ UTILITY FUNCTIONS ____________________________________*/

  function getRandomIntBetween(min, max) {
    min = Math.ceil(Number(min));
    max = Math.floor(Number(max));

    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      return NaN;
    }

    if (min > max) {
      var oldMin = min;
      min = max;
      max = oldMin;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomIdFromArray(array) {
    return Array.isArray(array) && array.length > 0
      ? Math.floor(Math.random() * array.length)
      : -1;
  }

  function getRandomValueFromArray(array) {
    var randomId = getRandomIdFromArray(array);

    return randomId === -1 ? null : array[randomId];
  }

  function normalizeGender(gender) {
    return gender === "F" || gender === "M" ? gender : "all";
  }

  function resolveGender(gender) {
    gender = normalizeGender(gender);

    return gender === "all" ? getRandomValueFromArray(["M", "F"]) : gender;
  }

  function getRandomRarity() {
    var roll = getRandomIntBetween(1, 100);
    var threshold = 0;

    for (var i = 0; i < RARITIES.length; i++) {
      threshold += RARITIES[i].weight;

      if (roll <= threshold) {
        return RARITIES[i].value;
      }
    }

    return "C";
  }

  function formatNumber(number) {
    return String(number).replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[character];
    });
  }

  function copyObjects(array) {
    return array.map(function (item) {
      return Object.assign({}, item);
    });
  }

  /*__________________________________ PHILIPPE MARMOTTE FUNCTIONS ____________________________________*/

  function listFirstNames(gender = "all") {
    gender = normalizeGender(gender);

    return copyObjects(
      firstNames.filter(function (name) {
        return gender === "all" || name.gender === gender;
      }),
    );
  }

  function listLastNames() {
    return lastNames.slice();
  }

  function listTitles(gender = "all") {
    gender = normalizeGender(gender);

    return copyObjects(
      titles.filter(function (title) {
        return gender === "all" || title.gender === gender;
      }),
    );
  }

  function getRandomFirstName(gender = "all") {
    var resolvedGender = normalizeGender(gender);
    var rarity = getRandomRarity();
    var selectedFirstNames = firstNames.filter(function (name) {
      return (
        (resolvedGender === "all" || name.gender === resolvedGender) &&
        name.rarity === rarity
      );
    });
    var firstName;
    var selectedPrefixes;
    var prefix = "";

    if (selectedFirstNames.length < 1) {
      selectedFirstNames = firstNames.filter(function (name) {
        return resolvedGender === "all" || name.gender === resolvedGender;
      });
    }

    firstName = getRandomValueFromArray(selectedFirstNames);

    if (!firstName) {
      return "";
    }

    if (getRandomIntBetween(1, 100) <= 10) {
      selectedPrefixes = firstNamePrefixes.filter(function (name) {
        return name.gender === firstName.gender;
      });
      prefix = getRandomValueFromArray(selectedPrefixes);
      prefix = prefix ? prefix.value + "-" : "";
    }

    return prefix + firstName.value;
  }

  function getRandomLastName() {
    var prefix =
      getRandomIntBetween(1, 100) <= 10
        ? getRandomValueFromArray(lastNamePrefixes) || ""
        : "";
    var lastName =
      getRandomIntBetween(1, 100) <= 1
        ? getRandomFirstName("M")
        : getRandomValueFromArray(lastNames) || "";
    var secondName =
      getRandomIntBetween(1, 100) <= 7
        ? "-" + (getRandomValueFromArray(lastNames) || "")
        : "";
    var suffix =
      getRandomIntBetween(1, 100) <= 10
        ? getRandomValueFromArray(lastNameSuffixes) || ""
        : "";

    return prefix + lastName + secondName + suffix;
  }

  function getRandomTitle(gender = "all") {
    var resolvedGender = normalizeGender(gender);
    var selectedTitles = titles.filter(function (title) {
      return resolvedGender === "all" || title.gender === resolvedGender;
    });
    var title = getRandomValueFromArray(selectedTitles);

    return title ? title.value : "";
  }

  function generateIdentity(gender = "all", title = false) {
    var resolvedGender = resolveGender(gender);
    var firstPart = title
      ? getRandomTitle(resolvedGender)
      : getRandomFirstName(resolvedGender);

    return (firstPart + " " + getRandomLastName()).trim();
  }

  function generateIdentityHtml(gender = "all", title = false) {
    return "<span>" + escapeHtml(generateIdentity(gender, title)) + "</span>";
  }

  function getNamesPossibilities() {
    return (
      firstNames.length *
      lastNames.length ** 2 *
      titles.length *
      firstNamePrefixes.length *
      lastNamePrefixes.length *
      lastNameSuffixes.length
    );
  }

  /*__________________________________ PHILIPPE MARMOTTE API ____________________________________*/

  global.PhilippeMarmotte = {
    version: PHILIPPE_MARMOTTE_VERSION,
    genders: GENDERS.slice(),
    get firstNames() {
      return listFirstNames();
    },
    get lastNames() {
      return listLastNames();
    },
    get titles() {
      return listTitles();
    },
    formatNumber: formatNumber,
    generateIdentity: generateIdentity,
    generateIdentityHtml: generateIdentityHtml,
    getNamesPossibilities: getNamesPossibilities,
    getRandomFirstName: getRandomFirstName,
    getRandomLastName: getRandomLastName,
    getRandomTitle: getRandomTitle,
    listFirstNames: listFirstNames,
    listLastNames: listLastNames,
    listTitles: listTitles,
  };
})(globalThis);
