# Instant Firestore

Firestore wrapper to ease common tasks, including creating, finding, updating and deleting documents.

_**Please note:** This is an unofficial Firestore package, designed to assist with common Firestore tasks_

## Features

## Installation

You can install this wrapper by running the following in your project:

```bash
$ npm install instant-firestore
```

## Usage

**ES Modules**

```javascript
import { FirestoreRepository } from 'instant-firestore';

// Pass your firestore instance and a collection reference to the constructor
const fr = new FirestoreRepository(db, db.collection('your-collection-name'));

// Simple findById example
const findById = async id => {
  try {
    const data await = fr.findById(id);
    return data;
  } catch(error) {
    throw error;
  }
}

```

**CommonJS Modules**

```javascript
var FirestoreRepository = require('instant-firestore').FirestoreRepository;

// Pass your firestore instance and a collection reference to the constructor
var fr = new FirestoreRepository(db, db.collection('your-collection-name'));

// Simple findById example
async function findById(id) {
  try {
    var data await = fr.findById(id);
    return data;
  } catch(error) {
    throw error;
  }
}
```

## API

### create(attributes, options)

Create a Firestore document.

#### Arguments

attributes (object): The document attributes
options (object): Options

### Returns

id (string): The document id

**Note:** If `getDocument` is present in the options object and set to true, then the document data will be returned instead of the id

### createMany(array)

### find(query)

### findOne(query)

### findById(id)

### createWithId(id, attributes)

### update(id, attributes)

### delete(id)

### updateOrCreate(query, attributes)

## Running Tests

To run the tests, clone the repository and install the dependencies:

```bash
git clone https://github.com/JSJInvestments/instant-firestore.git
cd instant-firestore && npm i
npm run test
```

## License

[MIT](LICENSE)
