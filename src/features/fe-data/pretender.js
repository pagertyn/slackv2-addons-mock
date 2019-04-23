import data from './mock';

export default function () {
  this.get('/fe-data', () => [
    200,
    { 'Content-Type': 'application/json' },
    JSON.stringify(data)
  ]);
}
