import data from './fe-data.data';

export default function () { // need `this`, so don't use arrow function here
  this.get('/fe-data', () => [200, { 'Content-Type': 'application/json' }, JSON.stringify(data)]);
}
