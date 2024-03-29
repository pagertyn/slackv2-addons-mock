import getEnvironment from 'src/util/environment';

const capitalize = word => `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;

const camelize = (text, separator = '_') => {
  const words = text.split(separator);
  return [words[0], words.slice(1).map(word => capitalize(word)).join('')].join('');
};

// sets a defined list of properties from a source object to a target object
export const setNamedProperties = (
  targetObject, sourceObject, propertiesToSet, camelizePropertyNames = true
) => {
  if (typeof targetObject !== 'object' || typeof sourceObject !== 'object') {
    return;
  }
  (propertiesToSet || []).forEach((propertyName) => {
    const name = camelizePropertyNames ? camelize(propertyName) : propertyName;
    targetObject[name] = sourceObject[propertyName]; // eslint-disable-line no-param-reassign
  });
};

export const redirectTo = (href) => {
  if (getEnvironment() === 'development') {
    // eslint-disable-next-line no-console
    console.debug('Redirect (suppressed in development):', href);
    return;
  }
  window.location.assign(href);
};

export const reduceArrayToObject = (accumulator, element) => {
  if (!element) { throw new Error('Array element cannot be null.'); }
  if (element && element.id == null) { throw new Error('Array elements must have an id property.'); }

  accumulator[element.id] = element;
  return accumulator;
};
