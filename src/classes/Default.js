import _ from 'lodash';

export default class Default {
  static bind(object, methodNames) {
    _.bindAll(object, methodNames);
  }
}
