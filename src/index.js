import assert from 'assert';
import { getDocument, getCollection } from 'instant-firestore-utils';

export class FirestoreRepository {
  /**
   * Constructor
   * @param {object} db Firestore database instance
   * @param {*} collection Collection name, e.g 'users'
   */
  constructor(db, collection) {
    this.db = db;
    this.collection = collection;
  }

  /**
   * Create a Firestore Collection Reference
   */
  colRef() {
    return this.db.collection(this.collection);
  }

  /**
   * Create a Firestore Document Reference
   */
  docRef(id) {
    return this.colRef().doc(id);
  }

  /**
   * Create a document (firestore.add)
   * @param {object} attributes Document attributes
   * @param {string} id Document id
   */
  async create(attributes, id) {
    try {
      // attributes = this.deserializeReferences(attributes);
      let docRef;
      if (id) {
        docRef = await this.docRef(id).set(attributes);
      } else {
        docRef = await this.colRef().add(attributes);
      }
      if (docRef.id) {
        return await this.findById(docRef.id);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Create many documents
   * @param {array} arr Array of Document attributes
   */
  // async createMany(arr) {
  //   try {
  //     let items = [];
  //     const batch = this.db.batch();
  //     await asyncForEach(arr, async attributes => {
  //       attributes = this.deserializeReferences(attributes);
  //       let item = await this.create(attributes);
  //       items.push(item);
  //     });
  //     batch.commit();
  //     return items;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  /**
   * Find documents
   * @param {object} query Search query
   * @param {object} options Options
   */
  async find(query = {}, options = {}) {
    try {
      // Convert the query into an array of queries for Firestore
      const queries = Object.keys(query).map(k => [k, '==', query[k]]);
      // Baseline query reference
      let queryRef = this.colRef();
      // Add the queries to the query reference
      queries.forEach(query => {
        queryRef = queryRef.where(query[0], query[1], query[2]);
      });
      // Order if necessary
      if (options.orderBy) {
        queryRef = queryRef.orderBy(options.orderBy);
      }
      // Apply a limit if necessary
      if (options.limit) {
        queryRef = queryRef.limit(options.limit);
      }
      // Perform the get request
      return await getCollection(queryRef, options);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Find one document
   * @param {Object} query Search query
   */
  async findOne(query, options = {}) {
    assert(query, `Method 'findOne' expects parameter 'query'`);
    try {
      return await this.find(query, { limit: 1 });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Find document by id
   * @param {string} id Document id
   * @param {object} options Options
   */
  async findById(id, options = {}) {
    assert(id && id.length > 0, `Method 'findById' expects parameter 'id'`);
    try {
      return await getDocument(this.docRef(id), options);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Update document by id
   * @param {string} id Document id
   * @param {object} attributes Document attributes
   */
  async update(id, attributes) {
    assert(id && id.length > 0, `Method 'update' expects parameter 'id'`);
    assert(attributes, `Method 'update' expects parameter 'attributes'`);
    try {
      // attributes = deserializeReferences(attributes);
      await this.docRef(id).update(attributes);
      return await this.findById(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Delete document by id
   * @param {string} id
   */
  async delete(id) {
    assert(id && id.length > 0, `Method 'delete' expects parameter 'id'`);
    try {
      const ref = await this.docRef(id).delete();
      return { deleted: !!ref };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
