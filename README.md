# Introduction

Librairie Javascript contenant des regex de plusieurs cas qu'on peut rencontrer (url,email,numéro telephone,...)

## Installation

`npm install --save mbregex`

Example d'utilisation

```js
var mbregex = require("mbregex");

```

### isUrlValid
Permet de vérifier si un url est valide partant d'une regex de vérification
```js
var url = "https://www.npm.com"
var url2 = "http://www.npm.com"

if (mbstring.isUrlValid(url)) {
    console.log("Adress is valid")
}else {
    console.log("Adress is invalid")
}

```