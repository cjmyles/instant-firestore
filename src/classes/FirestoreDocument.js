import Default from './Default';
import { getDocument, deserializeReferences } from '../utils';

// Note the difference between `Firestore Document` and `document` in the comments - the latter is a serialized representation of the former

export default class FirestoreCollection extends Default {
  /**
   * Constructor
   * @param {object} db Firestore Database instance
   * @param {string} docRef Firestore Document Reference
   */
  constructor(db, docRef) {
    super();
    Default.bind(this, ['create', 'find', 'update', 'delete']);
    this.db = db;
    this.docRef = docRef;
  }

  /**
   * Create a Firestore Document with an id
   * @param {object} attributes Document attributes
   * @param {string} id Document id
   * @param {object} options Options
   */
  async create(attributes, options = {}) {
    try {
      deserializeReferences(attributes, this.db);
      return await this.docRef.set(attributes);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Find document
   * @param {object} options Options
   */
  async find(options = {}) {
    try {
      return await getDocument(this.docRef, options);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Update Firestore Document
   * @param {object} attributes Document attributes
   * @param {object} options Options
   */
  async update(attributes, options = {}) {
    try {
      deserializeReferences(attributes, this.db);
      await this.docRef.update(attributes);
      return await this.find(options);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Delete Firestore Document
   */
  async delete() {
    try {
      return await this.docRef.delete();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
