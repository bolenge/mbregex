# mbregex

Librairie Javascript contenant des regex de plusieurs cas qu'on peut rencontrer (url,email,numéro telephone, et autres...)

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

```bash
$ npm install --save mbregex
```

## API

```js
var mbregex = require("mbregex");

```

### mbregex.isUrlValid(url, acceptProtocol = true)
Permet de vérifier si un url est valide

#### url
L'adresse url à vérifier

#### acceptProtocol = true
`true` par défaut s'il faut que l'url à vérifier doit contenir le protocol (http|https|ftp)
si c'est à `false` alors on peut vérifier des urls comme `api.monsite.com` | `m.monsite.com` | `www.monsite.com` sans préfixer le protocole

```js

console.log(mbregex.isUrlValid('https://monsite.com')) // True
console.log(mbregex.isUrlValid('https://www.monsite.com')) // True
console.log(mbregex.isUrlValid('http://www.mon site.com')) // False
console.log(mbregex.isUrlValid('http://mon-site.com')) // True

```

### mbregex.isEmail(adress)

Vérifie si l'adresse passé en paramètre est une adresse Email

#### adresse

L'adresse à vérifier

```js

console.log(mbregex.isEmail('monadresseemail@site.com')) // True
console.log(mbregex.isEmail('don028@yahoo.fr')) // True
console.log(mbregex.isEmail('don028yahoo.fr')) // False
```