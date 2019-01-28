import data from './fe-data.data';

export default function () {
  this.get('/fe-data', () => [200, { 'Content-Type': 'application/json' }, JSON.stringify(data)]);
}
