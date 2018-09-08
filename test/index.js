import assert from 'assert';
import {
  assignDocumentId,
  serializeDocumentReferences,
  serializeDocument,
} from '../src/index';

describe('Instant Utils', () => {
  it('assignDocumentId should exist', () => {
    assert.equal(typeof assignDocumentId, 'function');
  });

  it('serializeDocumentReferences should exist', () => {
    assert.equal(typeof serializeDocumentReferences, 'function');
  });

  it('serializeDocument should exist', () => {
    assert.equal(typeof serializeDocument, 'function');
  });
});
