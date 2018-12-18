# Instant Firestore

Firebase Firestore ORM to ease common tasks, such as creating, finding, updating and deleting documents.

_**Please note:** This is an unofficial Firestore package, designed to assist with common Firestore tasks._

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [create](#create)
  - [createMany](#createMany)
  - [find](#find)
  - [findOne](#findOne)
  - [findById](#findById)
  - [createWithId](#createWithId)
  - [update](#update)
  - [delete](#delete)
  - [updateOrCreate](#updateOrCreate)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using npm:

```bash
$ npm install instant-firestore
```

## Usage

Here is a quick example to get you started:

**ES Modules**

```javascript
import { FirestoreRepository } from 'instant-firestore';

// Pass your firestore instance and a collection reference to the constructor
const fr = new FirestoreRepository(db, db.collection('your-collection-name'));

const data await = fr.findById('12345');
console.log(data);
```

**CommonJS Modules**

```javascript
var FirestoreRepository = require('instant-firestore').FirestoreRepository;

// Pass your firestore instance and a collection reference to the constructor
var fr = new FirestoreRepository(db, db.collection('your-collection-name'));

fr.findById('12345').then(function(data) {
  console.log(data);
});
```

## API

### create

Create a Firestore document.

#### Arguments

`attributes (Object)`: The document attributes.\
`options (Object):` Options.

### Returns

`(Object)`: The serialized document

### createMany

### find

### findOne

### findById

### createWithId

### update

### delete

### updateOrCreate

## Contributing

We'd greatly appreciate any [contribution](CONTRIBUTING.md) you make.

## License

[MIT](LICENSE)
