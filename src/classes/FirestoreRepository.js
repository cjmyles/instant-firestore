import Default from './Default';
import FirestoreCollection from './FirestoreCollection';
import FirestoreDocument from './FirestoreDocument';

export default class FirestoreRepository extends Default {
  constructor(db, colRef) {
    if (!db) throw new Error('Required Firestore database reference missing.');
    if (!colRef)
      throw new Error('Required Firestore collection reference missing.');
    super();
    Default.bind(this, [
      // Collection operations
      'create',
      'createMany',
      'find',
      'findOne',
      'findById',
      // Document operations
      'createWithId',
      'update',
      'delete',
      // Collection or Document operations
      'updateOrCreate',
    ]);
    this.db = db;
    this.colRef = typeof colRef === 'string' ? db.collection(colRef) : colRef;
    this.collection = new FirestoreCollection(this.db, this.colRef);
  }

  // ================================================================
  //
  // Collection Operations
  //
  // ================================================================

  /**
   * Create a Firestore Document
   * @param {object} attributes Document attributes
   * @param {object} options Options
   */
  async create(attributes, options = {}) {
    try {
      await this.collection.create(attributes, options);
      return attributes;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create many Firestore Documents
   * @param {object} attributes Document attributes
   * @param {object} options Options
   */
  async createMany(arr, options = {}) {
    try {
      return await this.collection.createMany(arr, options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Find documents
   * @param {object} query Search query
   * @param {object} options Options
   */
  async find(query = {}, options = {}) {
    try {
      return await this.collection.find(query, options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Find one document
   * @param {object} query Search query
   * @param {object} options Options
   */
  async findOne(query, options = {}) {
    try {
      return await this.collection.findOne(query, options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Find document by id
   * @param {string} id Document id
   * @param {object} options Options
   */
  async findById(id, options = {}) {
    try {
      return await this.collection.findById(id, options);
    } catch (error) {
      throw error;
    }
  }

  // ================================================================
  //
  // Document Operations
  //
  // ================================================================

  /**
   * Create a Firestore Document with an id
   * @param {object} attributes Document attributes
   * @param {string} id Document id
   * @param {object} options Options
   */
  async createWithId(id, attributes, options = {}) {
    try {
      const doc = new FirestoreDocument(this.db, this.colRef.doc(id));
      return await doc.create(attributes, options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update Firestore Document
   * @param {string} id Document id
   * @param {object} attributes Document attributes
   * @param {object} options Options
   */
  async update(id, attributes, options = {}) {
    try {
      const doc = new FirestoreDocument(this.db, this.colRef.doc(id));
      return await doc.update(attributes, options);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete Firestore Document
   * @param {string} id Document id
   */
  async delete(id) {
    try {
      const doc = new FirestoreDocument(this.db, this.colRef.doc(id));
      return await doc.delete();
    } catch (error) {
      throw error;
    }
  }

  // ================================================================
  //
  // Collection or Document Operations
  //
  // ================================================================

  /**
   * Update or create a Firestore Document
   * @param {object} query Search query
   * @param {object} attributes Document attributes
   * @param {object} options Options
   */
  async updateOrCreate(query, attributes, options) {
    try {
      const item = await this.findOne(query, options);
      return item
        ? await this.update(item.id, attributes, options)
        : await this.create(attributes, options);
    } catch (error) {
      throw error;
    }
  }
}
