![Logo de Philippe Marmotte](https://github.com/ThomasPericoi/PhilippeMarmotte/blob/master/philippemarmotte.svg?raw=true)

# Philippe Marmotte

Philippe Marmotte est un générateur d'identités loufoques.

Abdel Super Zinzin, Gandalf Laser, Didier Tam-Tam, Professeur Webinar: la machine assemble des prénoms, titres, préfixes, noms et suffixes pour produire des identités un peu absurdes, mais toujours très dignes.

## Site

Le site officiel est disponible ici:

https://philippemarmotte.fr/

### Fonctionnalités

- Générer une identité aléatoire.
- Choisir un genre: mixte, masculin ou féminin.
- Remplacer le prénom par un titre.
- Copier l'identité générée dans le presse-papiers.
- Basculer entre mode clair et mode sombre.

### Utilisation locale

Installe les dépendances:

```bash
npm install
```

Génère le site dans le dossier `build/`:

```bash
npx gulp build
```

Lance le mode développement avec génération puis surveillance des fichiers:

```bash
npx gulp
```

Le site est une page statique. Une fois le build terminé, les fichiers prêts à être servis se trouvent dans `build/`.

## API

L'API JavaScript de Philippe Marmotte est exposée sous forme de fonctions globales dans le navigateur.

Pour l'utiliser directement dans une page, charge les scripts nécessaires dans cet ordre:

```html
<script src="js/usefool.js"></script>
<script src="js/philippe-marmotte/philippe-marmotte-lib.js"></script>
<script src="js/philippe-marmotte/philippe-marmotte.js"></script>
```

Si tu utilises le build du projet, tout est déjà concaténé dans:

```html
<script src="js/main.js"></script>
```

### `getRandomIdentity(gender = "all", title = false)`

Génère une identité complète.

Paramètres:

- `gender`: `"all"`, `"M"` ou `"F"`.
- `title`: `false` pour utiliser un prénom, `true` pour utiliser un titre.

Exemples:

```js
getRandomIdentity();
// "Valentine Croquette"

getRandomIdentity("M");
// "Jonas Minecraft"

getRandomIdentity("F");
// "Camille Cyber-Brioche"

getRandomIdentity("all", true);
// "Professeur Webinar"
```

### `getRandomFirstName(gender = "all")`

Génère un prénom aléatoire.

Paramètres:

- `gender`: `"all"`, `"M"` ou `"F"`.

Exemples:

```js
getRandomFirstName();
// "Ross"

getRandomFirstName("F");
// "Marie-Anne"
```

### `getRandomLastName()`

Génère un nom aléatoire.

Exemple:

```js
getRandomLastName();
// "Super Zinzin"
```

### `getRandomTitle(gender = "all")`

Génère un titre aléatoire.

Paramètres:

- `gender`: `"all"`, `"M"` ou `"F"`.

Exemple:

```js
getRandomTitle("M");
// "Capitaine"
```

### `getNamesPossibilities()`

Retourne le nombre théorique de combinaisons possibles.

Exemple:

```js
getNamesPossibilities();
// 128842074132480
```

## Structure du projet

```text
source/
  index.html
  js/
    usefool.js
    frontend.js
    philippe-marmotte/
      philippe-marmotte-lib.js
      philippe-marmotte.js
  scss/
build/
  index.html
  js/main.js
  css/main.css
```

## Licence

Ce projet est distribué sous licence MIT. Voir le fichier `LICENSE`.
