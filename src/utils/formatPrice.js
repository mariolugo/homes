export default function formatPrice(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
