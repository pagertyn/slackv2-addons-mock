// This supports the use of Segment.io with the PdxSegment component
export default function () {
  this.post('https://api.segment.io/v1/*', () => [200, null, null]);
}
