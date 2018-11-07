// sets a defined list of properties from a source object to a target object
export const setNamedProperties = (targetObject, sourceObject, propertiesToSet, camelizePropertyNames = true) => {
  if (typeof targetObject !== 'object' || typeof sourceObject !== 'object') {
    return;
  }
  propertiesToSet && propertiesToSet.forEach((propertyName) => {
    const name = camelizePropertyNames ? camelize(propertyName) : propertyName;
    targetObject[name] = sourceObject[propertyName];
  });
};

const camelize = (text, separator = '_') => {
  const words = text.split(separator);
  return [words[0], words.slice(1).map((word) => capitalize(word)).join('')].join('');
};

const capitalize = (word) => {
  return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
};

export const redirectTo = (href) => {
  window.location.href = href;
};

export const reduceArrayToObject = (accumulator, element) => {
  accumulator[element.id] = element;
  return accumulator;
};
