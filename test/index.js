import assert from 'assert';
import {
  removeUnpopulatedReferences,
  deserializePath,
  deserializeReferences,
  deserialize,
  populateReference,
  populateSubcollection,
  populatePath,
  populate,
  serializeDocument,
  serializeSnapshot,
  getDocument,
  getCollection,
  getSubcollection,
  FirestoreCollection,
  FirestoreDocument,
} from '../src/index';

describe('Instant Utils', () => {
  it('function `removeUnpopulatedReferences` should exist', () => {
    assert.equal(typeof removeUnpopulatedReferences, 'function');
  });

  it('function `deserializePath` should exist', () => {
    assert.equal(typeof deserializePath, 'function');
  });

  it('function `deserializeReferences` should exist', () => {
    assert.equal(typeof deserializeReferences, 'function');
  });

  it('function `deserialize` should exist', () => {
    assert.equal(typeof deserialize, 'function');
  });

  it('function `populateReference` should exist', () => {
    assert.equal(typeof populateReference, 'function');
  });

  it('function `populateSubcollection` should exist', () => {
    assert.equal(typeof populateSubcollection, 'function');
  });

  it('function `populatePath` should exist', () => {
    assert.equal(typeof populatePath, 'function');
  });

  it('function `populate` should exist', () => {
    assert.equal(typeof populate, 'function');
  });

  it('function `serializeDocument` should exist', () => {
    assert.equal(typeof serializeDocument, 'function');
  });

  it('function `serializeSnapshot` should exist', () => {
    assert.equal(typeof serializeSnapshot, 'function');
  });

  it('function `getDocument` should exist', () => {
    assert.equal(typeof getDocument, 'function');
  });

  it('function `getCollection` should exist', () => {
    assert.equal(typeof getCollection, 'function');
  });

  it('function `getSubcollection` should exist', () => {
    assert.equal(typeof getSubcollection, 'function');
  });

  it('Class `FirestoreCollection` should exist', () => {
    assert.equal(typeof FirestoreCollection, 'function');
  });

  it('Class `FirestoreDocument` should exist', () => {
    assert.equal(typeof FirestoreDocument, 'function');
  });
});
