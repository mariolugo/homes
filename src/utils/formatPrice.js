export default function formatPrice(x) {
  x = Math.trunc(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
