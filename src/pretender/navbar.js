export default function () {
  this.get('/navbar/*', this.passthrough);
  this.get('http://pdt-circular.pagerduty.com/navbar/*', this.passthrough);
}
