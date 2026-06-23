# Philippe Marmotte

Philippe Marmotte est un générateur d'identités loufoques en JavaScript.

Le projet assemble des prénoms, titres, préfixes, noms et suffixes pour produire
des identités absurdes mais étonnamment présentables : Abdel Super Zinzin,
Gandalf Laser, Didier Tam-Tam ou Professeur Webinar ne sont jamais très loin.

Le projet tient volontairement dans un format compact : un site statique, une
petite API JavaScript documentée, un build Gulp moderne et peu de dépendances.

## Démo

<https://philippemarmotte.fr/>

## Fonctionnalités

- Génération d'une identité aléatoire.
- Choix du genre : mixte, masculin ou féminin.
- Option pour utiliser un titre à la place du prénom.
- Bouton de copie dans le presse-papiers.
- Mode clair / mode sombre.
- Interface statique légère, sans framework front-end.
- Bundle CSS et JavaScript généré dans `build/`.
- API all-in-one générée dans `dist/`.

## Site

Le site est une page statique située dans `source/index.html`. Le JavaScript de
l'interface consomme l'API publique `PhilippeMarmotte`, puis affiche le résultat
dans le DOM avec un retour accessible pour la copie.

Le build du site produit :

- `build/index.html`
- `build/css/main.css`
- `build/js/main.js`
- `build/img/`

## API JavaScript

Le générateur expose un objet global `PhilippeMarmotte` dans
`source/js/philippe-marmotte/philippe-marmotte-functions.js`.

L'API expose des méthodes texte, une méthode HTML et quelques helpers pour
accéder aux listes internes. Les listes retournées sont des copies afin d'éviter
de modifier les données du générateur depuis l'extérieur.

### Quelle fonction utiliser ?

| Besoin                              | Fonction                              |
| ----------------------------------- | ------------------------------------- |
| Générer une identité en texte brut  | `generateIdentity(gender, title)`     |
| Générer une identité HTML           | `generateIdentityHtml(gender, title)` |
| Générer un prénom                   | `getRandomFirstName(gender)`          |
| Générer un nom                      | `getRandomLastName()`                 |
| Générer un titre                    | `getRandomTitle(gender)`              |
| Récupérer tous les prénoms          | `listFirstNames(gender)`              |
| Récupérer tous les noms             | `listLastNames()`                     |
| Récupérer tous les titres           | `listTitles(gender)`                  |
| Compter les combinaisons théoriques | `getNamesPossibilities()`             |
| Lire la version de l'API            | `version`                             |

Les genres acceptés sont :

- `"all"` : mixte
- `"M"` : masculin
- `"F"` : féminin

### Identités

#### `PhilippeMarmotte.generateIdentity(gender = "all", title = false)`

Génère une identité complète en texte brut.

```js
PhilippeMarmotte.generateIdentity();
// "Valentine Croquette"

PhilippeMarmotte.generateIdentity("M");
// "Jonas Minecraft"

PhilippeMarmotte.generateIdentity("F");
// "Camille Cyber-Brioche"

PhilippeMarmotte.generateIdentity("all", true);
// "Professeur Webinar"
```

`gender` filtre le prénom ou le titre. Le nom final reste volontairement libre,
car c'est lui qui donne le côté zinzin du générateur.

`title` vaut `false` par défaut. S'il vaut `true`, l'identité commence par un
titre au lieu d'un prénom.

#### `PhilippeMarmotte.generateIdentityHtml(gender = "all", title = false)`

Génère une identité complète dans une chaîne HTML prête à intégrer.

```js
PhilippeMarmotte.generateIdentityHtml("M");
// "<span>Jonas Minecraft</span>"
```

Le contenu textuel est échappé avant d'être injecté dans la chaîne HTML.

### Éléments séparés

#### `PhilippeMarmotte.getRandomFirstName(gender = "all")`

Génère un prénom aléatoire.

```js
PhilippeMarmotte.getRandomFirstName();
// "Ross"

PhilippeMarmotte.getRandomFirstName("F");
// "Marie-Anne"
```

#### `PhilippeMarmotte.getRandomLastName()`

Génère un nom aléatoire.

```js
PhilippeMarmotte.getRandomLastName();
// "Super Zinzin"
```

#### `PhilippeMarmotte.getRandomTitle(gender = "all")`

Génère un titre aléatoire.

```js
PhilippeMarmotte.getRandomTitle("M");
// "Capitaine"
```

### Listes

Ces helpers permettent de construire une autre interface ou son propre format de
sortie à partir des données internes.

```js
PhilippeMarmotte.listFirstNames("F");
// Copie des prénoms féminins.

PhilippeMarmotte.listLastNames();
// Copie de tous les noms.

PhilippeMarmotte.listTitles();
// Copie de tous les titres.

PhilippeMarmotte.firstNames;
PhilippeMarmotte.lastNames;
PhilippeMarmotte.titles;
// Raccourcis équivalents aux listes complètes.
```

### Combinaisons et version

```js
PhilippeMarmotte.getNamesPossibilities();
// 128842074132480

PhilippeMarmotte.formatNumber(PhilippeMarmotte.getNamesPossibilities());
// "128 842 074 132 480"

PhilippeMarmotte.version;
// "1.0.0"
```

## Distribution

Le dossier `dist/` contient la version prête à réutiliser de l'API JavaScript.
Le fichier `dist/philippe-marmotte.js` est généré par Gulp à partir de :

- `source/js/philippe-marmotte/philippe-marmotte-lib.js`
- `source/js/philippe-marmotte/philippe-marmotte-functions.js`

Il embarque donc les listes de données et les fonctions de génération dans un
seul fichier autonome.

Exemple d'intégration :

```html
<script src="philippe-marmotte.js"></script>
<script>
  document.body.textContent = PhilippeMarmotte.generateIdentity("all", true);
</script>
```

Pour travailler depuis les sources séparées :

```html
<script src="philippe-marmotte-lib.js"></script>
<script src="philippe-marmotte-functions.js"></script>
```

## Utilisation

Installer les dépendances :

```bash
npm install
```

Le projet cible Node 20 ou plus récent. Avec `nvm`, la version recommandée peut
être activée avec :

```bash
nvm use
```

Lancer le mode développement :

```bash
npm run dev
```

Générer le site :

```bash
npm run build
```

Le build produit aussi `dist/philippe-marmotte.js`, une version autonome qui
concatène les données et les fonctions de génération. Cette commande garde les
fichiers lisibles pour le développement.

Générer une version minifiée :

```bash
npm run build:prod
```

Cette commande produit les fichiers optimisés pour publication.

Formater les fichiers maintenus :

```bash
npm run format
```

Vérifier le formatage :

```bash
npm run lint
```

Vérifier le build :

```bash
npm run check
```

## Stack

- HTML, SCSS et JavaScript vanilla.
- Gulp 5 pour copier, compiler et concaténer les sources.
- Dart Sass via `gulp-sass`.
- `gulp-clean-css` pour minifier le CSS.
- `gulp-terser` pour minifier le JavaScript.
- Prettier pour garder un style cohérent.

## Structure

```text
source/
  index.html
  img/
  js/
    ascii-printer.js
    frontend.js
    philippe-marmotte/
      philippe-marmotte-lib.js
      philippe-marmotte-functions.js
  scss/
    _settings.scss
    _reset.scss
    _animations.scss
    _ui.scss
    _layout.scss
    _generator.scss
    _footer.scss
    main.scss
build/
dist/
  philippe-marmotte.js
```

## Licence

Ce projet est distribué sous licence MIT. Voir le fichier `LICENSE`.
