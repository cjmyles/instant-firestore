import assert from 'assert';
import {
  FirestoreCollection,
  FirestoreDocument,
  FirestoreRepository,
} from '../src/index';

describe('instant-firestore', () => {
  it('class `FirestoreCollection` should exist', () => {
    assert.equal(typeof FirestoreCollection, 'function');
  });

  it('class `FirestoreDocument` should exist', () => {
    assert.equal(typeof FirestoreDocument, 'function');
  });

  it('class `FirestoreRepository` should exist', () => {
    assert.equal(typeof FirestoreRepository, 'function');
  });
});
