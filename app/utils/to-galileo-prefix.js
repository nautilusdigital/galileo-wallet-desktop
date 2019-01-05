export default function toGalileoPrefix(value = '') {
  return String(value).replace(/^xrb/, 'gal');
}
