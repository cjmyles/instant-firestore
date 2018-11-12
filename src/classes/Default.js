import _ from 'lodash';

export default class Default {
  static bind(object, methodNames) {
    let sanitized = [];
    methodNames.forEach(method => {
      if (
        object[method] === undefined ||
        typeof object[method] !== 'function'
      ) {
        console.warn(
          `Method '${method}' does not exist on object and therefore cannot be bound`
        );
      } else {
        sanitized.push(method);
      }
    });
    _.bindAll(object, sanitized);
  }
}
