import data from './fe-data.data.js';

const feDataPretender = function() { // need `this`, so don't use arrow function here
  this.get('/fe-data', request => {
    return [200, { 'Content-Type': 'application/json' }, JSON.stringify(data)];
  });
};

export default feDataPretender;
